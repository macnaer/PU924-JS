const BASE_API_URL = "https://swapi.dev/api/";
let prev;
let next;
let localstorage = window.localStorage;

window.addEventListener("load", () => {
  if (location.pathname.includes("persons.html")) {
    let person_page_1 = localstorage.getItem("personPage1");
    if (person_page_1 === null) {
      console.log("Request");
      Request(`${BASE_API_URL}people/`).then((data) => {
        console.log(data.results);
        localstorage.setItem("personPage1", JSON.stringify(data));
        FillData(data);
      });
    } else {
      FillData(JSON.parse(person_page_1));
    }
  } else if (location.pathname.includes("planets.html")) {
    Request(`${BASE_API_URL}planets/`).then((data) => {
      FillData(data);
    });
  } else if (location.pathname.includes("films.html")) {
    Request(`${BASE_API_URL}films/`).then((data) => {
      FillData(data);
    });
  } else if (location.pathname.includes("species.html")) {
    Request(`${BASE_API_URL}species/`).then((data) => {
      FillData(data);
    });
  } else if (location.pathname.includes("vehicles.html")) {
    Request(`${BASE_API_URL}vehicles/`).then((data) => {
      FillData(data);
    });
  } else if (location.pathname.includes("starships.html")) {
    Request(`${BASE_API_URL}starships/`).then((data) => {
      FillData(data);
    });
  }
});

const FillData = (data) => {

  prev = data.prev;
  next = data.next;

  CheckUndef(prev, next);
  RenderPersons(data.results);
};

const Request = (URL) => {
  let container = document.querySelector(".table-container");

  container.setAttribute("style", "display: none;");

  let spiner = document.querySelector(".lds-hourglass");
  spiner.removeAttribute("style", "display: none;");

  const data = fetch(URL)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      spiner.setAttribute("style", "display: none;");
      container.removeAttribute("style", "display:none;");
      return res;
    })
    .catch((error) => {
      return error.response;
    });

  return data;
};

const RenderPersons = (persons) => {

  document.querySelector(".lds-hourglass").removeAttribute("style", "display: none;");
  document.querySelector(".table-container").setAttribute("style", "display: none;");

  let person_table = document.querySelector("#tbl-content");

  while (person_table.firstChild) {
    person_table.removeChild(person_table.firstChild);
  }
  persons.map((person) => {
    let tr = document.createElement("tr");

    for (let item in person) {
      if (
        (location.pathname.includes("persons.html") ||
          location.pathname.includes("species.html")) &&
        item === "homeworld"
      ) {
        break;
      } else if (
        location.pathname.includes("planets.html") &&
        item === "residents"
      ) {
        break;
      } else if (
        location.pathname.includes("films.html") &&
        item === "characters"
      ) {
        break;
      } else if (
        (location.pathname.includes("vehicles.html") ||
          location.pathname.includes("starships.html")) &&
        item === "pilots"
      ) {
        break;
      }

      let td = document.createElement("td");
      td.innerHTML = person[item];
      tr.appendChild(td);
    }

    person_table.appendChild(tr);
    document.querySelector(".lds-hourglass").setAttribute("style", "display: none;");
    document.querySelector(".table-container").removeAttribute("style", "display:none;");
  });
};
document.querySelector("#btnPrev").addEventListener("click", () => {
  Request(prev).then((data) => {
    prev = data.previous;
    next = data.next;
    RenderPersons(data.results);
    CheckUndef();
  });
});

document.querySelector("#btnNext").addEventListener("click", () => {
  Request(next).then((data) => {
    prev = data.previous;
    next = data.next;
    RenderPersons(data.results);
    CheckUndef();
  });
});

function CheckUndef() {
  if (
    (prev === null || prev === undefined) &&
    (next === null || next === undefined)
  ) {
    const btnPrev = document.querySelector("#btnPrev");
    btnPrev.setAttribute("disabled", "disabled");
    btnPrev.setAttribute("style", "display: none;");
    const btnNext = document.querySelector("#btnNext");
    btnNext.setAttribute("disabled", "disabled");
    btnNext.setAttribute("style", "display: none;");
  } else if (prev === null || prev === undefined) {
    const btnPrev = document.querySelector("#btnPrev");
    btnPrev.setAttribute("disabled", "disabled");
    btnPrev.setAttribute("style", "display: none;");
  } else if (next === null || next === undefined) {
    const btnNext = document.querySelector("#btnNext");
    btnNext.setAttribute("disabled", "disabled");
    btnNext.setAttribute("style", "display: none;");
  } else {
    document.querySelector("#btnNext").removeAttribute("disabled", "disabled");
    document
      .querySelector("#btnNext")
      .removeAttribute("style", "display: none;");
    document.querySelector("#btnPrev").removeAttribute("disabled", "disabled");
    document
      .querySelector("#btnPrev")
      .removeAttribute("style", "display: none;");
  }
}
