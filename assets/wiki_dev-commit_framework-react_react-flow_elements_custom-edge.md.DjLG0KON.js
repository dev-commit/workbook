import{_ as n,o as a,c as l,aw as p}from"./chunks/framework.DLufY-ao.js";const d=JSON.parse('{"title":"Custom Edge","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/framework-react/react-flow/elements/custom-edge.md","filePath":"wiki/dev-commit/framework-react/react-flow/elements/custom-edge.md"}'),o={name:"wiki/dev-commit/framework-react/react-flow/elements/custom-edge.md"};function e(t,s,c,r,y,i){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h1 id="custom-edge" tabindex="-1">Custom Edge <a class="header-anchor" href="#custom-edge" aria-label="Permalink to &quot;Custom Edge&quot;">​</a></h1><h2 id="элементы" tabindex="-1">Элементы <a class="header-anchor" href="#элементы" aria-label="Permalink to &quot;Элементы&quot;">​</a></h2><ul><li><strong>&lt;BaseEdge&gt;</strong> - линия. Можно передать markerEnd</li><li><strong>&lt;EdgeLabelRenderer&gt;</strong> - кастомные элементов на линии</li></ul><h2 id="тип-линии" tabindex="-1">Тип линии <a class="header-anchor" href="#тип-линии" aria-label="Permalink to &quot;Тип линии&quot;">​</a></h2><h3 id="connectionlinetype" tabindex="-1">ConnectionLineType <a class="header-anchor" href="#connectionlinetype" aria-label="Permalink to &quot;ConnectionLineType&quot;">​</a></h3><p>Неизвестно что указать для &quot;step&quot;. Нет &quot;getStepPath&quot;</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">export</span><span style="color:#A626A4;"> declare</span><span style="color:#A626A4;"> enum</span><span style="color:#C18401;"> ConnectionLineType</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">  Bezier</span><span style="color:#0184BC;"> =</span><span style="color:#50A14F;"> &quot;default&quot;</span><span style="color:#383A42;">,           </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; getBezierPath</span></span>
<span class="line"><span style="color:#E45649;">  Straight</span><span style="color:#0184BC;"> =</span><span style="color:#50A14F;"> &quot;straight&quot;</span><span style="color:#383A42;">,        </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; getStraightPath</span></span>
<span class="line"><span style="color:#E45649;">  Step</span><span style="color:#0184BC;"> =</span><span style="color:#50A14F;"> &quot;step&quot;</span><span style="color:#383A42;">,                </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; </span></span>
<span class="line"><span style="color:#E45649;">  SmoothStep</span><span style="color:#0184BC;"> =</span><span style="color:#50A14F;"> &quot;smoothstep&quot;</span><span style="color:#383A42;">,    </span><span style="color:#A0A1A7;font-style:italic;">// =&gt; getSmoothStepPath</span></span>
<span class="line"><span style="color:#E45649;">  SimpleBezier</span><span style="color:#0184BC;"> =</span><span style="color:#50A14F;"> &quot;simplebezier&quot;</span><span style="color:#A0A1A7;font-style:italic;"> // =&gt; getSimpleBezierPath</span></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre></div><h3 id="указание-типа-линии" tabindex="-1">Указание типа линии <a class="header-anchor" href="#указание-типа-линии" aria-label="Permalink to &quot;Указание типа линии&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">  getBezierPath</span></span>
<span class="line"><span style="color:#E45649;">  getSimpleBezierPath</span></span>
<span class="line"><span style="color:#E45649;">  getSmoothStepPath</span></span>
<span class="line"><span style="color:#E45649;">  getStraightPath</span></span>
<span class="line"><span style="color:#383A42;">} </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &quot;reactflow&quot;</span></span></code></pre></div><h2 id="пример" tabindex="-1">Пример <a class="header-anchor" href="#пример" aria-label="Permalink to &quot;Пример&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">BaseEdge</span><span style="color:#383A42;">, </span><span style="color:#E45649;">EdgeLabelRenderer</span><span style="color:#383A42;">, </span><span style="color:#E45649;">getStraightPath</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &quot;reactflow&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">interface</span><span style="color:#C18401;"> IEdgeLabelProps</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">  id</span><span style="color:#0184BC;">:</span><span style="color:#0184BC;"> string</span></span>
<span class="line"><span style="color:#383A42;">  sourceX</span><span style="color:#0184BC;">:</span><span style="color:#0184BC;"> number</span></span>
<span class="line"><span style="color:#383A42;">  sourceY</span><span style="color:#0184BC;">:</span><span style="color:#0184BC;"> number</span></span>
<span class="line"><span style="color:#383A42;">  targetX</span><span style="color:#0184BC;">:</span><span style="color:#0184BC;"> number</span></span>
<span class="line"><span style="color:#383A42;">  targetY</span><span style="color:#0184BC;">:</span><span style="color:#0184BC;"> number</span></span>
<span class="line"><span style="color:#383A42;">  source</span><span style="color:#0184BC;">:</span><span style="color:#0184BC;"> string</span></span>
<span class="line"><span style="color:#383A42;">  target</span><span style="color:#0184BC;">:</span><span style="color:#0184BC;"> string</span></span>
<span class="line"><span style="color:#383A42;">  markerEnd</span><span style="color:#0184BC;">?:</span><span style="color:#0184BC;"> string</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#4078F2;"> CustomEdge</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> React</span><span style="color:#383A42;">.</span><span style="color:#C18401;">FC</span><span style="color:#383A42;">&lt;</span><span style="color:#C18401;">ICustomEdgeProps</span><span style="color:#383A42;">&gt; </span><span style="color:#0184BC;">=</span><span style="color:#383A42;"> (props) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  const</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#986801;">    id</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#986801;">    sourceX</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#986801;">    sourceY</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#986801;">    targetX</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#986801;">    targetY</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    // source: nodeSource,</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    // target: nodeTarget,</span></span>
<span class="line"><span style="color:#986801;">    markerEnd</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">  } </span><span style="color:#0184BC;">=</span><span style="color:#383A42;"> props</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">  const</span><span style="color:#383A42;"> [</span><span style="color:#986801;">edgePath</span><span style="color:#383A42;">] </span><span style="color:#0184BC;">=</span><span style="color:#4078F2;"> getStraightPath</span><span style="color:#383A42;">({ sourceX, sourceY, targetX, targetY });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">  const</span><span style="color:#986801;"> styleCenter</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">    transform</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> \`translate(-50%, -50%) translate(</span><span style="color:#CA1243;">\${</span><span style="color:#383A42;">labelX</span><span style="color:#CA1243;">}</span><span style="color:#50A14F;">px,</span><span style="color:#CA1243;">\${</span><span style="color:#383A42;">labelY</span><span style="color:#CA1243;">}</span><span style="color:#50A14F;">px)\`</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"><span style="color:#A626A4;">  const</span><span style="color:#4078F2;"> onClick</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#383A42;"> (</span></span>
<span class="line"><span style="color:#0184BC;">    &lt;&gt;</span></span>
<span class="line"><span style="color:#0184BC;">      &lt;</span><span style="color:#383A42;">BaseEdge id</span><span style="color:#0184BC;">=</span><span style="color:#383A42;">{id} path</span><span style="color:#0184BC;">=</span><span style="color:#383A42;">{edgePath} markerEnd</span><span style="color:#0184BC;">=</span><span style="color:#383A42;">{markerEnd} </span><span style="color:#0184BC;">/&gt;</span></span>
<span class="line"><span style="color:#383A42;">      &lt;</span><span style="color:#C18401;">EdgeLabelRenderer</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#0184BC;">        &lt;</span><span style="color:#383A42;">button</span></span>
<span class="line"><span style="color:#383A42;">          style</span><span style="color:#0184BC;">=</span><span style="color:#383A42;">{styleCenter}</span></span>
<span class="line"><span style="color:#383A42;">          className</span><span style="color:#0184BC;">=</span><span style="color:#383A42;">{</span><span style="color:#4078F2;">cn</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;nodrag&quot;</span><span style="color:#383A42;">, </span><span style="color:#50A14F;">&quot;nopan&quot;</span><span style="color:#383A42;">)}</span></span>
<span class="line"><span style="color:#383A42;">          onClick</span><span style="color:#0184BC;">=</span><span style="color:#383A42;">{onClick}</span></span>
<span class="line"><span style="color:#0184BC;">        /&gt;</span></span>
<span class="line"><span style="color:#0184BC;">      &lt;/</span><span style="color:#383A42;">EdgeLabelRenderer</span><span style="color:#0184BC;">&gt;</span></span>
<span class="line"><span style="color:#0184BC;">    &lt;/&gt;</span></span>
<span class="line"><span style="color:#383A42;">  )</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">export</span><span style="color:#E45649;"> default</span><span style="color:#E45649;"> CustomEdge</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#E45649;"> CustomEdge</span><span style="color:#A626A4;"> from</span><span style="color:#50A14F;"> &quot;./CustomEdge&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> edgeTypes</span><span style="color:#0184BC;">:</span><span style="color:#C18401;"> EdgeTypes</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#50A14F;">  &#39;custom-edge&#39;</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> CustomEdge,</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> edgeOptions</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  // type: &#39;step&#39;,</span></span>
<span class="line"><span style="color:#E45649;">  type</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &#39;custom-edge&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">  markerEnd</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">    type</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> MarkerType.</span><span style="color:#E45649;">ArrowClosed</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    width</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 25</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    height</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 25</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    color</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;#FF0072&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">  },</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#4078F2;"> App</span><span style="color:#0184BC;">  =</span><span style="color:#383A42;"> () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#383A42;"> (</span></span>
<span class="line"><span style="color:#383A42;">    &lt;</span><span style="color:#C18401;">ReactFlow</span></span>
<span class="line"><span style="color:#986801;">      edgeTypes</span><span style="color:#383A42;">={edgeTypes}</span></span>
<span class="line"><span style="color:#986801;">      defaultEdgeOptions</span><span style="color:#383A42;">={edgeOptions}</span></span>
<span class="line"><span style="color:#383A42;">    /&gt;</span></span>
<span class="line"><span style="color:#383A42;">  )</span></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">export</span><span style="color:#A626A4;"> const</span><span style="color:#986801;"> initialEdges</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> [</span></span>
<span class="line"><span style="color:#383A42;">  {</span></span>
<span class="line"><span style="color:#E45649;">    id</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;edge-1&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    source</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;node-1&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    target</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;node-2&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    type</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &#39;custom-edge&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">  },</span></span>
<span class="line"><span style="color:#383A42;">]</span></span></code></pre></div>`,13)])])}const g=n(o,[["render",e]]);export{d as __pageData,g as default};
