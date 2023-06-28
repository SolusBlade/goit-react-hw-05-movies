export function trimTitleString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + '...';
  }
  return str;
}

export function trimOverviewString(str) {
  if (str.length > 300) {
    return str.slice(0, 300) + '...';
  }
  return str;
}

export function trimCharacterString(str) {
  if (str.length > 20) {
    return str.slice(0, 20) + '...';
  }
  return str;
}
