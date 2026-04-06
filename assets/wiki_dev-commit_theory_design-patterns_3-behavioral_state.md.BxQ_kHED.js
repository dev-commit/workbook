import{_ as n,o as a,c as l,aw as p}from"./chunks/framework.DLufY-ao.js";const h=JSON.parse('{"title":"State (Состояние)","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/theory/design-patterns/3-behavioral/state.md","filePath":"wiki/dev-commit/theory/design-patterns/3-behavioral/state.md"}'),o={name:"wiki/dev-commit/theory/design-patterns/3-behavioral/state.md"};function t(e,s,c,r,y,i){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h1 id="state-состояние" tabindex="-1">State (Состояние) <a class="header-anchor" href="#state-состояние" aria-label="Permalink to &quot;State (Состояние)&quot;">​</a></h1><h2 id="информация" tabindex="-1">Информация <a class="header-anchor" href="#информация" aria-label="Permalink to &quot;Информация&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">Определение</p><ul><li><strong>State</strong> - можно создавать отдельные классы, которые будут являться элементами State и можно делегировать изменение состояния этих классов на общий класс, который будет являться State и который будет менять внутренее состояние этих отдельных элементов</li><li><em>Пример</em>: реализация роутинга</li></ul></div><h2 id="примеры" tabindex="-1">Примеры <a class="header-anchor" href="#примеры" aria-label="Permalink to &quot;Примеры&quot;">​</a></h2><h3 id="светофор" tabindex="-1">Светофор <a class="header-anchor" href="#светофор" aria-label="Permalink to &quot;Светофор&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> Light</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  constructor</span><span style="color:#383A42;">(light) {</span></span>
<span class="line"><span style="color:#E45649;">    this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">light</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> light;</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> RedLight</span><span style="color:#A626A4;"> extends</span><span style="color:#C18401;"> Light</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  constructor</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#E45649;">    super</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;red&quot;</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#4078F2;">  sign</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#50A14F;"> &quot;СТОП&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> YellowLight</span><span style="color:#A626A4;"> extends</span><span style="color:#C18401;"> Light</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  constructor</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#E45649;">    super</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;yellow&quot;</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#4078F2;">  sign</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#50A14F;"> &quot;ГОТОВЬСЯ&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> GreenLight</span><span style="color:#A626A4;"> extends</span><span style="color:#C18401;"> Light</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  constructor</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#E45649;">    super</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;green&quot;</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#4078F2;">  sign</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#50A14F;"> &quot;ЕДЬ!&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> TrafficLight</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  constructor</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    // Набор States</span></span>
<span class="line"><span style="color:#E45649;">    this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">states</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> [</span><span style="color:#A626A4;">new</span><span style="color:#4078F2;"> RedLight</span><span style="color:#383A42;">(), </span><span style="color:#A626A4;">new</span><span style="color:#4078F2;"> YellowLight</span><span style="color:#383A42;">(), </span><span style="color:#A626A4;">new</span><span style="color:#4078F2;"> GreenLight</span><span style="color:#383A42;">()];</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    // Текущий State</span></span>
<span class="line"><span style="color:#E45649;">    this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">current</span><span style="color:#0184BC;"> =</span><span style="color:#E45649;"> this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">states</span><span style="color:#383A42;">[</span><span style="color:#986801;">0</span><span style="color:#383A42;">];</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  // Изменение состояние светофора</span></span>
<span class="line"><span style="color:#4078F2;">  change</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#A626A4;">    const</span><span style="color:#986801;"> total</span><span style="color:#0184BC;"> =</span><span style="color:#E45649;"> this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">states</span><span style="color:#383A42;">.</span><span style="color:#E45649;">length</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    // Найти текущее состояние</span></span>
<span class="line"><span style="color:#A626A4;">    let</span><span style="color:#383A42;"> index </span><span style="color:#0184BC;">=</span><span style="color:#E45649;"> this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">states</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">findIndex</span><span style="color:#383A42;">((light) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> light </span><span style="color:#0184BC;">===</span><span style="color:#E45649;"> this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">current</span><span style="color:#383A42;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    if</span><span style="color:#383A42;"> (index </span><span style="color:#0184BC;">+</span><span style="color:#986801;"> 1</span><span style="color:#0184BC;"> &lt;</span><span style="color:#383A42;"> total) {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">      // Переключение на следующее состояние State</span></span>
<span class="line"><span style="color:#E45649;">      this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">current</span><span style="color:#0184BC;"> =</span><span style="color:#E45649;"> this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">states</span><span style="color:#383A42;">[index </span><span style="color:#0184BC;">+</span><span style="color:#986801;"> 1</span><span style="color:#383A42;">];</span></span>
<span class="line"><span style="color:#383A42;">    } </span><span style="color:#A626A4;">else</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">      // Переключиться на первый State</span></span>
<span class="line"><span style="color:#E45649;">      this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">current</span><span style="color:#0184BC;"> =</span><span style="color:#E45649;"> this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">states</span><span style="color:#383A42;">[</span><span style="color:#986801;">0</span><span style="color:#383A42;">];</span></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  // Изменение текущего знака</span></span>
<span class="line"><span style="color:#4078F2;">  sign</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#E45649;"> this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">current</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">sign</span><span style="color:#383A42;">();</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> traffic</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> new</span><span style="color:#4078F2;"> TrafficLight</span><span style="color:#383A42;">();</span></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(traffic.</span><span style="color:#4078F2;">sign</span><span style="color:#383A42;">()); </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; &quot;СТОП&quot;</span></span>
<span class="line"><span style="color:#383A42;">traffic.</span><span style="color:#4078F2;">change</span><span style="color:#383A42;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(traffic.</span><span style="color:#4078F2;">sign</span><span style="color:#383A42;">()); </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; &quot;ГОТОВЬСЯ&quot;</span></span>
<span class="line"><span style="color:#383A42;">traffic.</span><span style="color:#4078F2;">change</span><span style="color:#383A42;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(traffic.</span><span style="color:#4078F2;">sign</span><span style="color:#383A42;">()); </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; &quot;ЕДЬ!&quot;</span></span>
<span class="line"><span style="color:#383A42;">traffic.</span><span style="color:#4078F2;">change</span><span style="color:#383A42;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(traffic.</span><span style="color:#4078F2;">sign</span><span style="color:#383A42;">()); </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; &quot;СТОП&quot;</span></span>
<span class="line"><span style="color:#383A42;">traffic.</span><span style="color:#4078F2;">change</span><span style="color:#383A42;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(traffic.</span><span style="color:#4078F2;">sign</span><span style="color:#383A42;">()); </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; &quot;ГОТОВЬСЯ&quot;</span></span>
<span class="line"><span style="color:#383A42;">traffic.</span><span style="color:#4078F2;">change</span><span style="color:#383A42;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(traffic.</span><span style="color:#4078F2;">sign</span><span style="color:#383A42;">()); </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; &quot;ЕДЬ!&quot;</span></span>
<span class="line"><span style="color:#383A42;">traffic.</span><span style="color:#4078F2;">change</span><span style="color:#383A42;">();</span></span></code></pre></div>`,6)])])}const u=n(o,[["render",t]]);export{h as __pageData,u as default};
