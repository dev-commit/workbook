import{_ as a,o as n,c as l,aw as p}from"./chunks/framework.DLufY-ao.js";const d=JSON.parse('{"title":"Варианты CSS-in-JS","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/framework-react/material-ui/styling/variants.md","filePath":"wiki/dev-commit/framework-react/material-ui/styling/variants.md"}'),o={name:"wiki/dev-commit/framework-react/material-ui/styling/variants.md"};function e(t,s,c,r,i,y){return n(),l("div",null,[...s[0]||(s[0]=[p(`<h1 id="варианты-css-in-js" tabindex="-1">Варианты CSS-in-JS <a class="header-anchor" href="#варианты-css-in-js" aria-label="Permalink to &quot;Варианты CSS-in-JS&quot;">​</a></h1><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">grey</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &#39;@material-ui/core/colors/&#39;</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#4078F2;"> MaterialStyles</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> ({</span></span>
<span class="line"><span style="color:#383A42;">    spacing,</span></span>
<span class="line"><span style="color:#E45649;">    typography</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> { fontSize }</span></span>
<span class="line"><span style="color:#383A42;">}) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> ({</span></span>
<span class="line"><span style="color:#E45649;">    container</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">        border</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &#39;2px solid blue&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">        minWidth</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &#39;100vw&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">        transform</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &#39;translate(8px, 14px) scale(1)&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#50A14F;">        &#39;&amp; div&#39;</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">            padding</span><span style="color:#0184BC;">:</span><span style="color:#4078F2;"> spacing</span><span style="color:#383A42;">(),</span></span>
<span class="line"><span style="color:#E45649;">            backgroundColor</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> grey[</span><span style="color:#986801;">500</span><span style="color:#383A42;">],</span></span>
<span class="line"><span style="color:#383A42;">        },</span></span>
<span class="line"><span style="color:#50A14F;">        &#39;&amp;:hover&#39;</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">            //</span></span>
<span class="line"><span style="color:#383A42;">        },</span></span>
<span class="line"><span style="color:#50A14F;">        &#39;&amp; div.MuiBackdrop-root&#39;</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">            //</span></span>
<span class="line"><span style="color:#383A42;">        },</span></span>
<span class="line"><span style="color:#50A14F;">        &#39;&amp; .MuiPaper-root&#39;</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">            //</span></span>
<span class="line"><span style="color:#383A42;">        },</span></span>
<span class="line"><span style="color:#383A42;">    },</span></span>
<span class="line"><span style="color:#50A14F;">    &#39;@media (max-width: 1130px) and (min-width: 600px)&#39;</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">        //</span></span>
<span class="line"><span style="color:#383A42;">    },</span></span>
<span class="line"><span style="color:#50A14F;">    &#39;@supports (backdrop-filter: blur(5px))&#39;</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">        //</span></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"><span style="color:#383A42;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">export</span><span style="color:#E45649;"> default</span><span style="color:#E45649;"> MaterialStyles</span><span style="color:#383A42;">;</span></span></code></pre></div>`,2)])])}const m=a(o,[["render",e]]);export{d as __pageData,m as default};
