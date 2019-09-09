import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Giphy = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=YOUR-API-KEY-GOES-HERE&q=naruto&limit=20&offset=0&rating=G&lang=en`);

      setGifs(response.data.data);
    }
    fetchData();
  }, []);

  console.log('gifsss',gifs);
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', 'justifyContent': 'space-between'}}>
        {
          gifs.map((gif, index) => (
            <img key={index} style={{ width: '22%'}} src={gif.images.original.url} alt=""/>
          ) )
        }
      </div>
    </div>
  );
};

export default Giphy;
