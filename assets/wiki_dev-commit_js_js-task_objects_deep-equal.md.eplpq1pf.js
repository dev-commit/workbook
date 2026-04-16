import{_ as n,o as a,c as l,aw as p}from"./chunks/framework.DLufY-ao.js";const b=JSON.parse('{"title":"Глубокое сравнение объектов","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/js/js-task/objects/deep-equal.md","filePath":"wiki/dev-commit/js/js-task/objects/deep-equal.md"}'),o={name:"wiki/dev-commit/js/js-task/objects/deep-equal.md"};function e(t,s,c,r,y,A){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h1 id="глубокое-сравнение-объектов" tabindex="-1">Глубокое сравнение объектов <a class="header-anchor" href="#глубокое-сравнение-объектов" aria-label="Permalink to &quot;Глубокое сравнение объектов&quot;">​</a></h1><h3 id="недоделано-1" tabindex="-1">Недоделано 1 <a class="header-anchor" href="#недоделано-1" aria-label="Permalink to &quot;Недоделано 1&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">let</span><span style="color:#383A42;"> obj </span><span style="color:#0184BC;">=</span><span style="color:#383A42;"> {</span><span style="color:#E45649;">here</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span><span style="color:#E45649;">is</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;an&quot;</span><span style="color:#383A42;">}, </span><span style="color:#E45649;">object</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 2</span><span style="color:#383A42;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// deepEqual(obj, {here: {is: &quot;an&quot;}, object: 2})</span><span style="color:#A0A1A7;font-style:italic;"> // true</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// deepEqual(obj, {here: {is: &quot;an&quot;}, object: 3})</span><span style="color:#A0A1A7;font-style:italic;"> // false</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// deepEqual(obj, {here: 1, object: 2})</span><span style="color:#A0A1A7;font-style:italic;"> // false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> deepEqual</span><span style="color:#383A42;">(obj1, obj2) {</span></span>
<span class="line"><span style="color:#A626A4;">    for</span><span style="color:#383A42;"> (</span><span style="color:#A626A4;">let</span><span style="color:#383A42;"> key </span><span style="color:#A626A4;">in</span><span style="color:#383A42;"> obj1) {</span></span>
<span class="line"><span style="color:#A626A4;">        if</span><span style="color:#383A42;"> (obj2[key] </span><span style="color:#0184BC;">!==</span><span style="color:#383A42;"> obj1[key]) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">            if</span><span style="color:#383A42;"> (</span><span style="color:#0184BC;">typeof</span><span style="color:#383A42;"> obj2[key] </span><span style="color:#0184BC;">===</span><span style="color:#50A14F;"> &#39;object&#39;</span><span style="color:#383A42;">) {</span></span>
<span class="line"><span style="color:#A626A4;">                if</span><span style="color:#383A42;"> (</span><span style="color:#4078F2;">deepEqual</span><span style="color:#383A42;">(obj1[key], obj2[key])) {</span></span>
<span class="line"><span style="color:#A626A4;">                    return</span><span style="color:#986801;"> true</span></span>
<span class="line"><span style="color:#383A42;">                }</span></span>
<span class="line"><span style="color:#383A42;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">        }</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">        // return true;</span></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#986801;"> true</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> obj1</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">    a</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">        b</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 1</span></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"><span style="color:#383A42;">};</span></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> obj2</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">    a</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">        b</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 1</span></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"><span style="color:#383A42;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;res1&#39;</span><span style="color:#383A42;">, </span><span style="color:#4078F2;">deepEqual</span><span style="color:#383A42;">(obj1, obj2));</span></span></code></pre></div><h3 id="недоделано-2" tabindex="-1">Недоделано 2 <a class="header-anchor" href="#недоделано-2" aria-label="Permalink to &quot;Недоделано 2&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> obj1</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">	a</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 23</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">	b</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">g</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 34</span><span style="color:#383A42;">, </span><span style="color:#E45649;">c</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 235</span><span style="color:#383A42;"> }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> obj2</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">	a</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 23</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">	b</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">g</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 34</span><span style="color:#383A42;">, </span><span style="color:#E45649;">c</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 235</span><span style="color:#383A42;"> }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> shallowEqual</span><span style="color:#383A42;"> (obj1, obj2) {</span></span>
<span class="line"><span style="color:#A626A4;">	let</span><span style="color:#383A42;"> res </span><span style="color:#0184BC;">=</span><span style="color:#986801;"> true</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#A626A4;">	function</span><span style="color:#4078F2;"> check</span><span style="color:#383A42;">(obj1, obj2) {</span></span>
<span class="line"><span style="color:#383A42;">		console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(obj1, obj2);</span></span>
<span class="line"><span style="color:#A626A4;">		for</span><span style="color:#383A42;"> (</span><span style="color:#A626A4;">let</span><span style="color:#383A42;"> key </span><span style="color:#A626A4;">in</span><span style="color:#383A42;"> obj1) {</span></span>
<span class="line"><span style="color:#A626A4;">			if</span><span style="color:#383A42;"> (obj1[key] </span><span style="color:#0184BC;">!==</span><span style="color:#383A42;"> obj2[key]) {</span></span>
<span class="line"><span style="color:#A626A4;">				if</span><span style="color:#383A42;">(</span><span style="color:#0184BC;">typeof</span><span style="color:#383A42;"> obj1[key] </span><span style="color:#0184BC;">===</span><span style="color:#50A14F;"> &#39;object&#39;</span><span style="color:#0184BC;"> &amp;&amp;</span><span style="color:#0184BC;"> typeof</span><span style="color:#383A42;"> obj2[key] </span><span style="color:#0184BC;">===</span><span style="color:#50A14F;"> &#39;object&#39;</span><span style="color:#383A42;">) {</span></span>
<span class="line"><span style="color:#4078F2;">					check</span><span style="color:#383A42;">(obj1[key], obj2[key]);</span></span>
<span class="line"><span style="color:#383A42;">				} </span><span style="color:#A626A4;">else</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">					res </span><span style="color:#0184BC;">=</span><span style="color:#986801;"> false</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">				}</span></span>
<span class="line"><span style="color:#383A42;">			}</span></span>
<span class="line"><span style="color:#383A42;">		}</span></span>
<span class="line"><span style="color:#383A42;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">	check</span><span style="color:#383A42;">(obj1, obj2);</span></span>
<span class="line"><span style="color:#A626A4;">	return</span><span style="color:#383A42;"> res;</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#4078F2;">shallowEqual</span><span style="color:#383A42;">(obj1, obj2));</span></span></code></pre></div>`,5)])])}const j=n(o,[["render",e]]);export{b as __pageData,j as default};
