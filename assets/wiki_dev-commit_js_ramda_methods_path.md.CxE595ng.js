import{_ as a,o as n,c as p,aw as l}from"./chunks/framework.DLufY-ao.js";const d=JSON.parse('{"title":"path(), pathOr()","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/js/ramda/methods/path.md","filePath":"wiki/dev-commit/js/ramda/methods/path.md"}'),o={name:"wiki/dev-commit/js/ramda/methods/path.md"};function e(t,s,c,r,i,y){return n(),p("div",null,[...s[0]||(s[0]=[l(`<h1 id="path-pathor" tabindex="-1">path(), pathOr() <a class="header-anchor" href="#path-pathor" aria-label="Permalink to &quot;path(), pathOr()&quot;">​</a></h1><pre><code>Получить значение по заданному пути


Если данный ненулевой объект имеет значение по указанному пути, возвращает значение по этому пути. В противном случае возвращает предоставленное значение по умолчанию
</code></pre><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">path</span><span style="color:#383A42;">, </span><span style="color:#E45649;">pathOr</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &#39;ramda&#39;</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> event</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">    target</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">        value</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 77</span></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// js</span></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> value</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> event.</span><span style="color:#E45649;">target</span><span style="color:#383A42;">.</span><span style="color:#E45649;">value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// ramda</span></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> value</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> path</span><span style="color:#383A42;">([</span><span style="color:#50A14F;">&#39;target&#39;</span><span style="color:#383A42;">, </span><span style="color:#50A14F;">&#39;value&#39;</span><span style="color:#383A42;">], event);</span></span></code></pre></div>`,3)])])}const h=a(o,[["render",e]]);export{d as __pageData,h as default};
