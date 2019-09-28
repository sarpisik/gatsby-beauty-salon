export function capitalizeLetter(text, locale = "tr-TR") {
  return text
    .split(" ")
    .map(word => word.charAt(0).toLocaleUpperCase(locale) + word.slice(1))
    .join(" ")
}
