# chijiun.github.io

翁祺鈞（Chi-Jiun Wong）的個人網站：https://chijiun.github.io/

純靜態單頁，沒有 build 步驟、沒有相依套件。

## 結構

- `site/index.html`：全部內容（研究、精選作品、其他專案、關於、聯絡）。
- `site/styles.css`：樣式；跟著系統切換深色 / 淺色，720px 以下改成單欄。
- `site/404.html`：找不到的網址導回首頁（也接住舊版 `/s/home` 之類的連結）。
- `.github/workflows/deploy.yml`：push 到 `main` 時把 `site/` 部署到 GitHub Pages。

## 本機預覽

```bash
python -m http.server 8000 -d site
```

然後打開 http://localhost:8000 。
