# chijiun.github.io

翁祺鈞（Chi-Jiun Wong）的個人網站，用 [open-slide](https://github.com/1weiho/open-slide) 寫成一份 deck，部署在 GitHub Pages：

https://chijiun.github.io/

## 結構

- `slides/home/index.tsx`：網站內容（每個 `Page` 是一頁）。
- `open-slide.config.ts`：`base` 設成 `/`，並關掉投影片列表與編輯 UI，build 出來只剩唯讀播放器。
- `scripts/pages.mjs`：build 後處理。根路徑導向 `s/home`，並產生 `404.html` 讓深層連結可以重新整理。
- `.github/workflows/deploy.yml`：push 到 `main` 時 build 並部署到 GitHub Pages；PR 只跑 build。

## 本機開發

```bash
pnpm install
pnpm dev
```

`pnpm dev` 會開啟 open-slide 的編輯介面（含 inspector）；`pnpm build && pnpm preview` 可以看部署後的樣子。
