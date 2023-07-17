export function declensionWordYear(num) {
  if (num === 1) {
    return `${num} год`;
  }
  if (num > 1 && num < 5) {
    return `${num} годa`;
  }
  return `${num} лет`;
}
