# 词见 · 考研英语一词汇训练

正式网址：https://weiyuhuan225-ai.github.io/english-one-vocab/

## 词库与训练

- 原有275个真题精选词：单词筛查、生词复习、检索、朗读及进度导入导出。
- `#syllabus`：5529词的2027备考校订词库，中英及词形搜索、A–Z筛选、熟悉度标记、CSV下载。
- `#senses`：158道真题语境题、122个词，覆盖用户提供的2010—2026年17年卷。熟义→原句→猜义→揭晓→自评；支持年份、类型和状态筛选、乱序、摘抄总表及CSV下载。
- 版本依据、许可、语料范围及未完成的官方逐词对勘说明见 [SOURCES.md](SOURCES.md)。

保留原275词及其进度。新版备份兼容旧文件；新专项记录独立保存。学习进度保存在当前浏览器，不上传服务器，也不自动跨设备同步。更换浏览器或域名前，可在设置中导出JSON进度备份，再到新环境导入。

## 部署

网站是无构建依赖的静态文件。将本目录完整部署到GitHub Pages的main分支根目录即可。`syllabus-data.js`、`senses-data.js`、`learning.js`和`learning.css`必须与`index.html`一起发布。运行时不从词典、第三方词表或API抓取数据。

仓库Settings → Pages选择Deploy from a branch，分支main，目录/ (root)。`.nojekyll`用于直接发布静态文件。

## 开发验证

`learning.test.cjs`使用Node.js及开发环境中的jsdom 26.1.0，验证答案揭晓、筛选、进度兼容、备份与CSV等行为。安装开发依赖后运行 `node learning.test.cjs`。网站运行本身无需安装依赖。

更新：2026-10-11。
