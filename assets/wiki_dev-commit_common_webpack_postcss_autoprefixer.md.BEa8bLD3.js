import{_ as a,o as n,c as p,aw as l}from"./chunks/framework.DLufY-ao.js";const d=JSON.parse('{"title":"autoprefixer","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/common/webpack/postcss/autoprefixer.md","filePath":"wiki/dev-commit/common/webpack/postcss/autoprefixer.md"}'),o={name:"wiki/dev-commit/common/webpack/postcss/autoprefixer.md"};function e(c,s,t,r,i,y){return n(),p("div",null,[...s[0]||(s[0]=[l(`<h1 id="autoprefixer" tabindex="-1">autoprefixer <a class="header-anchor" href="#autoprefixer" aria-label="Permalink to &quot;autoprefixer&quot;">​</a></h1><p>npm i --save-dev autoprefixer</p><h2 id="подключение-через-webpack-config-js" tabindex="-1">Подключение через webpack.config.js <a class="header-anchor" href="#подключение-через-webpack-config-js" aria-label="Permalink to &quot;Подключение через webpack.config.js&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> autoprefixer</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> require</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;autoprefixer&#39;</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#383A42;">    module: {</span></span>
<span class="line"><span style="color:#383A42;">    rules: [</span></span>
<span class="line"><span style="color:#383A42;">        {</span></span>
<span class="line"><span style="color:#E45649;">            test</span><span style="color:#0184BC;">:</span><span style="color:#0184BC;"> /\\.scss/</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">            use</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> [</span></span>
<span class="line"><span style="color:#383A42;">                MiniCssExtractPlugin.</span><span style="color:#C18401;">loader</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#50A14F;">                &#39;css-loader&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">                {</span></span>
<span class="line"><span style="color:#E45649;">                    loader</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &#39;postcss-loader&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">                    options</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">                        plugins</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> [</span></span>
<span class="line"><span style="color:#4078F2;">                            autoprefixer</span><span style="color:#383A42;">({</span></span>
<span class="line"><span style="color:#E45649;">                                browsers</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> [</span><span style="color:#50A14F;">&#39;ie &gt;= 8&#39;</span><span style="color:#383A42;">, </span><span style="color:#50A14F;">&#39;last 4 version&#39;</span><span style="color:#383A42;">]</span></span>
<span class="line"><span style="color:#383A42;">                            })</span></span>
<span class="line"><span style="color:#383A42;">                        ],</span></span>
<span class="line"><span style="color:#E45649;">                        sourceMap</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> true</span></span>
<span class="line"><span style="color:#383A42;">                    }</span></span>
<span class="line"><span style="color:#383A42;">                },</span></span>
<span class="line"><span style="color:#50A14F;">                &#39;sass-loader&#39;</span></span>
<span class="line"><span style="color:#383A42;">            ]</span></span>
<span class="line"><span style="color:#383A42;">        },</span></span>
<span class="line"><span style="color:#383A42;">    ]</span></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre></div><h2 id="подключение-через-postcss-config-js" tabindex="-1">Подключение через postcss.config.js <a class="header-anchor" href="#подключение-через-postcss-config-js" aria-label="Permalink to &quot;Подключение через postcss.config.js&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#E45649;">module</span><span style="color:#383A42;">.</span><span style="color:#E45649;">exports</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">    plugins</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> [</span></span>
<span class="line"><span style="color:#4078F2;">        require</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;autoprefixer&#39;</span><span style="color:#383A42;">)</span></span>
<span class="line"><span style="color:#383A42;">    ]</span></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#383A42;">{</span></span>
<span class="line"><span style="color:#50A14F;">    &quot;browserslist&quot;</span><span style="color:#383A42;">: [</span></span>
<span class="line"><span style="color:#50A14F;">        &quot;&gt; 1%&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#50A14F;">        &quot;last 3 version&quot;</span></span>
<span class="line"><span style="color:#383A42;">    ]</span></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre></div>`,7)])])}const u=a(o,[["render",e]]);export{d as __pageData,u as default};
