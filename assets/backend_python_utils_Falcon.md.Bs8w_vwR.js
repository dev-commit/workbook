import{_ as l,C as p,o,c as e,aw as n,j as t,E as c}from"./chunks/framework.DLufY-ao.js";const h=JSON.parse('{"title":"Falcon","description":"","frontmatter":{},"headers":[],"relativePath":"backend/python/utils/Falcon.md","filePath":"wiki/dev-commit/backend/python/utils/Falcon.md"}'),r={name:"backend/python/utils/Falcon.md"},y={class:"details custom-block"};function A(i,s,u,d,m,F){const a=p("v-breadcrumbs");return o(),e("div",null,[s[1]||(s[1]=n(`<h1 id="falcon" tabindex="-1">Falcon <a class="header-anchor" href="#falcon" aria-label="Permalink to &quot;Falcon&quot;">​</a></h1><h2 id="информация" tabindex="-1">Информация <a class="header-anchor" href="#информация" aria-label="Permalink to &quot;Информация&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><ul><li><a href="https://falcon.readthedocs.io/en/stable/" target="_blank" rel="noreferrer">https://falcon.readthedocs.io/en/stable/</a> - Falcon</li><li><a href="https://insomnia.rest/" target="_blank" rel="noreferrer">https://insomnia.rest/</a> - Insomnia REST Client</li></ul></div><div class="language-bash"><button title="Скопировать код" class="copy"></button><span class="lang">bash</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#4078F2;">pip</span><span style="color:#50A14F;"> install</span><span style="color:#50A14F;"> falcon</span></span>
<span class="line"><span style="color:#4078F2;">pip</span><span style="color:#50A14F;"> install</span><span style="color:#50A14F;"> waitress</span></span>
<span class="line"><span style="color:#4078F2;">pip</span><span style="color:#50A14F;"> install</span><span style="color:#383A42;"> [gunicorn|</span><span style="color:#4078F2;">uwsgi</span><span style="color:#383A42;">|</span><span style="color:#4078F2;">waitress]</span></span></code></pre></div><ul><li><em>Falcon</em> является фреймворком <em>WSGI</em>, поэтому для работы веб-приложения потребуется сервер приложений WSGI</li></ul><ol><li><em>Gunicorn</em>. Gunicorn для <em>UNIX-среды</em> несовместим с Windows. UNIX - семейство операционных систем (Mac OS X, GNU/Linux).</li><li><em>uWSGI</em></li><li><em>Waitress</em></li></ol><div class="warning custom-block"><p class="custom-block-title">WARNING</p><ul><li>Примеры написаны для Falcon до версии 3.0. В Falcon 3.0 <code>falcon.API</code> переименован в <code>falcon.App</code> (старое имя устарело), <code>resp.body</code> - в <code>resp.text</code> (<code>resp.body</code> удалён в Falcon 4.0)</li><li>С Falcon 4.0 заголовок и описание ошибки передаются только по имени: <code>falcon.HTTPBadRequest(title=&#39;Bad request&#39;, description=&#39;…&#39;)</code></li></ul></div><h2 id="примеры" tabindex="-1">Примеры <a class="header-anchor" href="#примеры" aria-label="Permalink to &quot;Примеры&quot;">​</a></h2><details class="details custom-block"><summary>Simple Text</summary><div class="language-python"><button title="Скопировать код" class="copy"></button><span class="lang">python</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> falcon</span></span>
<span class="line"><span style="color:#A626A4;">from</span><span style="color:#383A42;"> waitress </span><span style="color:#A626A4;">import</span><span style="color:#383A42;"> serve</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> ObjRes(</span><span style="color:#0184BC;">object</span><span style="color:#C18401;">)</span><span style="color:#383A42;">:</span></span>
<span class="line"><span style="color:#A626A4;">    def</span><span style="color:#4078F2;"> on_get</span><span style="color:#383A42;">(</span><span style="color:#986801;">self</span><span style="color:#383A42;">,</span><span style="color:#986801;"> req</span><span style="color:#383A42;">,</span><span style="color:#986801;"> resp</span><span style="color:#383A42;">):</span></span>
<span class="line"><span style="color:#383A42;">        resp.status = falcon.HTTP_200</span></span>
<span class="line"><span style="color:#383A42;">        resp.body = </span><span style="color:#50A14F;">&#39;hello world&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">api = falcon.API()</span></span>
<span class="line"><span style="color:#383A42;">api.add_route(</span><span style="color:#50A14F;">&#39;/&#39;</span><span style="color:#383A42;">, ObjRes())</span></span>
<span class="line"><span style="color:#383A42;">serve(api, </span><span style="color:#986801;">host</span><span style="color:#383A42;">=</span><span style="color:#50A14F;">&quot;127.0.0.1&quot;</span><span style="color:#383A42;">, </span><span style="color:#986801;">port</span><span style="color:#383A42;">=</span><span style="color:#986801;">8001</span><span style="color:#383A42;">)</span></span></code></pre></div><div class="language-bash"><button title="Скопировать код" class="copy"></button><span class="lang">bash</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#4078F2;">python</span><span style="color:#50A14F;"> app.py</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"># http://127.0.0.1:8001/</span></span></code></pre></div></details><details class="details custom-block"><summary>HTML</summary><div class="language-python"><button title="Скопировать код" class="copy"></button><span class="lang">python</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> falcon</span></span>
<span class="line"><span style="color:#A626A4;">from</span><span style="color:#383A42;"> waitress </span><span style="color:#A626A4;">import</span><span style="color:#383A42;"> serve</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> ObjRes(</span><span style="color:#0184BC;">object</span><span style="color:#C18401;">)</span><span style="color:#383A42;">:</span></span>
<span class="line"><span style="color:#A626A4;">    def</span><span style="color:#4078F2;"> on_get</span><span style="color:#383A42;">(</span><span style="color:#986801;">self</span><span style="color:#383A42;">,</span><span style="color:#986801;"> req</span><span style="color:#383A42;">,</span><span style="color:#986801;"> resp</span><span style="color:#383A42;">):</span></span>
<span class="line"><span style="color:#383A42;">        resp.status = falcon.HTTP_200</span></span>
<span class="line"><span style="color:#383A42;">        resp.content_type = falcon.MEDIA_HTML</span></span>
<span class="line"><span style="color:#383A42;">        resp.body = </span><span style="color:#50A14F;">&#39;&lt;h1&gt;Hello World&lt;/h1&gt;&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">api = falcon.API()</span></span>
<span class="line"><span style="color:#383A42;">api.add_route(</span><span style="color:#50A14F;">&#39;/&#39;</span><span style="color:#383A42;">, ObjRes())</span></span>
<span class="line"><span style="color:#383A42;">serve(api, </span><span style="color:#986801;">host</span><span style="color:#383A42;">=</span><span style="color:#50A14F;">&quot;127.0.0.1&quot;</span><span style="color:#383A42;">, </span><span style="color:#986801;">port</span><span style="color:#383A42;">=</span><span style="color:#986801;">8001</span><span style="color:#383A42;">)</span></span></code></pre></div><div class="language-bash"><button title="Скопировать код" class="copy"></button><span class="lang">bash</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#4078F2;">python</span><span style="color:#50A14F;"> app.py</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"># http://127.0.0.1:8001/</span></span></code></pre></div></details><details class="details custom-block"><summary>Json (Object)</summary><div class="language-python"><button title="Скопировать код" class="copy"></button><span class="lang">python</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> json</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> falcon</span></span>
<span class="line"><span style="color:#A626A4;">from</span><span style="color:#383A42;"> waitress </span><span style="color:#A626A4;">import</span><span style="color:#383A42;"> serve</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> ObjRes(</span><span style="color:#0184BC;">object</span><span style="color:#C18401;">)</span><span style="color:#383A42;">:</span></span>
<span class="line"><span style="color:#A626A4;">    def</span><span style="color:#4078F2;"> on_get</span><span style="color:#383A42;">(</span><span style="color:#986801;">self</span><span style="color:#383A42;">,</span><span style="color:#986801;"> req</span><span style="color:#383A42;">,</span><span style="color:#986801;"> resp</span><span style="color:#383A42;">):</span></span>
<span class="line"><span style="color:#383A42;">        resp.status = falcon.HTTP_200</span></span>
<span class="line"><span style="color:#383A42;">        content = {</span></span>
<span class="line"><span style="color:#50A14F;">            &#39;name&#39;</span><span style="color:#383A42;">: </span><span style="color:#50A14F;">&#39;Tony&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#50A14F;">            &#39;age&#39;</span><span style="color:#383A42;">: </span><span style="color:#50A14F;">&#39;25&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#50A14F;">            &#39;country&#39;</span><span style="color:#383A42;">: </span><span style="color:#50A14F;">&#39;Russia&#39;</span></span>
<span class="line"><span style="color:#383A42;">        }</span></span>
<span class="line"><span style="color:#383A42;">        resp.body = json.dumps(content)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">api = falcon.API()</span></span>
<span class="line"><span style="color:#383A42;">api.add_route(</span><span style="color:#50A14F;">&#39;/&#39;</span><span style="color:#383A42;">, ObjRes())</span></span>
<span class="line"><span style="color:#383A42;">serve(api, </span><span style="color:#986801;">host</span><span style="color:#383A42;">=</span><span style="color:#50A14F;">&quot;127.0.0.1&quot;</span><span style="color:#383A42;">, </span><span style="color:#986801;">port</span><span style="color:#383A42;">=</span><span style="color:#986801;">8001</span><span style="color:#383A42;">)</span></span></code></pre></div><div class="language-bash"><button title="Скопировать код" class="copy"></button><span class="lang">bash</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A0A1A7;font-style:italic;"># http://127.0.0.1:8001/</span></span>
<span class="line"><span style="color:#383A42;">{</span><span style="color:#4078F2;">&quot;name&quot;</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;Tony&quot;,</span><span style="color:#50A14F;"> &quot;age&quot;:</span><span style="color:#50A14F;"> &quot;25&quot;,</span><span style="color:#50A14F;"> &quot;country&quot;:</span><span style="color:#50A14F;"> &quot;Russia&quot;}</span></span></code></pre></div></details><details class="details custom-block"><summary>Json (read URL)</summary><div class="language-python"><button title="Скопировать код" class="copy"></button><span class="lang">python</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> json</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> falcon</span></span>
<span class="line"><span style="color:#A626A4;">from</span><span style="color:#383A42;"> waitress </span><span style="color:#A626A4;">import</span><span style="color:#383A42;"> serve</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> ObjRes(</span><span style="color:#0184BC;">object</span><span style="color:#C18401;">)</span><span style="color:#383A42;">:</span></span>
<span class="line"><span style="color:#A626A4;">    def</span><span style="color:#4078F2;"> on_get</span><span style="color:#383A42;">(</span><span style="color:#986801;">self</span><span style="color:#383A42;">,</span><span style="color:#986801;"> req</span><span style="color:#383A42;">,</span><span style="color:#986801;"> resp</span><span style="color:#383A42;">):</span></span>
<span class="line"><span style="color:#383A42;">        resp.status = falcon.HTTP_200</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">        validate_params = </span><span style="color:#986801;">True</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">        if</span><span style="color:#50A14F;"> &#39;name&#39;</span><span style="color:#A626A4;"> not</span><span style="color:#A626A4;"> in</span><span style="color:#383A42;"> req.params:</span></span>
<span class="line"><span style="color:#383A42;">            validate_params = </span><span style="color:#986801;">False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">        if</span><span style="color:#383A42;"> validate_params:</span></span>
<span class="line"><span style="color:#383A42;">            output = {</span></span>
<span class="line"><span style="color:#50A14F;">                &#39;name&#39;</span><span style="color:#383A42;">: req.params[</span><span style="color:#50A14F;">&#39;name&#39;</span><span style="color:#383A42;">]</span></span>
<span class="line"><span style="color:#383A42;">            }</span></span>
<span class="line"><span style="color:#A626A4;">        else</span><span style="color:#383A42;">:</span></span>
<span class="line"><span style="color:#383A42;">            output = {</span></span>
<span class="line"><span style="color:#50A14F;">                &#39;error&#39;</span><span style="color:#383A42;">: </span><span style="color:#50A14F;">&#39;You need name in your params&#39;</span></span>
<span class="line"><span style="color:#383A42;">            }</span></span>
<span class="line"><span style="color:#383A42;">        resp.body = json.dumps(output)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">api = falcon.API()</span></span>
<span class="line"><span style="color:#383A42;">api.add_route(</span><span style="color:#50A14F;">&#39;/&#39;</span><span style="color:#383A42;">, ObjRes())</span></span>
<span class="line"><span style="color:#383A42;">serve(api, </span><span style="color:#986801;">host</span><span style="color:#383A42;">=</span><span style="color:#50A14F;">&quot;127.0.0.1&quot;</span><span style="color:#383A42;">, </span><span style="color:#986801;">port</span><span style="color:#383A42;">=</span><span style="color:#986801;">8001</span><span style="color:#383A42;">)</span></span></code></pre></div><div class="language-bash"><button title="Скопировать код" class="copy"></button><span class="lang">bash</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A0A1A7;font-style:italic;"># http://127.0.0.1:8001/</span></span>
<span class="line"><span style="color:#383A42;">{</span><span style="color:#4078F2;">&quot;error&quot;</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;You need name in your params&quot;}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"># http://127.0.0.1:8001/?name=Tony</span></span>
<span class="line"><span style="color:#383A42;">{</span><span style="color:#4078F2;">&quot;name&quot;</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &quot;Tony&quot;}</span></span></code></pre></div></details><details class="details custom-block"><summary>Read Params</summary><div class="language-python"><button title="Скопировать код" class="copy"></button><span class="lang">python</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A0A1A7;font-style:italic;"># Read url params http://127.0.0.1:8001/?name=Tony</span></span>
<span class="line"><span style="color:#383A42;">name = req.params[</span><span style="color:#50A14F;">&#39;name&#39;</span><span style="color:#383A42;">]</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"># req.host</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"># req.path</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"># req.query_string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"># Read json params {&quot;name&quot;: &quot;Tony&quot;}</span></span>
<span class="line"><span style="color:#383A42;">data = json.loads(req.stream.read())</span></span>
<span class="line"><span style="color:#383A42;">a = data[</span><span style="color:#50A14F;">&#39;name&#39;</span><span style="color:#383A42;">]</span></span></code></pre></div></details><details class="details custom-block"><summary>HTTP-методы GET/POST/PUT/DELETE</summary><div class="language-python"><button title="Скопировать код" class="copy"></button><span class="lang">python</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> json</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> falcon</span></span>
<span class="line"><span style="color:#A626A4;">from</span><span style="color:#383A42;"> waitress </span><span style="color:#A626A4;">import</span><span style="color:#383A42;"> serve</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> ObjRes(</span><span style="color:#0184BC;">object</span><span style="color:#C18401;">)</span><span style="color:#383A42;">:</span></span>
<span class="line"><span style="color:#A626A4;">    def</span><span style="color:#4078F2;"> on_get</span><span style="color:#383A42;">(</span><span style="color:#986801;">self</span><span style="color:#383A42;">,</span><span style="color:#986801;"> req</span><span style="color:#383A42;">,</span><span style="color:#986801;"> resp</span><span style="color:#383A42;">):</span></span>
<span class="line"><span style="color:#383A42;">        resp.status = falcon.HTTP_200</span></span>
<span class="line"><span style="color:#383A42;">        data = json.loads(req.stream.read())</span></span>
<span class="line"><span style="color:#383A42;">        output = {</span></span>
<span class="line"><span style="color:#50A14F;">            &#39;msg&#39;</span><span style="color:#383A42;">: </span><span style="color:#50A14F;">&#39;Hello </span><span style="color:#986801;">{0}</span><span style="color:#50A14F;">&#39;</span><span style="color:#383A42;">.format(data[</span><span style="color:#50A14F;">&#39;name&#39;</span><span style="color:#383A42;">])</span></span>
<span class="line"><span style="color:#383A42;">        }</span></span>
<span class="line"><span style="color:#383A42;">        resp.body = json.dumps(output)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    def</span><span style="color:#4078F2;"> on_post</span><span style="color:#383A42;">(</span><span style="color:#986801;">self</span><span style="color:#383A42;">,</span><span style="color:#986801;"> req</span><span style="color:#383A42;">,</span><span style="color:#986801;"> resp</span><span style="color:#383A42;">):</span></span>
<span class="line"><span style="color:#383A42;">        resp.status = falcon.HTTP_200</span></span>
<span class="line"><span style="color:#383A42;">        data = json.loads(req.stream.read())</span></span>
<span class="line"><span style="color:#383A42;">        equal = </span><span style="color:#0184BC;">int</span><span style="color:#383A42;">(data[</span><span style="color:#50A14F;">&#39;x&#39;</span><span style="color:#383A42;">]) + </span><span style="color:#0184BC;">int</span><span style="color:#383A42;">(data[</span><span style="color:#50A14F;">&#39;y&#39;</span><span style="color:#383A42;">])</span></span>
<span class="line"><span style="color:#383A42;">        output = {</span></span>
<span class="line"><span style="color:#50A14F;">            &#39;msg&#39;</span><span style="color:#383A42;">: </span><span style="color:#50A14F;">&#39;x: </span><span style="color:#986801;">{x}</span><span style="color:#50A14F;"> + y: </span><span style="color:#986801;">{y}</span><span style="color:#50A14F;"> is equal to </span><span style="color:#986801;">{e}</span><span style="color:#50A14F;">&#39;</span><span style="color:#383A42;">.format(</span></span>
<span class="line"><span style="color:#986801;">                x</span><span style="color:#383A42;">=data[</span><span style="color:#50A14F;">&#39;x&#39;</span><span style="color:#383A42;">], </span><span style="color:#986801;">y</span><span style="color:#383A42;">=data[</span><span style="color:#50A14F;">&#39;y&#39;</span><span style="color:#383A42;">], </span><span style="color:#986801;">e</span><span style="color:#383A42;">=equal</span></span>
<span class="line"><span style="color:#383A42;">            )</span></span>
<span class="line"><span style="color:#383A42;">        }</span></span>
<span class="line"><span style="color:#383A42;">        resp.body = json.dumps(output)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    def</span><span style="color:#4078F2;"> on_put</span><span style="color:#383A42;">(</span><span style="color:#986801;">self</span><span style="color:#383A42;">,</span><span style="color:#986801;"> req</span><span style="color:#383A42;">,</span><span style="color:#986801;"> resp</span><span style="color:#383A42;">):</span></span>
<span class="line"><span style="color:#383A42;">        resp.status = falcon.HTTP_200</span></span>
<span class="line"><span style="color:#383A42;">        output = {</span></span>
<span class="line"><span style="color:#50A14F;">            &#39;msg&#39;</span><span style="color:#383A42;">: </span><span style="color:#50A14F;">&#39;put is not supported&#39;</span></span>
<span class="line"><span style="color:#383A42;">        }</span></span>
<span class="line"><span style="color:#383A42;">        resp.body = json.dumps(output)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    def</span><span style="color:#4078F2;"> on_delete</span><span style="color:#383A42;">(</span><span style="color:#986801;">self</span><span style="color:#383A42;">,</span><span style="color:#986801;"> req</span><span style="color:#383A42;">,</span><span style="color:#986801;"> resp</span><span style="color:#383A42;">):</span></span>
<span class="line"><span style="color:#383A42;">        resp.status = falcon.HTTP_200</span></span>
<span class="line"><span style="color:#383A42;">        output = {</span></span>
<span class="line"><span style="color:#50A14F;">            &#39;msg&#39;</span><span style="color:#383A42;">: </span><span style="color:#50A14F;">&#39;delete is not supported&#39;</span></span>
<span class="line"><span style="color:#383A42;">        }</span></span>
<span class="line"><span style="color:#383A42;">        resp.body = json.dumps(output)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">api = falcon.API()</span></span>
<span class="line"><span style="color:#383A42;">api.add_route(</span><span style="color:#50A14F;">&#39;/&#39;</span><span style="color:#383A42;">, ObjRes())</span></span>
<span class="line"><span style="color:#383A42;">serve(api, </span><span style="color:#986801;">host</span><span style="color:#383A42;">=</span><span style="color:#50A14F;">&quot;127.0.0.1&quot;</span><span style="color:#383A42;">, </span><span style="color:#986801;">port</span><span style="color:#383A42;">=</span><span style="color:#986801;">8001</span><span style="color:#383A42;">)</span></span></code></pre></div><div class="language-python"><button title="Скопировать код" class="copy"></button><span class="lang">python</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A0A1A7;font-style:italic;"># GET</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"># JSON { &quot;name&quot;: &quot;Tony&quot; }</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"># Result { &quot;msg&quot;: &quot;Hello Tony&quot; }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"># POST</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"># JSON { &quot;x&quot;: &quot;100&quot;, &quot;y&quot;: &quot;200&quot; }</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;"># Result { &quot;msg&quot;: &quot;x: 100 + y: 200 is equal to 300&quot; }</span></span></code></pre></div></details><details class="details custom-block"><summary>Validated JSON input</summary><div class="language-python"><button title="Скопировать код" class="copy"></button><span class="lang">python</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> json</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> falcon</span></span>
<span class="line"><span style="color:#A626A4;">from</span><span style="color:#383A42;"> waitress </span><span style="color:#A626A4;">import</span><span style="color:#383A42;"> serve</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> ObjRes(</span><span style="color:#0184BC;">object</span><span style="color:#C18401;">)</span><span style="color:#383A42;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">    __json_content = {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    def</span><span style="color:#4078F2;"> __validate_json_input</span><span style="color:#383A42;">(</span><span style="color:#986801;">self</span><span style="color:#383A42;">,</span><span style="color:#986801;"> req</span><span style="color:#383A42;">):</span></span>
<span class="line"><span style="color:#A626A4;">        try</span><span style="color:#383A42;">:</span></span>
<span class="line"><span style="color:#E45649;">            self</span><span style="color:#383A42;">.__json_content = json.loads(req.stream.read())</span></span>
<span class="line"><span style="color:#0184BC;">            print</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;json from client is validated&#39;</span><span style="color:#383A42;">)</span></span>
<span class="line"><span style="color:#A626A4;">            return</span><span style="color:#986801;"> True</span></span>
<span class="line"><span style="color:#A626A4;">        except</span><span style="color:#0184BC;"> ValueError</span><span style="color:#383A42;">:</span></span>
<span class="line"><span style="color:#E45649;">            self</span><span style="color:#383A42;">.__json_content = {}</span></span>
<span class="line"><span style="color:#0184BC;">            print</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;json from client is not validated&#39;</span><span style="color:#383A42;">)</span></span>
<span class="line"><span style="color:#A626A4;">            return</span><span style="color:#986801;"> False</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    def</span><span style="color:#4078F2;"> on_get</span><span style="color:#383A42;">(</span><span style="color:#986801;">self</span><span style="color:#383A42;">,</span><span style="color:#986801;"> req</span><span style="color:#383A42;">,</span><span style="color:#986801;"> resp</span><span style="color:#383A42;">):</span></span>
<span class="line"><span style="color:#383A42;">        resp.status = falcon.HTTP_200</span></span>
<span class="line"><span style="color:#383A42;">        validated = </span><span style="color:#E45649;">self</span><span style="color:#383A42;">.__validate_json_input(req)</span></span>
<span class="line"><span style="color:#383A42;">        output = {</span></span>
<span class="line"><span style="color:#50A14F;">            &#39;status&#39;</span><span style="color:#383A42;">: </span><span style="color:#986801;">200</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#50A14F;">            &#39;msg&#39;</span><span style="color:#383A42;">: </span><span style="color:#986801;">None</span></span>
<span class="line"><span style="color:#383A42;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">        if</span><span style="color:#383A42;"> validated:</span></span>
<span class="line"><span style="color:#A626A4;">            if</span><span style="color:#50A14F;"> &#39;name&#39;</span><span style="color:#A626A4;"> in</span><span style="color:#E45649;"> self</span><span style="color:#383A42;">.__json_content:</span></span>
<span class="line"><span style="color:#383A42;">                output[</span><span style="color:#50A14F;">&#39;msg&#39;</span><span style="color:#383A42;">] = </span><span style="color:#50A14F;">&#39;Hello </span><span style="color:#986801;">{name}</span><span style="color:#50A14F;">&#39;</span><span style="color:#383A42;">.format(</span><span style="color:#986801;">name</span><span style="color:#383A42;">=</span><span style="color:#E45649;">self</span><span style="color:#383A42;">.__json_content[</span><span style="color:#50A14F;">&#39;name&#39;</span><span style="color:#383A42;">])</span></span>
<span class="line"><span style="color:#A626A4;">            else</span><span style="color:#383A42;">:</span></span>
<span class="line"><span style="color:#383A42;">                output[</span><span style="color:#50A14F;">&#39;status&#39;</span><span style="color:#383A42;">] = </span><span style="color:#986801;">400</span></span>
<span class="line"><span style="color:#383A42;">                output[</span><span style="color:#50A14F;">&#39;msg&#39;</span><span style="color:#383A42;">] = </span><span style="color:#50A14F;">&#39;json input needs name params&#39;</span></span>
<span class="line"><span style="color:#A626A4;">        else</span><span style="color:#383A42;">:</span></span>
<span class="line"><span style="color:#383A42;">            output[</span><span style="color:#50A14F;">&#39;status&#39;</span><span style="color:#383A42;">] = </span><span style="color:#986801;">400</span></span>
<span class="line"><span style="color:#383A42;">            output[</span><span style="color:#50A14F;">&#39;msg&#39;</span><span style="color:#383A42;">] = </span><span style="color:#50A14F;">&#39;json input is not validated&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">        resp.body = json.dumps(output)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">api = falcon.API()</span></span>
<span class="line"><span style="color:#383A42;">api.add_route(</span><span style="color:#50A14F;">&#39;/&#39;</span><span style="color:#383A42;">, ObjRes())</span></span>
<span class="line"><span style="color:#383A42;">serve(api, </span><span style="color:#986801;">host</span><span style="color:#383A42;">=</span><span style="color:#50A14F;">&quot;127.0.0.1&quot;</span><span style="color:#383A42;">, </span><span style="color:#986801;">port</span><span style="color:#383A42;">=</span><span style="color:#986801;">8001</span><span style="color:#383A42;">)</span></span></code></pre></div></details><details class="details custom-block"><summary>Hooks</summary><div class="language-python"><button title="Скопировать код" class="copy"></button><span class="lang">python</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> falcon</span></span>
<span class="line"><span style="color:#A626A4;">from</span><span style="color:#383A42;"> waitress </span><span style="color:#A626A4;">import</span><span style="color:#383A42;"> serve</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> Authorize(</span><span style="color:#0184BC;">object</span><span style="color:#C18401;">)</span><span style="color:#383A42;">:</span></span>
<span class="line"><span style="color:#A626A4;">    def</span><span style="color:#0184BC;"> __init__</span><span style="color:#383A42;">(</span><span style="color:#986801;">self</span><span style="color:#383A42;">,</span><span style="color:#986801;"> roles</span><span style="color:#383A42;">):</span></span>
<span class="line"><span style="color:#E45649;">        self</span><span style="color:#383A42;">._roles = roles</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    def</span><span style="color:#0184BC;"> __call__</span><span style="color:#383A42;">(</span><span style="color:#986801;">self</span><span style="color:#383A42;">,</span><span style="color:#986801;"> req</span><span style="color:#383A42;">,</span><span style="color:#986801;"> resp</span><span style="color:#383A42;">,</span><span style="color:#986801;"> resource</span><span style="color:#383A42;">,</span><span style="color:#986801;"> params</span><span style="color:#383A42;">):</span></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">        # DB - Get user role</span></span>
<span class="line"><span style="color:#A626A4;">        if</span><span style="color:#50A14F;"> &#39;Admin&#39;</span><span style="color:#A626A4;"> in</span><span style="color:#E45649;"> self</span><span style="color:#383A42;">._roles:</span></span>
<span class="line"><span style="color:#383A42;">            req.user_id = </span><span style="color:#986801;">5</span></span>
<span class="line"><span style="color:#A626A4;">        else</span><span style="color:#383A42;">:</span></span>
<span class="line"><span style="color:#A626A4;">            raise</span><span style="color:#383A42;"> falcon.HTTPBadRequest(</span><span style="color:#50A14F;">&#39;Bad request&#39;</span><span style="color:#383A42;">, </span><span style="color:#50A14F;">&#39;You are not an admin right now&#39;</span><span style="color:#383A42;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> ObjRes(</span><span style="color:#0184BC;">object</span><span style="color:#C18401;">)</span><span style="color:#383A42;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">    @falcon.before</span><span style="color:#383A42;">(Authorize([</span><span style="color:#50A14F;">&#39;Admin&#39;</span><span style="color:#383A42;">, </span><span style="color:#50A14F;">&#39;Normal&#39;</span><span style="color:#383A42;">, </span><span style="color:#50A14F;">&#39;Guest&#39;</span><span style="color:#383A42;">]))</span></span>
<span class="line"><span style="color:#A626A4;">    def</span><span style="color:#4078F2;"> on_get</span><span style="color:#383A42;">(</span><span style="color:#986801;">self</span><span style="color:#383A42;">,</span><span style="color:#986801;"> req</span><span style="color:#383A42;">,</span><span style="color:#986801;"> resp</span><span style="color:#383A42;">):</span></span>
<span class="line"><span style="color:#383A42;">        output = {</span></span>
<span class="line"><span style="color:#50A14F;">            &#39;method&#39;</span><span style="color:#383A42;">: </span><span style="color:#50A14F;">&#39;get&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#50A14F;">            &#39;user-id&#39;</span><span style="color:#383A42;">: req.user_id</span></span>
<span class="line"><span style="color:#383A42;">        }</span></span>
<span class="line"><span style="color:#383A42;">        resp.media = output</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">    @falcon.before</span><span style="color:#383A42;">(Authorize([</span><span style="color:#50A14F;">&#39;Normal&#39;</span><span style="color:#383A42;">, </span><span style="color:#50A14F;">&#39;Guest&#39;</span><span style="color:#383A42;">]))</span></span>
<span class="line"><span style="color:#A626A4;">    def</span><span style="color:#4078F2;"> on_post</span><span style="color:#383A42;">(</span><span style="color:#986801;">self</span><span style="color:#383A42;">,</span><span style="color:#986801;"> req</span><span style="color:#383A42;">,</span><span style="color:#986801;"> resp</span><span style="color:#383A42;">):</span></span>
<span class="line"><span style="color:#383A42;">        output = {</span></span>
<span class="line"><span style="color:#50A14F;">            &#39;method&#39;</span><span style="color:#383A42;">: </span><span style="color:#50A14F;">&#39;post&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#50A14F;">            &#39;user-id&#39;</span><span style="color:#383A42;">: req.user_id</span></span>
<span class="line"><span style="color:#383A42;">        }</span></span>
<span class="line"><span style="color:#383A42;">        resp.media = output</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">api = falcon.API()</span></span>
<span class="line"><span style="color:#383A42;">api.add_route(</span><span style="color:#50A14F;">&#39;/&#39;</span><span style="color:#383A42;">, ObjRes())</span></span>
<span class="line"><span style="color:#383A42;">serve(api, </span><span style="color:#986801;">host</span><span style="color:#383A42;">=</span><span style="color:#50A14F;">&quot;127.0.0.1&quot;</span><span style="color:#383A42;">, </span><span style="color:#986801;">port</span><span style="color:#383A42;">=</span><span style="color:#986801;">8001</span><span style="color:#383A42;">)</span></span></code></pre></div></details>`,16)),t("details",y,[s[0]||(s[0]=n(`<summary>Basic Auth</summary><div class="language-python"><button title="Скопировать код" class="copy"></button><span class="lang">python</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> base64</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">import</span><span style="color:#383A42;"> falcon</span></span>
<span class="line"><span style="color:#A626A4;">from</span><span style="color:#383A42;"> waitress </span><span style="color:#A626A4;">import</span><span style="color:#383A42;"> serve</span></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">user_accounts = {</span></span>
<span class="line"><span style="color:#50A14F;">    &#39;admin&#39;</span><span style="color:#383A42;">: </span><span style="color:#50A14F;">&#39;123&#39;</span></span>
<span class="line"><span style="color:#383A42;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> Authorize(</span><span style="color:#0184BC;">object</span><span style="color:#C18401;">)</span><span style="color:#383A42;">:</span></span>
<span class="line"><span style="color:#A626A4;">    def</span><span style="color:#0184BC;"> __init__</span><span style="color:#383A42;">(</span><span style="color:#986801;">self</span><span style="color:#383A42;">):</span></span>
<span class="line"><span style="color:#A626A4;">        pass</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    def</span><span style="color:#4078F2;"> __auth_basic</span><span style="color:#383A42;">(</span><span style="color:#986801;">self</span><span style="color:#383A42;">,</span><span style="color:#986801;"> username</span><span style="color:#383A42;">,</span><span style="color:#986801;"> password</span><span style="color:#383A42;">):</span></span>
<span class="line"><span style="color:#A626A4;">        if</span><span style="color:#383A42;"> username </span><span style="color:#A626A4;">in</span><span style="color:#383A42;"> user_accounts </span><span style="color:#A626A4;">and</span><span style="color:#383A42;"> user_accounts[username] == password:</span></span>
<span class="line"><span style="color:#0184BC;">            print</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;You have access&#39;</span><span style="color:#383A42;">)</span></span>
<span class="line"><span style="color:#A626A4;">        else</span><span style="color:#383A42;">:</span></span>
<span class="line"><span style="color:#A626A4;">            raise</span><span style="color:#383A42;"> falcon.HTTPUnauthorized(</span><span style="color:#50A14F;">&#39;Unauthorized&#39;</span><span style="color:#383A42;">, </span><span style="color:#50A14F;">&#39;Your access is not allowed&#39;</span><span style="color:#383A42;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">    def</span><span style="color:#0184BC;"> __call__</span><span style="color:#383A42;">(</span><span style="color:#986801;">self</span><span style="color:#383A42;">,</span><span style="color:#986801;"> req</span><span style="color:#383A42;">,</span><span style="color:#986801;"> resp</span><span style="color:#383A42;">,</span><span style="color:#986801;"> resource</span><span style="color:#383A42;">,</span><span style="color:#986801;"> params</span><span style="color:#383A42;">):</span></span>
<span class="line"><span style="color:#383A42;">        auth_exp = req.auth.split(</span><span style="color:#50A14F;">&#39; &#39;</span><span style="color:#383A42;">) </span><span style="color:#A626A4;">if</span><span style="color:#383A42;"> req.auth </span><span style="color:#A626A4;">is</span><span style="color:#A626A4;"> not</span><span style="color:#986801;"> None</span><span style="color:#A626A4;"> else</span><span style="color:#383A42;"> (</span><span style="color:#986801;">None</span><span style="color:#383A42;">, </span><span style="color:#986801;">None</span><span style="color:#383A42;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">        if</span><span style="color:#383A42;"> auth_exp[</span><span style="color:#986801;">0</span><span style="color:#383A42;">] </span><span style="color:#A626A4;">is</span><span style="color:#A626A4;"> not</span><span style="color:#986801;"> None</span><span style="color:#A626A4;"> and</span><span style="color:#383A42;"> auth_exp[</span><span style="color:#986801;">0</span><span style="color:#383A42;">].lower() == </span><span style="color:#50A14F;">&#39;basic&#39;</span><span style="color:#383A42;">:</span></span>
<span class="line"><span style="color:#383A42;">            auth = base64.b64decode(auth_exp[</span><span style="color:#986801;">1</span><span style="color:#383A42;">]).decode(</span><span style="color:#50A14F;">&#39;utf-8&#39;</span><span style="color:#383A42;">).split(</span><span style="color:#50A14F;">&#39;:&#39;</span><span style="color:#383A42;">)</span></span>
<span class="line"><span style="color:#383A42;">            username = auth[</span><span style="color:#986801;">0</span><span style="color:#383A42;">]</span></span>
<span class="line"><span style="color:#383A42;">            password = auth[</span><span style="color:#986801;">1</span><span style="color:#383A42;">]</span></span>
<span class="line"><span style="color:#E45649;">            self</span><span style="color:#383A42;">.__auth_basic(username, password)</span></span>
<span class="line"><span style="color:#A626A4;">        else</span><span style="color:#383A42;">:</span></span>
<span class="line"><span style="color:#A626A4;">            raise</span><span style="color:#383A42;"> falcon.HTTPNotImplemented(</span></span>
<span class="line"><span style="color:#50A14F;">                &#39;Not Implemented&#39;</span><span style="color:#383A42;">, </span><span style="color:#50A14F;">&quot;You don&#39;t use the right auth method&quot;</span></span>
<span class="line"><span style="color:#383A42;">            )</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">class</span><span style="color:#C18401;"> ObjRes(</span><span style="color:#0184BC;">object</span><span style="color:#C18401;">)</span><span style="color:#383A42;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">    @falcon.before</span><span style="color:#383A42;">(Authorize())</span></span>
<span class="line"><span style="color:#A626A4;">    def</span><span style="color:#4078F2;"> on_get</span><span style="color:#383A42;">(</span><span style="color:#986801;">self</span><span style="color:#383A42;">,</span><span style="color:#986801;"> req</span><span style="color:#383A42;">,</span><span style="color:#986801;"> resp</span><span style="color:#383A42;">):</span></span>
<span class="line"><span style="color:#383A42;">        output = {</span></span>
<span class="line"><span style="color:#50A14F;">            &#39;method&#39;</span><span style="color:#383A42;">: </span><span style="color:#50A14F;">&#39;get&#39;</span></span>
<span class="line"><span style="color:#383A42;">        }</span></span>
<span class="line"><span style="color:#383A42;">        resp.media = output</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#383A42;">api = falcon.API()</span></span>
<span class="line"><span style="color:#383A42;">api.add_route(</span><span style="color:#50A14F;">&#39;/&#39;</span><span style="color:#383A42;">, ObjRes())</span></span>
<span class="line"><span style="color:#383A42;">serve(api, </span><span style="color:#986801;">host</span><span style="color:#383A42;">=</span><span style="color:#50A14F;">&quot;127.0.0.1&quot;</span><span style="color:#383A42;">, </span><span style="color:#986801;">port</span><span style="color:#383A42;">=</span><span style="color:#986801;">8001</span><span style="color:#383A42;">)</span></span></code></pre></div>`,2)),c(a,{items:["Insomnia","Basic Auth"]})])])}const b=l(r,[["render",A]]);export{h as __pageData,b as default};
