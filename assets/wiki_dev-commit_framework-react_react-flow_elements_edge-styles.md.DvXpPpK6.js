import{_ as n,o as a,c as e,aw as l}from"./chunks/framework.DLufY-ao.js";const d=JSON.parse('{"title":"Edge Styles","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/framework-react/react-flow/elements/edge-styles.md","filePath":"wiki/dev-commit/framework-react/react-flow/elements/edge-styles.md"}'),o={name:"wiki/dev-commit/framework-react/react-flow/elements/edge-styles.md"};function p(t,s,c,r,y,i){return a(),e("div",null,[...s[0]||(s[0]=[l(`<h1 id="edge-styles" tabindex="-1">Edge Styles <a class="header-anchor" href="#edge-styles" aria-label="Permalink to &quot;Edge Styles&quot;">​</a></h1><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">ConnectionLineType</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &quot;reactflow&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> connectionLineStyle</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">stroke</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;#c4c4c4&quot;</span><span style="color:#383A42;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> edgeOptions</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">  type</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;smoothstep&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">  style</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">    stroke</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;#2b2b2b&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">  },</span></span>
<span class="line"><span style="color:#383A42;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#4078F2;"> App</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#383A42;"> (</span></span>
<span class="line"><span style="color:#383A42;">    &lt;</span><span style="color:#C18401;">ReactFlow</span></span>
<span class="line"><span style="color:#986801;">      connectionLineStyle</span><span style="color:#383A42;">={connectionLineStyle}</span></span>
<span class="line"><span style="color:#986801;">      defaultEdgeOptions</span><span style="color:#383A42;">={edgeOptions}</span></span>
<span class="line"><span style="color:#986801;">      connectionLineType</span><span style="color:#383A42;">={ConnectionLineType.</span><span style="color:#E45649;">SmoothStep</span><span style="color:#383A42;">}</span></span>
<span class="line"><span style="color:#383A42;">    /&gt;</span></span>
<span class="line"><span style="color:#383A42;">  )</span></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre></div>`,2)])])}const m=n(o,[["render",p]]);export{d as __pageData,m as default};
