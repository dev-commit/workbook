import{_ as n,o as a,c as l,aw as p}from"./chunks/framework.DLufY-ao.js";const u=JSON.parse('{"title":"Async Await / Promise / setTimeout","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/js/js-promise/samples/async.md","filePath":"wiki/dev-commit/js/js-promise/samples/async.md"}'),o={name:"wiki/dev-commit/js/js-promise/samples/async.md"};function e(t,s,c,r,y,i){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h1 id="async-await-promise-settimeout" tabindex="-1">Async Await / Promise / setTimeout <a class="header-anchor" href="#async-await-promise-settimeout" aria-label="Permalink to &quot;Async Await / Promise / setTimeout&quot;">​</a></h1><h2 id="event-loop" tabindex="-1">Event Loop <a class="header-anchor" href="#event-loop" aria-label="Permalink to &quot;Event Loop&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A0A1A7;font-style:italic;">// синхронный код</span></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#986801;">1</span><span style="color:#383A42;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> promise</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> new</span><span style="color:#C18401;"> Promise</span><span style="color:#383A42;">((res, rej) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    // это обычная функция, внутри которой синхронный код</span></span>
<span class="line"><span style="color:#383A42;">    console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#986801;">2</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#4078F2;">    res</span><span style="color:#383A42;">(</span><span style="color:#986801;">4</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#383A42;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// синхронный код</span></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#986801;">3</span><span style="color:#383A42;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">promise.</span><span style="color:#4078F2;">then</span><span style="color:#383A42;">(value </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(value))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// =&gt; 1, 2, 3, 4</span></span></code></pre></div><h2 id="promise-и-settimeout" tabindex="-1">Promise и setTimeout <a class="header-anchor" href="#promise-и-settimeout" aria-label="Permalink to &quot;Promise и setTimeout&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A0A1A7;font-style:italic;">// 1 - синхронный код</span></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#986801;">1</span><span style="color:#383A42;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C18401;">Promise</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">resolve</span><span style="color:#383A42;">().</span><span style="color:#4078F2;">then</span><span style="color:#383A42;">(() </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">	// 3 - микротаска</span></span>
<span class="line"><span style="color:#383A42;">	console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#986801;">3</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#383A42;">	</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">	// 5 - макротаска, поставится в очеред после setTimeout(() =&gt; { console.log(2); })</span></span>
<span class="line"><span style="color:#4078F2;">	setTimeout</span><span style="color:#383A42;">(() </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">		console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#986801;">4</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#383A42;">	})</span></span>
<span class="line"><span style="color:#383A42;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// 4 - макротаска</span></span>
<span class="line"><span style="color:#4078F2;">setTimeout</span><span style="color:#383A42;">(() </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">	console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#986801;">2</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#383A42;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// 2 - синхронный код</span></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#986801;">5</span><span style="color:#383A42;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// =&gt; 1, 5, 3, 2, 4</span></span></code></pre></div><h2 id="бесконечныи-promise-и-settimeout" tabindex="-1">Бесконечный Promise и setTimeout <a class="header-anchor" href="#бесконечныи-promise-и-settimeout" aria-label="Permalink to &quot;Бесконечный Promise и setTimeout&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> a</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#383A42;">	console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;a&#39;</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#C18401;">	Promise</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">resolve</span><span style="color:#383A42;">().</span><span style="color:#4078F2;">then</span><span style="color:#383A42;">(a);</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> b</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#383A42;">	console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;b&#39;</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#4078F2;">	setTimeout</span><span style="color:#383A42;">(b, </span><span style="color:#986801;">0</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">a</span><span style="color:#383A42;">();</span></span>
<span class="line"><span style="color:#4078F2;">b</span><span style="color:#383A42;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// =&gt; a, b, a (бесконечно)</span></span></code></pre></div><h2 id="async-await-promise-settimeout-1" tabindex="-1">Async Await + Promise + setTimeout <a class="header-anchor" href="#async-await-promise-settimeout-1" aria-label="Permalink to &quot;Async Await + Promise + setTimeout&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> a</span><span style="color:#0184BC;"> =</span><span style="color:#986801;"> 1</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#4078F2;"> fn</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> async</span><span style="color:#A626A4;"> function</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#4078F2;">    setTimeout</span><span style="color:#383A42;">(() </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">        console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;Пятый&#39;</span><span style="color:#383A42;">, a); </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; 6</span></span>
<span class="line"><span style="color:#383A42;">        a </span><span style="color:#0184BC;">=</span><span style="color:#986801;"> 2</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">    }, </span><span style="color:#986801;">0</span><span style="color:#383A42;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    const</span><span style="color:#986801;"> promise</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> new</span><span style="color:#C18401;"> Promise</span><span style="color:#383A42;">(</span><span style="color:#A626A4;">function</span><span style="color:#383A42;">(resolve, reject) {</span></span>
<span class="line"><span style="color:#383A42;">        console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;Первый&#39;</span><span style="color:#383A42;">, a); </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; 1</span></span>
<span class="line"><span style="color:#383A42;">        a </span><span style="color:#0184BC;">=</span><span style="color:#986801;"> 3</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#4078F2;">        resolve</span><span style="color:#383A42;">();</span></span>
<span class="line"><span style="color:#383A42;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">    promise</span></span>
<span class="line"><span style="color:#383A42;">        .</span><span style="color:#4078F2;">then</span><span style="color:#383A42;">(() </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">            console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;Второй&#39;</span><span style="color:#383A42;">, a); </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; 3</span></span>
<span class="line"><span style="color:#383A42;">            a </span><span style="color:#0184BC;">=</span><span style="color:#986801;"> 4</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">        })</span></span>
<span class="line"><span style="color:#383A42;">        .</span><span style="color:#4078F2;">catch</span><span style="color:#383A42;">(() </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">            console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;Не выведет&#39;</span><span style="color:#383A42;">, a);</span></span>
<span class="line"><span style="color:#383A42;">            a </span><span style="color:#0184BC;">=</span><span style="color:#986801;"> 5</span><span style="color:#383A42;">;  </span></span>
<span class="line"><span style="color:#383A42;">        })</span></span>
<span class="line"><span style="color:#383A42;">        .</span><span style="color:#4078F2;">then</span><span style="color:#383A42;">(() </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">            console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;Четвертый&#39;</span><span style="color:#383A42;">, a); </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; 4</span></span>
<span class="line"><span style="color:#383A42;">            a </span><span style="color:#0184BC;">=</span><span style="color:#986801;"> 6</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">        });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    await</span><span style="color:#383A42;"> promise;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">    console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;Третий&#39;</span><span style="color:#383A42;">, a); </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; 4 </span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">fn</span><span style="color:#383A42;">();</span></span></code></pre></div><h2 id="использование-async-await-вместо-promise-all" tabindex="-1">Использование async await вместо Promise.all() <a class="header-anchor" href="#использование-async-await-вместо-promise-all" aria-label="Permalink to &quot;Использование async await вместо Promise.all()&quot;">​</a></h2><ul><li>Использовать async await, но 2 запроса &quot;foo1()&quot; и &quot;foo2()&quot; должны работать асинхронно</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">async</span><span style="color:#A626A4;"> function</span><span style="color:#4078F2;"> foo1</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#A626A4;">	return</span><span style="color:#986801;"> 1</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">async</span><span style="color:#A626A4;"> function</span><span style="color:#4078F2;"> foo2</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#A626A4;">	return</span><span style="color:#986801;"> 2</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">async</span><span style="color:#A626A4;"> function</span><span style="color:#4078F2;"> all</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#A626A4;">  const</span><span style="color:#986801;"> value1</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> foo1</span><span style="color:#383A42;">(); </span><span style="color:#A0A1A7;font-style:italic;">// Promise</span></span>
<span class="line"><span style="color:#A626A4;">  const</span><span style="color:#986801;"> value2</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> foo2</span><span style="color:#383A42;">(); </span><span style="color:#A0A1A7;font-style:italic;">// Promise</span></span>
<span class="line"><span style="color:#383A42;">  </span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  // 1 request and 2 request</span></span>
<span class="line"><span style="color:#A626A4;">  const</span><span style="color:#986801;"> result1</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> await</span><span style="color:#383A42;"> value1;</span></span>
<span class="line"><span style="color:#A626A4;">  const</span><span style="color:#986801;"> result2</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> await</span><span style="color:#383A42;"> value2;</span></span>
<span class="line"><span style="color:#383A42;">  </span></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#383A42;"> [result1, result2];</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">async</span><span style="color:#A626A4;"> function</span><span style="color:#4078F2;"> result</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#A626A4;">	const</span><span style="color:#986801;"> res</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> await</span><span style="color:#4078F2;"> all</span><span style="color:#383A42;">();</span></span>
<span class="line"><span style="color:#383A42;">	console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(res);  </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; (2) [1, 2]</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">result</span><span style="color:#383A42;">();</span></span></code></pre></div>`,12)])])}const m=n(o,[["render",e]]);export{u as __pageData,m as default};
