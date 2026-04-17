import{_ as n,o as a,c as p,aw as l}from"./chunks/framework.DLufY-ao.js";const d=JSON.parse('{"title":"intercept","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/testing/cypress/fixtures/intercept.md","filePath":"wiki/dev-commit/testing/cypress/fixtures/intercept.md"}'),o={name:"wiki/dev-commit/testing/cypress/fixtures/intercept.md"};function e(t,s,c,r,y,i){return a(),p("div",null,[...s[0]||(s[0]=[l(`<h1 id="intercept" tabindex="-1">intercept <a class="header-anchor" href="#intercept" aria-label="Permalink to &quot;intercept&quot;">​</a></h1><pre><code>Перехват и подмена сетевых запросов
</code></pre><p>объект объект</p><details class="details custom-block"><summary>cy.intercept()</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#383A42;">cy.</span><span style="color:#4078F2;">intercept</span><span style="color:#383A42;">(</span></span>
<span class="line"><span style="color:#383A42;">	{</span></span>
<span class="line"><span style="color:#383A42;">        method?</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> S</span></span>
<span class="line"><span style="color:#383A42;">        url</span><span style="color:#0184BC;">?:</span><span style="color:#986801;"> S</span></span>
<span class="line"><span style="color:#383A42;">        path</span><span style="color:#0184BC;">?:</span><span style="color:#986801;"> S</span></span>
<span class="line"><span style="color:#383A42;">        pathname</span><span style="color:#0184BC;">?:</span><span style="color:#986801;"> S</span></span>
<span class="line"><span style="color:#383A42;">        query</span><span style="color:#0184BC;">?:</span><span style="color:#383A42;"> DictMatcher</span><span style="color:#0184BC;">&lt;</span><span style="color:#986801;">S</span><span style="color:#0184BC;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">        auth</span><span style="color:#0184BC;">?:</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">username</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> S</span><span style="color:#383A42;">, </span><span style="color:#E45649;">password</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> S</span><span style="color:#383A42;"> }</span></span>
<span class="line"><span style="color:#383A42;">        headers</span><span style="color:#0184BC;">?:</span><span style="color:#383A42;"> DictMatcher</span><span style="color:#0184BC;">&lt;</span><span style="color:#986801;">S</span><span style="color:#0184BC;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">        hostname</span><span style="color:#0184BC;">?:</span><span style="color:#986801;"> S</span></span>
<span class="line"><span style="color:#383A42;">        https</span><span style="color:#0184BC;">?:</span><span style="color:#383A42;"> boolean</span></span>
<span class="line"><span style="color:#383A42;">        middleware</span><span style="color:#0184BC;">?:</span><span style="color:#383A42;"> boolean</span></span>
<span class="line"><span style="color:#383A42;">        port</span><span style="color:#0184BC;">?:</span><span style="color:#383A42;"> NumberMatcher</span></span>
<span class="line"><span style="color:#383A42;">        times</span><span style="color:#0184BC;">?:</span><span style="color:#383A42;"> number</span></span>
<span class="line"><span style="color:#383A42;">    },</span></span>
<span class="line"><span style="color:#383A42;">	{</span></span>
<span class="line"><span style="color:#383A42;">        fixture?</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> Fixture</span></span>
<span class="line"><span style="color:#383A42;">        body</span><span style="color:#0184BC;">?:</span><span style="color:#383A42;"> Body</span></span>
<span class="line"><span style="color:#383A42;">        headers</span><span style="color:#0184BC;">?:</span><span style="color:#383A42;"> { [key</span><span style="color:#E45649;">: </span><span style="color:#383A42;">string]</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> string }</span></span>
<span class="line"><span style="color:#383A42;">        statusCode</span><span style="color:#0184BC;">?:</span><span style="color:#383A42;"> number </span><span style="color:#A0A1A7;font-style:italic;">// default 200</span></span>
<span class="line"><span style="color:#383A42;">        forceNetworkError</span><span style="color:#0184BC;">?:</span><span style="color:#383A42;"> boolean</span></span>
<span class="line"><span style="color:#383A42;">        throttleKbps</span><span style="color:#0184BC;">?:</span><span style="color:#383A42;"> number</span></span>
<span class="line"><span style="color:#383A42;">        delay</span><span style="color:#0184BC;">?:</span><span style="color:#383A42;"> number</span></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"><span style="color:#383A42;">)</span></span></code></pre></div></details><ul><li>Посмотреть описание аргументов можно по пути</li><li>node_modules\\cypress\\types\\net-stubbing.ts</li></ul><h2 id="использование" tabindex="-1">Использование <a class="header-anchor" href="#использование" aria-label="Permalink to &quot;Использование&quot;">​</a></h2><p>./cypress/fixtures/data.json</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#383A42;">{</span></span>
<span class="line"><span style="color:#50A14F;">    &quot;name&quot;</span><span style="color:#383A42;">: </span><span style="color:#50A14F;">&quot;Tony&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#50A14F;">    &quot;age&quot;</span><span style="color:#383A42;">: </span><span style="color:#986801;">25</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"><span style="color:#50A14F;">\`\`\`./cypress/support/utils.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#50A14F;">\`\`\`</span><span style="color:#383A42;">js</span></span>
<span class="line"><span style="color:#383A42;">Cypress.</span><span style="color:#E45649;">Commands</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">add</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;interceptData&#39;</span><span style="color:#383A42;">, () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">    return</span><span style="color:#383A42;"> cy.</span><span style="color:#4078F2;">intercept</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;GET&#39;</span><span style="color:#383A42;">, </span><span style="color:#50A14F;">&#39;http://localhost:8080/api&#39;</span><span style="color:#383A42;">, {</span></span>
<span class="line"><span style="color:#E45649;">        statusCode</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> 200</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">        fixture</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &#39;data.json&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">    });</span></span>
<span class="line"><span style="color:#383A42;">});</span></span>
<span class="line"><span style="color:#50A14F;">\`\`\`./cypress/integration/test.spec.ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#50A14F;">\`\`\`</span><span style="color:#383A42;">js</span></span>
<span class="line"><span style="color:#4078F2;">describe</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;user create page&#39;</span><span style="color:#383A42;">, () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#4078F2;">    beforeEach</span><span style="color:#383A42;">(() </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">        cy.</span><span style="color:#4078F2;">interceptData</span><span style="color:#383A42;">().</span><span style="color:#4078F2;">as</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;data&#39;</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#383A42;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">    it</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;check create button&#39;</span><span style="color:#383A42;">, () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">        //</span></span>
<span class="line"><span style="color:#383A42;">    });</span></span>
<span class="line"><span style="color:#383A42;">});</span></span></code></pre></div>`,8)])])}const u=n(o,[["render",e]]);export{d as __pageData,u as default};
