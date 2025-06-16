/** Get read time based on AVG human WPM (reading) */
export function getReadTime(article) {
  const WPM = 238;
  const wordCount = article.body.trim().split(/\s+/).filter(Boolean).length;
  const readTime = Math.round(wordCount / WPM); //Word count / Average WPM
  return readTime;
}

/** Get formatted date e.g. 01 Jan 1970 */
export function getFormattedDate(date) {
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
  return formattedDate;
}
