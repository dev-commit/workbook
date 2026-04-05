import{_ as p,C as t,o as c,c as r,aw as n,E as y,w as o,j as s,a as l}from"./chunks/framework.DLufY-ao.js";const v=JSON.parse('{"title":"Observer (Наблюдатель)","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/dev-commit/theory/design-patterns/3-behavioral/observer.md","filePath":"wiki/dev-commit/theory/design-patterns/3-behavioral/observer.md"}'),i={name:"wiki/dev-commit/theory/design-patterns/3-behavioral/observer.md"};function A(b,a,u,d,E,F){const e=t("v-two");return c(),r("div",null,[a[2]||(a[2]=n("",7)),y(e,{title:["Класс","Функция"]},{first:o(()=>[...a[0]||(a[0]=[s("div",{class:"language-js"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"js"),s("pre",{class:"shiki one-light vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A626A4"}},"class"),s("span",{style:{color:"#C18401"}}," Observable"),s("span",{style:{color:"#383A42"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A626A4"}},"  constructor"),s("span",{style:{color:"#383A42"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E45649"}},"    this"),s("span",{style:{color:"#383A42"}},"."),s("span",{style:{color:"#E45649"}},"state"),s("span",{style:{color:"#0184BC"}}," ="),s("span",{style:{color:"#50A14F"}},' "Initial Data"'),s("span",{style:{color:"#383A42"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E45649"}},"    this"),s("span",{style:{color:"#383A42"}},"."),s("span",{style:{color:"#E45649"}},"subscribers"),s("span",{style:{color:"#0184BC"}}," ="),s("span",{style:{color:"#383A42"}}," [];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4078F2"}},"  subscribe"),s("span",{style:{color:"#383A42"}},"(subscriber) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E45649"}},"    this"),s("span",{style:{color:"#383A42"}},"."),s("span",{style:{color:"#E45649"}},"subscribers"),s("span",{style:{color:"#383A42"}},"."),s("span",{style:{color:"#4078F2"}},"push"),s("span",{style:{color:"#383A42"}},"(subscriber);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4078F2"}},"  unsubscribe"),s("span",{style:{color:"#383A42"}},"(subscriber) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E45649"}},"    this"),s("span",{style:{color:"#383A42"}},"."),s("span",{style:{color:"#E45649"}},"subscribers"),s("span",{style:{color:"#0184BC"}}," ="),s("span",{style:{color:"#E45649"}}," this"),s("span",{style:{color:"#383A42"}},"."),s("span",{style:{color:"#E45649"}},"subscribers"),s("span",{style:{color:"#383A42"}},"."),s("span",{style:{color:"#4078F2"}},"filter"),s("span",{style:{color:"#383A42"}},"((el) "),s("span",{style:{color:"#A626A4"}},"=>"),s("span",{style:{color:"#383A42"}}," el "),s("span",{style:{color:"#0184BC"}},"!=="),s("span",{style:{color:"#383A42"}}," subscriber);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4078F2"}},"  getState"),s("span",{style:{color:"#383A42"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A626A4"}},"    return"),s("span",{style:{color:"#E45649"}}," this"),s("span",{style:{color:"#383A42"}},"."),s("span",{style:{color:"#E45649"}},"state"),s("span",{style:{color:"#383A42"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4078F2"}},"  setState"),s("span",{style:{color:"#383A42"}},"(data) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E45649"}},"    this"),s("span",{style:{color:"#383A42"}},"."),s("span",{style:{color:"#E45649"}},"state"),s("span",{style:{color:"#0184BC"}}," ="),s("span",{style:{color:"#383A42"}}," data;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E45649"}},"    this"),s("span",{style:{color:"#383A42"}},"."),s("span",{style:{color:"#4078F2"}},"notify"),s("span",{style:{color:"#383A42"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4078F2"}},"  notify"),s("span",{style:{color:"#383A42"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E45649"}},"    this"),s("span",{style:{color:"#383A42"}},"."),s("span",{style:{color:"#E45649"}},"subscribers"),s("span",{style:{color:"#383A42"}},"."),s("span",{style:{color:"#4078F2"}},"forEach"),s("span",{style:{color:"#383A42"}},"((subscriber) "),s("span",{style:{color:"#A626A4"}},"=>"),s("span",{style:{color:"#383A42"}}," subscriber."),s("span",{style:{color:"#4078F2"}},"update"),s("span",{style:{color:"#383A42"}},"("),s("span",{style:{color:"#E45649"}},"this"),s("span",{style:{color:"#383A42"}},"."),s("span",{style:{color:"#E45649"}},"state"),s("span",{style:{color:"#383A42"}},"));")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A626A4"}},"class"),s("span",{style:{color:"#C18401"}}," Subscriber"),s("span",{style:{color:"#383A42"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4078F2"}},"  update"),s("span",{style:{color:"#383A42"}},"(data) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"    console."),s("span",{style:{color:"#4078F2"}},"log"),s("span",{style:{color:"#383A42"}},"("),s("span",{style:{color:"#50A14F"}},'"Subscriber Udated Data"'),s("span",{style:{color:"#383A42"}},", data);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0A1A7","font-style":"italic"}},"// Использование")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A626A4"}},"const"),s("span",{style:{color:"#986801"}}," observable"),s("span",{style:{color:"#0184BC"}}," ="),s("span",{style:{color:"#A626A4"}}," new"),s("span",{style:{color:"#4078F2"}}," Observable"),s("span",{style:{color:"#383A42"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A626A4"}},"const"),s("span",{style:{color:"#986801"}}," subscriber"),s("span",{style:{color:"#0184BC"}}," ="),s("span",{style:{color:"#A626A4"}}," new"),s("span",{style:{color:"#4078F2"}}," Subscriber"),s("span",{style:{color:"#383A42"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"observable."),s("span",{style:{color:"#4078F2"}},"subscribe"),s("span",{style:{color:"#383A42"}},"(subscriber);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0A1A7","font-style":"italic"}},"// observable.unsubscribe(subscriber)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"observable."),s("span",{style:{color:"#4078F2"}},"setState"),s("span",{style:{color:"#383A42"}},"("),s("span",{style:{color:"#50A14F"}},'"New Data"'),s("span",{style:{color:"#383A42"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A626A4"}},"const"),s("span",{style:{color:"#986801"}}," state"),s("span",{style:{color:"#0184BC"}}," ="),s("span",{style:{color:"#383A42"}}," observable."),s("span",{style:{color:"#4078F2"}},"getState"),s("span",{style:{color:"#383A42"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"console."),s("span",{style:{color:"#4078F2"}},"log"),s("span",{style:{color:"#383A42"}},"("),s("span",{style:{color:"#50A14F"}},'"Observable State"'),s("span",{style:{color:"#383A42"}},", state);")])])])],-1)])]),last:o(()=>[...a[1]||(a[1]=[s("div",{class:"language-js"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"js"),s("pre",{class:"shiki one-light vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0A1A7","font-style":"italic"}},"// Фабрика для Observable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A626A4"}},"const"),s("span",{style:{color:"#4078F2"}}," createObservable"),s("span",{style:{color:"#0184BC"}}," ="),s("span",{style:{color:"#383A42"}}," () "),s("span",{style:{color:"#A626A4"}},"=>"),s("span",{style:{color:"#383A42"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A626A4"}},"  let"),s("span",{style:{color:"#383A42"}}," state "),s("span",{style:{color:"#0184BC"}},"="),s("span",{style:{color:"#50A14F"}}," 'Initial Data'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A626A4"}},"  const"),s("span",{style:{color:"#986801"}}," subscribers"),s("span",{style:{color:"#0184BC"}}," ="),s("span",{style:{color:"#383A42"}}," []")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A626A4"}},"  return"),s("span",{style:{color:"#383A42"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4078F2"}},"    subscribe"),s("span",{style:{color:"#383A42"}},"(subscriber) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"      subscribers."),s("span",{style:{color:"#4078F2"}},"push"),s("span",{style:{color:"#383A42"}},"(subscriber)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4078F2"}},"    unsubscribe"),s("span",{style:{color:"#383A42"}},"(subscriber) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"      subscribers "),s("span",{style:{color:"#0184BC"}},"="),s("span",{style:{color:"#383A42"}}," subscribers."),s("span",{style:{color:"#4078F2"}},"filter"),s("span",{style:{color:"#383A42"}},"(el "),s("span",{style:{color:"#A626A4"}},"=>"),s("span",{style:{color:"#383A42"}}," el "),s("span",{style:{color:"#0184BC"}},"!=="),s("span",{style:{color:"#383A42"}}," subscriber)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4078F2"}},"    getState"),s("span",{style:{color:"#383A42"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A626A4"}},"      return"),s("span",{style:{color:"#383A42"}}," state")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4078F2"}},"    setState"),s("span",{style:{color:"#383A42"}},"(data) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"      state "),s("span",{style:{color:"#0184BC"}},"="),s("span",{style:{color:"#383A42"}}," data")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E45649"}},"      this"),s("span",{style:{color:"#383A42"}},"."),s("span",{style:{color:"#4078F2"}},"notify"),s("span",{style:{color:"#383A42"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4078F2"}},"    notify"),s("span",{style:{color:"#383A42"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"	    subscribers."),s("span",{style:{color:"#4078F2"}},"forEach"),s("span",{style:{color:"#383A42"}},"(subscriber "),s("span",{style:{color:"#A626A4"}},"=>"),s("span",{style:{color:"#383A42"}}," subscriber."),s("span",{style:{color:"#4078F2"}},"update"),s("span",{style:{color:"#383A42"}},"(state))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0A1A7","font-style":"italic"}},"// Фабрика для Subscriber")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A626A4"}},"const"),s("span",{style:{color:"#4078F2"}}," createSubscriber"),s("span",{style:{color:"#0184BC"}}," ="),s("span",{style:{color:"#383A42"}}," () "),s("span",{style:{color:"#A626A4"}},"=>"),s("span",{style:{color:"#383A42"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A626A4"}},"  return"),s("span",{style:{color:"#383A42"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4078F2"}},"    update"),s("span",{style:{color:"#383A42"}},"(data) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"      console."),s("span",{style:{color:"#4078F2"}},"log"),s("span",{style:{color:"#383A42"}},"("),s("span",{style:{color:"#50A14F"}},"'Subscriber Udated Data'"),s("span",{style:{color:"#383A42"}},", data)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"  };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0A1A7","font-style":"italic"}},"// Использование")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A626A4"}},"const"),s("span",{style:{color:"#986801"}}," observable"),s("span",{style:{color:"#0184BC"}}," ="),s("span",{style:{color:"#4078F2"}}," createObservable"),s("span",{style:{color:"#383A42"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A626A4"}},"const"),s("span",{style:{color:"#986801"}}," subscriber"),s("span",{style:{color:"#0184BC"}}," ="),s("span",{style:{color:"#4078F2"}}," createSubscriber"),s("span",{style:{color:"#383A42"}},"()")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"observable."),s("span",{style:{color:"#4078F2"}},"subscribe"),s("span",{style:{color:"#383A42"}},"(subscriber)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0A1A7","font-style":"italic"}},"// observable.unsubscribe(subscriber)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"observable."),s("span",{style:{color:"#4078F2"}},"setState"),s("span",{style:{color:"#383A42"}},"("),s("span",{style:{color:"#50A14F"}},"'New Data'"),s("span",{style:{color:"#383A42"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A626A4"}},"const"),s("span",{style:{color:"#986801"}}," state"),s("span",{style:{color:"#0184BC"}}," ="),s("span",{style:{color:"#383A42"}}," observable."),s("span",{style:{color:"#4078F2"}},"getState"),s("span",{style:{color:"#383A42"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"console."),s("span",{style:{color:"#4078F2"}},"log"),s("span",{style:{color:"#383A42"}},"("),s("span",{style:{color:"#50A14F"}},"'Observable State'"),s("span",{style:{color:"#383A42"}},", state)")])])])],-1)])]),_:1}),a[3]||(a[3]=n("",2))])}const C=p(i,[["render",A]]);export{v as __pageData,C as default};
