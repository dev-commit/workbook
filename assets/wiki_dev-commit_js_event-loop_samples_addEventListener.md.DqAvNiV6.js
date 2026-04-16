import{_ as n,o as a,c as l,aw as o}from"./chunks/framework.DLufY-ao.js";const d=JSON.parse('{"title":"addEventListener","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/js/event-loop/samples/addEventListener.md","filePath":"wiki/dev-commit/js/event-loop/samples/addEventListener.md"}'),p={name:"wiki/dev-commit/js/event-loop/samples/addEventListener.md"};function e(t,s,c,r,i,y){return a(),l("div",null,[...s[0]||(s[0]=[o(`<h1 id="addeventlistener" tabindex="-1">addEventListener <a class="header-anchor" href="#addeventlistener" aria-label="Permalink to &quot;addEventListener&quot;">​</a></h1><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#383A42;">button.</span><span style="color:#4078F2;">addEventListener</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;click&#39;</span><span style="color:#383A42;">, () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#C18401;">    Promise</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">resolve</span><span style="color:#383A42;">().</span><span style="color:#4078F2;">then</span><span style="color:#383A42;">(() </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;Microtask 1&#39;</span><span style="color:#383A42;">));</span></span>
<span class="line"><span style="color:#383A42;">    console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;Listener 1&#39;</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#383A42;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">button.</span><span style="color:#4078F2;">addEventListener</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;click&#39;</span><span style="color:#383A42;">, () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#C18401;">    Promise</span><span style="color:#383A42;">.</span><span style="color:#4078F2;">resolve</span><span style="color:#383A42;">().</span><span style="color:#4078F2;">then</span><span style="color:#383A42;">(() </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;Microtask 2&#39;</span><span style="color:#383A42;">));</span></span>
<span class="line"><span style="color:#383A42;">    console.</span><span style="color:#4078F2;">log</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;Listener 2&#39;</span><span style="color:#383A42;">);</span></span>
<span class="line"><span style="color:#383A42;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// =&gt; &quot;Listener 1&quot;, &quot;Listener 2&quot;, &quot;Microtask 1&quot;, &quot;Microtask 2&quot;</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// button.click();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// =&gt; &quot;Listener 1&quot;, &quot;Microtask 1&quot;, &quot;Listener 2&quot;, &quot;Microtask 2&quot;</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">// Клик по кнопке</span></span>
<span class="line"><span style="color:#50A14F;">\`\`\`1. Клик по кнопке</span></span>
<span class="line"><span style="color:#50A14F;">1. Первый обработчик отправляется в стек</span></span>
<span class="line"><span style="color:#50A14F;">2. Планируется микротаск</span></span>
<span class="line"><span style="color:#50A14F;">3. Выполняется console.log (&#39;Listener 1&#39;)</span></span>
<span class="line"><span style="color:#50A14F;">4. Обработчик #1 заканчивает своё выполнение и уходит из стека</span></span>
<span class="line"><span style="color:#50A14F;">5. thВыполняется микротаск (&#39;Microtask 1&#39;)is</span></span>
<span class="line"><span style="color:#50A14F;">6. Второй обработчик срабатывает аналогично</span></span>
<span class="line"></span>
<span class="line"><span style="color:#50A14F;">2. Программный клик по кнопке</span></span>
<span class="line"><span style="color:#50A14F;">1. В стек помещается весь скрипт</span></span>
<span class="line"><span style="color:#50A14F;">2. Скрипт запускает первый обработчик клика, который помещается в стек</span></span>
<span class="line"><span style="color:#50A14F;">3. Планируется микротаск</span></span>
<span class="line"><span style="color:#50A14F;">4. Выполняется console.log (&#39;Listener 1&#39;)</span></span>
<span class="line"><span style="color:#50A14F;">5. Мы не можем выполнить микротаск, потому что стек не пуст, выполнение кода button.click(); еще не завершилось</span></span>
<span class="line"><span style="color:#50A14F;">6. Переходим ко второму обработчику клика</span></span>
<span class="line"><span style="color:#50A14F;">7. Выполняется console.log (&#39;Listener 2&#39;)</span></span>
<span class="line"><span style="color:#50A14F;">8. Скрипт заканчивается</span></span>
<span class="line"><span style="color:#50A14F;">9. Выполняются колбэки промисов (&#39;Microtask 1&#39;, &#39;Microtask 2&#39;)</span></span></code></pre></div>`,2)])])}const F=n(p,[["render",e]]);export{d as __pageData,F as default};
