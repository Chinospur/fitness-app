export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a49dc5ea9dmsh81adc0435fcaa36p10a84fjsn20fa01a15e2b',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const  youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a49dc5ea9dmsh81adc0435fcaa36p10a84fjsn20fa01a15e2b',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}