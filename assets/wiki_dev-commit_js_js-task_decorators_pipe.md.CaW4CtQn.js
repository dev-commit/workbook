import{_ as a,o as n,c as p,aw as l}from"./chunks/framework.DLufY-ao.js";const d=JSON.parse('{"title":"pipe","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/js/js-task/decorators/pipe.md","filePath":"wiki/dev-commit/js/js-task/decorators/pipe.md"}'),e={name:"wiki/dev-commit/js/js-task/decorators/pipe.md"};function o(t,s,c,r,i,y){return n(),p("div",null,[...s[0]||(s[0]=[l(`<h1 id="pipe" tabindex="-1">pipe <a class="header-anchor" href="#pipe" aria-label="Permalink to &quot;pipe&quot;">​</a></h1><h3 id="реализация-из-статьи" tabindex="-1">Реализация из статьи <a class="header-anchor" href="#реализация-из-статьи" aria-label="Permalink to &quot;Реализация из статьи&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> pipe</span><span style="color:#383A42;">(){</span></span>
<span class="line"><span style="color:#A626A4;">	const</span><span style="color:#986801;"> args</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> Array.</span><span style="color:#4078F2;">from</span><span style="color:#383A42;">(</span><span style="color:#E45649;">arguments</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#A626A4;">	const</span><span style="color:#986801;"> result</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> args.</span><span style="color:#4078F2;">shift</span><span style="color:#383A42;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">	while</span><span style="color:#383A42;">(args.</span><span style="color:#E45649;">length</span><span style="color:#383A42;">) {</span></span>
<span class="line"><span style="color:#A626A4;">		const</span><span style="color:#986801;"> f</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> args.</span><span style="color:#4078F2;">shift</span><span style="color:#383A42;">();</span></span>
<span class="line"><span style="color:#383A42;">		result </span><span style="color:#0184BC;">=</span><span style="color:#4078F2;"> f</span><span style="color:#383A42;">(result);</span></span>
<span class="line"><span style="color:#383A42;">	}</span></span>
<span class="line"><span style="color:#A626A4;">	return</span><span style="color:#383A42;"> result;</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">pipe</span><span style="color:#383A42;">(</span></span>
<span class="line"><span style="color:#383A42;">	textFromFile,</span></span>
<span class="line"><span style="color:#383A42;">	trim,</span></span>
<span class="line"><span style="color:#383A42;">	sanitize,</span></span>
<span class="line"><span style="color:#383A42;">	parse,</span></span>
<span class="line"><span style="color:#383A42;">	extractData,</span></span>
<span class="line"><span style="color:#383A42;">	send</span></span>
<span class="line"><span style="color:#383A42;">);</span></span></code></pre></div><h3 id="реализовать-pipe-не-доделано" tabindex="-1">Реализовать pipe (не доделано) <a class="header-anchor" href="#реализовать-pipe-не-доделано" aria-label="Permalink to &quot;Реализовать pipe (не доделано)&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#4078F2;">reverse</span><span style="color:#383A42;">(</span><span style="color:#4078F2;">get6Characters</span><span style="color:#383A42;">(</span><span style="color:#4078F2;">uppercase</span><span style="color:#383A42;">(</span><span style="color:#4078F2;">getName</span><span style="color:#383A42;">({ </span><span style="color:#E45649;">name</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &#39;Buckethead&#39;</span><span style="color:#383A42;"> }))));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">pipe</span><span style="color:#383A42;">(</span></span>
<span class="line"><span style="color:#383A42;">	getName,</span></span>
<span class="line"><span style="color:#383A42;">	uppercase,</span></span>
<span class="line"><span style="color:#383A42;">	get6Characters,</span></span>
<span class="line"><span style="color:#383A42;">	reverse</span></span>
<span class="line"><span style="color:#383A42;">)({ </span><span style="color:#E45649;">name</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &#39;Buckethead&#39;</span><span style="color:#383A42;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> pipe</span><span style="color:#383A42;">(</span><span style="color:#0184BC;">...</span><span style="color:#383A42;">func) {</span></span>
<span class="line"><span style="color:#A626A4;">	return</span><span style="color:#A626A4;"> function</span><span style="color:#383A42;">(obj) {</span></span>
<span class="line"><span style="color:#A626A4;">		return</span><span style="color:#383A42;"> func.</span><span style="color:#4078F2;">reduce</span><span style="color:#383A42;">((previousValue, currentValue) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#4078F2;"> currentValue</span><span style="color:#383A42;">(previousValue), obj)</span></span>
<span class="line"><span style="color:#383A42;">	}</span></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre></div>`,5)])])}const u=a(e,[["render",o]]);export{d as __pageData,u as default};
