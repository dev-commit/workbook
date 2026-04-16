import{_ as n,o as a,c as l,aw as p}from"./chunks/framework.DLufY-ao.js";const d=JSON.parse('{"title":"Полифил Promise.all","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/js/js-task/polyphiles/promise-all.md","filePath":"wiki/dev-commit/js/js-task/polyphiles/promise-all.md"}'),o={name:"wiki/dev-commit/js/js-task/polyphiles/promise-all.md"};function e(t,s,c,r,y,i){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h1 id="полифил-promise-all" tabindex="-1">Полифил Promise.all <a class="header-anchor" href="#полифил-promise-all" aria-label="Permalink to &quot;Полифил Promise.all&quot;">​</a></h1><h2 id="реализация" tabindex="-1">Реализация <a class="header-anchor" href="#реализация" aria-label="Permalink to &quot;Реализация&quot;">​</a></h2><h4 id="код" tabindex="-1">Код <a class="header-anchor" href="#код" aria-label="Permalink to &quot;Код&quot;">​</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">const</span><span style="color:#4078F2;"> promiseAll</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> (promises) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">	return</span><span style="color:#A626A4;"> new</span><span style="color:#C18401;"> Promise</span><span style="color:#383A42;">(</span><span style="color:#A626A4;">function</span><span style="color:#383A42;"> (resolve, reject) {</span></span>
<span class="line"><span style="color:#A626A4;">		if</span><span style="color:#383A42;"> (</span><span style="color:#0184BC;">!</span><span style="color:#383A42;">Array.</span><span style="color:#4078F2;">isArray</span><span style="color:#383A42;">(promises)) {</span></span>
<span class="line"><span style="color:#A626A4;">			return</span><span style="color:#4078F2;"> reject</span><span style="color:#383A42;">(</span><span style="color:#A626A4;">new</span><span style="color:#4078F2;"> TypeError</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;Arguments must be an array&#39;</span><span style="color:#383A42;">));</span></span>
<span class="line"><span style="color:#383A42;">		}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">		let</span><span style="color:#383A42;"> results </span><span style="color:#0184BC;">=</span><span style="color:#383A42;"> [];</span></span>
<span class="line"><span style="color:#A626A4;">		let</span><span style="color:#383A42;"> remaining </span><span style="color:#0184BC;">=</span><span style="color:#383A42;"> promises.</span><span style="color:#E45649;">length</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// Обработчик успешного выполнения каждого промиса</span></span>
<span class="line"><span style="color:#A626A4;">		function</span><span style="color:#4078F2;"> handleResolve</span><span style="color:#383A42;">(index, value) {</span></span>
<span class="line"><span style="color:#383A42;">			results[index] </span><span style="color:#0184BC;">=</span><span style="color:#383A42;"> value;</span></span>
<span class="line"><span style="color:#383A42;">			remaining</span><span style="color:#0184BC;">--</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">			if</span><span style="color:#383A42;"> (remaining </span><span style="color:#0184BC;">===</span><span style="color:#986801;"> 0</span><span style="color:#383A42;">) {</span></span>
<span class="line"><span style="color:#4078F2;">				resolve</span><span style="color:#383A42;">(results);</span></span>
<span class="line"><span style="color:#383A42;">			}</span></span>
<span class="line"><span style="color:#383A42;">		}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// Обработчик ошибки при выполнении промиса</span></span>
<span class="line"><span style="color:#A626A4;">		function</span><span style="color:#4078F2;"> handleReject</span><span style="color:#383A42;">(error) {</span></span>
<span class="line"><span style="color:#4078F2;">			reject</span><span style="color:#383A42;">(error);</span></span>
<span class="line"><span style="color:#383A42;">		}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">		// Итерируем по массиву промисов и добавляем обработчики</span></span>
<span class="line"><span style="color:#383A42;">		promises.</span><span style="color:#4078F2;">forEach</span><span style="color:#383A42;">((element, index) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#C18401;">			Promise</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">resolve</span><span style="color:#383A42;">(element)</span></span>
<span class="line"><span style="color:#383A42;">				.</span><span style="color:#4078F2;">then</span><span style="color:#383A42;">(handleResolve.</span><span style="color:#4078F2;">bind</span><span style="color:#383A42;">(</span><span style="color:#986801;">null</span><span style="color:#383A42;">, index))</span></span>
<span class="line"><span style="color:#383A42;">				.</span><span style="color:#4078F2;">catch</span><span style="color:#383A42;">(handleReject);</span></span>
<span class="line"><span style="color:#383A42;">		})</span></span>
<span class="line"><span style="color:#383A42;">	});</span></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre></div><h4 id="использование" tabindex="-1">Использование <a class="header-anchor" href="#использование" aria-label="Permalink to &quot;Использование&quot;">​</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> URL1</span><span style="color:#0184BC;"> =</span><span style="color:#50A14F;"> &#39;https://jsonplaceholder.typicode.com/todos/1&#39;</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> URL2</span><span style="color:#0184BC;"> =</span><span style="color:#50A14F;"> &#39;https://jsonplaceholder.typicode.com/todos/2&#39;</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#4078F2;"> getResource</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> async</span><span style="color:#383A42;"> (url) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">	const</span><span style="color:#986801;"> res</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> await</span><span style="color:#4078F2;"> fetch</span><span style="color:#383A42;">(url);</span></span>
<span class="line"><span style="color:#A626A4;">	return</span><span style="color:#A626A4;"> await</span><span style="color:#383A42;"> res.</span><span style="color:#4078F2;">json</span><span style="color:#383A42;">();</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#4078F2;"> asyncFoo</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> async</span><span style="color:#383A42;"> () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  const</span><span style="color:#986801;"> p1</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> getResource</span><span style="color:#383A42;">(</span><span style="color:#986801;">URL1</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#A626A4;">  const</span><span style="color:#986801;"> p2</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> getResource</span><span style="color:#383A42;">(</span><span style="color:#986801;">URL2</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#A626A4;">  const</span><span style="color:#986801;"> a</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> await</span><span style="color:#4078F2;"> promiseAll</span><span style="color:#383A42;">([p1, p2]);</span></span>
<span class="line"><span style="color:#383A42;">	console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(a);</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">asyncFoo</span><span style="color:#383A42;">();</span></span></code></pre></div>`,6)])])}const m=n(o,[["render",e]]);export{d as __pageData,m as default};
