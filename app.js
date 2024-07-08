// //By core React
// const heading = React.createElement("h1", {id: "heading"}, "Hello world from react");

// // console.log(heading);

// // //by ReactDOM
// const root  = ReactDOM.createRoot(document.querySelector("#root"));

// //rendered heading in root
// root.render(heading);

// ReactElement(object) => HTML(Browser Understands)

// CreateElement is an object in React
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm h1 Tag"),
    React.createElement("h2", {}, "I'm h2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 Tag"),
    React.createElement("h2", {}, "I'm h2 Tag"),
  ]),
]);

console.log(parent); //object

const root = ReactDOM.createRoot(document.querySelector("#root"));

// //rendered heading in root
// render method help us put that object into our page
root.render(parent);


