let toyContainer = document.querySelector("#toy-collection");

fetch("http://localhost:3000/toys")
.then(res => res.json())
.then(data => {
  renderToyCards(data);
})
function renderToyCards(toys) {
  // let divCard = document.createElement("div")
  toys.forEach(createElement("div"))
}


// divCard.setAttribute("class", "card")
// toyContainer.append(divCard);

// let h2 = document.createElement("h2")
// // h2.innerText = toys.name

// let img = document.createElement("img")
// img.setAttribute()

// let p = document.createElement("p")


// let btn = document.createElement("btn")


// divCard.append(h2, img, p, btn);



let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});



