import { marked } from "marked"
import showdown from "showdown"
export function convertToHtml(summary: string) {
    return marked(summary)
}

export function convertToHtmlShowdown(summary: string) {
    const converter = new showdown.Converter();
    const htmlContent = converter.makeHtml(summary);
    return htmlContent
}
