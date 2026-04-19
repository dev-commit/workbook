import{_ as n,o as a,c as l,aw as p}from"./chunks/framework.DLufY-ao.js";const d=JSON.parse('{"title":"ModuleFederationPlugin","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/common/webpack/module-federation/ModuleFederationPlugin.md","filePath":"wiki/dev-commit/common/webpack/module-federation/ModuleFederationPlugin.md"}'),o={name:"wiki/dev-commit/common/webpack/module-federation/ModuleFederationPlugin.md"};function e(t,s,c,r,i,y){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h1 id="modulefederationplugin" tabindex="-1">ModuleFederationPlugin <a class="header-anchor" href="#modulefederationplugin" aria-label="Permalink to &quot;ModuleFederationPlugin&quot;">​</a></h1><h2 id="webpack-config-js" tabindex="-1">webpack.config.js <a class="header-anchor" href="#webpack-config-js" aria-label="Permalink to &quot;webpack.config.js&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> ModuleFederationPlugin</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> require</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;webpack/lib/container/ModuleFederationPlugin&#39;</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// const ModuleFederationPlugin = require(&#39;webpack&#39;).container.ModuleFederationPlugin;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> deps</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> require</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;./package.json&#39;</span><span style="color:#383A42;">).</span><span style="color:#E45649;">dependencies</span><span style="color:#383A42;">;</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#E45649;">module</span><span style="color:#383A42;">.</span><span style="color:#E45649;">exports</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">    plugins </span><span style="color:#0184BC;">=</span><span style="color:#383A42;"> [</span></span>
<span class="line"><span style="color:#A626A4;">        new</span><span style="color:#4078F2;"> ModuleFederationPlugin</span><span style="color:#383A42;">({</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">            // Уникальный идентификатор модуля для import .... from &#39;header/App&#39;</span></span>
<span class="line"><span style="color:#E45649;">            name</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &#39;header&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">            // Имя файла точки входа при выборке объединенного модуля</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">            // В этом файле будет весь экспорт приложения для внешних получателей</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">            // Будет связано в теге &lt;script&gt; в приложении, использующем этот модуль</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">            // remoteEntry.js - другой бандл, чьи некоторые части может импортировать host</span></span>
<span class="line"><span style="color:#E45649;">            filename</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &#39;remoteEntry.js&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">            // Модули, которые доступны для импорта в текущем модуле</span></span>
<span class="line"><span style="color:#E45649;">            remotes</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">                home</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;home@http://localhost:3001/remoteEntry.js&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">            },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">            // Модули, которые будут доступны другим приложениям для импорта</span></span>
<span class="line"><span style="color:#E45649;">            exposes</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#50A14F;">                &#39;./App&#39;</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &#39;./src/App&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">            },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">            // Модули, которые могут быть общими для всего приложения</span></span>
<span class="line"><span style="color:#E45649;">            shared</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#0184BC;">                ...</span><span style="color:#383A42;">deps,</span></span>
<span class="line"><span style="color:#E45649;">                react</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">                    // Позволяет оставаться на текущей версии библиотеки,</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">                    // Даже если подгрузился remote с более новой версией</span></span>
<span class="line"><span style="color:#E45649;">                    singleton</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> true</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">                    // Требуемая версия</span></span>
<span class="line"><span style="color:#E45649;">                    requiredVersion</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> deps.</span><span style="color:#C18401;">react</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">                    // Связано с асинхронным режимом (?)</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">                    // Если &quot;true&quot;, то не нужно указывать динамический импорт (?)</span></span>
<span class="line"><span style="color:#E45649;">                    eager</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> true</span><span style="color:#383A42;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">                    // Под этим именем общий модуль будет помещен в область общего доступа</span></span>
<span class="line"><span style="color:#E45649;">                    shareKey</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &#39;react&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">                    // Будет использоваться область общего доступа с этим именем</span></span>
<span class="line"><span style="color:#E45649;">                    shareScope</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &#39;legacy&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">                },</span></span>
<span class="line"><span style="color:#383A42;">            },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">            // Библиотека (?)</span></span>
<span class="line"><span style="color:#E45649;">            library</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">                // Тип: &#39;var&#39; | &#39;global&#39;</span></span>
<span class="line"><span style="color:#E45649;">                type</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &#39;var&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">                // Название</span></span>
<span class="line"><span style="color:#E45649;">                name</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &#39;header&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">            },</span></span>
<span class="line"><span style="color:#383A42;">            }),</span></span>
<span class="line"><span style="color:#383A42;">    ];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E45649;">    entry</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &#39;./src/index&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E45649;">    output</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">        publicPath</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &#39;http://localhost:3003/&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">    },</span></span>
<span class="line"><span style="color:#383A42;">};</span></span></code></pre></div>`,4)])])}const u=n(o,[["render",e]]);export{d as __pageData,u as default};
