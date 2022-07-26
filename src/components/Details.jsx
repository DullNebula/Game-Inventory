function Details() {
  return (
    <div>Details</div>
  )
  const getDetails = async () => {
    const api = await fetch(`https://rawg.io/api/collections/lists/?apiKey=${process.env.REACT_APP_API_KEY}`);
  const data = await api.json();
  const {
    count,
    results
  } = data;
  console.log(count);
  console.log(results);
  };

  return (<div>Details</div>)
}


export default Details