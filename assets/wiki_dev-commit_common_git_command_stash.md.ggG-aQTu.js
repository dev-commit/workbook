import{_ as a,o as n,c as l,aw as p}from"./chunks/framework.DLufY-ao.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/common/git/command/stash.md","filePath":"wiki/dev-commit/common/git/command/stash.md"}'),t={name:"wiki/dev-commit/common/git/command/stash.md"};function o(e,s,c,i,r,y){return n(),l("div",null,[...s[0]||(s[0]=[p(`<p>Сменить ветку, не теряя текущих незакоммиченных правок</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p><a href="https://www.atlassian.com/ru/git/tutorials/saving-changes/git-stash" target="_blank" rel="noreferrer">https://www.atlassian.com/ru/git/tutorials/saving-changes/git-stash</a></p></div><h2 id="алгоритм" tabindex="-1">Алгоритм <a class="header-anchor" href="#алгоритм" aria-label="Permalink to &quot;Алгоритм&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#4078F2;">›</span><span style="color:#50A14F;"> git</span><span style="color:#50A14F;"> add</span><span style="color:#50A14F;"> .</span></span>
<span class="line"><span style="color:#4078F2;">›</span><span style="color:#50A14F;"> git</span><span style="color:#50A14F;"> stash</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"># сменить ветку</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"># вернуться обратно на ветку, где был stash</span></span>
<span class="line"><span style="color:#4078F2;">›</span><span style="color:#50A14F;"> git</span><span style="color:#50A14F;"> stash</span><span style="color:#50A14F;"> pop</span></span></code></pre></div><h2 id="категории-фаилов-для-stash" tabindex="-1">Категории файлов для stash <a class="header-anchor" href="#категории-фаилов-для-stash" aria-label="Permalink to &quot;Категории файлов для stash&quot;">​</a></h2><p>По умолчанию команда git stash создает следующие отложенные изменения:</p><ul><li>Изменения, добавленные в раздел проиндексированных файлов (индексированные изменения)</li><li>Изменения в файлах, отслеживаемых Git в настоящее время (неиндексированные изменения)</li></ul><p>При этом следующие файлы отложены не будут:</p><ul><li>Новые файлы в рабочей копии, которые еще не были проиндексированы</li><li>Игнорируемые файлы</li></ul><h2 id="операции" tabindex="-1">Операции <a class="header-anchor" href="#операции" aria-label="Permalink to &quot;Операции&quot;">​</a></h2><h3 id="сохранение-состояния-рабочеи-директории-и-индекса" tabindex="-1">Сохранение состояния рабочей директории и Индекса <a class="header-anchor" href="#сохранение-состояния-рабочеи-директории-и-индекса" aria-label="Permalink to &quot;Сохранение состояния рабочей директории и Индекса&quot;">​</a></h3><ul><li>Команда git stash сохраняет неподтвержденные изменения (индексированные и неиндексированные) в отдельном хранилище, чтобы можно вернуться к ним позже. Затем происходит откат до исходной рабочей копии</li><li>Отложенные изменения сохраняются в локальном репозитории Git и не передаются на сервер при выполнении команды push</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#4078F2;">gitstash</span><span style="color:#50A14F;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">### Применение отложенных изменений</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">-</span><span style="color:#50A14F;"> При извлечении отложенных изменений они удаляются из набора и применяются к рабочей копии</span></span>
<span class="line"></span>
<span class="line"><span style="color:#50A14F;">\`\`\`</span><span style="color:#4078F2;">bash</span></span>
<span class="line"><span style="color:#4078F2;">git</span><span style="color:#50A14F;"> stashpop\`\`\`</span></span>
<span class="line"><span style="color:#4078F2;">-</span><span style="color:#50A14F;"> Также можно применить изменения к рабочей копии, не удаляя их из набора отложенных изменений</span></span>
<span class="line"><span style="color:#4078F2;">-</span><span style="color:#50A14F;"> Это полезно, если нужно применить одни и те же отложенные изменения к нескольким веткам</span></span>
<span class="line"></span>
<span class="line"><span style="color:#50A14F;">\`\`\`</span><span style="color:#4078F2;">bash</span></span>
<span class="line"><span style="color:#4078F2;">git</span><span style="color:#50A14F;"> stashapply\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">### Откладывание неотслеживаемых или игнорируемых файлов</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">-</span><span style="color:#50A14F;"> Позволяет отложить неотслеживаемые файлы</span></span>
<span class="line"></span>
<span class="line"><span style="color:#50A14F;">\`\`\`</span><span style="color:#4078F2;">bash</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"># аналогично</span></span>
<span class="line"><span style="color:#4078F2;">git</span><span style="color:#50A14F;"> stash-ugit</span><span style="color:#50A14F;"> stash--include-untracked\`\`\`</span></span>
<span class="line"><span style="color:#4078F2;">-</span><span style="color:#50A14F;"> Позволяет отложить изменения, внесенные в игнорируемые файлы</span></span>
<span class="line"></span>
<span class="line"><span style="color:#50A14F;">\`\`\`</span><span style="color:#4078F2;">bash</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"># аналогично</span></span>
<span class="line"><span style="color:#4078F2;">git</span><span style="color:#50A14F;"> stash-agit</span><span style="color:#50A14F;"> stash--all\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">### Удаление отложенных изменений</span></span>
<span class="line"></span>
<span class="line"><span style="color:#50A14F;">\`\`\`</span><span style="color:#4078F2;">bash</span></span>
<span class="line"><span style="color:#4078F2;">git</span><span style="color:#50A14F;"> stashdropstash@{</span><span style="color:#986801;">1</span><span style="color:#50A14F;">}</span><span style="color:#A0A1A7;font-style:italic;"> # Удалить определенный набор отложенных изменений</span></span>
<span class="line"><span style="color:#4078F2;">git</span><span style="color:#50A14F;"> stashclear#</span><span style="color:#50A14F;"> Удалить</span><span style="color:#50A14F;"> все</span><span style="color:#50A14F;"> наборы</span><span style="color:#50A14F;"> отложенных</span><span style="color:#50A14F;"> изменений</span></span></code></pre></div>`,13)])])}const F=a(t,[["render",o]]);export{A as __pageData,F as default};
