import{_ as a,o as n,c as p,aw as l}from"./chunks/framework.DLufY-ao.js";const m=JSON.parse('{"title":"image-webpack-loader","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/common2/webpack/loaders/image-webpack-loader.md","filePath":"wiki/dev-commit/common2/webpack/loaders/image-webpack-loader.md"}'),o={name:"wiki/dev-commit/common2/webpack/loaders/image-webpack-loader.md"};function e(c,s,t,r,i,y){return n(),p("div",null,[...s[0]||(s[0]=[l(`<h1 id="image-webpack-loader" tabindex="-1">image-webpack-loader <a class="header-anchor" href="#image-webpack-loader" aria-label="Permalink to &quot;image-webpack-loader&quot;">​</a></h1><p>npm i --save-dev image-webpack-loader # оптимизация изображений</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p><a href="https://github.com/tcoopman/image-webpack-loader" target="_blank" rel="noreferrer">https://github.com/tcoopman/image-webpack-loader</a></p></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#E45649;">module</span><span style="color:#383A42;">.</span><span style="color:#E45649;">exports</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">    module</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">        rules</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> [</span></span>
<span class="line"><span style="color:#383A42;">            {</span></span>
<span class="line"><span style="color:#E45649;">                test</span><span style="color:#0184BC;">:</span><span style="color:#0184BC;"> /\\.(jpe?g|png|svg|gif)</span><span style="color:#A626A4;">$</span><span style="color:#0184BC;">/</span><span style="color:#A626A4;">i</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">                use</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> [</span></span>
<span class="line"><span style="color:#383A42;">                    {</span></span>
<span class="line"><span style="color:#E45649;">                        loader</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &#39;image-webpack-loader&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">                        options</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">                            mozjpeg</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">                                progressive</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> true</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">                                quality</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 70</span></span>
<span class="line"><span style="color:#383A42;">                            },</span></span>
<span class="line"><span style="color:#E45649;">                            optipng</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">                                enabled</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> false</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">                            },</span></span>
<span class="line"><span style="color:#E45649;">                            pngquant</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">                                quality</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &#39;65-90&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">                                speed</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 4</span></span>
<span class="line"><span style="color:#383A42;">                            },</span></span>
<span class="line"><span style="color:#E45649;">                            gifsicle</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">                                interlaced</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> false</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">                            },</span></span>
<span class="line"><span style="color:#E45649;">                            webp</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">                                quality</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 75</span></span>
<span class="line"><span style="color:#383A42;">                            }</span></span>
<span class="line"><span style="color:#383A42;">                        }</span></span>
<span class="line"><span style="color:#383A42;">                    }</span></span>
<span class="line"><span style="color:#383A42;">                ],</span></span>
<span class="line"><span style="color:#383A42;">                }</span></span>
<span class="line"><span style="color:#383A42;">        ]</span></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre></div><p>Оптимизированные изображения в build подгружаются на страницу, но не открываются в просмотре изображений Windows. Если не указывать &quot;options&quot;, то изображения открываются в просмотре изображений Windows</p>`,5)])])}const A=a(o,[["render",e]]);export{m as __pageData,A as default};
