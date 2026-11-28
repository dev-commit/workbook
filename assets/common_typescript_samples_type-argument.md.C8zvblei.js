import{_ as n,o as a,c as l,aw as p}from"./chunks/framework.DLufY-ao.js";const u=JSON.parse('{"title":"Тип принимает аргумент","description":"","frontmatter":{},"headers":[],"relativePath":"common/typescript/samples/type-argument.md","filePath":"wiki/dev-commit/common/typescript/samples/type-argument.md"}'),o={name:"common/typescript/samples/type-argument.md"};function e(t,s,c,r,y,i){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h1 id="тип-принимает-аргумент" tabindex="-1">Тип принимает аргумент <a class="header-anchor" href="#тип-принимает-аргумент" aria-label="Permalink to &quot;Тип принимает аргумент&quot;">​</a></h1><div class="language-ts"><button title="Скопировать код" class="copy"></button><span class="lang">ts</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A0A1A7;font-style:italic;">// AllowedValues строка</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Объект с ключом &quot;name&quot; и разрешенными значениями &quot;T&quot;</span></span>
<span class="line"><span style="color:#A626A4;">type</span><span style="color:#C18401;"> FieldType</span><span style="color:#383A42;">&lt;</span><span style="color:#C18401;">T</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> string&gt; </span><span style="color:#0184BC;">=</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">  name</span><span style="color:#0184BC;">:</span><span style="color:#C18401;"> T</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Разрешенные значения для ключа &quot;name&quot;</span></span>
<span class="line"><span style="color:#A626A4;">type</span><span style="color:#C18401;"> AllowedValues</span><span style="color:#0184BC;"> =</span><span style="color:#50A14F;"> &quot;name&quot;</span><span style="color:#0184BC;"> |</span><span style="color:#50A14F;"> &quot;age&quot;</span><span style="color:#0184BC;"> |</span><span style="color:#50A14F;"> &quot;count&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Массив объектов</span></span>
<span class="line"><span style="color:#A626A4;">type</span><span style="color:#C18401;"> MyFields</span><span style="color:#0184BC;"> =</span><span style="color:#C18401;"> FieldType</span><span style="color:#383A42;">&lt;</span><span style="color:#C18401;">AllowedValues</span><span style="color:#383A42;">&gt;[];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Результат: массив объектов с разрешенными значениями</span></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> fields</span><span style="color:#0184BC;">:</span><span style="color:#C18401;"> MyFields</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> [</span></span>
<span class="line"><span style="color:#383A42;">  { </span><span style="color:#E45649;">name</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;name&quot;</span><span style="color:#383A42;"> },</span></span>
<span class="line"><span style="color:#383A42;">  { </span><span style="color:#E45649;">name</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;age&quot;</span><span style="color:#383A42;"> },</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  // { name: &#39;date&#39; },</span><span style="color:#A0A1A7;font-style:italic;"> // error</span></span>
<span class="line"><span style="color:#383A42;">];</span></span></code></pre></div><div class="language-ts"><button title="Скопировать код" class="copy"></button><span class="lang">ts</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A0A1A7;font-style:italic;">// AllowedValues объект</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">type</span><span style="color:#C18401;"> AllowedValues</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">  id</span><span style="color:#0184BC;">:</span><span style="color:#0184BC;"> string</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">  name</span><span style="color:#0184BC;">?:</span><span style="color:#0184BC;"> string</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> fields</span><span style="color:#0184BC;">:</span><span style="color:#C18401;"> MyFields</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> [</span></span>
<span class="line"><span style="color:#383A42;">  {</span></span>
<span class="line"><span style="color:#E45649;">    name</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">      id</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;1&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">      name</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;Jack&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">    },</span></span>
<span class="line"><span style="color:#383A42;">  },</span></span>
<span class="line"><span style="color:#383A42;">];</span></span></code></pre></div>`,3)])])}const d=n(o,[["render",e]]);export{u as __pageData,d as default};
