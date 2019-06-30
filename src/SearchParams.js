import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import Results from './Results';
import useDropdown from './useDropdown';



const SearchParams = () => {
    // default state is Seattle WA - the first state
    // this is a hook - 'use____' all hooks start with 'use'
    const [location, setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
    const [pets, setPets] = useState([]);


    // always returns a promise 
    async function requestPets() {
        const { animals } = await pet.animals({
            location,
            breed,
            type: animal
        })

        setPets(animal || []);
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
                onSubmit={ e => {
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

                <button>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    );
};

export default SearchParams;
