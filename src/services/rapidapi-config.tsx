export const URL_SEARCH = 'https://weatherapi-com.p.rapidapi.com/search.json?q='

export const URL_FORECAST = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q='

export const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
    'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST
  }
}
