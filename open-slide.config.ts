import type { OpenSlideConfig } from '@open-slide/core';

// Deployed as the GitHub Pages user site: https://chijiun.github.io/
// The site is a single deck (slides/home), shown in the read-only player.
const openSlideConfig: OpenSlideConfig = {
  base: '/',
  build: {
    showSlideBrowser: false,
    showSlideUi: false,
    allowHtmlDownload: false,
  },
};

export default openSlideConfig;
