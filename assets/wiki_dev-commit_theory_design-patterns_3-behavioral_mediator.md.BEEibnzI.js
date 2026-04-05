import{_ as n,o as a,c as l,aw as o}from"./chunks/framework.DLufY-ao.js";const d=JSON.parse('{"title":"Mediator (Посредник)","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/theory/design-patterns/3-behavioral/mediator.md","filePath":"wiki/dev-commit/theory/design-patterns/3-behavioral/mediator.md"}'),p={name:"wiki/dev-commit/theory/design-patterns/3-behavioral/mediator.md"};function e(t,s,c,r,y,i){return a(),l("div",null,[...s[0]||(s[0]=[o(`<h1 id="mediator-посредник" tabindex="-1">Mediator (Посредник) <a class="header-anchor" href="#mediator-посредник" aria-label="Permalink to &quot;Mediator (Посредник)&quot;">​</a></h1><h2 id="информация" tabindex="-1">Информация <a class="header-anchor" href="#информация" aria-label="Permalink to &quot;Информация&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">Mediator</p><ul><li><strong>Mediator</strong> - поволяет устанавливать плотную и тесную коммуникация между объектами разного типа</li><li>При этом, паттерн предоставляет центрелизованную абстракцию, которая позволяет взаимодействовать группе объектов через друг друга</li></ul></div><h2 id="примеры" tabindex="-1">Примеры <a class="header-anchor" href="#примеры" aria-label="Permalink to &quot;Примеры&quot;">​</a></h2><h3 id="чат" tabindex="-1">Чат <a class="header-anchor" href="#чат" aria-label="Permalink to &quot;Чат&quot;">​</a></h3><ul><li>Приложение позволяет создавать новых пользователей и присоединять их к чату</li><li>Каждый сможет отправлять сообщения друг другу</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> User</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  constructor</span><span style="color:#383A42;">(name) {</span></span>
<span class="line"><span style="color:#E45649;">    this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">name</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> name;</span></span>
<span class="line"><span style="color:#E45649;">    this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">room</span><span style="color:#0184BC;"> =</span><span style="color:#986801;"> null</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  // Отправка сообщения (message - сообщение, to - кому отправить)</span></span>
<span class="line"><span style="color:#4078F2;">  send</span><span style="color:#383A42;">(message, to) {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    // (message - сообщение, this - от кого, to - кому)</span></span>
<span class="line"><span style="color:#E45649;">    this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">room</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">send</span><span style="color:#383A42;">(message, </span><span style="color:#E45649;">this</span><span style="color:#383A42;">, to);</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  // Получение сообщения (message - сообщение, from - от кого)</span></span>
<span class="line"><span style="color:#4078F2;">  receive</span><span style="color:#383A42;">(message, from) {</span></span>
<span class="line"><span style="color:#383A42;">    console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">\`</span><span style="color:#CA1243;">\${</span><span style="color:#383A42;">from</span><span style="color:#50A14F;">.</span><span style="color:#E45649;">name</span><span style="color:#CA1243;">}</span><span style="color:#50A14F;"> =&gt; </span><span style="color:#CA1243;">\${</span><span style="color:#E45649;">this</span><span style="color:#50A14F;">.</span><span style="color:#E45649;">name</span><span style="color:#CA1243;">}</span><span style="color:#50A14F;">: </span><span style="color:#CA1243;">\${</span><span style="color:#383A42;">message</span><span style="color:#CA1243;">}</span><span style="color:#50A14F;">\`</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> ChatRoom</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  constructor</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#E45649;">    this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">users</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {};</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  // Регистрация новых пользователей</span></span>
<span class="line"><span style="color:#4078F2;">  register</span><span style="color:#383A42;">(user) {</span></span>
<span class="line"><span style="color:#E45649;">    this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">users</span><span style="color:#383A42;">[user.</span><span style="color:#C18401;">name</span><span style="color:#383A42;">] </span><span style="color:#0184BC;">=</span><span style="color:#383A42;"> user;</span></span>
<span class="line"><span style="color:#383A42;">    user.</span><span style="color:#E45649;">room</span><span style="color:#0184BC;"> =</span><span style="color:#E45649;"> this</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#4078F2;">  send</span><span style="color:#383A42;">(message, from, to) {</span></span>
<span class="line"><span style="color:#A626A4;">    if</span><span style="color:#383A42;"> (to) {</span></span>
<span class="line"><span style="color:#383A42;">      to.</span><span style="color:#4078F2;">receive</span><span style="color:#383A42;">(message, from);</span></span>
<span class="line"><span style="color:#383A42;">    } </span><span style="color:#A626A4;">else</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">      // Отправить всем пользователем в данной комнате кроме текущего пользователя</span></span>
<span class="line"><span style="color:#383A42;">      Object.</span><span style="color:#4078F2;">keys</span><span style="color:#383A42;">(</span><span style="color:#E45649;">this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">users</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">forEach</span><span style="color:#383A42;">((key) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">        if</span><span style="color:#383A42;"> (</span><span style="color:#E45649;">this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">users</span><span style="color:#383A42;">[key] </span><span style="color:#0184BC;">!==</span><span style="color:#383A42;"> from) {</span></span>
<span class="line"><span style="color:#E45649;">          this</span><span style="color:#383A42;">.</span><span style="color:#E45649;">users</span><span style="color:#383A42;">[key].</span><span style="color:#4078F2;">receive</span><span style="color:#383A42;">(message, from);</span></span>
<span class="line"><span style="color:#383A42;">        }</span></span>
<span class="line"><span style="color:#383A42;">      });</span></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> vlad</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> new</span><span style="color:#4078F2;"> User</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;Vladilen&quot;</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> lena</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> new</span><span style="color:#4078F2;"> User</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;Elena&quot;</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> igor</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> new</span><span style="color:#4078F2;"> User</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;Igor&quot;</span><span style="color:#383A42;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> room</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> new</span><span style="color:#4078F2;"> ChatRoom</span><span style="color:#383A42;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Регистрация пользователей в одну комнату</span></span>
<span class="line"><span style="color:#383A42;">room.</span><span style="color:#4078F2;">register</span><span style="color:#383A42;">(vlad);</span></span>
<span class="line"><span style="color:#383A42;">room.</span><span style="color:#4078F2;">register</span><span style="color:#383A42;">(lena);</span></span>
<span class="line"><span style="color:#383A42;">room.</span><span style="color:#4078F2;">register</span><span style="color:#383A42;">(igor);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">vlad.</span><span style="color:#4078F2;">send</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;Hello!&quot;</span><span style="color:#383A42;">, lena);</span></span>
<span class="line"><span style="color:#383A42;">lena.</span><span style="color:#4078F2;">send</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;Hello hello!&quot;</span><span style="color:#383A42;">, vlad);</span></span>
<span class="line"><span style="color:#383A42;">igor.</span><span style="color:#4078F2;">send</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;Vsem privet&quot;</span><span style="color:#383A42;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Output:</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// &quot;Vladilen =&gt; Elena: Hello!&quot;</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// &quot;Elena =&gt; Vladilen: Hello hello!&quot;</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// &quot;Igor =&gt; Vladilen: Vsem privet&quot;</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// &quot;Igor =&gt; Elena: Vsem privet&quot;</span></span></code></pre></div>`,7)])])}const m=n(p,[["render",e]]);export{d as __pageData,m as default};
