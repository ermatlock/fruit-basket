export const fetchData = (query) => {
  let fetchCall = fetch(`https://www.fruityvice.com/api/fruit/all`)
  .then(response => {
    if (!response.ok) {
      throw new Error("Sorry, we coudn't get that!")
    }
    return response.json()
  })
  return fetchCall
}