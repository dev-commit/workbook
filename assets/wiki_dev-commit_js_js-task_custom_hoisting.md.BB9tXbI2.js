import{_ as a,o as n,c as l,aw as o}from"./chunks/framework.DLufY-ao.js";const d=JSON.parse('{"title":"Всплытие","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/js/js-task/custom/hoisting.md","filePath":"wiki/dev-commit/js/js-task/custom/hoisting.md"}'),p={name:"wiki/dev-commit/js/js-task/custom/hoisting.md"};function e(t,s,c,r,i,y){return n(),l("div",null,[...s[0]||(s[0]=[o(`<h1 id="всплытие" tabindex="-1">Всплытие <a class="header-anchor" href="#всплытие" aria-label="Permalink to &quot;Всплытие&quot;">​</a></h1><h2 id="функция" tabindex="-1">Функция <a class="header-anchor" href="#функция" aria-label="Permalink to &quot;Функция&quot;">​</a></h2><h3 id="_1" tabindex="-1">#1 <a class="header-anchor" href="#_1" aria-label="Permalink to &quot;#1&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">var</span><span style="color:#383A42;"> a </span><span style="color:#0184BC;">=</span><span style="color:#986801;"> 1</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">(</span><span style="color:#A626A4;">function</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#383A42;">    console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(a); </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; undefined</span></span>
<span class="line"><span style="color:#A626A4;">    var</span><span style="color:#383A42;"> a </span><span style="color:#0184BC;">=</span><span style="color:#986801;"> 2</span><span style="color:#383A42;">;      </span><span style="color:#A0A1A7;font-style:italic;">// всплывает и инициализируется значением &quot;undefined&quot;</span></span>
<span class="line"><span style="color:#383A42;">})();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// &quot;function а&quot; имеет максимальный приоритет, но &quot;var a&quot; проинициализирована</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// поэтому &quot;a == 1&quot;</span></span>
<span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> a</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#383A42;">    console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#E45649;">this</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">a.</span><span style="color:#4078F2;">call</span><span style="color:#383A42;">(</span><span style="color:#986801;">null</span><span style="color:#383A42;">); </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; Uncaught TypeError: a.call is not a function</span></span></code></pre></div><h3 id="_2" tabindex="-1">#2 <a class="header-anchor" href="#_2" aria-label="Permalink to &quot;#2&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#383A42;">(</span><span style="color:#A626A4;">function</span><span style="color:#383A42;"> () {</span></span>
<span class="line"><span style="color:#4078F2;">    f</span><span style="color:#383A42;">(); </span><span style="color:#A0A1A7;font-style:italic;">// 2</span></span>
<span class="line"><span style="color:#4078F2;">    f</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> function</span><span style="color:#383A42;"> () {</span></span>
<span class="line"><span style="color:#383A42;">    	console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#986801;">1</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#383A42;">    };</span></span>
<span class="line"><span style="color:#383A42;">})();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">f</span><span style="color:#383A42;">(); </span><span style="color:#A0A1A7;font-style:italic;">// 1</span></span>
<span class="line"><span style="color:#A626A4;">var</span><span style="color:#383A42;"> f </span><span style="color:#0184BC;">=</span><span style="color:#986801;"> 10</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#4078F2;">f</span><span style="color:#383A42;">(); </span><span style="color:#A0A1A7;font-style:italic;">// f is not a function</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> f</span><span style="color:#383A42;"> () {</span></span>
<span class="line"><span style="color:#383A42;">	console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#986801;">2</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre></div><h3 id="_3" tabindex="-1">#3 <a class="header-anchor" href="#_3" aria-label="Permalink to &quot;#3&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">let</span><span style="color:#383A42;"> a </span><span style="color:#0184BC;">=</span><span style="color:#986801;"> 1</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> b</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    // перезаписывается не глобальная переменная, а локальная функция</span></span>
<span class="line"><span style="color:#383A42;">    a </span><span style="color:#0184BC;">=</span><span style="color:#986801;"> 10</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#986801;"> 20</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    // функция всплывает</span></span>
<span class="line"><span style="color:#A626A4;">    function</span><span style="color:#4078F2;"> a</span><span style="color:#383A42;">() {}</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">b</span><span style="color:#383A42;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(a); </span><span style="color:#A0A1A7;font-style:italic;">// 1</span></span></code></pre></div><h3 id="_4" tabindex="-1">#4 <a class="header-anchor" href="#_4" aria-label="Permalink to &quot;#4&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">var</span><span style="color:#4078F2;"> x</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> function</span><span style="color:#4078F2;"> a</span><span style="color:#383A42;">(arg) {</span></span>
<span class="line"><span style="color:#383A42;">    console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(x </span><span style="color:#0184BC;">===</span><span style="color:#383A42;"> arg);</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">x</span><span style="color:#383A42;">(a); </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; Uncaught ReferenceError: a is not defined</span></span></code></pre></div><h3 id="_5" tabindex="-1">#5 <a class="header-anchor" href="#_5" aria-label="Permalink to &quot;#5&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">var</span><span style="color:#383A42;"> a </span><span style="color:#0184BC;">=</span><span style="color:#986801;"> 5</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> foo</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#A626A4;">    if</span><span style="color:#383A42;"> (a) {</span></span>
<span class="line"><span style="color:#383A42;">        console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(a);</span></span>
<span class="line"><span style="color:#A626A4;">        var</span><span style="color:#383A42;"> a </span><span style="color:#0184BC;">=</span><span style="color:#986801;"> 10</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">    } </span><span style="color:#A626A4;">else</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">        console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;No&#39;</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">foo</span><span style="color:#383A42;">(); </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; &quot;No&quot;</span></span></code></pre></div><h2 id="массив" tabindex="-1">Массив <a class="header-anchor" href="#массив" aria-label="Permalink to &quot;Массив&quot;">​</a></h2><h3 id="значение-массива" tabindex="-1">Значение массива <a class="header-anchor" href="#значение-массива" aria-label="Permalink to &quot;Значение массива&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">var</span><span style="color:#383A42;"> a </span><span style="color:#0184BC;">=</span><span style="color:#383A42;"> [];</span></span>
<span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> clear</span><span style="color:#383A42;">(arr) {</span></span>
<span class="line"><span style="color:#383A42;">    arr.</span><span style="color:#4078F2;">push</span><span style="color:#383A42;">(</span><span style="color:#986801;">2</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#383A42;">    arr </span><span style="color:#0184BC;">=</span><span style="color:#986801;"> null</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"><span style="color:#4078F2;">clear</span><span style="color:#383A42;">(a);</span></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(a); </span><span style="color:#A0A1A7;font-style:italic;">// [2]</span></span></code></pre></div><h2 id="временная-dead-zone" tabindex="-1">Временная Dead Zone <a class="header-anchor" href="#временная-dead-zone" aria-label="Permalink to &quot;Временная Dead Zone&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> foo</span><span style="color:#383A42;">(a) {</span></span>
<span class="line"><span style="color:#A626A4;">    if</span><span style="color:#383A42;"> (a </span><span style="color:#0184BC;">&gt;</span><span style="color:#986801;"> 0</span><span style="color:#383A42;">) {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">        // a во временной dead zone</span></span>
<span class="line"><span style="color:#A626A4;">        let</span><span style="color:#383A42;"> a </span><span style="color:#0184BC;">=</span><span style="color:#383A42;"> a </span><span style="color:#0184BC;">+</span><span style="color:#986801;"> 10</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#A626A4;">        return</span><span style="color:#383A42;"> a;</span></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#383A42;"> a;</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#4078F2;">foo</span><span style="color:#383A42;">(</span><span style="color:#986801;">20</span><span style="color:#383A42;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// =&gt; ReferenceError: Cannot access &#39;a&#39; before initialization</span></span></code></pre></div><h2 id="this" tabindex="-1">this <a class="header-anchor" href="#this" aria-label="Permalink to &quot;this&quot;">​</a></h2><h4 id="comment" tabindex="-1">comment <a class="header-anchor" href="#comment" aria-label="Permalink to &quot;comment&quot;">​</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">var</span><span style="color:#383A42;"> a </span><span style="color:#0184BC;">=</span><span style="color:#986801;"> 1</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> b</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#383A42;">    a </span><span style="color:#0184BC;">=</span><span style="color:#986801;"> 10</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#A626A4;">    function</span><span style="color:#4078F2;"> a</span><span style="color:#383A42;">() {}</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"><span style="color:#4078F2;">b</span><span style="color:#383A42;">();</span></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(a); </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; 1</span></span></code></pre></div><h4 id="comment-1" tabindex="-1">comment <a class="header-anchor" href="#comment-1" aria-label="Permalink to &quot;comment&quot;">​</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">var</span><span style="color:#383A42;"> a </span><span style="color:#0184BC;">=</span><span style="color:#986801;"> 1</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> b</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#383A42;">    a </span><span style="color:#0184BC;">=</span><span style="color:#986801;"> 10</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#A626A4;">    let</span><span style="color:#383A42;"> a;</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"><span style="color:#4078F2;">b</span><span style="color:#383A42;">();</span></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(a); </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; Uncaught ReferenceError: Cannot access &#39;a&#39; before initialization</span></span></code></pre></div><h2 id="переменная" tabindex="-1">Переменная <a class="header-anchor" href="#переменная" aria-label="Permalink to &quot;Переменная&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">var</span><span style="color:#383A42;"> a </span><span style="color:#0184BC;">=</span><span style="color:#986801;"> 5</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> someFunction</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    // &quot;3&quot; запишется не в глобальную, а в локальную, потому что она всплыла</span></span>
<span class="line"><span style="color:#383A42;">    a </span><span style="color:#0184BC;">=</span><span style="color:#986801;"> 3</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    // условие не выполнится но &quot;a&quot; всплывет</span></span>
<span class="line"><span style="color:#A626A4;">    if</span><span style="color:#383A42;"> (</span><span style="color:#986801;">false</span><span style="color:#383A42;">) {</span></span>
<span class="line"><span style="color:#A626A4;">        var</span><span style="color:#383A42;"> a </span><span style="color:#0184BC;">=</span><span style="color:#986801;"> 10</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">someFunction</span><span style="color:#383A42;">();</span></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(a); </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; 5</span></span></code></pre></div>`,24)])])}const u=a(p,[["render",e]]);export{d as __pageData,u as default};
