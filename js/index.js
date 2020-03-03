// grabing this for loader 
const loadera = document.querySelector('.news-container-results');

// only for Indian news
let fetchdataforIndianNews = () => {
   const url = 'https://newsapi.org/v2/top-headlines?' +
          'country=in&' +
          'apiKey=771b88d540d64d1fbd9c443e6e722398';

    fetch(url)
    .then(response => response.json())
    .then(data => {
      const result = data.articles;
      console.log(result);
       displayresultsIndia(result);
    })
}

fetchdataforIndianNews();

displayresultsIndia = (result) => {

  // lets grab the container where we want to render results
  const container = document.querySelector('.news-container-results');

  // Remove all child elements
  container.innerHTML = "";
  result.forEach( result => {
  //loop over results array
   container.insertAdjacentHTML('beforeend',
    `    <div class="all-items">
          <h1 class="news-heading">
            ${result.title}
          </h1>

        <div class="news-img-para-container">
          <img src="${result.urlToImage}" class="news-img">
        <p class="news-para"> ${result.description}<span class="author">Author: ${result.author}</span><span  class="publishedAt">Published On - ${result.publishedAt}</span>
      </p>
        </div>
        </div>
    `)

  });
}



// data from BBC
let fetchdatafromBbcNews = () => {
  const urlBbc = 'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=771b88d540d64d1fbd9c443e6e722398';

    fetch(urlBbc)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })


}
  
fetchdatafromBbcNews();
   

   function renderLoader(parent) {
  const loader = '<div class="loader"></div>';
  parent.insertAdjacentHTML('afterbegin', loader);
};

 function clearLoader() {
  const loader = document.querySelector('.loader');
    if (loader) loader.parentElement.removeChild(loader);
};

window.addEventListener('onload' ,renderLoader(loadera))