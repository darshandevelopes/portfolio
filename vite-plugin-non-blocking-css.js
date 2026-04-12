/**
 * Turns the main hashed stylesheet into a non-render-blocking load
 * (preload + onload → stylesheet), matching PageSpeed guidance for LCP/FCP.
 */
export function nonBlockingCss() {
  return {
    name: 'non-blocking-css',
    apply: 'build',
    transformIndexHtml(html) {
      return html.replace(
        /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/,
        (_, href) =>
          `<link rel="preload" href="${href}" as="style" crossorigin onload="this.onload=null;this.rel='stylesheet'">` +
          `<noscript><link rel="stylesheet" crossorigin href="${href}"></noscript>`
      )
    },
  }
}
