import { useEffect, useState } from 'react';
import Header from '../components/Header';

function Home() {

  const [teste, setTeste] = useState();

  const getAll = () => {
    
    return fetch("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=taylor%20swift&pageNumber=1&pageSize=10&autoCorrect=true", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "b01ce47219mshf079ec13172079ep1d6c69jsn472fdf0b736c",
        "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
      }
    })
    .then(response => {
      console.log(response.url);
    })
    .catch(err => {
      console.error(err);
    });

  }

  useEffect(() => {
    getAll();
  },[])

  return (
    <div>
      <Header />
    </div>
  )
}

export default Home;
