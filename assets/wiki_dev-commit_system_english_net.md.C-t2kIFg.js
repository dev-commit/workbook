import{_ as n,o as a,c as l,aw as p}from"./chunks/framework.DLufY-ao.js";const d=JSON.parse('{"title":"Net","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/system/english/net.md","filePath":"wiki/dev-commit/system/english/net.md"}'),o={name:"wiki/dev-commit/system/english/net.md"};function e(t,s,c,r,y,i){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h1 id="net" tabindex="-1">Net <a class="header-anchor" href="#net" aria-label="Permalink to &quot;Net&quot;">​</a></h1><h3 id="рефакторинг-app" tabindex="-1">Рефакторинг App <a class="header-anchor" href="#рефакторинг-app" aria-label="Permalink to &quot;Рефакторинг App&quot;">​</a></h3><ul><li><code>UiModal</code> из src/App.tsx вынести в <code>components</code></li><li>Добавить кнопку</li><li>App по итогу должен остаться пустым</li></ul><h3 id="_1-theme-provider" tabindex="-1">1. Theme Provider <a class="header-anchor" href="#_1-theme-provider" aria-label="Permalink to &quot;1. Theme Provider&quot;">​</a></h3><blockquote><p><code>src/ui-kit/theme/ThemeProvider.tsx</code></p></blockquote><ul><li><code>createContext()</code></li><li><code>&lt;ThemeContext.Provider&gt;</code></li><li><code>useContext()</code></li></ul><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">  createContext</span><span style="color:#383A42;">, </span><span style="color:#E45649;">useContext</span><span style="color:#383A42;">, </span><span style="color:#E45649;">useState</span></span>
<span class="line"><span style="color:#383A42;">} </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &quot;react&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">export</span><span style="color:#A626A4;"> type</span><span style="color:#C18401;"> UiTheme</span><span style="color:#0184BC;"> =</span><span style="color:#50A14F;"> &quot;light&quot;</span><span style="color:#0184BC;"> |</span><span style="color:#50A14F;"> &quot;dark&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">interface</span><span style="color:#C18401;"> IThemeContext</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">  theme</span><span style="color:#0184BC;">:</span><span style="color:#C18401;"> UiTheme</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#4078F2;">  toggleTheme</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#0184BC;"> void</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> ThemeContext</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> createContext</span><span style="color:#0184BC;">&lt;</span><span style="color:#383A42;">IThemeContext </span><span style="color:#0184BC;">|</span><span style="color:#986801;"> null</span><span style="color:#0184BC;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">  (</span><span style="color:#986801;">null</span><span style="color:#383A42;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">export</span><span style="color:#A626A4;"> const</span><span style="color:#4078F2;"> ThemeProvider</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> (</span></span>
<span class="line"><span style="color:#383A42;">  props</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> { children</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> React</span><span style="color:#383A42;">.</span><span style="color:#C18401;">ReactNode</span><span style="color:#383A42;"> }</span></span>
<span class="line"><span style="color:#383A42;">) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  const</span><span style="color:#383A42;"> { </span><span style="color:#986801;">children</span><span style="color:#383A42;"> } </span><span style="color:#0184BC;">=</span><span style="color:#383A42;"> props;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">  const</span><span style="color:#383A42;"> [</span><span style="color:#986801;">theme</span><span style="color:#383A42;">, </span><span style="color:#986801;">setTheme</span><span style="color:#383A42;">] </span><span style="color:#0184BC;">=</span><span style="color:#4078F2;"> useState</span><span style="color:#383A42;">&lt;</span><span style="color:#C18401;">UiTheme</span><span style="color:#383A42;">&gt;(</span><span style="color:#50A14F;">&quot;light&quot;</span><span style="color:#383A42;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">  const</span><span style="color:#4078F2;"> toggleTheme</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#4078F2;">    setTheme</span><span style="color:#383A42;">((prevTheme) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> (</span></span>
<span class="line"><span style="color:#383A42;">      prevTheme </span><span style="color:#0184BC;">===</span><span style="color:#50A14F;"> &quot;light&quot;</span><span style="color:#0184BC;"> ?</span><span style="color:#50A14F;"> &quot;dark&quot;</span><span style="color:#0184BC;"> :</span><span style="color:#50A14F;"> &quot;light&quot;</span><span style="color:#383A42;">)</span></span>
<span class="line"><span style="color:#383A42;">    );</span></span>
<span class="line"><span style="color:#383A42;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#383A42;"> (</span></span>
<span class="line"><span style="color:#383A42;">    &lt;</span><span style="color:#C18401;">ThemeContext.Provider</span></span>
<span class="line"><span style="color:#986801;">      value</span><span style="color:#383A42;">={{ theme, toggleTheme }}</span></span>
<span class="line"><span style="color:#383A42;">    &gt;</span></span>
<span class="line"><span style="color:#383A42;">      {children}</span></span>
<span class="line"><span style="color:#383A42;">    &lt;/</span><span style="color:#C18401;">ThemeContext.Provider</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">  );</span></span>
<span class="line"><span style="color:#383A42;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Хук-обёртка, чтобы не писать useContext(ThemeContext)</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// в каждом компоненте</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// eslint-disable-next-line react-refresh/only-export-components</span></span>
<span class="line"><span style="color:#A626A4;">export</span><span style="color:#A626A4;"> const</span><span style="color:#4078F2;"> useTheme</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  const</span><span style="color:#986801;"> context</span><span style="color:#0184BC;"> =</span><span style="color:#4078F2;"> useContext</span><span style="color:#383A42;">(ThemeContext);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  // Проверка убирает null из типа — после неё доступны</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  // theme и toggleTheme</span></span>
<span class="line"><span style="color:#A626A4;">  if</span><span style="color:#383A42;"> (</span><span style="color:#0184BC;">!</span><span style="color:#383A42;">context) {</span></span>
<span class="line"><span style="color:#A626A4;">    throw</span><span style="color:#A626A4;"> new</span><span style="color:#4078F2;"> Error</span><span style="color:#383A42;">(</span></span>
<span class="line"><span style="color:#50A14F;">      &quot;useTheme нужно использовать внутри &lt;ThemeProvider&gt;&quot;</span></span>
<span class="line"><span style="color:#383A42;">    );</span></span>
<span class="line"><span style="color:#383A42;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#383A42;"> context;</span></span>
<span class="line"><span style="color:#383A42;">};</span></span></code></pre></div><blockquote><p><code>src/main.tsx</code></p></blockquote><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">ThemeProvider</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &quot;./ui-kit&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#0184BC;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">createRoot</span><span style="color:#383A42;">(</span><span style="color:#E45649;">document</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">getElementById</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&quot;root&quot;</span><span style="color:#383A42;">)</span><span style="color:#0184BC;">!</span><span style="color:#383A42;">).</span><span style="color:#4078F2;">render</span><span style="color:#383A42;">(</span></span>
<span class="line"><span style="color:#383A42;">  &lt;</span><span style="color:#C18401;">StrictMode</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#CA1243;">    {</span><span style="color:#A0A1A7;font-style:italic;">/* Провайдер темы приходит из ui-kit,</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">    как ThemeProvider в MUI */</span><span style="color:#CA1243;">}</span></span>
<span class="line"><span style="color:#383A42;">    &lt;</span><span style="color:#C18401;">ThemeProvider</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">      &lt;</span><span style="color:#C18401;">App</span><span style="color:#383A42;"> /&gt;</span></span>
<span class="line"><span style="color:#383A42;">    &lt;/</span><span style="color:#C18401;">ThemeProvider</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">  &lt;/</span><span style="color:#C18401;">StrictMode</span><span style="color:#383A42;">&gt;,</span></span>
<span class="line"><span style="color:#383A42;">);</span></span></code></pre></div><h3 id="_2-theme-toggle" tabindex="-1">2. Theme Toggle <a class="header-anchor" href="#_2-theme-toggle" aria-label="Permalink to &quot;2. Theme Toggle&quot;">​</a></h3><blockquote><p><code>src/components/ThemeToggle.tsx</code></p></blockquote><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">UiButton</span><span style="color:#383A42;">, </span><span style="color:#E45649;">useTheme</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &quot;../ui-kit&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#4078F2;"> ThemeToggle</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  const</span><span style="color:#383A42;"> { </span><span style="color:#986801;">theme</span><span style="color:#383A42;">, </span><span style="color:#986801;">toggleTheme</span><span style="color:#383A42;"> } </span><span style="color:#0184BC;">=</span><span style="color:#4078F2;"> useTheme</span><span style="color:#383A42;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">  return</span></span>
<span class="line"><span style="color:#383A42;">    &lt;</span><span style="color:#C18401;">UiButton</span><span style="color:#986801;"> onClick</span><span style="color:#383A42;">={toggleTheme}&gt;</span></span>
<span class="line"><span style="color:#383A42;">      Тема: {theme}</span></span>
<span class="line"><span style="color:#383A42;">    &lt;/</span><span style="color:#C18401;">UiButton</span><span style="color:#383A42;">&gt;;</span></span>
<span class="line"><span style="color:#383A42;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">export</span><span style="color:#E45649;"> default</span><span style="color:#383A42;"> ThemeToggle;</span></span></code></pre></div><blockquote><p><code>src/App.tsx</code></p></blockquote><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#E45649;"> ThemeToggle</span><span style="color:#A626A4;"> from</span><span style="color:#50A14F;"> &quot;./components/ThemeToggle&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#4078F2;"> App</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#383A42;"> &lt;</span><span style="color:#C18401;">ThemeToggle</span><span style="color:#383A42;"> /&gt;;</span></span>
<span class="line"><span style="color:#383A42;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">export</span><span style="color:#E45649;"> default</span><span style="color:#383A42;"> App;</span></span></code></pre></div><h3 id="_3-css-токены-темы" tabindex="-1">3. CSS токены темы <a class="header-anchor" href="#_3-css-токены-темы" aria-label="Permalink to &quot;3. CSS токены темы&quot;">​</a></h3><blockquote><p><code>src/ui-kit/theme/ThemeProvider.tsx</code></p></blockquote><ul><li>Обёртка с data-ui-theme — от неё наследуются переменные всем вложенным компонентам</li></ul><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">export</span><span style="color:#A626A4;"> const</span><span style="color:#4078F2;"> ThemeProvider</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> (</span></span>
<span class="line"><span style="color:#383A42;">  props</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> { children</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> React</span><span style="color:#383A42;">.</span><span style="color:#C18401;">ReactNode</span><span style="color:#383A42;"> }</span></span>
<span class="line"><span style="color:#383A42;">) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#0184BC;">  ...</span></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#383A42;"> (</span></span>
<span class="line"><span style="color:#383A42;">    &lt;</span><span style="color:#C18401;">ThemeContext.Provider</span></span>
<span class="line"><span style="color:#986801;">      value</span><span style="color:#383A42;">={{ theme, toggleTheme }}</span></span>
<span class="line"><span style="color:#383A42;">    &gt;</span></span>
<span class="line"><span style="color:#383A42;">      &lt;</span><span style="color:#E45649;">div</span><span style="color:#986801;"> data-ui-theme</span><span style="color:#383A42;">={theme}&gt;</span></span>
<span class="line"><span style="color:#383A42;">        {children}</span></span>
<span class="line"><span style="color:#383A42;">      &lt;/</span><span style="color:#E45649;">div</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">    &lt;/</span><span style="color:#C18401;">ThemeContext.Provider</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">  );</span></span>
<span class="line"><span style="color:#383A42;">};</span></span></code></pre></div><blockquote><p><code>src/App.tsx</code></p></blockquote><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">const</span><span style="color:#4078F2;"> App</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">  return</span><span style="color:#383A42;"> (</span></span>
<span class="line"><span style="color:#383A42;">    &lt;</span><span style="color:#E45649;">div</span><span style="color:#986801;"> className</span><span style="color:#383A42;">=</span><span style="color:#50A14F;">&quot;app&quot;</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">      &lt;</span><span style="color:#C18401;">ThemeToggle</span><span style="color:#383A42;"> /&gt;</span></span>
<span class="line"><span style="color:#383A42;">    &lt;/</span><span style="color:#E45649;">div</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">  );</span></span>
<span class="line"><span style="color:#383A42;">};</span></span></code></pre></div><blockquote><p><code>src/index.css</code></p></blockquote><p><strong>Ui-Kit</strong></p><ul><li>Дизайн-токены ui-kit — только то, что нужно всем компонентам сразу</li><li>Префикс --ui- защищает от коллизий, когда библиотеку подключат как npm-пакет</li></ul><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A0A1A7;font-style:italic;">/* Светлая тема — значения по умолчанию,</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">работают даже без провайдера */</span></span>
<span class="line"><span style="color:#986801;">:root</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">  --ui-color-bg</span><span style="color:#383A42;">: </span><span style="color:#986801;">#</span><span style="color:#0184BC;">fff</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#E45649;">  --ui-color-text</span><span style="color:#383A42;">: </span><span style="color:#986801;">#</span><span style="color:#0184BC;">000</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">/* Тёмная тема — только переопределения */</span></span>
<span class="line"><span style="color:#A626A4;">[</span><span style="color:#986801;">data-ui-theme</span><span style="color:#383A42;">=</span><span style="color:#50A14F;">&quot;dark&quot;</span><span style="color:#A626A4;">]</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">  --ui-color-bg</span><span style="color:#383A42;">: </span><span style="color:#986801;">#</span><span style="color:#0184BC;">000</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#E45649;">  --ui-color-text</span><span style="color:#383A42;">: </span><span style="color:#986801;">#</span><span style="color:#0184BC;">fff</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre></div><p><strong>Приложение</strong></p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A0A1A7;font-style:italic;">/* Приложение использует те же токены,</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">что и компоненты ui-kit */</span></span>
<span class="line"><span style="color:#986801;">.app</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">  padding: </span><span style="color:#986801;">20px</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">  background: </span><span style="color:#0184BC;">var</span><span style="color:#383A42;">(</span><span style="color:#E45649;">--ui-color-bg</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#383A42;">  color: </span><span style="color:#0184BC;">var</span><span style="color:#383A42;">(</span><span style="color:#E45649;">--ui-color-text</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E45649;">html</span><span style="color:#A626A4;">,</span></span>
<span class="line"><span style="color:#E45649;">body</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">  margin: </span><span style="color:#986801;">0</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">  padding: </span><span style="color:#986801;">0</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">}</span></span></code></pre></div><blockquote><p><code>src/main.tsx</code></p></blockquote><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#50A14F;"> &quot;./index.css&quot;</span><span style="color:#383A42;">;</span></span></code></pre></div><h3 id="_4-рефакторинг-css-токенов" tabindex="-1">4. Рефакторинг CSS токенов <a class="header-anchor" href="#_4-рефакторинг-css-токенов" aria-label="Permalink to &quot;4. Рефакторинг CSS токенов&quot;">​</a></h3><blockquote><p><code>src/ui-kit/theme/tokens.css</code></p></blockquote><ul><li>Вынести переменные для Ui-Kit из <code>src/index.css</code></li></ul><blockquote><p><code>src/ui-kit/theme/ThemeProvider.tsx</code></p></blockquote><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A0A1A7;font-style:italic;">// Токены приезжают вместе с провайдером — как в реальных ui-библиотеках</span></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#50A14F;"> &quot;./tokens.css&quot;</span><span style="color:#383A42;">;</span></span></code></pre></div><h3 id="_5-добавление-темы-в-ui-kit-и-storybook" tabindex="-1">5. Добавление темы в Ui-Kit и StoryBook <a class="header-anchor" href="#_5-добавление-темы-в-ui-kit-и-storybook" aria-label="Permalink to &quot;5. Добавление темы в Ui-Kit и StoryBook&quot;">​</a></h3><blockquote><p><code>src/ui-kit/UiButton/styles.module.css</code></p></blockquote><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#986801;">.wrapper</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  /* Основной цвет */</span></span>
<span class="line"><span style="color:#E45649;">  --color-primary</span><span style="color:#383A42;">: </span><span style="color:#986801;">#</span><span style="color:#0184BC;">424242</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  /* Цвет того, что лежит на поверхности */</span></span>
<span class="line"><span style="color:#E45649;">  --color-on-primary</span><span style="color:#383A42;">: </span><span style="color:#986801;">#</span><span style="color:#0184BC;">ffffff</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#E45649;">  --color-link</span><span style="color:#383A42;">: </span><span style="color:#986801;">#</span><span style="color:#0184BC;">2f2fc0</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">  padding: </span><span style="color:#986801;">6px</span><span style="color:#986801;"> 10px</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">  border-radius: </span><span style="color:#986801;">6px</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">  border: none;</span></span>
<span class="line"><span style="color:#383A42;">  cursor: pointer;</span></span>
<span class="line"><span style="color:#383A42;">  background: none;</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">/* Те же переменные, но для тёмной темы:</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">селектор смотрит на атрибут от ThemeProvider */</span></span>
<span class="line"><span style="color:#A626A4;">[</span><span style="color:#986801;">data-ui-theme</span><span style="color:#383A42;">=</span><span style="color:#50A14F;">&quot;dark&quot;</span><span style="color:#A626A4;">] </span><span style="color:#986801;">.wrapper</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">  --color-primary</span><span style="color:#383A42;">: </span><span style="color:#986801;">#</span><span style="color:#0184BC;">eeeeee</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#E45649;">  --color-on-primary</span><span style="color:#383A42;">: </span><span style="color:#986801;">#</span><span style="color:#0184BC;">222222</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#E45649;">  --color-link</span><span style="color:#383A42;">: </span><span style="color:#986801;">#</span><span style="color:#0184BC;">9fd1ff</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">...</span></span></code></pre></div><blockquote><p><code>.storybook/preview.tsx</code></p></blockquote><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#A626A4;"> type</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">Preview</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &quot;@storybook/react-vite&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">ThemeProvider</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &quot;../src/ui-kit&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> preview</span><span style="color:#0184BC;">:</span><span style="color:#C18401;"> Preview</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  // Провайдер нужен всем историям:</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">  // он подключает токены темы</span></span>
<span class="line"><span style="color:#383A42;">  decorators</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> [</span></span>
<span class="line"><span style="color:#383A42;">    (Story) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> (</span></span>
<span class="line"><span style="color:#383A42;">      &lt;</span><span style="color:#C18401;">ThemeProvider</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">        &lt;</span><span style="color:#C18401;">Story</span><span style="color:#383A42;"> /&gt;</span></span>
<span class="line"><span style="color:#383A42;">      &lt;/</span><span style="color:#C18401;">ThemeProvider</span><span style="color:#383A42;">&gt;</span></span>
<span class="line"><span style="color:#383A42;">    ),</span></span>
<span class="line"><span style="color:#383A42;">  ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">  parameters</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">    controls</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">      matchers</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#383A42;">        color</span><span style="color:#0184BC;">:</span><span style="color:#0184BC;"> /(background|color)</span><span style="color:#A626A4;">$</span><span style="color:#0184BC;">/</span><span style="color:#A626A4;">i</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">        date</span><span style="color:#0184BC;">:</span><span style="color:#0184BC;"> /Date</span><span style="color:#A626A4;">$</span><span style="color:#0184BC;">/</span><span style="color:#A626A4;">i</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">      },</span></span>
<span class="line"><span style="color:#383A42;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">    a11y</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">      // &#39;todo&#39; - show a11y violations in the test UI only</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">      // &#39;error&#39; - fail CI on a11y violations</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">      // &#39;off&#39; - skip a11y checks entirely</span></span>
<span class="line"><span style="color:#383A42;">      test</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;todo&quot;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">    },</span></span>
<span class="line"><span style="color:#383A42;">  },</span></span>
<span class="line"><span style="color:#383A42;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">export</span><span style="color:#E45649;"> default</span><span style="color:#383A42;"> preview;</span></span></code></pre></div><h3 id="_6-добавление-index-фаила-в-ui-kit" tabindex="-1">6. Добавление index-файла в Ui-Kit <a class="header-anchor" href="#_6-добавление-index-фаила-в-ui-kit" aria-label="Permalink to &quot;6. Добавление index-файла в Ui-Kit&quot;">​</a></h3><blockquote><p><code>src/ui-kit/index.ts</code></p></blockquote><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A0A1A7;font-style:italic;">// Точка входа библиотеки — то, что будет публичным API npm-пакета</span></span>
<span class="line"><span style="color:#A626A4;">export</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">default</span><span style="color:#383A42;"> as </span><span style="color:#E45649;">UiButton</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &quot;./UiButton&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#A626A4;">export</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">default</span><span style="color:#383A42;"> as </span><span style="color:#E45649;">UiInput</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &quot;./UiInput&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#A626A4;">export</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">default</span><span style="color:#383A42;"> as </span><span style="color:#E45649;">UiModal</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &quot;./UiModal&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">export</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">ThemeProvider</span><span style="color:#383A42;">, </span><span style="color:#E45649;">useTheme</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &quot;./theme/ThemeProvider&quot;</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#A626A4;">export</span><span style="color:#A626A4;"> type</span><span style="color:#383A42;"> { </span><span style="color:#E45649;">UiTheme</span><span style="color:#383A42;"> } </span><span style="color:#A626A4;">from</span><span style="color:#50A14F;"> &quot;./theme/ThemeProvider&quot;</span><span style="color:#383A42;">;</span></span></code></pre></div>`,41)])])}const u=n(o,[["render",e]]);export{d as __pageData,u as default};
