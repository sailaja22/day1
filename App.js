const head= React.createElement("div" , {id: "parent"}, [React.createElement("div" , {id: "child"}, [React.createElement("h1" , {}, "Hello React!"), React.createElement("h2" , {}, "Hello DOM!")]), React.createElement("div" , {id: "child"}, [React.createElement("h1" , {}, "Hello React!"), React.createElement("h2" , {}, "Hello DOM!")])]);

// const head= React.createElement("h1" , {id: "head"}, "Hello React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(head);