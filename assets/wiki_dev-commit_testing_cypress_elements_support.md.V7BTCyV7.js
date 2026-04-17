import{_ as n,o as a,c as l,aw as t}from"./chunks/framework.DLufY-ao.js";const m=JSON.parse('{"title":"Support","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/testing/cypress/elements/support.md","filePath":"wiki/dev-commit/testing/cypress/elements/support.md"}'),e={name:"wiki/dev-commit/testing/cypress/elements/support.md"};function o(p,s,i,c,r,A){return a(),l("div",null,[...s[0]||(s[0]=[t(`<h1 id="support" tabindex="-1">Support <a class="header-anchor" href="#support" aria-label="Permalink to &quot;Support&quot;">​</a></h1><p>./cypress/support/</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p><a href="https://docs.cypress.io/api/cypress-api/custom-commands" target="_blank" rel="noreferrer">https://docs.cypress.io/api/cypress-api/custom-commands</a></p></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A0A1A7;font-style:italic;">// ***********************************************************</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// This example support/index.js is processed and</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// loaded automatically before your test files.</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">//</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// This is a great place to put global configuration and</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// behavior that modifies Cypress.</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">//</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// You can change the location of this file or turn off</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// automatically serving support files with the</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// &#39;supportFile&#39; configuration option.</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">//</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// You can read more here:</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// https://on.cypress.io/configuration</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// ***********************************************************</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Import commands.js using ES2015 syntax:</span></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#50A14F;"> &quot;./commands&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Alternatively you can use CommonJS syntax:</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// require(&#39;./commands&#39;)</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A0A1A7;font-style:italic;">// ***********************************************</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// This example commands.js shows you how to</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// create various custom commands and overwrite</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// existing commands.</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">//</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// For more comprehensive examples of custom</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// commands please read more here:</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// https://on.cypress.io/custom-commands</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// ***********************************************</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">//</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">//</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// -- This is a parent command --</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Cypress.Commands.add(&#39;login&#39;, (email, password) =&gt; { ... })</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">//</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">//</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// -- This is a child command --</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Cypress.Commands.add(&#39;drag&#39;, { prevSubject: &#39;element&#39;}, (subject, options) =&gt; { ... })</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">//</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">//</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// -- This is a dual command --</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Cypress.Commands.add(&#39;dismiss&#39;, { prevSubject: &#39;optional&#39;}, (subject, options) =&gt; { ... })</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">//</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">//</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// -- This will overwrite an existing command --</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Cypress.Commands.overwrite(&#39;visit&#39;, (originalFn, url, options) =&gt; { ... })</span></span></code></pre></div>`,5)])])}const d=n(e,[["render",o]]);export{m as __pageData,d as default};
