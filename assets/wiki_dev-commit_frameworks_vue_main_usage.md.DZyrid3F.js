import{_ as a,o as n,c as l,aw as p}from"./chunks/framework.DLufY-ao.js";const u=JSON.parse('{"title":"Использование","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/frameworks/vue/main/usage.md","filePath":"wiki/dev-commit/frameworks/vue/main/usage.md"}'),o={name:"wiki/dev-commit/frameworks/vue/main/usage.md"};function e(t,s,c,r,y,i){return n(),l("div",null,[...s[0]||(s[0]=[p(`<h1 id="использование" tabindex="-1">Использование <a class="header-anchor" href="#использование" aria-label="Permalink to &quot;Использование&quot;">​</a></h1><h2 id="струтура-проекта" tabindex="-1">Струтура проекта <a class="header-anchor" href="#струтура-проекта" aria-label="Permalink to &quot;Струтура проекта&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span>📂 src</span></span>
<span class="line"><span>├── 📂 assets</span></span>
<span class="line"><span>│   › icon.png</span></span>
<span class="line"><span>│   › main.css</span></span>
<span class="line"><span>├── 📂 components</span></span>
<span class="line"><span>│   › Header.vue</span></span>
<span class="line"><span>├── App.vue</span></span>
<span class="line"><span>└── main.js</span></span></code></pre></div><h2 id="код" tabindex="-1">Код <a class="header-anchor" href="#код" aria-label="Permalink to &quot;Код&quot;">​</a></h2><details class="details custom-block"><summary>main.js</summary><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">createApp</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &quot;vue&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#E45649;"> App</span><span style="color:#A626A4;"> from</span><span style="color:#50A14F;"> &quot;./App.vue&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#50A14F;"> &quot;./assets/main.css&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">createApp</span><span style="color:#383A42;">(App).</span><span style="color:#4078F2;">mount</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;#app&quot;</span><span style="color:#383A42;">);</span></span></code></pre></div></details><details class="details custom-block"><summary>App.vue</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#383A42;">&lt;</span><span style="color:#E45649;">template</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">  &lt;</span><span style="color:#E45649;">div</span><span style="color:#986801;"> id</span><span style="color:#383A42;">=</span><span style="color:#50A14F;">&quot;app&quot;</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">    &lt;</span><span style="color:#E45649;">img</span><span style="color:#986801;"> src</span><span style="color:#383A42;">=</span><span style="color:#50A14F;">&quot;./assets/icon.png&quot;</span><span style="color:#986801;"> width</span><span style="color:#383A42;">=</span><span style="color:#50A14F;">&quot;200&quot;</span><span style="color:#383A42;"> /&gt;</span></span>
<span class="line"><span style="color:#383A42;">    &lt;</span><span style="color:#E45649;">h1</span><span style="color:#383A42;">&gt;Text App&lt;/</span><span style="color:#E45649;">h1</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">    &lt;</span><span style="color:#E45649;">h2</span><span style="color:#383A42;">&gt;{{ text }}&lt;/</span><span style="color:#E45649;">h2</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">    &lt;</span><span style="color:#E45649;">Header</span><span style="color:#986801;"> message</span><span style="color:#383A42;">=</span><span style="color:#50A14F;">&quot;Text Header&quot;</span><span style="color:white;"> /</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">  &lt;/</span><span style="color:#E45649;">div</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">&lt;/</span><span style="color:#E45649;">template</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">&lt;</span><span style="color:#E45649;">script</span><span style="color:#986801;"> setup</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">ref</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &quot;vue&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#E45649;"> Header</span><span style="color:#A626A4;"> from</span><span style="color:#50A14F;"> &quot;./components/Header.vue&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> text</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> ref</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;Text in Vue&quot;</span><span style="color:#383A42;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">function</span><span style="color:#4078F2;"> testMethod</span><span style="color:#383A42;">() {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  //</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"><span style="color:#383A42;">&lt;/</span><span style="color:#E45649;">script</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">&lt;</span><span style="color:#E45649;">style</span><span style="color:#986801;"> scoped</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#E45649;">h1</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">  color: </span><span style="color:#986801;">blue</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"><span style="color:#383A42;">&lt;/</span><span style="color:#E45649;">style</span><span style="color:#383A42;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>components/Header.vue</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#383A42;">&lt;</span><span style="color:#E45649;">template</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">  &lt;</span><span style="color:#E45649;">div</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">    &lt;</span><span style="color:#E45649;">h1</span><span style="color:#383A42;">&gt;{{ message }}&lt;/</span><span style="color:#E45649;">h1</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">    &lt;</span><span style="color:#E45649;">h2</span><span style="color:#383A42;">&gt;{{ text }}&lt;/</span><span style="color:#E45649;">h2</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">  &lt;/</span><span style="color:#E45649;">div</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">&lt;/</span><span style="color:#E45649;">template</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">&lt;</span><span style="color:#E45649;">script</span><span style="color:#986801;"> setup</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">ref</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &quot;vue&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> text</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> ref</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;Text in Header&quot;</span><span style="color:#383A42;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">defineProps</span><span style="color:#383A42;">({</span></span>
<span class="line"><span style="color:#E45649;">  message</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> String,</span></span>
<span class="line"><span style="color:#383A42;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// defineProps({</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// 	details: { type: Boolean, required: false },</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// });</span></span>
<span class="line"><span style="color:#383A42;">&lt;/</span><span style="color:#E45649;">script</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">&lt;</span><span style="color:#E45649;">style</span><span style="color:#986801;"> scoped</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#E45649;">h1</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">  color: </span><span style="color:#986801;">orange</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"><span style="color:#383A42;">&lt;/</span><span style="color:#E45649;">style</span><span style="color:#383A42;">&gt;</span></span></code></pre></div></details>`,7)])])}const d=a(o,[["render",e]]);export{u as __pageData,d as default};
