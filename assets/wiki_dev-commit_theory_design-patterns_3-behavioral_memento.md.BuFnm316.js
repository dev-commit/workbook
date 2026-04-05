import{_ as a,o as n,c as l,aw as o}from"./chunks/framework.DLufY-ao.js";const m=JSON.parse('{"title":"Memento (Снимок)","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/theory/design-patterns/3-behavioral/memento.md","filePath":"wiki/dev-commit/theory/design-patterns/3-behavioral/memento.md"}'),e={name:"wiki/dev-commit/theory/design-patterns/3-behavioral/memento.md"};function p(t,s,c,r,y,i){return n(),l("div",null,[...s[0]||(s[0]=[o(`<h1 id="memento-снимок" tabindex="-1">Memento (Снимок) <a class="header-anchor" href="#memento-снимок" aria-label="Permalink to &quot;Memento (Снимок)&quot;">​</a></h1><h2 id="информация" tabindex="-1">Информация <a class="header-anchor" href="#информация" aria-label="Permalink to &quot;Информация&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">Memento</p><ul><li><strong>Memento</strong> - сохранение и восстановление предыдущего состояния объекта</li><li><em>Пример</em>: текстовый редактор или фоторедактор</li></ul></div><h2 id="примеры" tabindex="-1">Примеры <a class="header-anchor" href="#примеры" aria-label="Permalink to &quot;Примеры&quot;">​</a></h2><h3 id="memento" tabindex="-1">Memento <a class="header-anchor" href="#memento" aria-label="Permalink to &quot;Memento&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> Memento</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  constructor</span><span style="color:#383A42;">(value) {</span></span>
<span class="line"><span style="color:#E45649;">    this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">value</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> value;</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Логика на создание и восстановление снимков</span></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> creator</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  // val - текущее состояние</span></span>
<span class="line"><span style="color:#4078F2;">  save</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> (val) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#A626A4;"> new</span><span style="color:#4078F2;"> Memento</span><span style="color:#383A42;">(val),</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  // memento - все сохраненные состояния</span></span>
<span class="line"><span style="color:#4078F2;">  restore</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> (memento) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> memento.</span><span style="color:#E45649;">value</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Хранение и восстановление предыдущих состояний</span></span>
<span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> Caretaker</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  constructor</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#E45649;">    this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">values</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> [];</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  // Сохранения снимка текущих данных</span></span>
<span class="line"><span style="color:#4078F2;">  addMemento</span><span style="color:#383A42;">(memento) {</span></span>
<span class="line"><span style="color:#E45649;">    this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">values</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">push</span><span style="color:#383A42;">(memento);</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  // Восстановление предыдущего значения</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  // Обращение к элементу массива по index</span></span>
<span class="line"><span style="color:#4078F2;">  getMemento</span><span style="color:#383A42;">(index) {</span></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#E45649;"> this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">values</span><span style="color:#383A42;">[index];</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> careTaker</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> new</span><span style="color:#4078F2;"> Caretaker</span><span style="color:#383A42;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">careTaker.</span><span style="color:#4078F2;">addMemento</span><span style="color:#383A42;">(creator.</span><span style="color:#4078F2;">save</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;Hello&quot;</span><span style="color:#383A42;">));</span></span>
<span class="line"><span style="color:#383A42;">careTaker.</span><span style="color:#4078F2;">addMemento</span><span style="color:#383A42;">(creator.</span><span style="color:#4078F2;">save</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;Hello World&quot;</span><span style="color:#383A42;">));</span></span>
<span class="line"><span style="color:#383A42;">careTaker.</span><span style="color:#4078F2;">addMemento</span><span style="color:#383A42;">(creator.</span><span style="color:#4078F2;">save</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;Hello My World&quot;</span><span style="color:#383A42;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> a1</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> creator.</span><span style="color:#4078F2;">restore</span><span style="color:#383A42;">(careTaker.</span><span style="color:#4078F2;">getMemento</span><span style="color:#383A42;">(</span><span style="color:#986801;">1</span><span style="color:#383A42;">)); </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; &quot;Hello World&quot;</span></span></code></pre></div>`,6)])])}const d=a(e,[["render",p]]);export{m as __pageData,d as default};
