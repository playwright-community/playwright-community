export const getAbsoluteURL = (path: string): string => {
  const { VERCEL_URL = "" } = process.env
  const proto = VERCEL_URL.includes("localhost") ? "http" : "https"
  return `${proto}://${process.env.VERCEL_URL}${path}`
}