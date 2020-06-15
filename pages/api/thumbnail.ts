import type { NextApiRequest, NextApiResponse } from 'next'
import * as playwright from 'playwright-aws-lambda';
import fs from 'fs'
import { promisify } from 'util'
import https from 'https'
import os from 'os'
import path from 'path'

import { getAbsoluteURL } from 'utils/utils';

const FONTS_DIR = path.join(os.tmpdir(), "fonts")

const loadFont = (input: string) => new Promise(async (resolve, reject) => {
  const url = new URL(input);
  const output = path.join(FONTS_DIR, url.pathname.split('/').pop());
  if (await promisify(fs.exists)(output)) {
    resolve()
    return
  }
  await promisify(fs.mkdir)(FONTS_DIR);
  await promisify(fs.writeFile)(path.join(FONTS_DIR, "fonts.conf"), `<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <dir>${FONTS_DIR}</dir>
  <cachedir>/tmp/fonts-cache/</cachedir>
  <config></config>
</fontconfig>`)
  const stream = fs.createWriteStream(output);
  stream.once('error', (error) => {
    return reject(error);
  });
  https.get(input, response => {
    response.on('data', (chunk) => {
      stream.write(chunk);
    });

    response.once('end', () => {
      stream.end(() => {
        return resolve(url.pathname.split('/').pop());
      });
    });
  })
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await loadFont("https://raw.githack.com/googlei18n/noto-emoji/master/fonts/NotoColorEmoji.ttf")
  process.env.FONTCONFIG_PATH = FONTS_DIR
  console.log("Set", FONTS_DIR)
  const browser = await playwright.launchChromium();
  const page = await browser.newPage({
    viewport: {
      width: 1200,
      height: 630
    }
  });
  const url = getAbsoluteURL(req.query["path"] as string || "")
  await page.goto(url, {
    timeout: 15 * 1000
  })
  const data = await page.screenshot({
    type: "png"
  })
  await browser.close()
  res.setHeader("Cache-Control", "s-maxage=31536000, stale-while-revalidate")
  res.setHeader('Content-Type', 'image/png')
  res.end(data)
}