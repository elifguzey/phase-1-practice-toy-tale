let toyContainer = document.querySelector("#toy-collection");

// let h2 = document.createElement("h2")
// let img = document.createElement("img")
// let p = document.createElement("p")
// let btn = document.createElement("btn")







function getToy () {
  const divCard = document.createElement("div")
  // divCard.setAttribute("class", "card")
  // document.append(divCard);
  // divCard.append(h2, img, p, btn);

  fetch("http://localhost:3000/toys")
    .then(res => res.json())
    .then(data => divCard.innerText = data)


}

getToy();








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



