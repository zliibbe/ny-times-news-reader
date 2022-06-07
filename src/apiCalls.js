const key = process.env.REACT_APP_API_KEY

const fetchData = () => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}`)
  .then(response => response.json())
  .then(data => console.log(data))
}

export default fetchData