import{_ as n,o as a,c as l,aw as p}from"./chunks/framework.DLufY-ao.js";const u=JSON.parse('{"title":"Каррирование","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/js/js-task/custom/currying.md","filePath":"wiki/dev-commit/js/js-task/custom/currying.md"}'),o={name:"wiki/dev-commit/js/js-task/custom/currying.md"};function t(e,s,c,r,i,y){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h1 id="каррирование" tabindex="-1">Каррирование <a class="header-anchor" href="#каррирование" aria-label="Permalink to &quot;Каррирование&quot;">​</a></h1><h2 id="_1" tabindex="-1">#1 <a class="header-anchor" href="#_1" aria-label="Permalink to &quot;#1&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> sum</span><span style="color:#383A42;">(a, b) {</span></span>
<span class="line"><span style="color:#A626A4;">	return</span><span style="color:#383A42;"> a </span><span style="color:#0184BC;">+</span><span style="color:#383A42;"> b;</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> mul</span><span style="color:#383A42;">(a, b) {</span></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#383A42;"> a </span><span style="color:#0184BC;">*</span><span style="color:#383A42;"> b;</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> myFunc</span><span style="color:#383A42;">(func) {</span></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#A626A4;"> function</span><span style="color:#383A42;">(a) {</span></span>
<span class="line"><span style="color:#A626A4;">    	return</span><span style="color:#A626A4;"> function</span><span style="color:#383A42;">(b) {</span></span>
<span class="line"><span style="color:#A626A4;">      		return</span><span style="color:#4078F2;"> func</span><span style="color:#383A42;">(a, b);</span></span>
<span class="line"><span style="color:#383A42;">      	}</span></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// const myFunc = func =&gt; (a) =&gt; (b) =&gt; func(a, b);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">info</span><span style="color:#383A42;">(</span><span style="color:#4078F2;">myFunc</span><span style="color:#383A42;">(sum)(</span><span style="color:#986801;">2</span><span style="color:#383A42;">)(</span><span style="color:#986801;">3</span><span style="color:#383A42;">)); </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; 5</span></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">info</span><span style="color:#383A42;">(</span><span style="color:#4078F2;">myFunc</span><span style="color:#383A42;">(mul)(</span><span style="color:#986801;">2</span><span style="color:#383A42;">)(</span><span style="color:#986801;">3</span><span style="color:#383A42;">)); </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; 6</span></span></code></pre></div>`,3)])])}const m=n(o,[["render",t]]);export{u as __pageData,m as default};
