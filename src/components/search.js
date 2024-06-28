import React, { useState, useEffect, useCallback } from 'react';

export default function Search() {
  const [search, setSearch] = useState('');
  const [apiResult, apiSetResult] = useState([]);
  const [final, setFinal] = useState('');
  const [showDetails, setShowDetails] = useState({});

  const fetchresult = useCallback(() => {
    fetch(`https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${search}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '32165a3bddmsh3ca8e521c547b6bp185a1ajsn363d9ec7a040',
        'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        apiSetResult(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [search]);

  useEffect(() => {
    if (final) {
      fetchresult();
    }
  }, [final, fetchresult]);

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFinal(search);
  };

  const handleClick = (index) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the details for the clicked item
    }));
  };

  return (
    <div>
      <form className="search" onSubmit={handleSubmit}>
        <input
          id="search"
          type="search"
          value={search}
          onChange={onChangeHandler}
          placeholder="Search here..."
          required
        />
        <button type="submit">Search</button>
      </form>

      {apiResult.map((item, index) => (
        <div key={index} className="dishes">
          <li className="dish-title" id="dish-title" onClick={() => handleClick(index)}>
            {item.title}
          </li>
          <div className="dish-desc">
            {showDetails[index] && (
              <div>
                <h3 className="color">Recipe Name :</h3>
                <h3>{item.title}</h3>
                <h3 className="color">Ingredients :</h3>
                <h4>{item.ingredients}</h4>
                <h3 className="color">Servings :</h3>
                <h4>{item.servings}</h4>
                <h3 className="color">Instructions :</h3>
                <p>{item.instructions}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}