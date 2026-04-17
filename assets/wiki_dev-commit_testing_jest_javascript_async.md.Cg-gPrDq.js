import{_ as n,o as a,c as l,aw as p}from"./chunks/framework.DLufY-ao.js";const d=JSON.parse('{"title":"Асинхронные тесты","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/testing/jest/javascript/async.md","filePath":"wiki/dev-commit/testing/jest/javascript/async.md"}'),o={name:"wiki/dev-commit/testing/jest/javascript/async.md"};function t(e,s,c,r,y,A){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h1 id="асинхронные-тесты" tabindex="-1">Асинхронные тесты <a class="header-anchor" href="#асинхронные-тесты" aria-label="Permalink to &quot;Асинхронные тесты&quot;">​</a></h1><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> Ajax</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">	static</span><span style="color:#4078F2;"> echo</span><span style="color:#383A42;">(data) {</span></span>
<span class="line"><span style="color:#A626A4;">		return</span><span style="color:#A626A4;"> new</span><span style="color:#C18401;"> Promise</span><span style="color:#383A42;">((resolve, reject) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#4078F2;">			setTimeout</span><span style="color:#383A42;">(() </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">				if</span><span style="color:#383A42;"> (data) {</span></span>
<span class="line"><span style="color:#4078F2;">					resolve</span><span style="color:#383A42;">(data);</span></span>
<span class="line"><span style="color:#383A42;">				} </span><span style="color:#A626A4;">else</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#4078F2;">					reject</span><span style="color:#383A42;">(</span><span style="color:#A626A4;">new</span><span style="color:#4078F2;"> Error</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;error&#39;</span><span style="color:#383A42;">));</span></span>
<span class="line"><span style="color:#383A42;">				}</span></span>
<span class="line"><span style="color:#383A42;">			}, </span><span style="color:#986801;">150</span><span style="color:#383A42;">)</span></span>
<span class="line"><span style="color:#383A42;">		})</span></span>
<span class="line"><span style="color:#383A42;">	}</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E45649;">module</span><span style="color:#383A42;">.</span><span style="color:#E45649;">exports</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> Ajax;</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> Ajax</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> require</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;./intro&#39;</span><span style="color:#383A42;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">describe</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;Ajax: echo&#39;</span><span style="color:#383A42;">, () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">	test</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;return value: async&#39;</span><span style="color:#383A42;">, </span><span style="color:#A626A4;">async</span><span style="color:#383A42;"> () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">		const</span><span style="color:#986801;"> result</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> await</span><span style="color:#383A42;"> Ajax.</span><span style="color:#4078F2;">echo</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;some data&#39;</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#4078F2;">		expect</span><span style="color:#383A42;">(result).</span><span style="color:#4078F2;">toBe</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;some data&#39;</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#383A42;">	});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">	test</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;return value: promise&#39;</span><span style="color:#383A42;">, () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">		return</span><span style="color:#383A42;"> Ajax.</span><span style="color:#4078F2;">echo</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;some data&#39;</span><span style="color:#383A42;">)</span></span>
<span class="line"><span style="color:#383A42;">			.</span><span style="color:#4078F2;">then</span><span style="color:#383A42;">(data </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#4078F2;">				expect</span><span style="color:#383A42;">(data).</span><span style="color:#4078F2;">toBe</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;some data&#39;</span><span style="color:#383A42;">)</span></span>
<span class="line"><span style="color:#383A42;">			})</span></span>
<span class="line"><span style="color:#383A42;">	});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">	test</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;return error: promise&#39;</span><span style="color:#383A42;">, () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">		return</span><span style="color:#383A42;"> Ajax.</span><span style="color:#4078F2;">echo</span><span style="color:#383A42;">()</span></span>
<span class="line"><span style="color:#383A42;">			.</span><span style="color:#4078F2;">catch</span><span style="color:#383A42;">(error </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#4078F2;">				expect</span><span style="color:#383A42;">(error).</span><span style="color:#4078F2;">toBeInstanceOf</span><span style="color:#383A42;">(Error)</span></span>
<span class="line"><span style="color:#383A42;">			})</span></span>
<span class="line"><span style="color:#383A42;">	});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">	test</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;return error: async&#39;</span><span style="color:#383A42;">, </span><span style="color:#A626A4;">async</span><span style="color:#383A42;"> () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">		try</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">			await</span><span style="color:#383A42;"> Ajax.</span><span style="color:#4078F2;">echo</span><span style="color:#383A42;">();</span></span>
<span class="line"><span style="color:#383A42;">		} </span><span style="color:#A626A4;">catch</span><span style="color:#383A42;">(e) {</span></span>
<span class="line"><span style="color:#4078F2;">			expect</span><span style="color:#383A42;">(e.</span><span style="color:#E45649;">message</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">toBe</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;error&#39;</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#383A42;">		}</span></span>
<span class="line"><span style="color:#383A42;">	});</span></span>
<span class="line"><span style="color:#383A42;">});</span></span></code></pre></div>`,3)])])}const F=n(o,[["render",t]]);export{d as __pageData,F as default};
