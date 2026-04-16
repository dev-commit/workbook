import{_ as a,o as n,c as l,aw as p}from"./chunks/framework.DLufY-ao.js";const u=JSON.parse('{"title":"Примеры","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/frameworks/vue-vuex/samples/samples.md","filePath":"wiki/dev-commit/frameworks/vue-vuex/samples/samples.md"}'),o={name:"wiki/dev-commit/frameworks/vue-vuex/samples/samples.md"};function e(t,s,c,r,y,i){return n(),l("div",null,[...s[0]||(s[0]=[p(`<h1 id="примеры" tabindex="-1">Примеры <a class="header-anchor" href="#примеры" aria-label="Permalink to &quot;Примеры&quot;">​</a></h1><h2 id="пример" tabindex="-1">Пример <a class="header-anchor" href="#пример" aria-label="Permalink to &quot;Пример&quot;">​</a></h2><h3 id="vuex-js" tabindex="-1">vuex.js <a class="header-anchor" href="#vuex-js" aria-label="Permalink to &quot;vuex.js&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#E45649;"> Vue</span><span style="color:#A626A4;"> from</span><span style="color:#50A14F;"> &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#E45649;"> Vuex</span><span style="color:#A626A4;"> from</span><span style="color:#50A14F;"> &#39;vuex&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">Vue.</span><span style="color:#4078F2;">use</span><span style="color:#383A42;">(Vuex)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">export</span><span style="color:#A626A4;"> const</span><span style="color:#986801;"> store</span><span style="color:#0184BC;"> =</span><span style="color:#A626A4;"> new</span><span style="color:#383A42;"> Vuex.</span><span style="color:#4078F2;">Store</span><span style="color:#383A42;">({</span></span>
<span class="line"><span style="color:#E45649;">    state</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">        count</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 0</span></span>
<span class="line"><span style="color:#383A42;">    },</span></span>
<span class="line"><span style="color:#E45649;">    getters</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#4078F2;">        storeCount</span><span style="color:#383A42;">(state) {</span></span>
<span class="line"><span style="color:#A626A4;">            return</span><span style="color:#383A42;"> state.</span><span style="color:#E45649;">count</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">        }</span></span>
<span class="line"><span style="color:#383A42;">    },</span></span>
<span class="line"><span style="color:#E45649;">    mutations</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#4078F2;">        changeCount</span><span style="color:#383A42;">(state, payload) {</span></span>
<span class="line"><span style="color:#383A42;">            state.</span><span style="color:#E45649;">count</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> payload.</span><span style="color:#E45649;">count</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">        }</span></span>
<span class="line"><span style="color:#383A42;">    },</span></span>
<span class="line"><span style="color:#E45649;">    actions</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#4078F2;">        changeCount</span><span style="color:#383A42;">({ commit }, count) {</span></span>
<span class="line"><span style="color:#4078F2;">            commit</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;changeCount&#39;</span><span style="color:#383A42;">, {</span><span style="color:#E45649;">count</span><span style="color:#0184BC;">:</span><span style="color:#383A42;">count});</span></span>
<span class="line"><span style="color:#383A42;">        }</span></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"><span style="color:#383A42;">});</span></span></code></pre></div><h3 id="app-vue" tabindex="-1">App.vue <a class="header-anchor" href="#app-vue" aria-label="Permalink to &quot;App.vue&quot;">​</a></h3><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#383A42;">&lt;</span><span style="color:#E45649;">template</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">    &lt;</span><span style="color:#E45649;">div</span><span style="color:#986801;"> id</span><span style="color:#383A42;">=</span><span style="color:#50A14F;">&quot;app&quot;</span><span style="color:#383A42;">&gt;{{ storeCount }}&lt;</span><span style="color:#E45649;">button</span><span style="color:#986801;"> @click</span><span style="color:#383A42;">=</span><span style="color:#50A14F;">&quot;changeCount(77)&quot;</span><span style="color:#383A42;">&gt;ChangeState&lt;/</span><span style="color:#E45649;">button</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">    &lt;/</span><span style="color:#E45649;">div</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">&lt;/</span><span style="color:#E45649;">template</span><span style="color:#383A42;">&gt;</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#383A42;">&lt;</span><span style="color:#E45649;">script</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">import </span><span style="color:#CA1243;">{</span><span style="color:#383A42;"> mapGetters </span><span style="color:#CA1243;">}</span><span style="color:#383A42;"> from &#39;vuex&#39;</span></span>
<span class="line"><span style="color:#383A42;">import </span><span style="color:#CA1243;">{</span><span style="color:#383A42;"> mapActions </span><span style="color:#CA1243;">}</span><span style="color:#383A42;"> from &#39;vuex&#39;</span></span>
<span class="line"><span style="color:#383A42;">import </span><span style="color:#CA1243;">{</span><span style="color:#383A42;">store</span><span style="color:#CA1243;">}</span><span style="color:#383A42;"> from &#39;./vuex.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">export default </span><span style="color:#CA1243;">{</span></span>
<span class="line"><span style="color:#383A42;">    computed: {</span></span>
<span class="line"><span style="color:#0184BC;">        ...</span><span style="color:#4078F2;">mapGetters</span><span style="color:#383A42;">([</span></span>
<span class="line"><span style="color:#50A14F;">            &#39;storeCount&#39;</span></span>
<span class="line"><span style="color:#383A42;">        ])</span></span>
<span class="line"><span style="color:#383A42;">    },</span></span>
<span class="line"><span style="color:#383A42;">    methods: {</span></span>
<span class="line"><span style="color:#0184BC;">        ...</span><span style="color:#4078F2;">mapActions</span><span style="color:#383A42;">([</span></span>
<span class="line"><span style="color:#50A14F;">            &#39;changeCount&#39;</span></span>
<span class="line"><span style="color:#383A42;">        ])</span></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"><span style="color:#CA1243;">}</span></span>
<span class="line"><span style="color:#383A42;">&lt;/</span><span style="color:#E45649;">script</span><span style="color:#383A42;">&gt;</span></span></code></pre></div>`,7)])])}const d=a(o,[["render",e]]);export{u as __pageData,d as default};
