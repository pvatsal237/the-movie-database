import { useEffect, useState } from 'react';
import {CardSection} from "./components/Sections"
import './App.css';

const url_creator = (str, query = '') => {
  return `https://api.themoviedb.org/3/${str}?api_key=${
    import.meta.env.VITE_API_KEY
  }${query !== '' ? `&query=${query}` : ``}`;
};


function App() {
  const [cardData, setCardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('bollywood');

  useEffect(() => {
    fetch(url_creator('search/movie', query))
      .then((res) => res.json())
      .then((data) => {
        setCardData(data);
        setIsLoading(false);
      });
  }, [query]);

  if (isLoading) {
    return <p>Please wait...</p>;
  }

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="App">
      <div className="navbar">
        <form>
          <input
            type="text"
            id="search"
            name="search"
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      {cardData && <CardSection data={cardData} />}
    </div>
  );
}

export default App;
