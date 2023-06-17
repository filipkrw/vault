import { find as findLinks } from "linkifyjs";

const linkRegexStart = /^\[([^[]+)\]\(([^)]+)\)/;
const linkRegexEnd = /\[([^[]+)\]\(([^)]+)\)$/;

export function linkifyMd(text: string) {
  const links = findLinks(text);

  return links.reduce((parsedText, link) => {
    const { type, value, href, start, end } = link;

    // Ignore in case it's already part of a parsed link
    if (
      linkRegexStart.test(text.substring(start - 1)) ||
      linkRegexEnd.test(text.substring(0, end + 1))
    ) {
      return parsedText;
    }

    if (type === "url") {
      return parsedText.replace(value, `[${value}](${href})`);
    }

    return parsedText;
  }, text);
}

