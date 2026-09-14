import{_ as a,o as n,c as l,aw as o}from"./chunks/framework.DLufY-ao.js";const d=JSON.parse('{"title":"Документация на MDX","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/framework-react/storybook/use/mdx.md","filePath":"wiki/dev-commit/framework-react/storybook/use/mdx.md"}'),p={name:"wiki/dev-commit/framework-react/storybook/use/mdx.md"};function t(e,s,c,r,i,y){return n(),l("div",null,[...s[0]||(s[0]=[o(`<h1 id="документация-на-mdx" tabindex="-1">Документация на MDX <a class="header-anchor" href="#документация-на-mdx" aria-label="Permalink to &quot;Документация на MDX&quot;">​</a></h1><h2 id="информация" tabindex="-1">Информация <a class="header-anchor" href="#информация" aria-label="Permalink to &quot;Информация&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><ul><li><a href="https://storybook.js.org/docs/writing-docs/autodocs" target="_blank" rel="noreferrer">https://storybook.js.org/docs/writing-docs/autodocs</a> - Automatic documentation and Storybook</li><li><a href="https://storybook.js.org/docs/writing-docs/doc-blocks" target="_blank" rel="noreferrer">https://storybook.js.org/docs/writing-docs/doc-blocks</a> - Виды блоков</li><li><a href="https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx" target="_blank" rel="noreferrer">https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx</a> - MDX (VSCode Plugin)</li></ul></div><h2 id="пример" tabindex="-1">Пример <a class="header-anchor" href="#пример" aria-label="Permalink to &quot;Пример&quot;">​</a></h2><blockquote><p>Нужно добавить файл рядос с компонентом</p></blockquote><blockquote><p>Файл &quot;UiButton.mdx&quot;</p></blockquote><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">  Meta</span><span style="color:#383A42;">, </span><span style="color:#E45649;">Title</span><span style="color:#383A42;">, </span><span style="color:#E45649;">Subtitle</span><span style="color:#383A42;">, </span><span style="color:#E45649;">Description</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">  Primary</span><span style="color:#383A42;">, </span><span style="color:#E45649;">Stories</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">  Canvas</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">  Controls</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">} </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &quot;@storybook/addon-docs/blocks&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#0184BC;"> *</span><span style="color:#383A42;"> as </span><span style="color:#E45649;">UiButtonStories</span><span style="color:#A626A4;"> from</span><span style="color:#50A14F;"> &quot;./UiButton.stories&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">{</span><span style="color:#A0A1A7;font-style:italic;">/* Привязывает эту страницу к файлу историй: без него остальные блоки не знают, о каком компоненте речь */</span><span style="color:#383A42;">}</span></span>
<span class="line"><span style="color:#383A42;">&lt;</span><span style="color:#C18401;">Meta</span><span style="color:#986801;"> of</span><span style="color:#383A42;">={UiButtonStories} /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">{</span><span style="color:#A0A1A7;font-style:italic;">/* Заголовок страницы, берётся из meta.title файла историй */</span><span style="color:#383A42;">}</span></span>
<span class="line"><span style="color:#383A42;">&lt;</span><span style="color:#C18401;">Title</span><span style="color:#383A42;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">{</span><span style="color:#A0A1A7;font-style:italic;">/* Короткое описание под заголовком — зачем нужен компонент */</span><span style="color:#383A42;">}</span></span>
<span class="line"><span style="color:#383A42;">&lt;</span><span style="color:#C18401;">Subtitle</span><span style="color:#383A42;">&gt;UI-кнопка с темами оформления и поддержкой состояния disabled.&lt;/</span><span style="color:#C18401;">Subtitle</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">## Основная история</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">{</span><span style="color:#A0A1A7;font-style:italic;">/* Показывает первую историю из файла как «эталонный» пример компонента */</span><span style="color:#383A42;">}</span></span>
<span class="line"><span style="color:#383A42;">&lt;</span><span style="color:#C18401;">Primary</span><span style="color:#383A42;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">## Пример</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">{</span><span style="color:#A0A1A7;font-style:italic;">/* Песочница с конкретной историей: рендер компонента + исходный код */</span><span style="color:#383A42;">}</span></span>
<span class="line"><span style="color:#383A42;">&lt;</span><span style="color:#C18401;">Canvas</span><span style="color:#986801;"> of</span><span style="color:#383A42;">={</span><span style="color:#E45649;">UiButtonStories</span><span style="color:#383A42;">.</span><span style="color:#E45649;">Basic</span><span style="color:#383A42;">} /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">## Props</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">{</span><span style="color:#A0A1A7;font-style:italic;">/* Таблица props с интерактивными контролами (настраивается через argTypes в историях) */</span><span style="color:#383A42;">}</span></span>
<span class="line"><span style="color:#383A42;">&lt;</span><span style="color:#C18401;">Controls</span><span style="color:#383A42;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">## Все истории</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">{</span><span style="color:#A0A1A7;font-style:italic;">/* Выводит подряд все остальные истории файла, чтобы показать варианты использования */</span><span style="color:#383A42;">}</span></span>
<span class="line"><span style="color:#383A42;">&lt;</span><span style="color:#C18401;">Stories</span><span style="color:#383A42;"> /&gt;</span></span></code></pre></div>`,7)])])}const m=a(p,[["render",t]]);export{d as __pageData,m as default};
