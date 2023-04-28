export const convertDate = str => {
  if (str === null) return "Unknown";
  const dateString = str.replace(/-/g, '');
  const date = new Date(
    parseInt(dateString.substring(0, 4)),
    parseInt(dateString.substring(4, 6)) - 1,
    parseInt(dateString.substring(6, 8))
  );
  const now = new Date();
  let age = now.getFullYear() - date.getFullYear();
  if (
    now.getMonth() < date.getMonth() ||
    (now.getMonth() === date.getMonth() && now.getDate() < date.getDate())
  ) {
    age--;
  }
  const month = date.toLocaleString('en', { month: 'long' });
  const day = date.getDate().toString().padStart(2, '0');
  return `${day} ${month}, ${date.getFullYear()} (${age} years old)`;
};