import{_ as n,o as a,c as l,aw as p}from"./chunks/framework.DLufY-ao.js";const u=JSON.parse('{"title":"Guards","description":"","frontmatter":{},"headers":[],"relativePath":"common/typescript/other/guards.md","filePath":"wiki/dev-commit/common/typescript/other/guards.md"}'),o={name:"common/typescript/other/guards.md"};function e(t,s,r,c,y,A){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h1 id="guards" tabindex="-1">Guards <a class="header-anchor" href="#guards" aria-label="Permalink to &quot;Guards&quot;">​</a></h1><h2 id="информация" tabindex="-1">Информация <a class="header-anchor" href="#информация" aria-label="Permalink to &quot;Информация&quot;">​</a></h2><ul><li>Вспомогательные конструкции, позволяющие работать с типами: <code>typeof</code>, <code>instanceof</code></li></ul><h2 id="примеры" tabindex="-1">Примеры <a class="header-anchor" href="#примеры" aria-label="Permalink to &quot;Примеры&quot;">​</a></h2><div class="language-ts"><button title="Скопировать код" class="copy"></button><span class="lang">ts</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> strip</span><span style="color:#383A42;">(x</span><span style="color:#0184BC;">:</span><span style="color:#0184BC;"> string</span><span style="color:#0184BC;"> |</span><span style="color:#0184BC;"> number</span><span style="color:#383A42;">) {</span></span>
<span class="line"><span style="color:#A626A4;">  if</span><span style="color:#383A42;"> (</span><span style="color:#0184BC;">typeof</span><span style="color:#383A42;"> x </span><span style="color:#0184BC;">===</span><span style="color:#50A14F;"> &quot;number&quot;</span><span style="color:#383A42;">) {</span></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#383A42;"> x.</span><span style="color:#4078F2;">toFixed</span><span style="color:#383A42;">(</span><span style="color:#986801;">2</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#383A42;"> x.</span><span style="color:#4078F2;">trim</span><span style="color:#383A42;">();</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> MyResponse</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">  header </span><span style="color:#0184BC;">=</span><span style="color:#50A14F;"> &quot;response header&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">  result </span><span style="color:#0184BC;">=</span><span style="color:#50A14F;"> &quot;response result&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> MyError</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">  header </span><span style="color:#0184BC;">=</span><span style="color:#50A14F;"> &quot;error header&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">  message </span><span style="color:#0184BC;">=</span><span style="color:#50A14F;"> &quot;error message&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> handle</span><span style="color:#383A42;">(res</span><span style="color:#0184BC;">:</span><span style="color:#C18401;"> MyResponse</span><span style="color:#0184BC;"> |</span><span style="color:#C18401;"> MyError</span><span style="color:#383A42;">) {</span></span>
<span class="line"><span style="color:#A626A4;">  if</span><span style="color:#383A42;"> (res </span><span style="color:#A626A4;">instanceof</span><span style="color:#C18401;"> MyResponse</span><span style="color:#383A42;">) {</span></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">      info</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> res.</span><span style="color:#E45649;">header</span><span style="color:#0184BC;"> +</span><span style="color:#383A42;"> res.</span><span style="color:#E45649;">result</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">    };</span></span>
<span class="line"><span style="color:#383A42;">  } </span><span style="color:#A626A4;">else</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">      info</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> res.</span><span style="color:#E45649;">header</span><span style="color:#0184BC;"> +</span><span style="color:#383A42;"> res.</span><span style="color:#E45649;">message</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">    };</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre></div><div class="language-ts"><button title="Скопировать код" class="copy"></button><span class="lang">ts</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">type</span><span style="color:#C18401;"> AlertType</span><span style="color:#0184BC;"> =</span><span style="color:#50A14F;"> &quot;success&quot;</span><span style="color:#0184BC;"> |</span><span style="color:#50A14F;"> &quot;danger&quot;</span><span style="color:#0184BC;"> |</span><span style="color:#50A14F;"> &quot;warning&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> setAlertType</span><span style="color:#383A42;">(type</span><span style="color:#0184BC;">:</span><span style="color:#C18401;"> AlertType</span><span style="color:#383A42;">) {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  // ....</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">setAlertType</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;success&quot;</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#4078F2;">setAlertType</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;warning&quot;</span><span style="color:#383A42;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// setAlertType(&#39;default&#39;)</span></span></code></pre></div>`,6)])])}const d=n(o,[["render",e]]);export{u as __pageData,d as default};
