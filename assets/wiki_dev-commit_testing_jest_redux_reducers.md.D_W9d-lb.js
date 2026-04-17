import{_ as n,o as a,c as l,aw as p}from"./chunks/framework.DLufY-ao.js";const E=JSON.parse('{"title":"Reducers","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/testing/jest/redux/reducers.md","filePath":"wiki/dev-commit/testing/jest/redux/reducers.md"}'),o={name:"wiki/dev-commit/testing/jest/redux/reducers.md"};function e(c,s,t,r,y,i){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h1 id="reducers" tabindex="-1">Reducers <a class="header-anchor" href="#reducers" aria-label="Permalink to &quot;Reducers&quot;">​</a></h1><ul><li><strong>Reducer</strong> - чистая функция, которая берет на вход предыдущее состояние и action и возвращает объект нового состояния</li><li>Через toEqual можно написать ожидание объекта, который нужен</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> NEWS_GET_REQUEST</span><span style="color:#0184BC;"> =</span><span style="color:#50A14F;"> &#39;NEWS_GET_REQUEST&#39;</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> NEWS_GET_SUCCESS</span><span style="color:#0184BC;"> =</span><span style="color:#50A14F;"> &#39;NEWS_GET_SUCCESS&#39;</span><span style="color:#383A42;">;</span></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> NEWS_GET_FAILURE</span><span style="color:#0184BC;"> =</span><span style="color:#50A14F;"> &#39;NEWS_GET_FAILURE&#39;</span><span style="color:#383A42;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">const</span><span style="color:#986801;"> initialState</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">    data</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> null</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    isLoading</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> false</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">    errorMsg</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> null</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">};</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#A626A4;">const</span><span style="color:#4078F2;"> myReducer</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> (state </span><span style="color:#0184BC;">=</span><span style="color:#383A42;"> initialState, action) </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">    switch</span><span style="color:#383A42;"> (action.</span><span style="color:#E45649;">type</span><span style="color:#383A42;">) {</span></span>
<span class="line"><span style="color:#A626A4;">        case</span><span style="color:#986801;"> NEWS_GET_REQUEST</span><span style="color:#383A42;">: {</span></span>
<span class="line"><span style="color:#A626A4;">            return</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#0184BC;">                ...</span><span style="color:#383A42;">state,</span></span>
<span class="line"><span style="color:#E45649;">                isLoading</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> true</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">            };</span></span>
<span class="line"><span style="color:#383A42;">        }</span></span>
<span class="line"><span style="color:#A626A4;">        case</span><span style="color:#986801;"> NEWS_GET_SUCCESS</span><span style="color:#383A42;">: {</span></span>
<span class="line"><span style="color:#A626A4;">            return</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#0184BC;">                ...</span><span style="color:#383A42;">state,</span></span>
<span class="line"><span style="color:#E45649;">                isLoading</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> false</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">                data</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> action.</span><span style="color:#E45649;">payload</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">            };</span></span>
<span class="line"><span style="color:#383A42;">        }</span></span>
<span class="line"><span style="color:#A626A4;">        case</span><span style="color:#986801;"> NEWS_GET_FAILURE</span><span style="color:#383A42;">: {</span></span>
<span class="line"><span style="color:#A626A4;">            return</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#0184BC;">                ...</span><span style="color:#383A42;">state,</span></span>
<span class="line"><span style="color:#E45649;">                isLoading</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> false</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">                errorMsg</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> action.</span><span style="color:#E45649;">payload</span><span style="color:#383A42;">.</span><span style="color:#E45649;">errorMsg</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">            };</span></span>
<span class="line"><span style="color:#383A42;">        }</span></span>
<span class="line"><span style="color:#A626A4;">        default</span><span style="color:#383A42;">: {</span></span>
<span class="line"><span style="color:#A626A4;">            return</span><span style="color:#383A42;"> state;</span></span>
<span class="line"><span style="color:#383A42;">        }</span></span>
<span class="line"><span style="color:#383A42;">    }</span></span>
<span class="line"><span style="color:#383A42;">};</span></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#4078F2;">describe</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;reducer&#39;</span><span style="color:#383A42;">, () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#4078F2;">    it</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;NEWS_GET_REQUEST&#39;</span><span style="color:#383A42;">, () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">        const</span><span style="color:#986801;"> action</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">            type</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> NEWS_GET_REQUEST</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">        }</span></span>
<span class="line"><span style="color:#A626A4;">        const</span><span style="color:#986801;"> state</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> initialState;</span></span>
<span class="line"><span style="color:#383A42;">        </span></span>
<span class="line"><span style="color:#4078F2;">        expect</span><span style="color:#383A42;">(</span><span style="color:#4078F2;">myReducer</span><span style="color:#383A42;">(state, action)).</span><span style="color:#4078F2;">toEqual</span><span style="color:#383A42;">({</span></span>
<span class="line"><span style="color:#0184BC;">            ...</span><span style="color:#383A42;">state,</span></span>
<span class="line"><span style="color:#E45649;">            data</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> null</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">            isLoading</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> true</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">        })</span></span>
<span class="line"><span style="color:#383A42;">    });</span></span>
<span class="line"><span style="color:#383A42;">    </span></span>
<span class="line"><span style="color:#4078F2;">    it</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;NEWS_GET_SUCCESS&#39;</span><span style="color:#383A42;">, () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">        const</span><span style="color:#986801;"> action</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">            type</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> NEWS_GET_SUCCESS</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">            payload</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> [</span><span style="color:#986801;">1</span><span style="color:#383A42;">, </span><span style="color:#986801;">2</span><span style="color:#383A42;">, </span><span style="color:#986801;">3</span><span style="color:#383A42;">]</span></span>
<span class="line"><span style="color:#383A42;">        };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A0A1A7;font-style:italic;">        // состоние за 1 шаг до action</span></span>
<span class="line"><span style="color:#A626A4;">        const</span><span style="color:#986801;"> state</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">            data</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> null</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">            isLoading</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> true</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">            errorMsg</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> null</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">        };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">        expect</span><span style="color:#383A42;">(</span><span style="color:#4078F2;">myReducer</span><span style="color:#383A42;">(state, action)).</span><span style="color:#4078F2;">toEqual</span><span style="color:#383A42;">({</span></span>
<span class="line"><span style="color:#0184BC;">            ...</span><span style="color:#383A42;">state,</span></span>
<span class="line"><span style="color:#E45649;">            data</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> action.</span><span style="color:#E45649;">payload</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">            isLoading</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> false</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">        })</span></span>
<span class="line"><span style="color:#383A42;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">    it</span><span style="color:#383A42;">(</span><span style="color:#50A14F;">&#39;NEWS_GET_FAILURE&#39;</span><span style="color:#383A42;">, () </span><span style="color:#A626A4;">=&gt;</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#A626A4;">        const</span><span style="color:#986801;"> action</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">            type</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> NEWS_GET_FAILURE</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">            payload</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">                errorMsg</span><span style="color:#0184BC;">:</span><span style="color:#50A14F;"> &#39;500 server error&#39;</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">            }</span></span>
<span class="line"><span style="color:#383A42;">        };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A626A4;">        const</span><span style="color:#986801;"> state</span><span style="color:#0184BC;"> =</span><span style="color:#383A42;"> {</span></span>
<span class="line"><span style="color:#E45649;">            errorMsg</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> null</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">            data</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> null</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">            isLoading</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> true</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">        };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">        expect</span><span style="color:#383A42;">(</span><span style="color:#4078F2;">myReducer</span><span style="color:#383A42;">(state, action)).</span><span style="color:#4078F2;">toEqual</span><span style="color:#383A42;">({</span></span>
<span class="line"><span style="color:#0184BC;">            ...</span><span style="color:#383A42;">state,</span></span>
<span class="line"><span style="color:#E45649;">            isLoading</span><span style="color:#0184BC;">:</span><span style="color:#986801;"> false</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#E45649;">            errorMsg</span><span style="color:#0184BC;">:</span><span style="color:#383A42;"> action.</span><span style="color:#E45649;">payload</span><span style="color:#383A42;">.</span><span style="color:#E45649;">errorMsg</span><span style="color:#383A42;">,</span></span>
<span class="line"><span style="color:#383A42;">        })</span></span>
<span class="line"><span style="color:#383A42;">    });</span></span>
<span class="line"><span style="color:#383A42;">});</span></span></code></pre></div>`,5)])])}const d=n(o,[["render",e]]);export{E as __pageData,d as default};
