import React, { useState } from 'react';


const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");
    
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
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;
