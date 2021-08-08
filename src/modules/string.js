export function parameterize(txt) {
  return txt
    .toLowerCase()
    .replace(/[^0-9a-z- ]/g, "")
    .split(" ")
    .join("-");
}
