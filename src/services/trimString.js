export function trimTitleString(str) {
  if (str.length > 35) {
    return str.slice(0, 35) + '...';
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
