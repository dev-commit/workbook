import{_ as a,o as n,c as l,aw as p}from"./chunks/framework.DLufY-ao.js";const d=JSON.parse('{"title":"Adapter (Адаптер)","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/theory/design-patterns/2-structural/adapter.md","filePath":"wiki/dev-commit/theory/design-patterns/2-structural/adapter.md"}'),o={name:"wiki/dev-commit/theory/design-patterns/2-structural/adapter.md"};function e(t,s,c,r,y,A){return n(),l("div",null,[...s[0]||(s[0]=[p(`<h1 id="adapter-адаптер" tabindex="-1">Adapter (Адаптер) <a class="header-anchor" href="#adapter-адаптер" aria-label="Permalink to &quot;Adapter (Адаптер)&quot;">​</a></h1><h2 id="информация" tabindex="-1">Информация <a class="header-anchor" href="#информация" aria-label="Permalink to &quot;Информация&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">Определение</p><ul><li><strong>Adapter</strong> - позволяет интегрировать старый интерфейс класса в новый интефейс класса, позволяя им работать совместно и не ломая приложение</li></ul></div><h2 id="использование" tabindex="-1">Использование <a class="header-anchor" href="#использование" aria-label="Permalink to &quot;Использование&quot;">​</a></h2><h3 id="работа-с-api" tabindex="-1">Работа с API <a class="header-anchor" href="#работа-с-api" aria-label="Permalink to &quot;Работа с API&quot;">​</a></h3><ul><li>Если есть старая и новая версия API, можно использовать Adapter, чтобы не переписывать код, но использовать новый функционал</li></ul><h2 id="примеры" tabindex="-1">Примеры <a class="header-anchor" href="#примеры" aria-label="Permalink to &quot;Примеры&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> OldCalc</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#4078F2;">  operations</span><span style="color:#383A42;">(t1, t2, operation) {</span></span>
<span class="line"><span style="color:#A626A4;">    switch</span><span style="color:#383A42;"> (operation) {</span></span>
<span class="line"><span style="color:#A626A4;">      case</span><span style="color:#50A14F;"> &quot;add&quot;</span><span style="color:#383A42;">:</span></span>
<span class="line"><span style="color:#A626A4;">        return</span><span style="color:#383A42;"> t1 </span><span style="color:#0184BC;">+</span><span style="color:#383A42;"> t2;</span></span>
<span class="line"><span style="color:#A626A4;">      case</span><span style="color:#50A14F;"> &quot;sub&quot;</span><span style="color:#383A42;">:</span></span>
<span class="line"><span style="color:#A626A4;">        return</span><span style="color:#383A42;"> t1 </span><span style="color:#0184BC;">-</span><span style="color:#383A42;"> t2;</span></span>
<span class="line"><span style="color:#A626A4;">      default</span><span style="color:#383A42;">:</span></span>
<span class="line"><span style="color:#A626A4;">        return</span><span style="color:#986801;"> NaN</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> NewCalc</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#4078F2;">  add</span><span style="color:#383A42;">(t1, t2) {</span></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#383A42;"> t1 </span><span style="color:#0184BC;">+</span><span style="color:#383A42;"> t2;</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#4078F2;">  sub</span><span style="color:#383A42;">(t1, t2) {</span></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#383A42;"> t1 </span><span style="color:#0184BC;">-</span><span style="color:#383A42;"> t2;</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> CalcAdapter</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  constructor</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    // Будет использован функционал нового класса</span></span>
<span class="line"><span style="color:#E45649;">    this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">calc</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> new</span><span style="color:#4078F2;"> NewCalc</span><span style="color:#383A42;">();</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  // Интерфейс старого класса будет сохранен</span></span>
<span class="line"><span style="color:#4078F2;">  operations</span><span style="color:#383A42;">(t1, t2, operation) {</span></span>
<span class="line"><span style="color:#A626A4;">    switch</span><span style="color:#383A42;"> (operation) {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">      // Возвращаем методы из нового класса: add, sub</span></span>
<span class="line"><span style="color:#A626A4;">      case</span><span style="color:#50A14F;"> &quot;add&quot;</span><span style="color:#383A42;">:</span></span>
<span class="line"><span style="color:#A626A4;">        return</span><span style="color:#E45649;"> this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">calc</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">add</span><span style="color:#383A42;">(t1, t2);</span></span>
<span class="line"><span style="color:#A626A4;">      case</span><span style="color:#50A14F;"> &quot;sub&quot;</span><span style="color:#383A42;">:</span></span>
<span class="line"><span style="color:#A626A4;">        return</span><span style="color:#E45649;"> this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">calc</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">sub</span><span style="color:#383A42;">(t1, t2);</span></span>
<span class="line"><span style="color:#A626A4;">      default</span><span style="color:#383A42;">:</span></span>
<span class="line"><span style="color:#A626A4;">        return</span><span style="color:#986801;"> NaN</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> oldCalc</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> new</span><span style="color:#4078F2;"> OldCalc</span><span style="color:#383A42;">();</span></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(oldCalc.</span><span style="color:#4078F2;">operations</span><span style="color:#383A42;">(</span><span style="color:#986801;">10</span><span style="color:#383A42;">, </span><span style="color:#986801;">5</span><span style="color:#383A42;">, </span><span style="color:#50A14F;">&quot;add&quot;</span><span style="color:#383A42;">)); </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; 15</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> newCalc</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> new</span><span style="color:#4078F2;"> NewCalc</span><span style="color:#383A42;">();</span></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(newCalc.</span><span style="color:#4078F2;">add</span><span style="color:#383A42;">(</span><span style="color:#986801;">10</span><span style="color:#383A42;">, </span><span style="color:#986801;">5</span><span style="color:#383A42;">)); </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; 15</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> adapter</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> new</span><span style="color:#4078F2;"> CalcAdapter</span><span style="color:#383A42;">();</span></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(adapter.</span><span style="color:#4078F2;">operations</span><span style="color:#383A42;">(</span><span style="color:#986801;">25</span><span style="color:#383A42;">, </span><span style="color:#986801;">10</span><span style="color:#383A42;">, </span><span style="color:#50A14F;">&quot;sub&quot;</span><span style="color:#383A42;">)); </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; 15</span></span></code></pre></div>`,8)])])}const u=a(o,[["render",e]]);export{d as __pageData,u as default};
