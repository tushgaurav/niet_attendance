const attendance_link = document.querySelector("div.col-sm-3.col-xl-3");
const attendance_display = document.querySelector(
  "#js-page-content > div:nth-child(6) > div.col-xl-12"
);

// `document.querySelector` may return null if the selector doesn't match anything.
if (attendance_link) {
  console.log(attendance_link);
  attendance_link.style.display = "block";
  //   const text = article.textContent;
  //   const wordMatchRegExp = /[^\s]+/g; // Regular expression
  //   const words = text.matchAll(wordMatchRegExp);
  //   // matchAll returns an iterator, convert to array to get word count
  //   const wordCount = [...words].length;
  //   const readingTime = Math.round(wordCount / 200);
  //   const badge = document.createElement("p");
  //   // Use the same styling as the publish information in an article's header
  //   badge.classList.add("color-secondary-text", "type--caption");
  //   badge.textContent = `⏱️ ${readingTime} min read`;

  //   // Support for API reference docs
  //   const heading = article.querySelector("h1");
  //   // Support for article docs with date
  //   const date = article.querySelector("time")?.parentNode;

  //   (date ?? heading).insertAdjacentElement("afterend", badge);
}

if (attendance_display) {
  console.log(attendance_display);
  attendance_display.style.display = "block";
}
