import{_ as a,o as n,c as p,aw as l}from"./chunks/framework.DLufY-ao.js";const d=JSON.parse('{"title":"Комбинация типов","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/main/typescript/type/combine.md","filePath":"wiki/dev-commit/main/typescript/type/combine.md"}'),o={name:"wiki/dev-commit/main/typescript/type/combine.md"};function e(t,s,c,r,y,i){return n(),p("div",null,[...s[0]||(s[0]=[l(`<h1 id="комбинация-типов" tabindex="-1">Комбинация типов <a class="header-anchor" href="#комбинация-типов" aria-label="Permalink to &quot;Комбинация типов&quot;">​</a></h1><h2 id="расширение-типов" tabindex="-1">Расширение типов <a class="header-anchor" href="#расширение-типов" aria-label="Permalink to &quot;Расширение типов&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">type</span><span style="color:#C18401;"> Props</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">	header</span><span style="color:#0184BC;">:</span><span style="color:#0184BC;"> string</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">} </span><span style="color:#0184BC;">&amp;</span><span style="color:#C18401;"> TabsProps</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">type</span><span style="color:#C18401;"> TabsProps</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">	count</span><span style="color:#0184BC;">:</span><span style="color:#0184BC;"> number</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> obj</span><span style="color:#0184BC;">:</span><span style="color:#C18401;"> Props</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">	header</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &#39;Hello&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">	count</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 23</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre></div><h2 id="использование-одного-типа-в-другом" tabindex="-1">Использование одного типа в другом <a class="header-anchor" href="#использование-одного-типа-в-другом" aria-label="Permalink to &quot;Использование одного типа в другом&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">type</span><span style="color:#C18401;"> Props</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">	header</span><span style="color:#0184BC;">:</span><span style="color:#0184BC;"> string</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">	obj</span><span style="color:#0184BC;">:</span><span style="color:#C18401;"> TabsProps</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">type</span><span style="color:#C18401;"> TabsProps</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">	count</span><span style="color:#0184BC;">:</span><span style="color:#0184BC;"> number</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> obj</span><span style="color:#0184BC;">:</span><span style="color:#C18401;"> Props</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">	header</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &#39;Hello&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">	obj</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">		count</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 23</span></span>
<span class="line"><span style="color:#383A42;">	},</span></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre></div>`,5)])])}const C=a(o,[["render",e]]);export{d as __pageData,C as default};
