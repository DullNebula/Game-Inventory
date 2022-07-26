import { useEffect, useState } from "react";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  });

  const getPopular = async () => {
    const api = await fetch(`https://rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&page=1&page_size=10`);
  const data = await api.json();
  const {
    count, results
  } = data;
  for (let i = 0; i < results.length; i++) {
    console.log(results[i].name)
  };
  console.log(count);
  console.log(results);
  };

  return (<div>Popular</div>)
}



export default Popular;
