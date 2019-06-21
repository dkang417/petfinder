import React from 'react';
import { render } from 'react-dom';
import SearchParams from './SearchParams';


const App = () => {
    // return React.createElement(
    //     "div",
    //     {},
    //     [
    //         React.createElement("h1", {}, "Adopt Me!"),
    //         React.createElement(Pet, { name: "luna", animal: "dog", breed: "poodle"}),    
    //         React.createElement(Pet, { name: "Pepper", animal: "bird", breed: "parrot"}), 
    //         React.createElement(Pet, { name: "Doink", animal: "cat", breed: "mix"}), 
        
    //     ]);

    
    return (
        <div>
            <h1> Adopt me! </h1>
            <SearchParams />
        </div>
    );
};

render(<App /> , document.getElementById("root"));
