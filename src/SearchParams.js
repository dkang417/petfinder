import React, { useState, useEffect, useContext } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import Results from './Results';
import useDropdown from './useDropdown';
import ThemeContext from './ThemeContext';



const SearchParams = () => {
    // default state is Seattle WA - the first state
    // this is a hook - 'use____' all hooks start with 'use'
    const [location, setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
    const [pets, setPets] = useState([]);
    const [theme, setTheme] = useContext(ThemeContext);


    // always returns a promise 
    async function requestPets() {
        const { animals } = await pet.animals({
            location,
            breed,
            type: animal
        });

        setPets(animals || []);
    }


    // does not run on first render  - runs after first render 
    useEffect(() => {
        setBreeds([]);
        setBreed("");

        pet.breeds(animal).then(({ breeds }) => {
            const breedStrings = breeds.map(({ name }) => name);
            setBreeds(breedStrings);
        }, console.error);
    }, [animal, setBreed, setBreeds]);

    // renders this first on DOM
    return (
        <div className="search-params">
        <h1>{location}</h1>    
            <form
                onSubmit={ (e) => {
                    e.preventDefault();
                    requestPets();
                }}
            >
                <label htmlFor="location">
                    location
                <input
                    id="location"
                    value={location}
                    placeholder="location"
                    onChange={event => setLocation(event.target.value)}
                />
                </label>

                <AnimalDropdown />
                <BreedDropdown />
                <label htmlFor="theme">
                    Theme 
                    <select value={theme}
                        onChange={e => setTheme(e.target.value)}
                        onBlur={e => setTheme(e.target.value)}
                    >
                        <option value="peru">Peru</option>
                        <option value="darkblue">blue</option>
                        <option value="pink">pink</option>
                        <option value="green">green</option>
                        
                    </select>
                    
                </label>    

                <button style={{ backgroundColor:theme }}>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    );
};

export default SearchParams;
