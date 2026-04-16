import{_ as a,o as n,c as l,aw as p}from"./chunks/framework.DLufY-ao.js";const m=JSON.parse('{"title":"Двумерный массив сумм","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/js/js-task/arrays/array-sums.md","filePath":"wiki/dev-commit/js/js-task/arrays/array-sums.md"}'),o={name:"wiki/dev-commit/js/js-task/arrays/array-sums.md"};function t(e,s,c,r,y,i){return n(),l("div",null,[...s[0]||(s[0]=[p(`<h1 id="двумерныи-массив-сумм" tabindex="-1">Двумерный массив сумм <a class="header-anchor" href="#двумерныи-массив-сумм" aria-label="Permalink to &quot;Двумерный массив сумм&quot;">​</a></h1><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> arr</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> [</span><span style="color:#986801;">1</span><span style="color:#383A42;">,</span><span style="color:#986801;">2</span><span style="color:#383A42;">,</span><span style="color:#986801;">3</span><span style="color:#383A42;">,</span><span style="color:#986801;">5</span><span style="color:#383A42;">,</span><span style="color:#986801;">6</span><span style="color:#383A42;">,</span><span style="color:#986801;">7</span><span style="color:#383A42;">,</span><span style="color:#986801;">0</span><span style="color:#383A42;">,</span><span style="color:#0184BC;">-</span><span style="color:#986801;">1</span><span style="color:#383A42;">]</span></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> sum</span><span style="color:#0184BC;"> =</span><span style="color:#986801;"> 6</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> doit</span><span style="color:#383A42;">(arr, sum) {</span></span>
<span class="line"><span style="color:#A626A4;">	const</span><span style="color:#986801;"> obj</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {};</span></span>
<span class="line"><span style="color:#A626A4;">	let</span><span style="color:#383A42;"> res </span><span style="color:#0184BC;">=</span><span style="color:#383A42;"> [];</span></span>
<span class="line"><span style="color:#383A42;">	arr.</span><span style="color:#4078F2;">forEach</span><span style="color:#383A42;">(item </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">		if</span><span style="color:#383A42;">(obj[item]) {</span></span>
<span class="line"><span style="color:#383A42;">			obj[item]</span><span style="color:#0184BC;">++</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">		} </span><span style="color:#A626A4;">else</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">			obj[item] </span><span style="color:#0184BC;">=</span><span style="color:#986801;"> 1</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">		}</span></span>
<span class="line"><span style="color:#383A42;">	});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">	arr.</span><span style="color:#4078F2;">forEach</span><span style="color:#383A42;">(item </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">		obj[item]</span><span style="color:#0184BC;">--</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#A626A4;">		if</span><span style="color:#383A42;"> (obj[sum</span><span style="color:#0184BC;">-</span><span style="color:#383A42;">item]) {</span></span>
<span class="line"><span style="color:#383A42;">			res.</span><span style="color:#4078F2;">push</span><span style="color:#383A42;">([item, sum</span><span style="color:#0184BC;">-</span><span style="color:#383A42;">item]);</span></span>
<span class="line"><span style="color:#383A42;">		}</span></span>
<span class="line"><span style="color:#383A42;">	});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">	return</span><span style="color:#383A42;"> res;</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#4078F2;">doit</span><span style="color:#383A42;">(arr, sum)) </span><span style="color:#A0A1A7;font-style:italic;">// [[1,5], [6,0], [7, -1]]</span></span></code></pre></div>`,2)])])}const d=a(o,[["render",t]]);export{m as __pageData,d as default};
