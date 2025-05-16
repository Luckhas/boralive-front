export function friendlyUrl(a:string) {
  return a
  .toLowerCase()
  .replace((/\s+/g), "-")
  .replace((/[^a-z0-9.-]/g), "")
}