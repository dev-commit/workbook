import{_ as a,o as n,c as l,aw as o}from"./chunks/framework.DLufY-ao.js";const m=JSON.parse('{"title":"sass-loader","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/common/webpack/loaders/sass-loader.md","filePath":"wiki/dev-commit/common/webpack/loaders/sass-loader.md"}'),e={name:"wiki/dev-commit/common/webpack/loaders/sass-loader.md"};function p(c,s,t,r,i,d){return n(),l("div",null,[...s[0]||(s[0]=[o(`<h1 id="sass-loader" tabindex="-1">sass-loader <a class="header-anchor" href="#sass-loader" aria-label="Permalink to &quot;sass-loader&quot;">​</a></h1><p>npm i --save-dev sass-loader npm i --save-dev node-sass</p><ul><li><strong>sass-loader</strong> - compiles Sass to CSS, using Node Sass by default</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#383A42;">module: {</span></span>
<span class="line"><span style="color:#383A42;">    rules: [</span></span>
<span class="line"><span style="color:#383A42;">        {</span></span>
<span class="line"><span style="color:#E45649;">            test</span><span style="color:#0184BC;">:</span><span style="color:#0184BC;"> /\\.scss/</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">            use</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> [</span></span>
<span class="line"><span style="color:#383A42;">                MiniCssExtractPlugin.</span><span style="color:#C18401;">loader</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#50A14F;">                &#39;css-loader&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">                {</span></span>
<span class="line"><span style="color:#E45649;">                    loader</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &#39;sass-loader&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">                    options</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">                        sourceMap</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> true</span></span>
<span class="line"><span style="color:#383A42;">                    }</span></span>
<span class="line"><span style="color:#383A42;">                },</span></span>
<span class="line"><span style="color:#383A42;">                ]</span></span>
<span class="line"><span style="color:#383A42;">        },</span></span>
<span class="line"><span style="color:#383A42;">    ]</span></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#50A14F;"> &#39;./style.scss&#39;</span><span style="color:#383A42;">;</span></span></code></pre></div>`,5)])])}const A=a(e,[["render",p]]);export{m as __pageData,A as default};
