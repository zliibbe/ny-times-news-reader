const key = process.env.REACT_APP_API_KEY

const fetchData = (type) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${type}.json?api-key=${key}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error fetching data. Please try again later");
    } else {
      return response.json();
    }
  })
  // .then(data => console.log(data))
}

export default fetchData