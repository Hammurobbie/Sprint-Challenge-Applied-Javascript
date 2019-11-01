// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response.data.articles);
    const topicArr = Object.values(response.data.articles);
    console.log(topicArr);

    topicArr.forEach(topic => {
      topic.forEach(article => {
        console.log(article);

        function createCard() {
          //create de babies
          const cardDiv = document.createElement("div"),
            headline = document.createElement("div"),
            authorDiv = document.createElement("div"),
            imgDiv = document.createElement("div"),
            img = document.createElement("img"),
            author = document.createElement("span");

          //nest de babies
          cardDiv.appendChild(headline);
          cardDiv.appendChild(authorDiv);
          authorDiv.appendChild(imgDiv);
          authorDiv.appendChild(author);
          imgDiv.appendChild(img);

          //give classes to de babies
          cardDiv.classList.add("card");
          headline.classList.add("headline");
          authorDiv.classList.add("author");
          imgDiv.classList.add("img-container");

          //give content to de babies
          headline.textContent = article.headline;
          img.src = article.authorPhoto;
          author.textContent = article.authorName;

          return cardDiv;
        }

        const cardsDiv = document.querySelector(".cards-container");

        cardsDiv.appendChild(createCard());
      });
    });
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });
