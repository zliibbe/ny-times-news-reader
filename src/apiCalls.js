const key = process.env.REACT_APP_API_KEY

const fetchData = () => {
  return fetch(`https://ahttps://api.nytimes.com/svc/topstories/v2/${}?api-key=${key}`)
}

export default fetchData