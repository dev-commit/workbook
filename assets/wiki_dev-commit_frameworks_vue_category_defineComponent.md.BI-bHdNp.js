import{_ as n,o as a,c as p,aw as o}from"./chunks/framework.DLufY-ao.js";const u=JSON.parse('{"title":"defineComponent, setup","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/frameworks/vue/category/defineComponent.md","filePath":"wiki/dev-commit/frameworks/vue/category/defineComponent.md"}'),l={name:"wiki/dev-commit/frameworks/vue/category/defineComponent.md"};function e(t,s,c,r,i,y){return a(),p("div",null,[...s[0]||(s[0]=[o(`<h1 id="definecomponent-setup" tabindex="-1">defineComponent, setup <a class="header-anchor" href="#definecomponent-setup" aria-label="Permalink to &quot;defineComponent, setup&quot;">​</a></h1><h2 id="script-setup" tabindex="-1"><code>&lt;script setup&gt;</code> <a class="header-anchor" href="#script-setup" aria-label="Permalink to &quot;\`&lt;script setup&gt;\`&quot;">​</a></h2><blockquote><p>Новый формат</p></blockquote><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#383A42;">&lt;</span><span style="color:#E45649;">script</span><span style="color:#986801;"> setup</span><span style="color:#986801;"> lang</span><span style="color:#383A42;">=</span><span style="color:#50A14F;">&quot;ts&quot;</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">//</span></span>
<span class="line"><span style="color:#383A42;">&lt;/</span><span style="color:#E45649;">script</span><span style="color:#383A42;">&gt;</span></span></code></pre></div><h2 id="definecomponent" tabindex="-1"><code>defineComponent</code> <a class="header-anchor" href="#definecomponent" aria-label="Permalink to &quot;\`defineComponent\`&quot;">​</a></h2><blockquote><p>Старый формат</p></blockquote><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#383A42;">&lt;</span><span style="color:#E45649;">script</span><span style="color:#986801;"> lang</span><span style="color:#383A42;">=</span><span style="color:#50A14F;">&quot;ts&quot;</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">defineComponent</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &quot;vue&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#E45649;"> AppComponent</span><span style="color:#A626A4;"> from</span><span style="color:#50A14F;"> &quot;./AppComponent.vue&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">export</span><span style="color:#E45649;"> default</span><span style="color:#4078F2;"> defineComponent</span><span style="color:#383A42;">({</span></span>
<span class="line"><span style="color:#E45649;">  name</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;ComponentName&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E45649;">  components</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">    AppComponent</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E45649;">  props</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">    data</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">      type</span><span style="color:#0184BC;">:</span><span style="color:#E45649;"> String</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">      required</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> true</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">    },</span></span>
<span class="line"><span style="color:#383A42;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E45649;">  emits</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> [</span><span style="color:#50A14F;">&quot;submit&quot;</span><span style="color:#383A42;">, </span><span style="color:#50A14F;">&quot;clear&quot;</span><span style="color:#383A42;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">  setup</span><span style="color:#383A42;">(props, context) {</span></span>
<span class="line"><span style="color:#A626A4;">    const</span><span style="color:#4078F2;"> handleSubmit</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">      const</span><span style="color:#986801;"> a</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> props.</span><span style="color:#E45649;">data</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">      context.</span><span style="color:#4078F2;">emit</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;submit&quot;</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#383A42;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">      handleSubmit</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">    };</span></span>
<span class="line"><span style="color:#383A42;">  },</span></span>
<span class="line"><span style="color:#383A42;">});</span></span>
<span class="line"><span style="color:#383A42;">&lt;/</span><span style="color:#E45649;">script</span><span style="color:#383A42;">&gt;</span></span></code></pre></div>`,7)])])}const d=n(l,[["render",e]]);export{u as __pageData,d as default};
