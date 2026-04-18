import{_ as n,o as a,c as t,aw as e}from"./chunks/framework.DLufY-ao.js";const m=JSON.parse('{"title":"Установка и настройка","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/framework-react/next-js/main/install.md","filePath":"wiki/dev-commit/framework-react/next-js/main/install.md"}'),p={name:"wiki/dev-commit/framework-react/next-js/main/install.md"};function l(o,s,i,u,c,r){return a(),t("div",null,[...s[0]||(s[0]=[e(`<h1 id="установка-и-настроика" tabindex="-1">Установка и настройка <a class="header-anchor" href="#установка-и-настроика" aria-label="Permalink to &quot;Установка и настройка&quot;">​</a></h1><ul><li>create-next-app@latest - автоматической создание базового проекта и установка зависимостей</li></ul><p>npx create-next-app@latest</p><pre><code>У Next.js 2 версии роутера. При установке спросит, какой использовать:
</code></pre><ul><li>App Router (recomended)</li><li>Pages Router (старый)</li></ul><div class="language-plaintext"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span>&gt; npx create-next-app@latest</span></span>
<span class="line"><span>√ What is your project named? ... my-app</span></span>
<span class="line"><span>√ Would you like to use TypeScript? ... No /Yes√ Would you like to use ESLint? ... No /Yes√ Would you like to use Tailwind CSS? ...No/ Yes</span></span>
<span class="line"><span>√ Would you like to use \`src/\` directory? ...No/ Yes</span></span>
<span class="line"><span>√ Would you like to use App Router? (recommended) ... No /Yes√ Would you like to customize the default import alias (@/*)? ...No/ Yes</span></span>
<span class="line"><span>\`\`\`package.json</span></span>
<span class="line"><span>- npm run dev - server</span></span>
<span class="line"><span>- npm run build - build</span></span>
<span class="line"><span>- npm run start - start a Next.js production server (выдаёт ошибку)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`json</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>	&quot;name&quot;: &quot;project-name&quot;,</span></span>
<span class="line"><span>	&quot;scripts&quot;: {</span></span>
<span class="line"><span>		&quot;dev&quot;: &quot;next dev&quot;,</span></span>
<span class="line"><span>		&quot;build&quot;: &quot;next build&quot;,</span></span>
<span class="line"><span>		&quot;start&quot;: &quot;next start&quot;</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	&quot;dependencies&quot;: {</span></span>
<span class="line"><span>		&quot;next&quot;: &quot;13.4.13&quot;,</span></span>
<span class="line"><span>		&quot;react&quot;: &quot;18.2.0&quot;,</span></span>
<span class="line"><span>		&quot;react-dom&quot;: &quot;18.2.0&quot;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,6)])])}const q=n(p,[["render",l]]);export{m as __pageData,q as default};
