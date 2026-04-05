import{_ as a,o as n,c as l,aw as p}from"./chunks/framework.DLufY-ao.js";const b=JSON.parse('{"title":"Observer (Наблюдатель)","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/theory/design-patterns/3-behavioral/observer.md","filePath":"wiki/dev-commit/theory/design-patterns/3-behavioral/observer.md"}'),o={name:"wiki/dev-commit/theory/design-patterns/3-behavioral/observer.md"};function e(t,s,c,r,y,i){return n(),l("div",null,[...s[0]||(s[0]=[p(`<h1 id="observer-наблюдатель" tabindex="-1">Observer (Наблюдатель) <a class="header-anchor" href="#observer-наблюдатель" aria-label="Permalink to &quot;Observer (Наблюдатель)&quot;">​</a></h1><h2 id="информация" tabindex="-1">Информация <a class="header-anchor" href="#информация" aria-label="Permalink to &quot;Информация&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p></div><ul><li>Observer - создаёт механизм подписки, позволяющий одним объектам отслеживать и реагировать на события, происходящие в других объектах</li><li>Основан на зависимости один ко многим: при изменении состояния объекта Observable, все зависимые объекты Observer оповещаются об этом</li><li>Observable - наблюдаемый объект. Содержит список [Observer] и при изменении state, проходит в цикле по всем Observer и оповещает их</li><li>[Observer] (Подписчики) - наблюдатели за Observable</li></ul><h2 id="реализация" tabindex="-1">Реализация <a class="header-anchor" href="#реализация" aria-label="Permalink to &quot;Реализация&quot;">​</a></h2><ul><li>state - свойство, от изменения которого зависит состояние других объектов</li><li>subscribers - список зависящих от state объектов</li><li>subscribe() - подписка на изменения state</li><li>unsubscribe() - отписка от изменений state</li><li>getState() - метод для получения state</li><li>setState() - метод для изменения state</li><li>notify() - метод для оповещения подписчиков об изменении state</li></ul><h3 id="основная-реализация" tabindex="-1">Основная реализация <a class="header-anchor" href="#основная-реализация" aria-label="Permalink to &quot;Основная реализация&quot;">​</a></h3><h4 id="класс" tabindex="-1">Класс <a class="header-anchor" href="#класс" aria-label="Permalink to &quot;Класс&quot;">​</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> Observable</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  constructor</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#E45649;">    this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">state</span><span style="color:#0184BC;"> =</span><span style="color:#50A14F;"> &quot;Initial Data&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#E45649;">    this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">subscribers</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> [];</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#4078F2;">  subscribe</span><span style="color:#383A42;">(subscriber) {</span></span>
<span class="line"><span style="color:#E45649;">    this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">subscribers</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">push</span><span style="color:#383A42;">(subscriber);</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#4078F2;">  unsubscribe</span><span style="color:#383A42;">(subscriber) {</span></span>
<span class="line"><span style="color:#E45649;">    this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">subscribers</span><span style="color:#0184BC;"> =</span><span style="color:#E45649;"> this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">subscribers</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">filter</span><span style="color:#383A42;">((el) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> el </span><span style="color:#0184BC;">!==</span><span style="color:#383A42;"> subscriber);</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#4078F2;">  getState</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#E45649;"> this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">state</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#4078F2;">  setState</span><span style="color:#383A42;">(data) {</span></span>
<span class="line"><span style="color:#E45649;">    this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">state</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> data;</span></span>
<span class="line"><span style="color:#E45649;">    this</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">notify</span><span style="color:#383A42;">();</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#4078F2;">  notify</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#E45649;">    this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">subscribers</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">forEach</span><span style="color:#383A42;">((subscriber) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> subscriber.</span><span style="color:#4078F2;">update</span><span style="color:#383A42;">(</span><span style="color:#E45649;">this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">state</span><span style="color:#383A42;">));</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> Subscriber</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#4078F2;">  update</span><span style="color:#383A42;">(data) {</span></span>
<span class="line"><span style="color:#383A42;">    console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;Subscriber Udated Data&quot;</span><span style="color:#383A42;">, data);</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Использование</span></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> observable</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> new</span><span style="color:#4078F2;"> Observable</span><span style="color:#383A42;">();</span></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> subscriber</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> new</span><span style="color:#4078F2;"> Subscriber</span><span style="color:#383A42;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">observable.</span><span style="color:#4078F2;">subscribe</span><span style="color:#383A42;">(subscriber);</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// observable.unsubscribe(subscriber)</span></span>
<span class="line"><span style="color:#383A42;">observable.</span><span style="color:#4078F2;">setState</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;New Data&quot;</span><span style="color:#383A42;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> state</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> observable.</span><span style="color:#4078F2;">getState</span><span style="color:#383A42;">();</span></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;Observable State&quot;</span><span style="color:#383A42;">, state);</span></span></code></pre></div><h4 id="функция" tabindex="-1">Функция <a class="header-anchor" href="#функция" aria-label="Permalink to &quot;Функция&quot;">​</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A0A1A7;font-style:italic;">// Фабрика для Observable</span></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#4078F2;"> createObservable</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  let</span><span style="color:#383A42;"> state </span><span style="color:#0184BC;">=</span><span style="color:#50A14F;"> &#39;Initial Data&#39;</span></span>
<span class="line"><span style="color:#A626A4;">  const</span><span style="color:#986801;"> subscribers</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#4078F2;">    subscribe</span><span style="color:#383A42;">(subscriber) {</span></span>
<span class="line"><span style="color:#383A42;">      subscribers.</span><span style="color:#4078F2;">push</span><span style="color:#383A42;">(subscriber)</span></span>
<span class="line"><span style="color:#383A42;">    },</span></span>
<span class="line"><span style="color:#4078F2;">    unsubscribe</span><span style="color:#383A42;">(subscriber) {</span></span>
<span class="line"><span style="color:#383A42;">      subscribers </span><span style="color:#0184BC;">=</span><span style="color:#383A42;"> subscribers.</span><span style="color:#4078F2;">filter</span><span style="color:#383A42;">(el </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> el </span><span style="color:#0184BC;">!==</span><span style="color:#383A42;"> subscriber)</span></span>
<span class="line"><span style="color:#383A42;">    },</span></span>
<span class="line"><span style="color:#4078F2;">    getState</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#A626A4;">      return</span><span style="color:#383A42;"> state</span></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"><span style="color:#4078F2;">    setState</span><span style="color:#383A42;">(data) {</span></span>
<span class="line"><span style="color:#383A42;">      state </span><span style="color:#0184BC;">=</span><span style="color:#383A42;"> data</span></span>
<span class="line"><span style="color:#E45649;">      this</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">notify</span><span style="color:#383A42;">()</span></span>
<span class="line"><span style="color:#383A42;">    },</span></span>
<span class="line"><span style="color:#4078F2;">    notify</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#383A42;">	    subscribers.</span><span style="color:#4078F2;">forEach</span><span style="color:#383A42;">(subscriber </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> subscriber.</span><span style="color:#4078F2;">update</span><span style="color:#383A42;">(state))</span></span>
<span class="line"><span style="color:#383A42;">    },</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Фабрика для Subscriber</span></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#4078F2;"> createSubscriber</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#4078F2;">    update</span><span style="color:#383A42;">(data) {</span></span>
<span class="line"><span style="color:#383A42;">      console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;Subscriber Udated Data&#39;</span><span style="color:#383A42;">, data)</span></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"><span style="color:#383A42;">  };</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Использование</span></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> observable</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> createObservable</span><span style="color:#383A42;">()</span></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> subscriber</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> createSubscriber</span><span style="color:#383A42;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">observable.</span><span style="color:#4078F2;">subscribe</span><span style="color:#383A42;">(subscriber)</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// observable.unsubscribe(subscriber)</span></span>
<span class="line"><span style="color:#383A42;">observable.</span><span style="color:#4078F2;">setState</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;New Data&#39;</span><span style="color:#383A42;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> state</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> observable.</span><span style="color:#4078F2;">getState</span><span style="color:#383A42;">()</span></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;Observable State&#39;</span><span style="color:#383A42;">, state)</span></span></code></pre></div><h3 id="релизация-с-action-type" tabindex="-1">Релизация с action.type <a class="header-anchor" href="#релизация-с-action-type" aria-label="Permalink to &quot;Релизация с action.type&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> Observable</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  constructor</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#E45649;">    this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">subscribers</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> [];</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#4078F2;">  subscribe</span><span style="color:#383A42;">(subscriber) {</span></span>
<span class="line"><span style="color:#E45649;">    this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">subscribers</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">push</span><span style="color:#383A42;">(subscriber);</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#4078F2;">  unsubscribe</span><span style="color:#383A42;">(subscriber) {</span></span>
<span class="line"><span style="color:#E45649;">    this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">subscribers</span><span style="color:#0184BC;"> =</span><span style="color:#E45649;"> this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">subscribers</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">filter</span><span style="color:#383A42;">((el) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> el </span><span style="color:#0184BC;">!==</span><span style="color:#383A42;"> subscriber);</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#4078F2;">  notify</span><span style="color:#383A42;">(action) {</span></span>
<span class="line"><span style="color:#E45649;">    this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">subscribers</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">forEach</span><span style="color:#383A42;">((el) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> el.</span><span style="color:#4078F2;">update</span><span style="color:#383A42;">(action));</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> Subscriber</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  constructor</span><span style="color:#383A42;">(state </span><span style="color:#0184BC;">=</span><span style="color:#986801;"> 1</span><span style="color:#383A42;">) {</span></span>
<span class="line"><span style="color:#E45649;">    this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">state</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> state;</span></span>
<span class="line"><span style="color:#E45649;">    this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">initialState</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> state;</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">  update</span><span style="color:#383A42;">(action) {</span></span>
<span class="line"><span style="color:#A626A4;">    switch</span><span style="color:#383A42;"> (action.</span><span style="color:#E45649;">type</span><span style="color:#383A42;">) {</span></span>
<span class="line"><span style="color:#A626A4;">      case</span><span style="color:#50A14F;"> &quot;INCREMENT&quot;</span><span style="color:#383A42;">:</span></span>
<span class="line"><span style="color:#E45649;">        this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">state</span><span style="color:#0184BC;"> =</span><span style="color:#0184BC;"> ++</span><span style="color:#E45649;">this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">state</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#A626A4;">        break</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#A626A4;">      case</span><span style="color:#50A14F;"> &quot;DECREMENT&quot;</span><span style="color:#383A42;">:</span></span>
<span class="line"><span style="color:#E45649;">        this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">state</span><span style="color:#0184BC;"> =</span><span style="color:#0184BC;"> --</span><span style="color:#E45649;">this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">state</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#A626A4;">        break</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#A626A4;">      case</span><span style="color:#50A14F;"> &quot;ADD&quot;</span><span style="color:#383A42;">:</span></span>
<span class="line"><span style="color:#E45649;">        this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">state</span><span style="color:#0184BC;"> +=</span><span style="color:#383A42;"> action.</span><span style="color:#E45649;">payload</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#A626A4;">        break</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#A626A4;">      default</span><span style="color:#383A42;">:</span></span>
<span class="line"><span style="color:#E45649;">        this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">state</span><span style="color:#0184BC;"> =</span><span style="color:#E45649;"> this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">initialState</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> observable</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> new</span><span style="color:#4078F2;"> Observable</span><span style="color:#383A42;">();</span></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> subscriber</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> new</span><span style="color:#4078F2;"> Subscriber</span><span style="color:#383A42;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">observable.</span><span style="color:#4078F2;">subscribe</span><span style="color:#383A42;">(subscriber);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">observable.</span><span style="color:#4078F2;">notify</span><span style="color:#383A42;">({ </span><span style="color:#E45649;">type</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;INCREMENT&quot;</span><span style="color:#383A42;"> }); </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; 2</span></span>
<span class="line"><span style="color:#383A42;">observable.</span><span style="color:#4078F2;">notify</span><span style="color:#383A42;">({ </span><span style="color:#E45649;">type</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;DECREMENT&quot;</span><span style="color:#383A42;"> }); </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; 0</span></span>
<span class="line"><span style="color:#383A42;">observable.</span><span style="color:#4078F2;">notify</span><span style="color:#383A42;">({ </span><span style="color:#E45649;">type</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;ADD&quot;</span><span style="color:#383A42;">, </span><span style="color:#E45649;">payload</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 10</span><span style="color:#383A42;"> }); </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; 11</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(subscriber.</span><span style="color:#E45649;">state</span><span style="color:#383A42;">);</span></span></code></pre></div>`,13)])])}const u=a(o,[["render",e]]);export{b as __pageData,u as default};
