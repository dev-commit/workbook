import{_ as n,o as a,c as l,aw as p}from"./chunks/framework.DLufY-ao.js";const m=JSON.parse('{"title":"Простой пример","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/framework-react/react-final-form/samples/simple.md","filePath":"wiki/dev-commit/framework-react/react-final-form/samples/simple.md"}'),o={name:"wiki/dev-commit/framework-react/react-final-form/samples/simple.md"};function e(t,s,c,r,y,i){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h1 id="простои-пример" tabindex="-1">Простой пример <a class="header-anchor" href="#простои-пример" aria-label="Permalink to &quot;Простой пример&quot;">​</a></h1><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">Form</span><span style="color:#383A42;">, </span><span style="color:#E45649;">Field</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &#39;react-final-form&#39;</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#4078F2;"> App</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  const</span><span style="color:#4078F2;"> onSubmit</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> (values) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">    console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(values);</span></span>
<span class="line"><span style="color:#383A42;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">  const</span><span style="color:#4078F2;"> validate</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> (values) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">    const</span><span style="color:#986801;"> error</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    if</span><span style="color:#383A42;"> (</span><span style="color:#0184BC;">!</span><span style="color:#383A42;">values.</span><span style="color:#E45649;">firstName</span><span style="color:#383A42;">) {</span></span>
<span class="line"><span style="color:#383A42;">      error.</span><span style="color:#E45649;">firstName</span><span style="color:#0184BC;"> =</span><span style="color:#50A14F;"> &quot;Текст ошибки&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#383A42;"> error;</span></span>
<span class="line"><span style="color:#383A42;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#383A42;"> (</span></span>
<span class="line"><span style="color:#383A42;">    &lt;</span><span style="color:#C18401;">Form</span></span>
<span class="line"><span style="color:#986801;">      onSubmit</span><span style="color:#383A42;">={onSubmit}</span></span>
<span class="line"><span style="color:#986801;">      validate</span><span style="color:#383A42;">={validate}</span></span>
<span class="line"><span style="color:#986801;">      render</span><span style="color:#383A42;">={(formProps) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">        const</span><span style="color:#383A42;"> { </span><span style="color:#986801;">handleSubmit</span><span style="color:#383A42;">, </span><span style="color:#986801;">errors</span><span style="color:#383A42;">, </span><span style="color:#986801;">values</span><span style="color:#383A42;"> } = formProps;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">        console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(errors, values);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">        return</span><span style="color:#383A42;"> (</span></span>
<span class="line"><span style="color:#383A42;">          &lt;</span><span style="color:#E45649;">form</span><span style="color:#986801;"> onSubmit</span><span style="color:#383A42;">={handleSubmit}&gt;</span></span>
<span class="line"><span style="color:#383A42;">            &lt;</span><span style="color:#C18401;">Field</span></span>
<span class="line"><span style="color:#986801;">              name</span><span style="color:#383A42;">=</span><span style="color:#50A14F;">&quot;firstName&quot;</span></span>
<span class="line"><span style="color:#986801;">              component</span><span style="color:#383A42;">=</span><span style="color:#50A14F;">&quot;input&quot;</span></span>
<span class="line"><span style="color:#986801;">              placeholder</span><span style="color:#383A42;">=</span><span style="color:#50A14F;">&quot;First Name&quot;</span></span>
<span class="line"><span style="color:#383A42;">            /&gt;</span></span>
<span class="line"><span style="color:#383A42;">            &lt;</span><span style="color:#E45649;">button</span><span style="color:#986801;"> type</span><span style="color:#383A42;">=</span><span style="color:#50A14F;">&quot;submit&quot;</span><span style="color:#383A42;">&gt;Submit&lt;/</span><span style="color:#E45649;">button</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">          &lt;/</span><span style="color:#E45649;">form</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">        );</span></span>
<span class="line"><span style="color:#383A42;">      }}</span></span>
<span class="line"><span style="color:#383A42;">    /&gt;</span></span>
<span class="line"><span style="color:#383A42;">  );</span></span>
<span class="line"><span style="color:#383A42;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">export</span><span style="color:#E45649;"> default</span><span style="color:#E45649;"> App</span><span style="color:#383A42;">;</span></span></code></pre></div>`,2)])])}const u=n(o,[["render",e]]);export{m as __pageData,u as default};
