import{useState as o,useEffect as t}from"react";import{jsx as e,jsxs as r}from"react/jsx-runtime";const n=()=>{const[n,l]=o([]);let m=["Item 1","Item 2","Item 3"];t(()=>{console.log("data from plugin"),a()},[]);const a=()=>{console.log("Data from load data from plugin"),l(m)};/*#__PURE__*/return e("div",{className:"dropdown",children:/*#__PURE__*/r("select",{children:[" ",n.map((o,t)=>/*#__PURE__*/e("option",{children:o},t))," "]})})};export{n as TestApp};
//# sourceMappingURL=lib.modern.mjs.map
