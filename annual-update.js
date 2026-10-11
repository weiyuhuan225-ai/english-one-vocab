(() => {
  'use strict';
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const sources = {
    official: 'https://xuanshu.hep.com.cn/front/book/findBookDetails?bookId=6aa19108e119ac97297a5c45',
    current: 'https://m-jixun.iqihang.com/zixun/dagang/yydg/2026805345.html',
    corroboration: 'https://www.sohu.com/a/1085146960_121124286',
    previous: 'https://aged-jixun-cdn.iqihang.com/2024/0914/20240914051855543.pdf',
    history: 'https://www.xhd.cn/kaoyan/kyzh/181389.html'
  };
  // These counts summarize published comparisons, not a machine diff of two official appendices.
  const annual = {
    year: 2027, baseline: 2026, checked: '2026-10-11',
    evidence: 'published-comparison', officialAppendicesCompared: false,
    added: [], removed: [],
    adjustments: [
      {before: 'humo(u)rous', after: 'humorous', kind: '拼写格式', meaning: 'adj. 幽默的；诙谐的', note: '同一个已有词的拼写整理。本站原词库已使用 humorous。'},
      {before: 'counter-example', after: 'counterexample', kind: '构词示例格式', meaning: 'n. 反例', note: '去掉连字符的构词示例，不能据此算作词汇表新增词。'}
    ],
    history: [
      {year: 2027, baseline: 2026, added: 0, removed: 0, note: '公开解读报告两处拼写格式调整', source: sources.current},
      {year: 2025, baseline: 2024, added: 0, removed: 1, note: '删除 coke；词汇附表另有表达优化', source: sources.previous},
      {year: 2023, baseline: 2022, added: 15, removed: 7, note: '有实际词条增删，不能把它们称为2027新增', source: sources.history}
    ]
  };
  const link = (url, label) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`;
  $('.main-nav').insertAdjacentHTML('beforeend', '<button class="nav-item" data-go="new2027" type="button"><span class="nav-symbol">↗</span>2027 新增词<span class="tiny-mark">对照</span></button>');
  $('.mobile-nav').insertAdjacentHTML('beforeend', '<button class="mobile-nav-item" data-go="new2027" type="button"><span>↗</span>2027新增</button>');
  $('.learning-entry').insertAdjacentHTML('beforeend', '<button class="annual-entry" data-go="new2027"><small>WHAT CHANGED / 2027 vs 2026</small><strong>2027 新增词背诵版 ↗</strong><p>公开对照显示新增 0 词。查看今年的拼写调整、往年变化与核验依据。</p></button>');
  $('#main').insertAdjacentHTML('beforeend', `
    <section id="view-new2027" class="view" hidden aria-labelledby="annual-title">
      <div class="learning-heading">
        <div><span class="eyebrow">SYLLABUS UPDATE / 2027 vs 2026</span><h1 id="annual-title">2027 新增词背诵版<span class="small-period">.</span></h1><p>只背真正新增的部分。词条增删与拼写调整，分开对照。</p></div>
        <button class="button button-soft" data-export-annual>下载变化对照表 ↓</button>
      </div>
      <p class="annual-dateline">英语一 · 对照上一版 2026 大纲 · 核对日期 ${annual.checked}</p>
      <div class="annual-summary">
        <div class="annual-total"><span>公开对照报告的新增词</span><strong>${annual.added.length}<small>词</small></strong><span>2027 相较 2026</span></div>
        <div class="annual-conclusion"><span class="learning-badge">目前无需另背新增词</span><h2>今年没有可单列的新增词。</h2><p>启航 2026 年 10 月 1 日的对照解读报告：没有词条增删，仅有两处拼写格式调整。新增词背诵区因此保持为空，不把旧词或改写拼法加入新词队列。</p><div class="annual-totals"><span>新增 <b>0</b></span><span>删除 <b>0</b></span><span>格式调整 <b>2 项</b></span></div>${link(sources.current, '查看2027对照解读')}</div>
      </div>
      <div class="learning-notice"><b>核验边界：</b>上述数量依据公开解读，不是本站对两版官方附录逐词比对的结果。高教社书目已确认2027版本；完整词汇附录尚未完成逐词对勘。本页只反映截至核对日期的资料。</div>
      <div class="annual-next"><span>这部分暂时没有新增背诵任务，可以继续已有词库：</span><button class="button button-primary" data-go="syllabus">去大纲词库 →</button><button class="button button-soft" data-go="senses">练熟词僻义 →</button></div>
      <div class="annual-section-title"><div><h2>两处调整，分别是什么？</h2><p>以下属于已有词或构词示例的格式变化，不计入新增词。</p></div><span class="learning-badge">2026 → 2027</span></div>
      <div class="annual-adjustments">${annual.adjustments.map(item => `<article class="annual-adjustment"><span class="learning-badge">${item.kind}</span><div class="annual-spelling"><span><small>原形式</small>${item.before}</span><i aria-hidden="true">→</i><span><small>调整后</small><b>${item.after}</b></span></div><p>${item.note}</p><details><summary>查看参考词义</summary><p>${item.meaning}</p><p>${link('https://dictionary.cambridge.org/dictionary/english/' + item.after, '查词典')}</p></details></article>`).join('')}</div>
      <details class="source-details annual-history"><summary>每年都会增词吗？查看往年变化举例</summary><p>大纲按考试年度发布，但词表不保证每年都有新增词。下列是已找到来源的三个年度对照，按相邻版本比较；不是所有年份的完整变动清单。</p><div class="annual-table-wrap"><table><caption>词汇表增删对照（来自公开解析）</caption><thead><tr><th scope="col">版本对照</th><th scope="col">新增</th><th scope="col">删除</th><th scope="col">变化与来源</th></tr></thead><tbody>${annual.history.map(row => `<tr><th scope="row">${row.year} vs ${row.baseline}</th><td>${row.added}</td><td>${row.removed}</td><td>${row.note}<br>${link(row.source, '查看来源')}</td></tr>`).join('')}</tbody></table></div><p>2025年删除 coke 的依据为当年《2025考研英语大纲变动及备考策略》第20页。网上部分文章将此项重复标作2026变化，本页按带有2024/2025两列的原始对照报告记录。</p></details>
      <details class="source-details"><summary>本栏目的资料依据与判定规则</summary><ol><li>${link(sources.official, '高等教育出版社：2027英语一大纲')}。教育部教育考试院编，2026-09-29出版，ISBN 978-7-04-068403-2。用于确认版本，并不直接证明词条增删数量。</li><li>${link(sources.current, '启航：2027大纲对照解读')}（2026-10-01）。本页0新增、0删除及两处格式调整的主要依据。</li><li>${link(sources.corroboration, '搜狐号：2027变化总结')}（2026-10-08）。同样报告0新增及两处形式变化，作为辅助交叉核对；不是官方发布。</li><li>${link(sources.previous, '启航：2025大纲变化PDF')}第20页；${link(sources.history, '新航道：2023大纲变化')}。用于往年对照。</li></ol><p>只有新版本新增、上一版本没有的词条才算“当年新增”。已有词的拼写统一、连字符调整，以及出版社自选拓展词，不并入新增词背诵区。中文参考义为本站学习说明，不是大纲官方释义。</p><p>counterexample按规范词形展示；启航网页将该示例写为“couter-example”，本页未照录这一拼写。来源不一致或尚无完整附录时，不声称已经完成官方逐词差分。</p></details>
    </section>`);

  function show() {
    window.EN1_LEGACY?.deactivate();
    $$('.view').forEach(view => { view.hidden = view.id !== 'view-new2027'; });
    $$('[data-go]').forEach(button => {
      const current = button.dataset.go === 'new2027';
      button.classList.toggle('is-active', current);
      if (button.classList.contains('nav-item') || button.classList.contains('mobile-nav-item')) button.setAttribute('aria-current', current ? 'page' : 'false');
    });
    $('#breadcrumb-name').textContent = '2027 新增词';
    history.replaceState(null, '', '#new2027');
    window.scrollTo({top: 0, behavior: 'instant'});
  }
  function exportComparison() {
    const rows = [['版本','对照基准','类型','原形式','当前形式或数量','说明','依据','核对日期'],
      ['2027','2026','新增','','0','公开解读报告；未完成官方附录逐词对勘',sources.current,annual.checked],
      ['2027','2026','删除','','0','公开解读报告；未完成官方附录逐词对勘',sources.current,annual.checked],
      ...annual.adjustments.map(item => ['2027','2026',item.kind,item.before,item.after,item.note,sources.current,annual.checked]),
      ...annual.history.filter(row => row.year !== 2027).map(row => [row.year,row.baseline,'往年变化','','新增'+row.added+'；删除'+row.removed,row.note,row.source,annual.checked])];
    const content = '\ufeff' + rows.map(row => row.map(cell => '"' + String(cell).replaceAll('"','""') + '"').join(',')).join('\r\n');
    const url = URL.createObjectURL(new Blob([content], {type: 'text/csv;charset=utf-8'}));
    const a = document.createElement('a'); a.href = url; a.download = '词见_2027与往年大纲变化对照_20261011.csv'; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 3000);
  }
  document.addEventListener('click', event => {
    const button = event.target.closest('button');
    if (button?.dataset.go === 'new2027') show();
    if (button?.hasAttribute('data-export-annual')) exportComparison();
  });
  window.EN1_ANNUAL = Object.freeze(annual);
  if (location.hash === '#new2027') show();
})();
