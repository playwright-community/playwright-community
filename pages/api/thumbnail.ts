import { NextApiRequest, NextApiResponse } from 'next'
import * as playwright from 'playwright-aws-lambda';

import { getAbsoluteURL } from 'utils/utils';

export default async (req: NextApiRequest, res: NextApiResponse) => {
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