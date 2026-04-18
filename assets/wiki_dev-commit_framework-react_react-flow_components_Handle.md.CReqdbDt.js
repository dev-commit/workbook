import{_ as n,o as a,c as l,aw as o}from"./chunks/framework.DLufY-ao.js";const d=JSON.parse('{"title":"<Handle />","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/framework-react/react-flow/components/Handle.md","filePath":"wiki/dev-commit/framework-react/react-flow/components/Handle.md"}'),p={name:"wiki/dev-commit/framework-react/react-flow/components/Handle.md"};function e(t,s,c,r,y,i){return a(),l("div",null,[...s[0]||(s[0]=[o(`<h1 id="handle" tabindex="-1"><code>&lt;Handle /&gt;</code> <a class="header-anchor" href="#handle" aria-label="Permalink to &quot;\`&lt;Handle /&gt;\`&quot;">​</a></h1><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#383A42;">&lt;</span><span style="color:#C18401;">Handle</span></span>
<span class="line"><span style="color:#986801;">  type</span><span style="color:#383A42;">=</span><span style="color:#50A14F;">&quot;target&quot;</span><span style="color:#A0A1A7;font-style:italic;"> // &quot;source&quot; | &quot;target&quot;</span></span>
<span class="line"><span style="color:#986801;">  position</span><span style="color:#383A42;">={Position.</span><span style="color:#E45649;">Top</span><span style="color:#383A42;">}</span></span>
<span class="line"><span style="color:#986801;">  isConnectable</span><span style="color:#383A42;">={isConnectable}</span></span>
<span class="line"><span style="color:#986801;">  id</span><span style="color:#383A42;">={id + </span><span style="color:#50A14F;">&quot;-top&quot;</span><span style="color:#383A42;">}</span></span>
<span class="line"><span style="color:#986801;">  style</span><span style="color:#383A42;">={{ </span><span style="color:#E45649;">left</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 50</span><span style="color:#383A42;">, </span><span style="color:#E45649;">background</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;blue&quot;</span><span style="color:#383A42;"> }}/&gt;;</span></span></code></pre></div><h2 id="пример" tabindex="-1">Пример <a class="header-anchor" href="#пример" aria-label="Permalink to &quot;Пример&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">NodeAction</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &quot;./NodeAction&quot;</span></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">initialNodes</span><span style="color:#383A42;">, </span><span style="color:#E45649;">initialEdges</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &quot;./initialState.tsx&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> customNodes</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">  action</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> NodeAction,</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#4078F2;"> App</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  const</span><span style="color:#383A42;"> [</span><span style="color:#986801;">nodes</span><span style="color:#383A42;">] </span><span style="color:#0184BC;">=</span><span style="color:#4078F2;"> useNodesState</span><span style="color:#383A42;">(initialNodes);</span></span>
<span class="line"><span style="color:#A626A4;">  const</span><span style="color:#383A42;"> [</span><span style="color:#986801;">edges</span><span style="color:#383A42;">] </span><span style="color:#0184BC;">=</span><span style="color:#4078F2;"> useEdgesState</span><span style="color:#383A42;">(initialEdges);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#383A42;"> (</span></span>
<span class="line"><span style="color:#383A42;">      &lt;</span><span style="color:#C18401;">ReactFlow</span></span>
<span class="line"><span style="color:#986801;">        nodes</span><span style="color:#383A42;">={nodes}</span></span>
<span class="line"><span style="color:#986801;">        edges</span><span style="color:#383A42;">={edges}</span></span>
<span class="line"><span style="color:#986801;">        nodeTypes</span><span style="color:#383A42;">={customNodes}</span></span>
<span class="line"><span style="color:#383A42;">      /&gt;</span></span>
<span class="line"><span style="color:#383A42;">  )</span></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">export</span><span style="color:#A626A4;"> const</span><span style="color:#986801;"> initialNodes</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> [</span></span>
<span class="line"><span style="color:#383A42;">  {</span></span>
<span class="line"><span style="color:#E45649;">    id</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;node1&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    type</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;action&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    position</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">x</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 250</span><span style="color:#383A42;">, </span><span style="color:#E45649;">y</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 100</span><span style="color:#383A42;"> },</span></span>
<span class="line"><span style="color:#E45649;">    data</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">label</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;Action Top&quot;</span><span style="color:#383A42;"> },</span></span>
<span class="line"><span style="color:#383A42;">  },</span></span>
<span class="line"><span style="color:#383A42;">  {</span></span>
<span class="line"><span style="color:#E45649;">    id</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;node2&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    type</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;action&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    position</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">x</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 250</span><span style="color:#383A42;">, </span><span style="color:#E45649;">y</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 200</span><span style="color:#383A42;"> },</span></span>
<span class="line"><span style="color:#E45649;">    data</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">label</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;Action Center&quot;</span><span style="color:#383A42;"> },</span></span>
<span class="line"><span style="color:#383A42;">  },</span></span>
<span class="line"><span style="color:#383A42;">  {</span></span>
<span class="line"><span style="color:#E45649;">    id</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;node3&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    type</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;action&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    position</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">x</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 250</span><span style="color:#383A42;">, </span><span style="color:#E45649;">y</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 300</span><span style="color:#383A42;"> },</span></span>
<span class="line"><span style="color:#E45649;">    data</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">label</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;Action Bottom&quot;</span><span style="color:#383A42;"> },</span></span>
<span class="line"><span style="color:#383A42;">  },</span></span>
<span class="line"><span style="color:#383A42;">  {</span></span>
<span class="line"><span style="color:#E45649;">    id</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;node4&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    type</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;action&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    position</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">x</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 50</span><span style="color:#383A42;">, </span><span style="color:#E45649;">y</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 200</span><span style="color:#383A42;"> },</span></span>
<span class="line"><span style="color:#E45649;">    data</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">label</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;Action Left&quot;</span><span style="color:#383A42;"> },</span></span>
<span class="line"><span style="color:#383A42;">  },</span></span>
<span class="line"><span style="color:#383A42;">  {</span></span>
<span class="line"><span style="color:#E45649;">    id</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;node5&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    type</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;action&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    position</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">x</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 450</span><span style="color:#383A42;">, </span><span style="color:#E45649;">y</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 200</span><span style="color:#383A42;"> },</span></span>
<span class="line"><span style="color:#E45649;">    data</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">label</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;Action Right&quot;</span><span style="color:#383A42;"> },</span></span>
<span class="line"><span style="color:#383A42;">  },</span></span>
<span class="line"><span style="color:#383A42;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">export</span><span style="color:#A626A4;"> const</span><span style="color:#986801;"> initialEdges</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> [</span></span>
<span class="line"><span style="color:#383A42;">  {</span></span>
<span class="line"><span style="color:#E45649;">    id</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;edge1&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    source</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;node1&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    target</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;node2&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    sourceHandle</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;node1-bottom&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    targetHandle</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;node2-top&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">  },</span></span>
<span class="line"><span style="color:#383A42;">  {</span></span>
<span class="line"><span style="color:#E45649;">    id</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;edge2&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    source</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;node2&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    target</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;node3&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    sourceHandle</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;node2-bottom&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    targetHandle</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;node3-top&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">  },</span></span>
<span class="line"><span style="color:#383A42;">  {</span></span>
<span class="line"><span style="color:#E45649;">    id</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;edge3&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    source</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;node4&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    target</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;node2&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    sourceHandle</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;node4-right&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    targetHandle</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;node2-left&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">  },</span></span>
<span class="line"><span style="color:#383A42;">  {</span></span>
<span class="line"><span style="color:#E45649;">    id</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;edge4&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    source</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;node2&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    target</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;node5&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    sourceHandle</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;node2-right&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    targetHandle</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;node5-left&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">  },</span></span>
<span class="line"><span style="color:#383A42;">]</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">Handle</span><span style="color:#383A42;">, </span><span style="color:#E45649;">Position</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &quot;reactflow&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">enum</span><span style="color:#C18401;"> NodeHandlersPositionPrefix</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">  Top</span><span style="color:#0184BC;"> =</span><span style="color:#50A14F;"> &quot;-top&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">  Bottom</span><span style="color:#0184BC;"> =</span><span style="color:#50A14F;"> &quot;-bottom&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">  Left</span><span style="color:#0184BC;"> =</span><span style="color:#50A14F;"> &quot;-left&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">  Right</span><span style="color:#0184BC;"> =</span><span style="color:#50A14F;"> &quot;-right&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#4078F2;"> NodeAction</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> (props) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  const</span><span style="color:#383A42;"> { </span><span style="color:#986801;">data</span><span style="color:#383A42;">, </span><span style="color:#986801;">isConnectable</span><span style="color:#383A42;">, </span><span style="color:#986801;">id</span><span style="color:#383A42;"> } </span><span style="color:#0184BC;">=</span><span style="color:#383A42;"> props;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#383A42;"> (</span></span>
<span class="line"><span style="color:#383A42;">    &lt;</span><span style="color:#E45649;">div</span><span style="color:#986801;"> style</span><span style="color:#383A42;">={{ </span><span style="color:#E45649;">border</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;1px solid black&quot;</span><span style="color:#383A42;">, </span><span style="color:#E45649;">padding</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;10px&quot;</span><span style="color:#383A42;"> }}&gt;</span></span>
<span class="line"><span style="color:#383A42;">      &lt;</span><span style="color:#C18401;">Handle</span></span>
<span class="line"><span style="color:#986801;">        type</span><span style="color:#383A42;">=</span><span style="color:#50A14F;">&quot;target&quot;</span></span>
<span class="line"><span style="color:#986801;">        position</span><span style="color:#383A42;">={Position.</span><span style="color:#E45649;">Top</span><span style="color:#383A42;">}</span></span>
<span class="line"><span style="color:#986801;">        isConnectable</span><span style="color:#383A42;">={isConnectable}</span></span>
<span class="line"><span style="color:#986801;">        id</span><span style="color:#383A42;">={id + NodeHandlersPositionPrefix.</span><span style="color:#E45649;">Top</span><span style="color:#383A42;">}</span></span>
<span class="line"><span style="color:#383A42;">      /&gt;</span></span>
<span class="line"><span style="color:#383A42;">      &lt;</span><span style="color:#C18401;">Handle</span></span>
<span class="line"><span style="color:#986801;">        type</span><span style="color:#383A42;">=</span><span style="color:#50A14F;">&quot;source&quot;</span></span>
<span class="line"><span style="color:#986801;">        position</span><span style="color:#383A42;">={Position.</span><span style="color:#E45649;">Bottom</span><span style="color:#383A42;">}</span></span>
<span class="line"><span style="color:#986801;">        isConnectable</span><span style="color:#383A42;">={isConnectable}</span></span>
<span class="line"><span style="color:#986801;">        id</span><span style="color:#383A42;">={id + NodeHandlersPositionPrefix.</span><span style="color:#E45649;">Bottom</span><span style="color:#383A42;">}</span></span>
<span class="line"><span style="color:#383A42;">      /&gt;</span></span>
<span class="line"><span style="color:#383A42;">      &lt;</span><span style="color:#C18401;">Handle</span></span>
<span class="line"><span style="color:#986801;">        type</span><span style="color:#383A42;">=</span><span style="color:#50A14F;">&quot;target&quot;</span></span>
<span class="line"><span style="color:#986801;">        position</span><span style="color:#383A42;">={Position.</span><span style="color:#E45649;">Left</span><span style="color:#383A42;">}</span></span>
<span class="line"><span style="color:#986801;">        isConnectable</span><span style="color:#383A42;">={isConnectable}</span></span>
<span class="line"><span style="color:#986801;">        id</span><span style="color:#383A42;">={id + NodeHandlersPositionPrefix.</span><span style="color:#E45649;">Left</span><span style="color:#383A42;">}</span></span>
<span class="line"><span style="color:#383A42;">      /&gt;</span></span>
<span class="line"><span style="color:#383A42;">      &lt;</span><span style="color:#C18401;">Handle</span></span>
<span class="line"><span style="color:#986801;">        type</span><span style="color:#383A42;">=</span><span style="color:#50A14F;">&quot;source&quot;</span></span>
<span class="line"><span style="color:#986801;">        position</span><span style="color:#383A42;">={Position.</span><span style="color:#E45649;">Right</span><span style="color:#383A42;">}</span></span>
<span class="line"><span style="color:#986801;">        isConnectable</span><span style="color:#383A42;">={isConnectable}</span></span>
<span class="line"><span style="color:#986801;">        id</span><span style="color:#383A42;">={id + NodeHandlersPositionPrefix.</span><span style="color:#E45649;">Right</span><span style="color:#383A42;">}</span></span>
<span class="line"><span style="color:#383A42;">      /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">      {data.</span><span style="color:#E45649;">label</span><span style="color:#383A42;">}</span></span>
<span class="line"><span style="color:#383A42;">    &lt;/</span><span style="color:#E45649;">div</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">  );</span></span>
<span class="line"><span style="color:#383A42;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">export</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">NodeAction</span><span style="color:#383A42;"> };</span></span></code></pre></div>`,6)])])}const u=n(p,[["render",e]]);export{d as __pageData,u as default};
