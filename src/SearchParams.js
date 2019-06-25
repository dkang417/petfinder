import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';


const SearchParams = () => {
    // default state is Seattle WA - the first state
    // this is a hook - 'use____' all hooks start with 'use'
    const [location, setLocation] = useState("Seattle, WA");
    const [animal, setAnimal] = useState("dog");
    const [breed, setBreed] = useState("");
    const [breeds, setBreeds] = useState([]);
    
    
    return (
        <div className="search-params">
        <h1>{location}</h1>    
            <form>
                <label htmlFor="location">
                    location
                <input
                    id="location"
                    value={location}
                    placeholder="location"
                    onChange={event => setLocation(event.target.value)}
                />
                </label>

                <label htmlFor="animal">
                animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={event => setAnimal(event.target.value)}
                        onBlur={event => setAnimal(event.target.value)}
                    >
                        <option>All</option>
                        {ANIMALS.map(animal => (
                            <option key={animal} value={animal}>
                                {animal}
                            </option>
                        ))}
                    </select>
                </label>

                <label htmlfor="breed">
                        breed
                        <select 
                        id="breed"
                        value={breed}
                        onChange={e => setBreed(e.target.value)}
                        onBlur={e => setBreed(e.target.value)}
                        disabled={breeds.length === 0}
                    >
                        <option>All </option>
                        {breeds.map(breedString => (
                            <option key={breedString} value={breedString}>
                                {breedString}
                            </option>
                        ))}
                        </select>

                </label>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;
