import{_ as n,o as a,c as o,aw as l}from"./chunks/framework.DLufY-ao.js";const A=JSON.parse('{"title":"useRouter","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/framework-react/next-js/routing/hooks/useRouter.md","filePath":"wiki/dev-commit/framework-react/next-js/routing/hooks/useRouter.md"}'),p={name:"wiki/dev-commit/framework-react/next-js/routing/hooks/useRouter.md"};function e(t,s,r,c,i,y){return a(),o("div",null,[...s[0]||(s[0]=[l(`<h1 id="userouter" tabindex="-1">useRouter <a class="header-anchor" href="#userouter" aria-label="Permalink to &quot;useRouter&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p><a href="https://nextjs.org/docs/app/api-reference/functions/use-router" target="_blank" rel="noreferrer">https://nextjs.org/docs/app/api-reference/functions/use-router</a></p></div><pre><code>Хук позволяет программно изменять маршруты внутри Client Components
</code></pre><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#50A14F;">&quot;use client&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">useRouter</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &#39;next/navigation&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#4078F2;"> App</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">    const</span><span style="color:#986801;"> router</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;">useRouter</span><span style="color:#383A42;">()</span></span>
<span class="line"><span style="color:#383A42;">    </span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    // Получить query-параметр &quot;id&quot;</span></span>
<span class="line"><span style="color:#A626A4;">    const</span><span style="color:#986801;"> id</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> router.</span><span style="color:#E45649;">query</span><span style="color:#383A42;">.</span><span style="color:#E45649;">id</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    const</span><span style="color:#4078F2;"> handleClick</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">        // Редирект на указанный url</span></span>
<span class="line"><span style="color:#383A42;">        router.</span><span style="color:#4078F2;">push</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;/dashboard&#39;</span><span style="color:#383A42;">)</span></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#383A42;"> (</span></span>
<span class="line"><span style="color:#383A42;">        &lt;</span><span style="color:#E45649;">button</span><span style="color:#986801;"> type</span><span style="color:#383A42;">=</span><span style="color:#50A14F;">&quot;button&quot;</span><span style="color:#986801;"> onClick</span><span style="color:#383A42;">={handleClick}&gt;</span></span>
<span class="line"><span style="color:#383A42;">            Dashboard</span></span>
<span class="line"><span style="color:#383A42;">        &lt;/</span><span style="color:#E45649;">button</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">    )</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">export</span><span style="color:#E45649;"> default</span><span style="color:#E45649;"> App</span></span></code></pre></div>`,4)])])}const d=n(p,[["render",e]]);export{A as __pageData,d as default};
