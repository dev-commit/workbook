import{_ as a,o as n,c as l,aw as p}from"./chunks/framework.DLufY-ao.js";const u=JSON.parse('{"title":"Варианты CSS-in-JS","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/framework-react/material-ui/styling/css-in-js-variants.md","filePath":"wiki/dev-commit/framework-react/material-ui/styling/css-in-js-variants.md"}'),o={name:"wiki/dev-commit/framework-react/material-ui/styling/css-in-js-variants.md"};function t(e,s,c,r,i,y){return n(),l("div",null,[...s[0]||(s[0]=[p(`<h1 id="варианты-css-in-js" tabindex="-1">Варианты CSS-in-JS <a class="header-anchor" href="#варианты-css-in-js" aria-label="Permalink to &quot;Варианты CSS-in-JS&quot;">​</a></h1><h2 id="варианты" tabindex="-1">Варианты <a class="header-anchor" href="#варианты" aria-label="Permalink to &quot;Варианты&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">grey</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &quot;@material-ui/core/colors/&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#4078F2;"> MaterialStyles</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> ({ spacing, </span><span style="color:#E45649;">typography</span><span style="color:#383A42;">: { fontSize } }) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> ({</span></span>
<span class="line"><span style="color:#E45649;">  container</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">    border</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;2px solid blue&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    minWidth</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;100vw&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    transform</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;translate(8px, 14px) scale(1)&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#50A14F;">    &quot;&amp; div&quot;</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">      padding</span><span style="color:#0184BC;">:</span><span style="color:#4078F2;"> spacing</span><span style="color:#383A42;">(),</span></span>
<span class="line"><span style="color:#E45649;">      backgroundColor</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> grey[</span><span style="color:#986801;">500</span><span style="color:#383A42;">],</span></span>
<span class="line"><span style="color:#383A42;">    },</span></span>
<span class="line"><span style="color:#50A14F;">    &quot;&amp;:hover&quot;</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">      //</span></span>
<span class="line"><span style="color:#383A42;">    },</span></span>
<span class="line"><span style="color:#50A14F;">    &quot;&amp; div.MuiBackdrop-root&quot;</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">      //</span></span>
<span class="line"><span style="color:#383A42;">    },</span></span>
<span class="line"><span style="color:#50A14F;">    &quot;&amp; .MuiPaper-root&quot;</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">      //</span></span>
<span class="line"><span style="color:#383A42;">    },</span></span>
<span class="line"><span style="color:#383A42;">  },</span></span>
<span class="line"><span style="color:#50A14F;">  &quot;@media (max-width: 1130px) and (min-width: 600px)&quot;</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    //</span></span>
<span class="line"><span style="color:#383A42;">  },</span></span>
<span class="line"><span style="color:#50A14F;">  &quot;@supports (backdrop-filter: blur(5px))&quot;</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    //</span></span>
<span class="line"><span style="color:#383A42;">  },</span></span>
<span class="line"><span style="color:#383A42;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">export</span><span style="color:#E45649;"> default</span><span style="color:#E45649;"> MaterialStyles</span><span style="color:#383A42;">;</span></span></code></pre></div>`,3)])])}const d=a(o,[["render",t]]);export{u as __pageData,d as default};
