import{_ as a,o as n,c as l,aw as e}from"./chunks/framework.DLufY-ao.js";const m=JSON.parse('{"title":"Перенос репозитория","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/main/git/usecase/repo-transfer.md","filePath":"wiki/dev-commit/main/git/usecase/repo-transfer.md"}'),p={name:"wiki/dev-commit/main/git/usecase/repo-transfer.md"};function o(t,s,r,i,c,d){return n(),l("div",null,[...s[0]||(s[0]=[e(`<h1 id="перенос-репозитория" tabindex="-1">Перенос репозитория <a class="header-anchor" href="#перенос-репозитория" aria-label="Permalink to &quot;Перенос репозитория&quot;">​</a></h1><h2 id="clone" tabindex="-1">clone <a class="header-anchor" href="#clone" aria-label="Permalink to &quot;clone&quot;">​</a></h2><ul><li>Команда используется для полной синхронизации содержимого одного удалённого репозитория с другим</li><li>Она копирует все ветки, теги и рефы из локального репозитория в указанный удалённый репозиторий, полностью заменяя его содержимое</li><li>Это создаёт &quot;зеркальный&quot; локальный репозиторий, который хранит все ветки и теги</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#383A42;">git clone</span><span style="color:#0184BC;">--</span><span style="color:#4078F2;">mirrorUrlИсходногоРепозитория</span><span style="color:#50A14F;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#50A14F;">## push</span></span>
<span class="line"></span>
<span class="line"><span style="color:#50A14F;">- Команда перенесёт все данные из локального зеркального репозитория в указанный удалённый репозиторий</span></span>
<span class="line"></span>
<span class="line"><span style="color:#50A14F;">\`\`\`</span><span style="color:#383A42;">js</span></span>
<span class="line"><span style="color:#383A42;">git push</span><span style="color:#0184BC;">--</span><span style="color:#4078F2;">mirrorUrlНовогоРепозитория</span><span style="color:#50A14F;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#50A14F;">#### Варианты</span></span>
<span class="line"></span>
<span class="line"><span style="color:#50A14F;">- git push --all - отправляет только все ветки, но не теги, при этом, если в новом репозитории уже есть ветки, то они останутся</span></span>
<span class="line"><span style="color:#50A14F;">- git push --tags - отправляет только теги</span></span>
<span class="line"><span style="color:#50A14F;">- git push --mirror - отправляет всё (ветки, теги, рефы) и заменяет содержимое удалённого репозитория</span></span></code></pre></div>`,4)])])}const _=a(p,[["render",o]]);export{m as __pageData,_ as default};
