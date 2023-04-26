export function trimString(str) {
  if (str.length > 42) {
    return str.slice(0, 42) + '...';
  }
  return str;
}
