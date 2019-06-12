const Pet = ({name, animal, breed}) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed)
    ]);
};

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, { name: "luna", animal: "dog", breed: "poodle"}),    
            React.createElement(Pet, { name: "Pepper", animal: "bird", breed: "parrot"}), 
            React.createElement(Pet, { name: "Doink", animal: "cat", breed: "mix"}), 
        
        ]);
};

ReactDOM.render(
    React.createElement(App), 
    document.getElementById("root")
);
