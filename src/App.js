import React, {useState} from 'react';
import { render } from 'react-dom';
import SearchParams from './SearchParams';
import { Router, Link } from '@reach/router';
import Details from './Details';
import ThemeContext from './ThemeContext';

const App = () => {
    const themeHook = useState("pink");

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
        <ThemeContext.Provider value={themeHook}>
            <div>
                <header>
                <Link to="/">  Adopt me! </Link>    
                </header>    
            
                <Router>
                    <SearchParams path="/" />
                    <Details path="/details/:id"/>
                </Router>
            </div>
        </ThemeContext.Provider>    
    );
};

render(<App /> , document.getElementById("root"));
