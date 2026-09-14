export function truncateText(text: string, maxLength = 120) {
  if (text.length <= maxLength) return text;
  const trimmed = text.slice(0, maxLength);
  return trimmed.slice(0, trimmed.lastIndexOf(" ")) + "…";
}
