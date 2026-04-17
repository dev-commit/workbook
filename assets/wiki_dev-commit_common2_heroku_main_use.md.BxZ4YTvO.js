import{_ as n,o as a,c as l,aw as p}from"./chunks/framework.DLufY-ao.js";const u=JSON.parse('{"title":"Код","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/common2/heroku/main/use.md","filePath":"wiki/dev-commit/common2/heroku/main/use.md"}'),o={name:"wiki/dev-commit/common2/heroku/main/use.md"};function e(t,s,c,r,y,i){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h1 id="код" tabindex="-1">Код <a class="header-anchor" href="#код" aria-label="Permalink to &quot;Код&quot;">​</a></h1><h2 id="простои-проект" tabindex="-1">Простой проект <a class="header-anchor" href="#простои-проект" aria-label="Permalink to &quot;Простой проект&quot;">​</a></h2><p>package.json</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#383A42;">{</span></span>
<span class="line"><span style="color:#50A14F;">  &quot;name&quot;</span><span style="color:#383A42;">: </span><span style="color:#50A14F;">&quot;app-node&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#50A14F;">  &quot;version&quot;</span><span style="color:#383A42;">: </span><span style="color:#50A14F;">&quot;1.0.0&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#50A14F;">  &quot;main&quot;</span><span style="color:#383A42;">: </span><span style="color:#50A14F;">&quot;index.js&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#50A14F;">  &quot;scripts&quot;</span><span style="color:#383A42;">: {</span></span>
<span class="line"><span style="color:#50A14F;">    &quot;start&quot;</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;node index&quot;</span></span>
<span class="line"><span style="color:#383A42;">  },</span></span>
<span class="line"><span style="color:#50A14F;">  &quot;dependencies&quot;</span><span style="color:#383A42;">: {</span></span>
<span class="line"><span style="color:#50A14F;">    &quot;express&quot;</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;^4.17.1&quot;</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"><span style="color:#50A14F;">\`\`\`index.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#50A14F;">\`\`\`</span><span style="color:#383A42;">js</span></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> express</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> require</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;express&#39;</span><span style="color:#383A42;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> app</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> express</span><span style="color:#383A42;">();</span></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> PORT</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> process.</span><span style="color:#E45649;">env</span><span style="color:#383A42;">.</span><span style="color:#986801;">PORT</span><span style="color:#0184BC;"> ||</span><span style="color:#986801;"> 80</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">app.</span><span style="color:#4078F2;">get</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;/&#39;</span><span style="color:#383A42;">, (req, res) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">    res.</span><span style="color:#4078F2;">end</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">\`</span></span>
<span class="line"><span style="color:#50A14F;">        &lt;div&gt;</span></span>
<span class="line"><span style="color:#50A14F;">            &lt;a href=&quot;/&quot;&gt;Home&lt;/a&gt;</span></span>
<span class="line"><span style="color:#50A14F;">            &lt;a href=&quot;/about&quot;&gt;About&lt;/a&gt;</span></span>
<span class="line"><span style="color:#50A14F;">            &lt;h1&gt;Home Page&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#50A14F;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#50A14F;">    \`</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#383A42;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">app.</span><span style="color:#4078F2;">get</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;/about&#39;</span><span style="color:#383A42;">, (req, res) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">    res.</span><span style="color:#4078F2;">end</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">\`</span></span>
<span class="line"><span style="color:#50A14F;">        &lt;div&gt;</span></span>
<span class="line"><span style="color:#50A14F;">            &lt;a href=&quot;/&quot;&gt;Home&lt;/a&gt;</span></span>
<span class="line"><span style="color:#50A14F;">            &lt;a href=&quot;/about&quot;&gt;About&lt;/a&gt;</span></span>
<span class="line"><span style="color:#50A14F;">            &lt;h1&gt;About Page&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#50A14F;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#50A14F;">    \`</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#383A42;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">app.</span><span style="color:#4078F2;">listen</span><span style="color:#383A42;">(</span><span style="color:#986801;">PORT</span><span style="color:#383A42;">, () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">    console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;Server started&#39;</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#383A42;">});</span></span>
<span class="line"><span style="color:#50A14F;">\`\`\`.gitignore</span></span>
<span class="line"></span>
<span class="line"><span style="color:#50A14F;">\`\`\`</span><span style="color:#383A42;">bash</span></span>
<span class="line"><span style="color:#0184BC;">/</span><span style="color:#383A42;">node_modules</span></span></code></pre></div>`,4)])])}const d=n(o,[["render",e]]);export{u as __pageData,d as default};
