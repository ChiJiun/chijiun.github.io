import type { OpenSlideConfig } from '@open-slide/core';

// Deployed as a GitHub Pages project site: https://chijiun.github.io/chijiun.io/
// The site is a single deck (slides/home), shown in the read-only player.
const openSlideConfig: OpenSlideConfig = {
  base: '/chijiun.io/',
  build: {
    showSlideBrowser: false,
    showSlideUi: false,
    allowHtmlDownload: false,
  },
};

export default openSlideConfig;
