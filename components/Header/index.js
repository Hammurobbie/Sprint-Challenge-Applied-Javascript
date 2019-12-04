// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  const headerDiv = document.createElement("div"),
    date = document.createElement("span"),
    headline = document.createElement("h1"),
    temp = document.createElement("span");

  headerDiv.appendChild(date);
  headerDiv.appendChild(headline);
  headerDiv.appendChild(temp);

  headerDiv.classList.add("header");
  date.classList.add("date");
  temp.classList.add("temp");

  date.textContent = "March 28, 2019";
  headline.textContent = "Lambda Times";
  temp.textContent = "48°";

  return headerDiv;
}

const headerEntryPoint = document.querySelector(".header-container");

headerEntryPoint.appendChild(Header());
