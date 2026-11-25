import{_ as n,o as a,c as l,aw as p}from"./chunks/framework.DLufY-ao.js";const u=JSON.parse('{"title":"for и setTimeout без let","description":"","frontmatter":{},"headers":[],"relativePath":"js/js-task/algoritms/settimeout-for-var.md","filePath":"wiki/dev-commit/js/js-task/algoritms/settimeout-for-var.md"}'),o={name:"js/js-task/algoritms/settimeout-for-var.md"};function e(t,s,c,r,i,y){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h1 id="for-и-settimeout-без-let" tabindex="-1">for и setTimeout без let <a class="header-anchor" href="#for-и-settimeout-без-let" aria-label="Permalink to &quot;for и setTimeout без let&quot;">​</a></h1><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A0A1A7;font-style:italic;">// Простое решение 1</span></span>
<span class="line"><span style="color:#A626A4;">for</span><span style="color:#383A42;"> (</span><span style="color:#A626A4;">var</span><span style="color:#383A42;"> i </span><span style="color:#0184BC;">=</span><span style="color:#986801;"> 0</span><span style="color:#383A42;">; i </span><span style="color:#0184BC;">&lt;</span><span style="color:#986801;"> 10</span><span style="color:#383A42;">; i</span><span style="color:#0184BC;">++</span><span style="color:#383A42;">) {</span></span>
<span class="line"><span style="color:#4078F2;">  setTimeout</span><span style="color:#383A42;">(</span></span>
<span class="line"><span style="color:#383A42;">    (</span><span style="color:#A626A4;">function</span><span style="color:#383A42;"> (i) {</span></span>
<span class="line"><span style="color:#A626A4;">      return</span><span style="color:#A626A4;"> function</span><span style="color:#383A42;"> () {</span></span>
<span class="line"><span style="color:#383A42;">        console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(i);</span></span>
<span class="line"><span style="color:#383A42;">      };</span></span>
<span class="line"><span style="color:#383A42;">    })(i),</span></span>
<span class="line"><span style="color:#383A42;">    i </span><span style="color:#0184BC;">*</span><span style="color:#986801;"> 1000</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">  );</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Простое решение 2</span></span>
<span class="line"><span style="color:#A626A4;">for</span><span style="color:#383A42;"> (</span><span style="color:#A626A4;">var</span><span style="color:#383A42;"> i </span><span style="color:#0184BC;">=</span><span style="color:#986801;"> 0</span><span style="color:#383A42;">; i </span><span style="color:#0184BC;">&lt;</span><span style="color:#986801;"> 10</span><span style="color:#383A42;">; i</span><span style="color:#0184BC;">++</span><span style="color:#383A42;">) {</span></span>
<span class="line"><span style="color:#383A42;">  (</span><span style="color:#A626A4;">function</span><span style="color:#383A42;"> (i) {</span></span>
<span class="line"><span style="color:#4078F2;">    setTimeout</span><span style="color:#383A42;">(</span><span style="color:#A626A4;">function</span><span style="color:#383A42;"> () {</span></span>
<span class="line"><span style="color:#383A42;">      console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(i);</span></span>
<span class="line"><span style="color:#383A42;">    }, i </span><span style="color:#0184BC;">*</span><span style="color:#986801;"> 1000</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#383A42;">  })(i);</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Умное решение</span></span>
<span class="line"><span style="color:#A626A4;">for</span><span style="color:#383A42;"> (</span><span style="color:#A626A4;">var</span><span style="color:#383A42;"> i </span><span style="color:#0184BC;">=</span><span style="color:#986801;"> 0</span><span style="color:#383A42;">; i </span><span style="color:#0184BC;">&lt;</span><span style="color:#986801;"> 10</span><span style="color:#383A42;">; i</span><span style="color:#0184BC;">++</span><span style="color:#383A42;">) {</span></span>
<span class="line"><span style="color:#4078F2;">  setTimeout</span><span style="color:#383A42;">(</span></span>
<span class="line"><span style="color:#A626A4;">    function</span><span style="color:#383A42;"> (i) {</span></span>
<span class="line"><span style="color:#383A42;">      console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(i);</span></span>
<span class="line"><span style="color:#383A42;">    }.</span><span style="color:#4078F2;">bind</span><span style="color:#383A42;">(</span><span style="color:#986801;">null</span><span style="color:#383A42;">, i),</span></span>
<span class="line"><span style="color:#383A42;">    i </span><span style="color:#0184BC;">*</span><span style="color:#986801;"> 1000</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">  );</span></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre></div>`,2)])])}const f=n(o,[["render",e]]);export{u as __pageData,f as default};
