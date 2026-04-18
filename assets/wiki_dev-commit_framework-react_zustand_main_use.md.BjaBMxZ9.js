import{_ as n,o as a,c as l,aw as p}from"./chunks/framework.DLufY-ao.js";const u=JSON.parse('{"title":"Использование","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/framework-react/zustand/main/use.md","filePath":"wiki/dev-commit/framework-react/zustand/main/use.md"}'),o={name:"wiki/dev-commit/framework-react/zustand/main/use.md"};function e(t,s,c,r,y,A){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h1 id="использование" tabindex="-1">Использование <a class="header-anchor" href="#использование" aria-label="Permalink to &quot;Использование&quot;">​</a></h1><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">create</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &quot;zustand&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">export</span><span style="color:#A626A4;"> interface</span><span style="color:#C18401;"> IStore</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">  name</span><span style="color:#0184BC;">:</span><span style="color:#0184BC;"> string</span></span>
<span class="line"><span style="color:#4078F2;">  setName</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> (name</span><span style="color:#0184BC;">:</span><span style="color:#0184BC;"> string</span><span style="color:#383A42;">) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#0184BC;"> void</span></span>
<span class="line"><span style="color:#383A42;">  age</span><span style="color:#0184BC;">:</span><span style="color:#0184BC;"> number</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> useStore</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> create</span><span style="color:#383A42;">&lt;</span><span style="color:#C18401;">IStore</span><span style="color:#383A42;">&gt;((set, get) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> ({</span></span>
<span class="line"><span style="color:#E45649;">  name</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">  age</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 23</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#4078F2;">  setName</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> (name</span><span style="color:#0184BC;">:</span><span style="color:#0184BC;"> string</span><span style="color:#383A42;">) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    // Получили данные из другого состояния (если нужно)</span></span>
<span class="line"><span style="color:#A626A4;">    const</span><span style="color:#986801;"> age</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> get</span><span style="color:#383A42;">().</span><span style="color:#E45649;">age</span></span>
<span class="line"><span style="color:#4078F2;">    set</span><span style="color:#383A42;">({</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">      // Изменили данные текущего состояния</span></span>
<span class="line"><span style="color:#E45649;">      name</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> name </span><span style="color:#0184BC;">+</span><span style="color:#383A42;"> age,</span></span>
<span class="line"><span style="color:#383A42;">    })</span></span>
<span class="line"><span style="color:#383A42;">  },</span></span>
<span class="line"><span style="color:#383A42;">}))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">export</span><span style="color:#E45649;"> default</span><span style="color:#E45649;"> useStore</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#E45649;"> useStore</span><span style="color:#A626A4;"> from</span><span style="color:#50A14F;"> &quot;../store/store&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#4078F2;"> App</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  const</span><span style="color:#986801;"> name</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> useStore</span><span style="color:#383A42;">((state) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> state.</span><span style="color:#E45649;">name</span><span style="color:#383A42;">)</span></span>
<span class="line"><span style="color:#A626A4;">  const</span><span style="color:#986801;"> setName</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> useStore</span><span style="color:#383A42;">((state) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> state.</span><span style="color:#E45649;">setName</span><span style="color:#383A42;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">  const</span><span style="color:#4078F2;"> onClick</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#4078F2;">    setName</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;Tony&quot;</span><span style="color:#383A42;">) </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; &quot;Tony23&quot;</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#383A42;"> (</span></span>
<span class="line"><span style="color:#383A42;">    &lt;&gt;</span></span>
<span class="line"><span style="color:#383A42;">      &lt;</span><span style="color:#E45649;">h1</span><span style="color:#383A42;">&gt;</span><span style="color:#CA1243;">{</span><span style="color:#383A42;">name</span><span style="color:#CA1243;">}</span><span style="color:#383A42;">&lt;/</span><span style="color:#E45649;">h1</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">      &lt;</span><span style="color:#E45649;">button</span><span style="color:#986801;"> onClick</span><span style="color:#383A42;">={onClick}&gt;Click&lt;/</span><span style="color:#E45649;">button</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">    &lt;/&gt;</span></span>
<span class="line"><span style="color:#383A42;">  )</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">export</span><span style="color:#E45649;"> default</span><span style="color:#E45649;"> App</span></span></code></pre></div>`,3)])])}const m=n(o,[["render",e]]);export{u as __pageData,m as default};
