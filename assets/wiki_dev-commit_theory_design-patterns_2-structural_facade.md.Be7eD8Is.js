import{_ as n,o as a,c as l,aw as p}from"./chunks/framework.DLufY-ao.js";const u=JSON.parse('{"title":"Facade (Фасад)","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/theory/design-patterns/2-structural/facade.md","filePath":"wiki/dev-commit/theory/design-patterns/2-structural/facade.md"}'),o={name:"wiki/dev-commit/theory/design-patterns/2-structural/facade.md"};function e(t,s,c,r,y,i){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h1 id="facade-фасад" tabindex="-1">Facade (Фасад) <a class="header-anchor" href="#facade-фасад" aria-label="Permalink to &quot;Facade (Фасад)&quot;">​</a></h1><h2 id="информация" tabindex="-1">Информация <a class="header-anchor" href="#информация" aria-label="Permalink to &quot;Информация&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">Определение</p><ul><li><strong>Facade</strong> - предоставляет простой интерфейс к сложной системе классов, библиотеке или фреймворку</li><li><em>Пример</em>: библиотека jQuery</li></ul></div><h2 id="примеры" tabindex="-1">Примеры <a class="header-anchor" href="#примеры" aria-label="Permalink to &quot;Примеры&quot;">​</a></h2><details class="details custom-block"><summary>MemeQuery</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">const</span><span style="color:#4078F2;"> $</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> function</span><span style="color:#383A42;"> (target) {</span></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#A626A4;"> new</span><span style="color:#4078F2;"> QuerySelector</span><span style="color:#383A42;">(target);</span></span>
<span class="line"><span style="color:#383A42;">};</span></span>
<span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> QuerySelector</span><span style="color:#383A42;">(target) {</span></span>
<span class="line"><span style="color:#E45649;">  this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">target</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> document.</span><span style="color:#4078F2;">querySelector</span><span style="color:#383A42;">(target);</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"><span style="color:#C18401;">QuerySelector</span><span style="color:#383A42;">.</span><span style="color:#E45649;">prototype</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">html</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> function</span><span style="color:#383A42;"> (html) {</span></span>
<span class="line"><span style="color:#E45649;">  this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">target</span><span style="color:#383A42;">.</span><span style="color:#E45649;">innerHTML</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> html;</span></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#E45649;"> this</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">$</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;#app&quot;</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">html</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;Meeemee&quot;</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">html</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;Some JS design patterns&quot;</span><span style="color:#383A42;">);</span></span></code></pre></div></details><details class="details custom-block"><summary>Жалобы от пользователей</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A0A1A7;font-style:italic;">// Жалобы от пользователей</span></span>
<span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> Complaints</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  constructor</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#E45649;">    this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">complaints</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> [];</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  // Получние complaint</span></span>
<span class="line"><span style="color:#4078F2;">  reply</span><span style="color:#383A42;">(complaint) {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">  add</span><span style="color:#383A42;">(complaint) {</span></span>
<span class="line"><span style="color:#E45649;">    this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">complaints</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">push</span><span style="color:#383A42;">(complaint);</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    // Будет реализован у потомков</span></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#E45649;"> this</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">reply</span><span style="color:#383A42;">(complaint);</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Продуктовые жалобы</span></span>
<span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> ProductComplaints</span><span style="color:#A626A4;"> extends</span><span style="color:#C18401;"> Complaints</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  // Изменение только метода reply</span></span>
<span class="line"><span style="color:#4078F2;">  reply</span><span style="color:#383A42;">({ id, customer, details }) {</span></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#50A14F;"> \`Product: </span><span style="color:#CA1243;">\${</span><span style="color:#383A42;">id</span><span style="color:#CA1243;">}</span><span style="color:#50A14F;">: </span><span style="color:#CA1243;">\${</span><span style="color:#383A42;">customer</span><span style="color:#CA1243;">}</span><span style="color:#50A14F;"> (</span><span style="color:#CA1243;">\${</span><span style="color:#383A42;">details</span><span style="color:#CA1243;">}</span><span style="color:#50A14F;">)\`</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Сервисная жалоба</span></span>
<span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> ServiceComplaints</span><span style="color:#A626A4;"> extends</span><span style="color:#C18401;"> Complaints</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  // Изменение только метода reply</span></span>
<span class="line"><span style="color:#4078F2;">  reply</span><span style="color:#383A42;">({ id, customer, details }) {</span></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#50A14F;"> \`Service: </span><span style="color:#CA1243;">\${</span><span style="color:#383A42;">id</span><span style="color:#CA1243;">}</span><span style="color:#50A14F;">: </span><span style="color:#CA1243;">\${</span><span style="color:#383A42;">customer</span><span style="color:#CA1243;">}</span><span style="color:#50A14F;"> (</span><span style="color:#CA1243;">\${</span><span style="color:#383A42;">details</span><span style="color:#CA1243;">}</span><span style="color:#50A14F;">)\`</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Класс Фасад</span></span>
<span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> ComplaintRegistry</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#4078F2;">  register</span><span style="color:#383A42;">(customer, type, details) {</span></span>
<span class="line"><span style="color:#A626A4;">    const</span><span style="color:#986801;"> id</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> Date.</span><span style="color:#4078F2;">now</span><span style="color:#383A42;">();</span></span>
<span class="line"><span style="color:#A626A4;">    let</span><span style="color:#383A42;"> complaint;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    if</span><span style="color:#383A42;"> (type </span><span style="color:#0184BC;">===</span><span style="color:#50A14F;"> &quot;service&quot;</span><span style="color:#383A42;">) {</span></span>
<span class="line"><span style="color:#383A42;">      complaint </span><span style="color:#0184BC;">=</span><span style="color:#A626A4;"> new</span><span style="color:#4078F2;"> ServiceComplaints</span><span style="color:#383A42;">();</span></span>
<span class="line"><span style="color:#383A42;">    } </span><span style="color:#A626A4;">else</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">      complaint </span><span style="color:#0184BC;">=</span><span style="color:#A626A4;"> new</span><span style="color:#4078F2;"> ProductComplaints</span><span style="color:#383A42;">();</span></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#383A42;"> complaint.</span><span style="color:#4078F2;">add</span><span style="color:#383A42;">({ id, customer, details });</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> registry</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> new</span><span style="color:#4078F2;"> ComplaintRegistry</span><span style="color:#383A42;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// =&gt; &quot;Service: 1682962725141: Vladilen (Недоступен)&quot;</span></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(registry.</span><span style="color:#4078F2;">register</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;Vladilen&quot;</span><span style="color:#383A42;">, </span><span style="color:#50A14F;">&quot;service&quot;</span><span style="color:#383A42;">, </span><span style="color:#50A14F;">&quot;Недоступен&quot;</span><span style="color:#383A42;">));</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// =&gt; &quot;Product: 1682962725142: Elena (Ошибка)&quot;</span></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(registry.</span><span style="color:#4078F2;">register</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;Elena&quot;</span><span style="color:#383A42;">, </span><span style="color:#50A14F;">&quot;product&quot;</span><span style="color:#383A42;">, </span><span style="color:#50A14F;">&quot;Ошибка&quot;</span><span style="color:#383A42;">));</span></span></code></pre></div></details>`,6)])])}const d=n(o,[["render",e]]);export{u as __pageData,d as default};
