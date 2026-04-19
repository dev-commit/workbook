import{_ as a,o as n,c as l,aw as p}from"./chunks/framework.DLufY-ao.js";const A=JSON.parse('{"title":"postcss-loader","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/common/webpack/postcss/postcss-loader.md","filePath":"wiki/dev-commit/common/webpack/postcss/postcss-loader.md"}'),o={name:"wiki/dev-commit/common/webpack/postcss/postcss-loader.md"};function e(c,s,t,r,i,y){return n(),l("div",null,[...s[0]||(s[0]=[p(`<h1 id="postcss-loader" tabindex="-1">postcss-loader <a class="header-anchor" href="#postcss-loader" aria-label="Permalink to &quot;postcss-loader&quot;">​</a></h1><p>npm i --save-dev postcss-loader</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p><a href="https://github.com/postcss/postcss/blob/master/docs/plugins.md" target="_blank" rel="noreferrer">https://github.com/postcss/postcss/blob/master/docs/plugins.md</a></p></div><h2 id="подключение-через-webpack-config-js" tabindex="-1">Подключение через webpack.config.js <a class="header-anchor" href="#подключение-через-webpack-config-js" aria-label="Permalink to &quot;Подключение через webpack.config.js&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#383A42;">module: {</span></span>
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
<span class="line"><span style="color:#A0A1A7;font-style:italic;">                            //</span></span>
<span class="line"><span style="color:#383A42;">                        ],</span></span>
<span class="line"><span style="color:#E45649;">                        sourceMap</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> true</span></span>
<span class="line"><span style="color:#383A42;">                    }</span></span>
<span class="line"><span style="color:#383A42;">                },</span></span>
<span class="line"><span style="color:#50A14F;">                &#39;sass-loader&#39;</span></span>
<span class="line"><span style="color:#383A42;">            ]</span></span>
<span class="line"><span style="color:#383A42;">        },</span></span>
<span class="line"><span style="color:#383A42;">    ]</span></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre></div><h2 id="подключение-через-postcss-config-js" tabindex="-1">Подключение через postcss.config.js <a class="header-anchor" href="#подключение-через-postcss-config-js" aria-label="Permalink to &quot;Подключение через postcss.config.js&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#383A42;">module: {</span></span>
<span class="line"><span style="color:#383A42;">    rules: [</span></span>
<span class="line"><span style="color:#383A42;">        {</span></span>
<span class="line"><span style="color:#E45649;">            test</span><span style="color:#0184BC;">:</span><span style="color:#0184BC;"> /\\.scss/</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">            use</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> [</span></span>
<span class="line"><span style="color:#383A42;">                MiniCssExtractPlugin.</span><span style="color:#C18401;">loader</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#50A14F;">                &#39;css-loader&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">                {</span></span>
<span class="line"><span style="color:#E45649;">                    loader</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &#39;postcss-loader&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">                    options</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">                        config</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">path</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &#39;./postcss.config.js&#39;</span><span style="color:#383A42;"> },</span></span>
<span class="line"><span style="color:#E45649;">                        sourceMap</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> true</span></span>
<span class="line"><span style="color:#383A42;">                    }</span></span>
<span class="line"><span style="color:#383A42;">                },</span></span>
<span class="line"><span style="color:#50A14F;">                &#39;sass-loader&#39;</span></span>
<span class="line"><span style="color:#383A42;">            ]</span></span>
<span class="line"><span style="color:#383A42;">        },</span></span>
<span class="line"><span style="color:#383A42;">    ]</span></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#E45649;">module</span><span style="color:#383A42;">.</span><span style="color:#E45649;">exports</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">    plugins</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> [</span></span>
<span class="line"><span style="color:#4078F2;">        require</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;autoprefixer&#39;</span><span style="color:#383A42;">),</span></span>
<span class="line"><span style="color:#4078F2;">        require</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;css-mqpacker&#39;</span><span style="color:#383A42;">),</span></span>
<span class="line"><span style="color:#4078F2;">        require</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;cssnano&#39;</span><span style="color:#383A42;">)</span></span>
<span class="line"><span style="color:#383A42;">    ]</span></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre></div>`,8)])])}const u=a(o,[["render",e]]);export{A as __pageData,u as default};
