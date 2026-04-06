import{_ as a,o as n,c as l,aw as p}from"./chunks/framework.DLufY-ao.js";const d=JSON.parse('{"title":"Strategy (Стратегия)","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/theory/design-patterns/3-behavioral/strategy.md","filePath":"wiki/dev-commit/theory/design-patterns/3-behavioral/strategy.md"}'),o={name:"wiki/dev-commit/theory/design-patterns/3-behavioral/strategy.md"};function e(t,s,c,r,y,i){return n(),l("div",null,[...s[0]||(s[0]=[p(`<h1 id="strategy-стратегия" tabindex="-1">Strategy (Стратегия) <a class="header-anchor" href="#strategy-стратегия" aria-label="Permalink to &quot;Strategy (Стратегия)&quot;">​</a></h1><h2 id="информация" tabindex="-1">Информация <a class="header-anchor" href="#информация" aria-label="Permalink to &quot;Информация&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">Определение</p><ul><li><strong>Strategy</strong> - взаимодействие с разыными стратегиями через один интерфейс</li><li>Позволяет создавать оболочку для различных интерфейсов для возможности использования разных алгоритмов и интерфейсов в задаче</li><li>Определяет семейство алгоритмов, которые наследуют объекты в неизменяемом порядке</li></ul></div><h2 id="примеры" tabindex="-1">Примеры <a class="header-anchor" href="#примеры" aria-label="Permalink to &quot;Примеры&quot;">​</a></h2><h3 id="стратегия-поездки" tabindex="-1">Стратегия поездки <a class="header-anchor" href="#стратегия-поездки" aria-label="Permalink to &quot;Стратегия поездки&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> Vehicle</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#4078F2;">  travelTime</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#E45649;"> this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">timeTaken</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Первая стратегия</span></span>
<span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> Bus</span><span style="color:#A626A4;"> extends</span><span style="color:#C18401;"> Vehicle</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  constructor</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#E45649;">    super</span><span style="color:#383A42;">();</span></span>
<span class="line"><span style="color:#E45649;">    this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">timeTaken</span><span style="color:#0184BC;"> =</span><span style="color:#986801;"> 10</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Вторая стратегия</span></span>
<span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> Taxi</span><span style="color:#A626A4;"> extends</span><span style="color:#C18401;"> Vehicle</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  constructor</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#E45649;">    super</span><span style="color:#383A42;">();</span></span>
<span class="line"><span style="color:#E45649;">    this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">timeTaken</span><span style="color:#0184BC;"> =</span><span style="color:#986801;"> 5</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Третья стратегия</span></span>
<span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> Car</span><span style="color:#A626A4;"> extends</span><span style="color:#C18401;"> Vehicle</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  constructor</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#E45649;">    super</span><span style="color:#383A42;">();</span></span>
<span class="line"><span style="color:#E45649;">    this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">timeTaken</span><span style="color:#0184BC;"> =</span><span style="color:#986801;"> 3</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Время на дорогу</span></span>
<span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> Commute</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#4078F2;">  travel</span><span style="color:#383A42;">(transport) {</span></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#383A42;"> transport.</span><span style="color:#4078F2;">travelTime</span><span style="color:#383A42;">();</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> commute</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> new</span><span style="color:#4078F2;"> Commute</span><span style="color:#383A42;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(commute.</span><span style="color:#4078F2;">travel</span><span style="color:#383A42;">(</span><span style="color:#A626A4;">new</span><span style="color:#4078F2;"> Taxi</span><span style="color:#383A42;">())); </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; 5</span></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(commute.</span><span style="color:#4078F2;">travel</span><span style="color:#383A42;">(</span><span style="color:#A626A4;">new</span><span style="color:#4078F2;"> Bus</span><span style="color:#383A42;">())); </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; 10</span></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(commute.</span><span style="color:#4078F2;">travel</span><span style="color:#383A42;">(</span><span style="color:#A626A4;">new</span><span style="color:#4078F2;"> Car</span><span style="color:#383A42;">())); </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; 3</span></span></code></pre></div>`,6)])])}const m=a(o,[["render",e]]);export{d as __pageData,m as default};
