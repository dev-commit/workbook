import{_ as a,o as n,c as l,aw as p}from"./chunks/framework.DLufY-ao.js";const d=JSON.parse('{"title":"<Field />","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/framework-react/react-final-form/api/Field.md","filePath":"wiki/dev-commit/framework-react/react-final-form/api/Field.md"}'),o={name:"wiki/dev-commit/framework-react/react-final-form/api/Field.md"};function e(t,s,c,r,i,y){return n(),l("div",null,[...s[0]||(s[0]=[p(`<h1 id="field" tabindex="-1"><code>&lt;Field /&gt;</code> <a class="header-anchor" href="#field" aria-label="Permalink to &quot;\`&lt;Field /&gt;\`&quot;">​</a></h1><h2 id="оборачивание-компонента-в-field" tabindex="-1">Оборачивание компонента в <code>&lt;Field /&gt;</code> <a class="header-anchor" href="#оборачивание-компонента-в-field" aria-label="Permalink to &quot;Оборачивание компонента в \`&lt;Field /&gt;\`&quot;">​</a></h2><h3 id="код" tabindex="-1">Код <a class="header-anchor" href="#код" aria-label="Permalink to &quot;Код&quot;">​</a></h3><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">Field</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &#39;react-final-form&#39;</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> App</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> () </span><span style="color:#0184BC;">=</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#4078F2;">  return</span><span style="color:#383A42;"> (</span></span>
<span class="line"><span style="color:#383A42;">    &lt;Field name</span><span style="color:#0184BC;">=</span><span style="color:#383A42;">{name}</span><span style="color:#0184BC;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">      {(fieldProps) </span><span style="color:#0184BC;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">        // eslint-disable-next-line no-console</span></span>
<span class="line"><span style="color:#383A42;">        console.log(</span><span style="color:#50A14F;">&#39;fieldProps&#39;</span><span style="color:#383A42;">, fieldProps);</span></span>
<span class="line"><span style="color:#383A42;">        return &lt;Component /&gt;;</span></span>
<span class="line"><span style="color:#383A42;">      }}</span></span>
<span class="line"><span style="color:#383A42;">    &lt;/Field&gt;</span></span>
<span class="line"><span style="color:#383A42;">  );</span></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre></div><details class="details custom-block"><summary>Структура fieldProps</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#383A42;">{</span></span>
<span class="line"><span style="color:#50A14F;">  &quot;input&quot;</span><span style="color:#383A42;">: {</span></span>
<span class="line"><span style="color:#50A14F;">    &quot;name&quot;</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;documentIds&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#50A14F;">    &quot;value&quot;</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;&quot;</span></span>
<span class="line"><span style="color:#383A42;">  },</span></span>
<span class="line"><span style="color:#50A14F;">  &quot;meta&quot;</span><span style="color:#383A42;">: {</span></span>
<span class="line"><span style="color:#50A14F;">    &quot;active&quot;</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> false</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#50A14F;">    &quot;data&quot;</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {},</span></span>
<span class="line"><span style="color:#50A14F;">    &quot;dirty&quot;</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> false</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#50A14F;">    &quot;dirtySinceLastSubmit&quot;</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> false</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#50A14F;">    &quot;invalid&quot;</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> false</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#50A14F;">    &quot;modified&quot;</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> false</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#50A14F;">    &quot;modifiedSinceLastSubmit&quot;</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> false</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#50A14F;">    &quot;pristine&quot;</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> true</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#50A14F;">    &quot;submitFailed&quot;</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> false</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#50A14F;">    &quot;submitSucceeded&quot;</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> false</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#50A14F;">    &quot;submitting&quot;</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> false</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#50A14F;">    &quot;touched&quot;</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> false</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#50A14F;">    &quot;valid&quot;</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> true</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#50A14F;">    &quot;validating&quot;</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> false</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#50A14F;">    &quot;visited&quot;</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> false</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre></div></details><h3 id="пример" tabindex="-1">Пример <a class="header-anchor" href="#пример" aria-label="Permalink to &quot;Пример&quot;">​</a></h3><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">Field</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &#39;react-final-form&#39;</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> App</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> () </span><span style="color:#0184BC;">=</span><span style="color:#0184BC;"> &gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#4078F2;">  return</span><span style="color:#383A42;"> (</span></span>
<span class="line"><span style="color:#383A42;">    &lt;Field name</span><span style="color:#0184BC;">=</span><span style="color:#383A42;">{name}</span><span style="color:#0184BC;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">      {(fieldProps) </span><span style="color:#0184BC;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">        const { input } = fieldProps;</span></span>
<span class="line"><span style="color:#383A42;">        const { onChange } = input;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">        // Если необходимо добавить собственную логику</span></span>
<span class="line"><span style="color:#383A42;">        const </span><span style="color:#4078F2;">handleChange</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> (e) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">          const</span><span style="color:#986801;"> result</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> e.</span><span style="color:#E45649;">target</span><span style="color:#383A42;">.</span><span style="color:#E45649;">value</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#4078F2;">          onChange</span><span style="color:#383A42;">(result);</span></span>
<span class="line"><span style="color:#383A42;">        };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">        return &lt;input onChange</span><span style="color:#0184BC;">=</span><span style="color:#383A42;">{handleChange} </span><span style="color:#0184BC;">/&gt;</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">      }}</span></span>
<span class="line"><span style="color:#383A42;">    &lt;/Field&gt;</span></span>
<span class="line"><span style="color:#383A42;">  );</span></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre></div>`,7)])])}const u=a(o,[["render",e]]);export{d as __pageData,u as default};
