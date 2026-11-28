import{_ as a,C as t,o as c,c as p,aw as r,E as y,w as n,j as s,a as l}from"./chunks/framework.DLufY-ao.js";const f=JSON.parse('{"title":"useState vs Zustand","description":"","frontmatter":{},"headers":[],"relativePath":"framework-react/react-flow/zustand/usestate-vs-zustand.md","filePath":"wiki/dev-commit/framework-react/react-flow/zustand/usestate-vs-zustand.md"}'),A={name:"framework-react/react-flow/zustand/usestate-vs-zustand.md"};function i(d,o,u,g,C,E){const e=t("v-two");return c(),p("div",null,[o[2]||(o[2]=r("",2)),y(e,{title:["useState","Zustand"]},{first:n(()=>[...o[0]||(o[0]=[s("div",{class:"language-tsx"},[s("button",{title:"Скопировать код",class:"copy"}),s("span",{class:"lang"},"tsx"),s("pre",{class:"shiki one-light vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A626A4"}},"import"),s("span",{style:{color:"#383A42"}}," { "),s("span",{style:{color:"#E45649"}},"useCallback"),s("span",{style:{color:"#383A42"}}," } "),s("span",{style:{color:"#A626A4"}},"from"),s("span",{style:{color:"#50A14F"}},' "react"'),s("span",{style:{color:"#383A42"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A626A4"}},"import"),s("span",{style:{color:"#E45649"}}," ReactFlow"),s("span",{style:{color:"#383A42"}},", {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E45649"}},"  addEdge"),s("span",{style:{color:"#383A42"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E45649"}},"  useEdgesState"),s("span",{style:{color:"#383A42"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E45649"}},"  useNodesState"),s("span",{style:{color:"#383A42"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E45649"}},"  Connection"),s("span",{style:{color:"#383A42"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"} "),s("span",{style:{color:"#A626A4"}},"from"),s("span",{style:{color:"#50A14F"}},' "reactflow"'),s("span",{style:{color:"#383A42"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A626A4"}},"const"),s("span",{style:{color:"#4078F2"}}," App"),s("span",{style:{color:"#0184BC"}}," ="),s("span",{style:{color:"#383A42"}}," () "),s("span",{style:{color:"#A626A4"}},"=>"),s("span",{style:{color:"#383A42"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A626A4"}},"  const"),s("span",{style:{color:"#383A42"}}," ["),s("span",{style:{color:"#986801"}},"nodes"),s("span",{style:{color:"#383A42"}},", "),s("span",{style:{color:"#986801"}},"setNodes"),s("span",{style:{color:"#383A42"}},", "),s("span",{style:{color:"#986801"}},"onNodesChange"),s("span",{style:{color:"#383A42"}},"] "),s("span",{style:{color:"#0184BC"}},"="),s("span",{style:{color:"#4078F2"}}," useNodesState"),s("span",{style:{color:"#383A42"}},"([]);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A626A4"}},"  const"),s("span",{style:{color:"#383A42"}}," ["),s("span",{style:{color:"#986801"}},"edges"),s("span",{style:{color:"#383A42"}},", "),s("span",{style:{color:"#986801"}},"setEdges"),s("span",{style:{color:"#383A42"}},", "),s("span",{style:{color:"#986801"}},"onEdgesChange"),s("span",{style:{color:"#383A42"}},"] "),s("span",{style:{color:"#0184BC"}},"="),s("span",{style:{color:"#4078F2"}}," useEdgesState"),s("span",{style:{color:"#383A42"}},"([]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A626A4"}},"  const"),s("span",{style:{color:"#986801"}}," onConnect"),s("span",{style:{color:"#0184BC"}}," ="),s("span",{style:{color:"#4078F2"}}," useCallback"),s("span",{style:{color:"#383A42"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"    (connection"),s("span",{style:{color:"#0184BC"}},":"),s("span",{style:{color:"#C18401"}}," Connection"),s("span",{style:{color:"#383A42"}},") "),s("span",{style:{color:"#A626A4"}},"=>"),s("span",{style:{color:"#383A42"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#4078F2"}},"      setEdges"),s("span",{style:{color:"#383A42"}},"((eds) "),s("span",{style:{color:"#A626A4"}},"=>"),s("span",{style:{color:"#4078F2"}}," addEdge"),s("span",{style:{color:"#383A42"}},"(connection, eds));")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"    [setEdges],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"  );")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A626A4"}},"  return"),s("span",{style:{color:"#383A42"}}," (")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"    <"),s("span",{style:{color:"#C18401"}},"ReactFlow")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#986801"}},"      nodes"),s("span",{style:{color:"#383A42"}},"={nodes}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#986801"}},"      edges"),s("span",{style:{color:"#383A42"}},"={edges}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#986801"}},"      onNodesChange"),s("span",{style:{color:"#383A42"}},"={onNodesChange}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#986801"}},"      onEdgesChange"),s("span",{style:{color:"#383A42"}},"={onEdgesChange}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#986801"}},"      onConnect"),s("span",{style:{color:"#383A42"}},"={onConnect}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"    />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"  );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"};")])])])],-1)])]),last:n(()=>[...o[1]||(o[1]=[s("div",{class:"language-tsx"},[s("button",{title:"Скопировать код",class:"copy"}),s("span",{class:"lang"},"tsx"),s("pre",{class:"shiki one-light vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A626A4"}},"import"),s("span",{style:{color:"#383A42"}}," { "),s("span",{style:{color:"#E45649"}},"useCallback"),s("span",{style:{color:"#383A42"}}," } "),s("span",{style:{color:"#A626A4"}},"from"),s("span",{style:{color:"#50A14F"}},' "react"'),s("span",{style:{color:"#383A42"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A626A4"}},"import"),s("span",{style:{color:"#E45649"}}," ReactFlow"),s("span",{style:{color:"#383A42"}},", { "),s("span",{style:{color:"#E45649"}},"addEdge"),s("span",{style:{color:"#383A42"}},", "),s("span",{style:{color:"#E45649"}},"useEdgesState"),s("span",{style:{color:"#383A42"}},", "),s("span",{style:{color:"#E45649"}},"useNodesState"),s("span",{style:{color:"#383A42"}}," } "),s("span",{style:{color:"#A626A4"}},"from"),s("span",{style:{color:"#50A14F"}},' "reactflow"'),s("span",{style:{color:"#383A42"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A626A4"}},"import"),s("span",{style:{color:"#383A42"}}," { "),s("span",{style:{color:"#E45649"}},"useShallow"),s("span",{style:{color:"#383A42"}}," } "),s("span",{style:{color:"#A626A4"}},"from"),s("span",{style:{color:"#50A14F"}},' "zustand/react/shallow"'),s("span",{style:{color:"#383A42"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A626A4"}},"import"),s("span",{style:{color:"#E45649"}}," useStore"),s("span",{style:{color:"#A626A4"}}," from"),s("span",{style:{color:"#50A14F"}},' "../store/store"'),s("span",{style:{color:"#383A42"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A626A4"}},"const"),s("span",{style:{color:"#4078F2"}}," selector"),s("span",{style:{color:"#0184BC"}}," ="),s("span",{style:{color:"#383A42"}}," (state) "),s("span",{style:{color:"#A626A4"}},"=>"),s("span",{style:{color:"#383A42"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"  nodes"),s("span",{style:{color:"#0184BC"}},":"),s("span",{style:{color:"#E45649"}}," state"),s("span",{style:{color:"#383A42"}},"."),s("span",{style:{color:"#E45649"}},"nodes"),s("span",{style:{color:"#383A42"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"  edges"),s("span",{style:{color:"#0184BC"}},":"),s("span",{style:{color:"#E45649"}}," state"),s("span",{style:{color:"#383A42"}},"."),s("span",{style:{color:"#E45649"}},"edges"),s("span",{style:{color:"#383A42"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"  onNodesChange"),s("span",{style:{color:"#0184BC"}},":"),s("span",{style:{color:"#E45649"}}," state"),s("span",{style:{color:"#383A42"}},"."),s("span",{style:{color:"#E45649"}},"onNodesChange"),s("span",{style:{color:"#383A42"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"  onEdgesChange"),s("span",{style:{color:"#0184BC"}},":"),s("span",{style:{color:"#E45649"}}," state"),s("span",{style:{color:"#383A42"}},"."),s("span",{style:{color:"#E45649"}},"onEdgesChange"),s("span",{style:{color:"#383A42"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"  onConnect"),s("span",{style:{color:"#0184BC"}},":"),s("span",{style:{color:"#E45649"}}," state"),s("span",{style:{color:"#383A42"}},"."),s("span",{style:{color:"#E45649"}},"onConnect"),s("span",{style:{color:"#383A42"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"  setNodes"),s("span",{style:{color:"#0184BC"}},":"),s("span",{style:{color:"#E45649"}}," state"),s("span",{style:{color:"#383A42"}},"."),s("span",{style:{color:"#E45649"}},"setNodes"),s("span",{style:{color:"#383A42"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"  setEdges"),s("span",{style:{color:"#0184BC"}},":"),s("span",{style:{color:"#E45649"}}," state"),s("span",{style:{color:"#383A42"}},"."),s("span",{style:{color:"#E45649"}},"setEdges"),s("span",{style:{color:"#383A42"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"});")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A626A4"}},"const"),s("span",{style:{color:"#4078F2"}}," App"),s("span",{style:{color:"#0184BC"}}," ="),s("span",{style:{color:"#383A42"}}," () "),s("span",{style:{color:"#A626A4"}},"=>"),s("span",{style:{color:"#383A42"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A626A4"}},"  const"),s("span",{style:{color:"#383A42"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#986801"}},"    nodes"),s("span",{style:{color:"#383A42"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#986801"}},"    edges"),s("span",{style:{color:"#383A42"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#986801"}},"    onNodesChange"),s("span",{style:{color:"#383A42"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#986801"}},"    onEdgesChange"),s("span",{style:{color:"#383A42"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#986801"}},"    onConnect"),s("span",{style:{color:"#383A42"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#986801"}},"    setNodes"),s("span",{style:{color:"#383A42"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#986801"}},"    setEdges"),s("span",{style:{color:"#383A42"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"  } "),s("span",{style:{color:"#0184BC"}},"="),s("span",{style:{color:"#4078F2"}}," useStore"),s("span",{style:{color:"#383A42"}},"("),s("span",{style:{color:"#4078F2"}},"useShallow"),s("span",{style:{color:"#383A42"}},"(selector));")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A626A4"}},"  return"),s("span",{style:{color:"#383A42"}}," (")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"    <"),s("span",{style:{color:"#C18401"}},"ReactFlow")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#986801"}},"      nodes"),s("span",{style:{color:"#383A42"}},"={nodes}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#986801"}},"      edges"),s("span",{style:{color:"#383A42"}},"={edges}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#986801"}},"      onNodesChange"),s("span",{style:{color:"#383A42"}},"={onNodesChange}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#986801"}},"      onEdgesChange"),s("span",{style:{color:"#383A42"}},"={onEdgesChange}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#986801"}},"      onConnect"),s("span",{style:{color:"#383A42"}},"={onConnect}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"    />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"  );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#383A42"}},"};")])])])],-1)])]),_:1})])}const w=a(A,[["render",i]]);export{f as __pageData,w as default};
