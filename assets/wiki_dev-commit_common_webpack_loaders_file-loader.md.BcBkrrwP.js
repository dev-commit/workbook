import{_ as a,o as n,c as l,aw as t}from"./chunks/framework.DLufY-ao.js";const A=JSON.parse('{"title":"file-loader","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/common/webpack/loaders/file-loader.md","filePath":"wiki/dev-commit/common/webpack/loaders/file-loader.md"}'),e={name:"wiki/dev-commit/common/webpack/loaders/file-loader.md"};function p(o,s,c,r,i,y){return n(),l("div",null,[...s[0]||(s[0]=[t(`<h1 id="file-loader" tabindex="-1">file-loader <a class="header-anchor" href="#file-loader" aria-label="Permalink to &quot;file-loader&quot;">​</a></h1><p>npm i --save-dev file-loader</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#E45649;">module</span><span style="color:#383A42;">.</span><span style="color:#E45649;">exports</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">	module</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">		rules</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> [</span></span>
<span class="line"><span style="color:#383A42;">			{</span></span>
<span class="line"><span style="color:#E45649;">				test</span><span style="color:#0184BC;">:</span><span style="color:#0184BC;"> /\\.(jpe?g|png|svg|gif|ico)</span><span style="color:#A626A4;">$</span><span style="color:#0184BC;">/</span><span style="color:#A626A4;">i</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">				use</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> [</span></span>
<span class="line"><span style="color:#383A42;">					{</span></span>
<span class="line"><span style="color:#E45649;">						loader</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &#39;file-loader&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">						options</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">							name</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &#39;[path][name].[ext]&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">							//name:&#39;[name].[ext]&#39;</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">							//outputPath: &#39;./&#39;</span></span>
<span class="line"><span style="color:#383A42;">						}</span></span>
<span class="line"><span style="color:#383A42;">					},</span></span>
<span class="line"><span style="color:#383A42;">				],</span></span>
<span class="line"><span style="color:#383A42;">				},</span></span>
<span class="line"><span style="color:#383A42;">		],</span></span>
<span class="line"><span style="color:#383A42;">	},</span></span>
<span class="line"><span style="color:#383A42;">};</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#4078F2;">name:</span><span style="color:#50A14F;"> &#39;[path][name].[ext]&#39;</span></span>
<span class="line"><span style="color:#4078F2;">name:</span><span style="color:#50A14F;"> &#39;[name].[ext]&#39;</span></span></code></pre></div>`,4)])])}const m=a(e,[["render",p]]);export{A as __pageData,m as default};
