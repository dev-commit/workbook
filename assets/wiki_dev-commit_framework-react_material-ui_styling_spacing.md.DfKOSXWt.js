import{_ as n,o as a,c as l,aw as p}from"./chunks/framework.DLufY-ao.js";const g=JSON.parse('{"title":"Spacing","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/framework-react/material-ui/styling/spacing.md","filePath":"wiki/dev-commit/framework-react/material-ui/styling/spacing.md"}'),o={name:"wiki/dev-commit/framework-react/material-ui/styling/spacing.md"};function c(t,s,e,i,y,A){return a(),l("div",null,[...s[0]||(s[0]=[p(`<h1 id="spacing" tabindex="-1">Spacing <a class="header-anchor" href="#spacing" aria-label="Permalink to &quot;Spacing&quot;">​</a></h1><h2 id="отступы" tabindex="-1">Отступы <a class="header-anchor" href="#отступы" aria-label="Permalink to &quot;Отступы&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#4078F2;">spacing</span><span style="color:#383A42;">() == spacing(</span><span style="color:#4078F2;">1</span><span style="color:#383A42;">)</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-light vp-code" tabindex="0"><code><span class="line"><span style="color:#4078F2;">spacing(0</span><span style="color:#383A42;">)     </span><span style="color:#A0A1A7;font-style:italic;"># 0px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(0.25</span><span style="color:#383A42;">)  </span><span style="color:#A0A1A7;font-style:italic;"># 2px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(0.5</span><span style="color:#383A42;">)   </span><span style="color:#A0A1A7;font-style:italic;"># 4px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(0.75</span><span style="color:#383A42;">)  </span><span style="color:#A0A1A7;font-style:italic;"># 6px</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">spacing(1</span><span style="color:#383A42;">)     </span><span style="color:#A0A1A7;font-style:italic;"># 8px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(1.25</span><span style="color:#383A42;">)  </span><span style="color:#A0A1A7;font-style:italic;"># 10px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(1.5</span><span style="color:#383A42;">)   </span><span style="color:#A0A1A7;font-style:italic;"># 12px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(1.75</span><span style="color:#383A42;">)  </span><span style="color:#A0A1A7;font-style:italic;"># 14px</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">spacing(2</span><span style="color:#383A42;">)     </span><span style="color:#A0A1A7;font-style:italic;"># 16px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(2.25</span><span style="color:#383A42;">)  </span><span style="color:#A0A1A7;font-style:italic;"># 18px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(2.5</span><span style="color:#383A42;">)   </span><span style="color:#A0A1A7;font-style:italic;"># 20px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(2.75</span><span style="color:#383A42;">)  </span><span style="color:#A0A1A7;font-style:italic;"># 22px</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">spacing(3</span><span style="color:#383A42;">)     </span><span style="color:#A0A1A7;font-style:italic;"># 24px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(3.25</span><span style="color:#383A42;">)  </span><span style="color:#A0A1A7;font-style:italic;"># 26px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(3.5</span><span style="color:#383A42;">)   </span><span style="color:#A0A1A7;font-style:italic;"># 28px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(3.75</span><span style="color:#383A42;">)  </span><span style="color:#A0A1A7;font-style:italic;"># 30px</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">spacing(4</span><span style="color:#383A42;">)     </span><span style="color:#A0A1A7;font-style:italic;"># 32px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(4.25</span><span style="color:#383A42;">)  </span><span style="color:#A0A1A7;font-style:italic;"># 34px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(4.5</span><span style="color:#383A42;">)   </span><span style="color:#A0A1A7;font-style:italic;"># 36px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(4.75</span><span style="color:#383A42;">)  </span><span style="color:#A0A1A7;font-style:italic;"># 38px</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">spacing(5</span><span style="color:#383A42;">)     </span><span style="color:#A0A1A7;font-style:italic;"># 40px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(5.25</span><span style="color:#383A42;">)  </span><span style="color:#A0A1A7;font-style:italic;"># 42px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(5.5</span><span style="color:#383A42;">)   </span><span style="color:#A0A1A7;font-style:italic;"># 44px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(5.75</span><span style="color:#383A42;">)  </span><span style="color:#A0A1A7;font-style:italic;"># 46px</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">spacing(6</span><span style="color:#383A42;">)     </span><span style="color:#A0A1A7;font-style:italic;"># 48px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(6.25</span><span style="color:#383A42;">)  </span><span style="color:#A0A1A7;font-style:italic;"># 50px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(6.5</span><span style="color:#383A42;">)   </span><span style="color:#A0A1A7;font-style:italic;"># 52px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(6.75</span><span style="color:#383A42;">)  </span><span style="color:#A0A1A7;font-style:italic;"># 54px</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">spacing(7</span><span style="color:#383A42;">)     </span><span style="color:#A0A1A7;font-style:italic;"># 56px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(7.25</span><span style="color:#383A42;">)  </span><span style="color:#A0A1A7;font-style:italic;"># 58px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(7.5</span><span style="color:#383A42;">)   </span><span style="color:#A0A1A7;font-style:italic;"># 60px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(7.75</span><span style="color:#383A42;">)  </span><span style="color:#A0A1A7;font-style:italic;"># 62px</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">spacing(8</span><span style="color:#383A42;">)     </span><span style="color:#A0A1A7;font-style:italic;"># 64px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(8.25</span><span style="color:#383A42;">)  </span><span style="color:#A0A1A7;font-style:italic;"># 66px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(8.5</span><span style="color:#383A42;">)   </span><span style="color:#A0A1A7;font-style:italic;"># 68px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(8.75</span><span style="color:#383A42;">)  </span><span style="color:#A0A1A7;font-style:italic;"># 70px</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">spacing(9</span><span style="color:#383A42;">)     </span><span style="color:#A0A1A7;font-style:italic;"># 72px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(9.25</span><span style="color:#383A42;">)  </span><span style="color:#A0A1A7;font-style:italic;"># 74px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(9.5</span><span style="color:#383A42;">)   </span><span style="color:#A0A1A7;font-style:italic;"># 76px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(9.75</span><span style="color:#383A42;">)  </span><span style="color:#A0A1A7;font-style:italic;"># 78px</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">spacing(10</span><span style="color:#383A42;">)    </span><span style="color:#A0A1A7;font-style:italic;"># 80px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(10.25</span><span style="color:#383A42;">) </span><span style="color:#A0A1A7;font-style:italic;"># 82px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(10.5</span><span style="color:#383A42;">)  </span><span style="color:#A0A1A7;font-style:italic;"># 84px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(10.75</span><span style="color:#383A42;">) </span><span style="color:#A0A1A7;font-style:italic;"># 86px</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">spacing(11</span><span style="color:#383A42;">)    </span><span style="color:#A0A1A7;font-style:italic;"># 88px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(11.25</span><span style="color:#383A42;">) </span><span style="color:#A0A1A7;font-style:italic;"># 90px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(11.5</span><span style="color:#383A42;">)  </span><span style="color:#A0A1A7;font-style:italic;"># 92px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(11.75</span><span style="color:#383A42;">) </span><span style="color:#A0A1A7;font-style:italic;"># 94px</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">spacing(12</span><span style="color:#383A42;">)    </span><span style="color:#A0A1A7;font-style:italic;"># 96px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(12.25</span><span style="color:#383A42;">) </span><span style="color:#A0A1A7;font-style:italic;"># 98px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(12.5</span><span style="color:#383A42;">)  </span><span style="color:#A0A1A7;font-style:italic;"># 100px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(12.75</span><span style="color:#383A42;">) </span><span style="color:#A0A1A7;font-style:italic;"># 102px</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">spacing(13</span><span style="color:#383A42;">)    </span><span style="color:#A0A1A7;font-style:italic;"># 104px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(13.25</span><span style="color:#383A42;">) </span><span style="color:#A0A1A7;font-style:italic;"># 106px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(13.5</span><span style="color:#383A42;">)  </span><span style="color:#A0A1A7;font-style:italic;"># 108px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(13.75</span><span style="color:#383A42;">) </span><span style="color:#A0A1A7;font-style:italic;"># 110px</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4078F2;">spacing(14</span><span style="color:#383A42;">)    </span><span style="color:#A0A1A7;font-style:italic;"># 112px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(14.25</span><span style="color:#383A42;">) </span><span style="color:#A0A1A7;font-style:italic;"># 114px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(14.5</span><span style="color:#383A42;">)  </span><span style="color:#A0A1A7;font-style:italic;"># 116px</span></span>
<span class="line"><span style="color:#4078F2;">spacing(14.75</span><span style="color:#383A42;">) </span><span style="color:#A0A1A7;font-style:italic;"># 118px</span></span></code></pre></div>`,4)])])}const f=n(o,[["render",c]]);export{g as __pageData,f as default};
