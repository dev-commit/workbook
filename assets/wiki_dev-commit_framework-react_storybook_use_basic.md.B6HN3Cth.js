import{_ as n,o as a,c as l,aw as o}from"./chunks/framework.DLufY-ao.js";const u=JSON.parse('{"title":"Базовый пример","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/framework-react/storybook/use/basic.md","filePath":"wiki/dev-commit/framework-react/storybook/use/basic.md"}'),p={name:"wiki/dev-commit/framework-react/storybook/use/basic.md"};function t(e,s,c,r,y,A){return a(),l("div",null,[...s[0]||(s[0]=[o(`<h1 id="базовыи-пример" tabindex="-1">Базовый пример <a class="header-anchor" href="#базовыи-пример" aria-label="Permalink to &quot;Базовый пример&quot;">​</a></h1><h2 id="пример" tabindex="-1">Пример <a class="header-anchor" href="#пример" aria-label="Permalink to &quot;Пример&quot;">​</a></h2><blockquote><p>stories/UiButton.tsx</p></blockquote><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#E45649;"> MUIButton</span><span style="color:#A626A4;"> from</span><span style="color:#50A14F;"> &quot;@mui/material/Button&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">interface</span><span style="color:#C18401;"> IProps</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">  children</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> React</span><span style="color:#383A42;">.</span><span style="color:#C18401;">ReactNode</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">  variant</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;text&quot;</span><span style="color:#0184BC;"> |</span><span style="color:#50A14F;"> &quot;outlined&quot;</span><span style="color:#0184BC;"> |</span><span style="color:#50A14F;"> &quot;contained&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">  disabled</span><span style="color:#0184BC;">?:</span><span style="color:#0184BC;"> boolean</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#4078F2;">  onClick</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> (event</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> React</span><span style="color:#383A42;">.</span><span style="color:#C18401;">SyntheticEvent</span><span style="color:#383A42;">) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#0184BC;"> void</span><span style="color:#0184BC;"> |</span><span style="color:#0184BC;"> null</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#4078F2;"> UiButton</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> React</span><span style="color:#383A42;">.</span><span style="color:#C18401;">FC</span><span style="color:#383A42;">&lt;</span><span style="color:#C18401;">IProps</span><span style="color:#383A42;">&gt; </span><span style="color:#0184BC;">=</span><span style="color:#383A42;"> (props) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  const</span><span style="color:#383A42;"> { </span><span style="color:#986801;">children</span><span style="color:#383A42;">, </span><span style="color:#986801;">variant</span><span style="color:#383A42;">, </span><span style="color:#986801;">onClick</span><span style="color:#383A42;">, </span><span style="color:#986801;">disabled</span><span style="color:#0184BC;"> =</span><span style="color:#986801;"> false</span><span style="color:#383A42;"> } </span><span style="color:#0184BC;">=</span><span style="color:#383A42;"> props;</span></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#383A42;"> (</span></span>
<span class="line"><span style="color:#383A42;">    &lt;</span><span style="color:#C18401;">MUIButton</span><span style="color:#986801;"> onClick</span><span style="color:#383A42;">={onClick} </span><span style="color:#986801;">variant</span><span style="color:#383A42;">={variant} </span><span style="color:#986801;">disabled</span><span style="color:#383A42;">={disabled}&gt;</span></span>
<span class="line"><span style="color:#383A42;">      {children}</span></span>
<span class="line"><span style="color:#383A42;">    &lt;/</span><span style="color:#C18401;">MUIButton</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">  );</span></span>
<span class="line"><span style="color:#383A42;">};</span></span></code></pre></div><blockquote><p>stories/UiButton.stories.tsx</p></blockquote><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#A626A4;"> type</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">Meta</span><span style="color:#383A42;">, </span><span style="color:#E45649;">StoryObj</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &quot;@storybook/react&quot;</span><span style="color:#383A42;">; </span><span style="color:#A0A1A7;font-style:italic;">// Проверить импорт</span></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">fn</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &quot;storybook/test&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#E45649;"> UiButton</span><span style="color:#A626A4;"> from</span><span style="color:#50A14F;"> &quot;./UiButton&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> meta</span><span style="color:#0184BC;">:</span><span style="color:#C18401;"> Meta</span><span style="color:#383A42;">&lt;</span><span style="color:#0184BC;">typeof</span><span style="color:#383A42;"> UiButton&gt; </span><span style="color:#0184BC;">=</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  // Название категории и раздела</span></span>
<span class="line"><span style="color:#383A42;">  title</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;Ui-Kit/UiButton&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  // Компонент</span></span>
<span class="line"><span style="color:#383A42;">  component</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> UiButton,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  // Конфигурация Controls (настраивает, как props отображаются в панели Controls Storybook)</span></span>
<span class="line"><span style="color:#383A42;">  argTypes</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">    variant</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">      options</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> [</span><span style="color:#50A14F;">&quot;text&quot;</span><span style="color:#383A42;">, </span><span style="color:#50A14F;">&quot;outlined&quot;</span><span style="color:#383A42;">, </span><span style="color:#50A14F;">&quot;contained&quot;</span><span style="color:#383A42;">],</span></span>
<span class="line"><span style="color:#383A42;">      control</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> { type</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;radio&quot;</span><span style="color:#383A42;"> },</span></span>
<span class="line"><span style="color:#383A42;">    },</span></span>
<span class="line"><span style="color:#383A42;">    disabled</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">      control</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> { type</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;boolean&quot;</span><span style="color:#383A42;"> },</span></span>
<span class="line"><span style="color:#383A42;">    },</span></span>
<span class="line"><span style="color:#383A42;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  // Задание значений для props</span></span>
<span class="line"><span style="color:#383A42;">  args</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">    onClick</span><span style="color:#0184BC;">:</span><span style="color:#4078F2;"> fn</span><span style="color:#383A42;">(),</span></span>
<span class="line"><span style="color:#383A42;">    children</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;Button&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">    disabled</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> false</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  // Добавление раздела &quot;Docs&quot;</span></span>
<span class="line"><span style="color:#383A42;">  tags</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> [</span><span style="color:#50A14F;">&quot;autodocs&quot;</span><span style="color:#383A42;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  // Параметры: выравнивает по центру (в данном случае)</span></span>
<span class="line"><span style="color:#383A42;">  parameters</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">    layout</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;centered&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">  },</span></span>
<span class="line"><span style="color:#383A42;">} </span><span style="color:#A626A4;">satisfies</span><span style="color:#C18401;"> Meta</span><span style="color:#383A42;">&lt;</span><span style="color:#0184BC;">typeof</span><span style="color:#383A42;"> UiButton&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">export</span><span style="color:#E45649;"> default</span><span style="color:#383A42;"> meta;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">type</span><span style="color:#C18401;"> Story</span><span style="color:#0184BC;"> =</span><span style="color:#C18401;"> StoryObj</span><span style="color:#383A42;">&lt;</span><span style="color:#0184BC;">typeof</span><span style="color:#383A42;"> meta&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Название будет соответствовать названию категории</span></span>
<span class="line"><span style="color:#A626A4;">export</span><span style="color:#A626A4;"> const</span><span style="color:#986801;"> Basic</span><span style="color:#0184BC;">:</span><span style="color:#C18401;"> Story</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">  args</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">    variant</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;contained&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">  },</span></span>
<span class="line"><span style="color:#383A42;">};</span></span></code></pre></div>`,6)])])}const C=n(p,[["render",t]]);export{u as __pageData,C as default};
