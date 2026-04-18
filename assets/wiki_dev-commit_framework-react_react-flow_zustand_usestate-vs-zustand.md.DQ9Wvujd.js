import{_ as n,o as a,c as l,aw as p}from"./chunks/framework.DLufY-ao.js";const d=JSON.parse('{"title":"useState vs Zustand","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/framework-react/react-flow/zustand/usestate-vs-zustand.md","filePath":"wiki/dev-commit/framework-react/react-flow/zustand/usestate-vs-zustand.md"}'),o={name:"wiki/dev-commit/framework-react/react-flow/zustand/usestate-vs-zustand.md"};function e(t,s,c,r,y,A){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h1 id="usestate-vs-zustand" tabindex="-1">useState vs Zustand <a class="header-anchor" href="#usestate-vs-zustand" aria-label="Permalink to &quot;useState vs Zustand&quot;">​</a></h1><h4 id="usestate" tabindex="-1">useState <a class="header-anchor" href="#usestate" aria-label="Permalink to &quot;useState&quot;">​</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">useCallback</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &quot;react&quot;</span></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#E45649;"> ReactFlow</span><span style="color:#383A42;">, {</span></span>
<span class="line"><span style="color:#E45649;">  addEdge</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">  useEdgesState</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">  useNodesState</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">  Connection</span></span>
<span class="line"><span style="color:#383A42;">} </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &quot;reactflow&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#4078F2;"> App</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  const</span><span style="color:#383A42;"> [</span><span style="color:#986801;">nodes</span><span style="color:#383A42;">, </span><span style="color:#986801;">setNodes</span><span style="color:#383A42;">, </span><span style="color:#986801;">onNodesChange</span><span style="color:#383A42;">] </span><span style="color:#0184BC;">=</span><span style="color:#4078F2;"> useNodesState</span><span style="color:#383A42;">([])</span></span>
<span class="line"><span style="color:#A626A4;">  const</span><span style="color:#383A42;"> [</span><span style="color:#986801;">edges</span><span style="color:#383A42;">, </span><span style="color:#986801;">setEdges</span><span style="color:#383A42;">, </span><span style="color:#986801;">onEdgesChange</span><span style="color:#383A42;">] </span><span style="color:#0184BC;">=</span><span style="color:#4078F2;"> useEdgesState</span><span style="color:#383A42;">([])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">  const</span><span style="color:#986801;"> onConnect</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> useCallback</span><span style="color:#383A42;">(</span></span>
<span class="line"><span style="color:#383A42;">    (connection</span><span style="color:#0184BC;">:</span><span style="color:#C18401;"> Connection</span><span style="color:#383A42;">) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#4078F2;">      setEdges</span><span style="color:#383A42;">((eds) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#4078F2;"> addEdge</span><span style="color:#383A42;">(connection, eds))</span></span>
<span class="line"><span style="color:#383A42;">    },</span></span>
<span class="line"><span style="color:#383A42;">    [setEdges],</span></span>
<span class="line"><span style="color:#383A42;">  )</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#383A42;"> (</span></span>
<span class="line"><span style="color:#383A42;">    &lt;</span><span style="color:#C18401;">ReactFlow</span></span>
<span class="line"><span style="color:#986801;">      nodes</span><span style="color:#383A42;">={nodes}</span></span>
<span class="line"><span style="color:#986801;">      edges</span><span style="color:#383A42;">={edges}</span></span>
<span class="line"><span style="color:#986801;">      onNodesChange</span><span style="color:#383A42;">={onNodesChange}</span></span>
<span class="line"><span style="color:#986801;">      onEdgesChange</span><span style="color:#383A42;">={onEdgesChange}</span></span>
<span class="line"><span style="color:#986801;">      onConnect</span><span style="color:#383A42;">={onConnect}</span></span>
<span class="line"><span style="color:#383A42;">    /&gt;</span></span>
<span class="line"><span style="color:#383A42;">  )</span></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre></div><h4 id="zustand" tabindex="-1">Zustand <a class="header-anchor" href="#zustand" aria-label="Permalink to &quot;Zustand&quot;">​</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">useCallback</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &quot;react&quot;</span></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#E45649;"> ReactFlow</span><span style="color:#383A42;">, {</span></span>
<span class="line"><span style="color:#E45649;">  addEdge</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">  useEdgesState</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">  useNodesState</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">} </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &quot;reactflow&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">useShallow</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &quot;zustand/react/shallow&quot;</span></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#E45649;"> useStore</span><span style="color:#A626A4;"> from</span><span style="color:#50A14F;"> &quot;../store/store&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#4078F2;"> selector</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> (state) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> ({</span></span>
<span class="line"><span style="color:#E45649;">  nodes</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> state.</span><span style="color:#E45649;">nodes</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">  edges</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> state.</span><span style="color:#E45649;">edges</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">  onNodesChange</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> state.</span><span style="color:#E45649;">onNodesChange</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">  onEdgesChange</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> state.</span><span style="color:#E45649;">onEdgesChange</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">  onConnect</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> state.</span><span style="color:#E45649;">onConnect</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">  setNodes</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> state.</span><span style="color:#E45649;">setNodes</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">  setEdges</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> state.</span><span style="color:#E45649;">setEdges</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#4078F2;"> App</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  const</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#986801;">    nodes</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#986801;">    edges</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#986801;">    onNodesChange</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#986801;">    onEdgesChange</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#986801;">    onConnect</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#986801;">    setNodes</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#986801;">    setEdges</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">  } </span><span style="color:#0184BC;">=</span><span style="color:#4078F2;"> useStore</span><span style="color:#383A42;">(</span><span style="color:#4078F2;">useShallow</span><span style="color:#383A42;">(selector))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#383A42;"> (</span></span>
<span class="line"><span style="color:#383A42;">    &lt;</span><span style="color:#C18401;">ReactFlow</span></span>
<span class="line"><span style="color:#986801;">      nodes</span><span style="color:#383A42;">={nodes}</span></span>
<span class="line"><span style="color:#986801;">      edges</span><span style="color:#383A42;">={edges}</span></span>
<span class="line"><span style="color:#986801;">      onNodesChange</span><span style="color:#383A42;">={onNodesChange}</span></span>
<span class="line"><span style="color:#986801;">      onEdgesChange</span><span style="color:#383A42;">={onEdgesChange}</span></span>
<span class="line"><span style="color:#986801;">      onConnect</span><span style="color:#383A42;">={onConnect}</span></span>
<span class="line"><span style="color:#383A42;">    /&gt;</span></span>
<span class="line"><span style="color:#383A42;">  )</span></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre></div>`,5)])])}const u=n(o,[["render",e]]);export{d as __pageData,u as default};
