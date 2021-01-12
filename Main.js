let apiKey = 'eb34d1bb3e884b11b73a2e72764c24c4';
let source = 'the-times-of-india';
let newsAccordian = document.getElementById('newsaccordian');

function getData() {
  let url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`;
  fetch(url).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data);
    let article = data.articles;
    console.log(article);
    let html = '';
    article.forEach(function(element, index) {
      let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
      html += news;
    })
    newsAccordian.innerHTML = html;
  })
}
getData();