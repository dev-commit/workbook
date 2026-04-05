import{_ as a,o as n,c as l,aw as o}from"./chunks/framework.DLufY-ao.js";const u=JSON.parse('{"title":"Abstract Factory (Абстрактная фабрика)","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/theory/design-patterns/1-creational/abstract-factory.md","filePath":"wiki/dev-commit/theory/design-patterns/1-creational/abstract-factory.md"}'),t={name:"wiki/dev-commit/theory/design-patterns/1-creational/abstract-factory.md"};function p(c,s,e,r,i,y){return n(),l("div",null,[...s[0]||(s[0]=[o(`<h1 id="abstract-factory-абстрактная-фабрика" tabindex="-1">Abstract Factory (Абстрактная фабрика) <a class="header-anchor" href="#abstract-factory-абстрактная-фабрика" aria-label="Permalink to &quot;Abstract Factory (Абстрактная фабрика)&quot;">​</a></h1><h2 id="информация" tabindex="-1">Информация <a class="header-anchor" href="#информация" aria-label="Permalink to &quot;Информация&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">Abstract Factory</p><ul><li><strong>Abstract Factory</strong> - создает интерфейс, группирующий другие Factory, которые логически связаны друг с другом</li><li>Abstract Factory - дополнительная абстракция, которая управляя однотипыными Factory помогает создавать объекты со схожей структурой, но разными данными, причем, делает это не привязываясь к конкретным классам создаваемых объектов</li><li>У Factories должен быть одинаковый интерфейс создания объектов, чтобы им можно было управлять из Abstract Factory</li></ul></div><h2 id="примеры" tabindex="-1">Примеры <a class="header-anchor" href="#примеры" aria-label="Permalink to &quot;Примеры&quot;">​</a></h2><h3 id="фабрика-автомобилеи" tabindex="-1">Фабрика автомобилей <a class="header-anchor" href="#фабрика-автомобилеи" aria-label="Permalink to &quot;Фабрика автомобилей&quot;">​</a></h3><ul><li>Есть семейство общих продуктов (автомобили марки BMW)</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A0A1A7;font-style:italic;">// Abstract Factory</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Производит &quot;Спорткары&quot; или &quot;Семейные aвто&quot;</span></span>
<span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> bmwProducer</span><span style="color:#383A42;">(kind) {</span></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#383A42;"> kind </span><span style="color:#0184BC;">===</span><span style="color:#50A14F;"> &quot;sport&quot;</span><span style="color:#0184BC;"> ?</span><span style="color:#383A42;"> sportCarFactory </span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> familyCarFactory;</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Factories</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Factory для &quot;Спорткаров&quot;</span></span>
<span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> sportCarFactory</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#A626A4;"> new</span><span style="color:#4078F2;"> Z4</span><span style="color:#383A42;">();</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Factory для &quot;Семейных авто&quot;</span></span>
<span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> familyCarFactory</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#A626A4;"> new</span><span style="color:#4078F2;"> I3</span><span style="color:#383A42;">();</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Производство автомобилей</span></span>
<span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> Z4</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#4078F2;">  info</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#50A14F;"> &quot;Z4 is a Sport car&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> I3</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#4078F2;">  info</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#50A14F;"> &quot;i3 is a Family car&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Инициализация Abstract Factory для &quot;Спорткаров&quot;</span></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> produce</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> bmwProducer</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;sport&quot;</span><span style="color:#383A42;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Инициализация Factory</span></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> myCar</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> new</span><span style="color:#4078F2;"> produce</span><span style="color:#383A42;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> a1</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> myCar.</span><span style="color:#4078F2;">info</span><span style="color:#383A42;">(); </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; &quot;Z4 is a Sport car&quot;</span></span></code></pre></div>`,7)])])}const d=a(t,[["render",p]]);export{u as __pageData,d as default};
