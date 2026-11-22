import{_ as n,o as a,c as l,aw as o}from"./chunks/framework.DLufY-ao.js";const m=JSON.parse('{"title":"Event Loop","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/js/js-task/async/event-loop.md","filePath":"wiki/dev-commit/js/js-task/async/event-loop.md"}'),e={name:"wiki/dev-commit/js/js-task/async/event-loop.md"};function p(t,s,c,r,i,y){return a(),l("div",null,[...s[0]||(s[0]=[o(`<h1 id="event-loop" tabindex="-1">Event Loop <a class="header-anchor" href="#event-loop" aria-label="Permalink to &quot;Event Loop&quot;">​</a></h1><h2 id="async-await-promise-settimeout" tabindex="-1"><em>Async Await</em> / <em>Promise</em> / <em>setTimeout</em> <a class="header-anchor" href="#async-await-promise-settimeout" aria-label="Permalink to &quot;_Async Await_ / _Promise_ / _setTimeout_&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#4078F2;">setTimeout</span><span style="color:#383A42;">(() </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;setTimeout&quot;</span><span style="color:#383A42;">), </span><span style="color:#986801;">0</span><span style="color:#383A42;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">async</span><span style="color:#A626A4;"> function</span><span style="color:#4078F2;"> foo</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#383A42;">  console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;some&quot;</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#A626A4;">  let</span><span style="color:#383A42;"> data </span><span style="color:#0184BC;">=</span><span style="color:#A626A4;"> await</span><span style="color:#C18401;"> Promise</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">resolve</span><span style="color:#383A42;">(</span><span style="color:#986801;">10</span><span style="color:#383A42;">); </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; then(() =&gt; {})</span></span>
<span class="line"><span style="color:#383A42;">  console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(data);</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">foo</span><span style="color:#383A42;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#986801;">20</span><span style="color:#383A42;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// some</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// 20</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// 10</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// setTimeout</span></span></code></pre></div><h2 id="promise-settimeout" tabindex="-1"><em>Promise</em> / <em>setTimeout</em> <a class="header-anchor" href="#promise-settimeout" aria-label="Permalink to &quot;_Promise_ / _setTimeout_&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> a</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#383A42;">  console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#986801;">1</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#C18401;">  Promise</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">resolve</span><span style="color:#383A42;">().</span><span style="color:#4078F2;">then</span><span style="color:#383A42;">(a);</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> b</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#383A42;">  console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#986801;">2</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#4078F2;">  setTimeout</span><span style="color:#383A42;">(b);</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">b</span><span style="color:#383A42;">();</span></span>
<span class="line"><span style="color:#4078F2;">a</span><span style="color:#383A42;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// =&gt; 2 1 1 1 ... - 1 выводится бесконечно: очередь микрозадач</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// не пустеет, и b из setTimeout больше не вызовется</span></span></code></pre></div>`,5)])])}const d=n(e,[["render",p]]);export{m as __pageData,d as default};
