fetch("../contributors.json")
  .then((res) => res.json())
  .then((data) => {
    data.profiles.forEach((element) => {
      cardsset.insertAdjacentHTML(
        "beforeend",
        `  <div class="card">
        <div class="imgBx">
            <img src=${element.avatarUrl} alt="images">
        </div>
        <div class="details">
            <h2>${element.name}</h2>
            <a href="https://github.com/${element.github}" class="card-icons"><i class="ri-github-line"></i></a>
            <a href="https://www.linkedin.com/in/${element.linkedIn}" class="card-icons"><i class="ri-linkedin-line"></i></a>
        </div>
      </div>`
      );
    });
  });