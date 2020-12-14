window.addEventListener("load", () => {
    Request(`${BASE_API_URL}people/`).then(data => {
        RenderPersons(data.results);
    })

})

const BASE_API_URL = "https://swapi.dev/api/";

const Request = (URL) => {
    const data = fetch(URL).then(res => {
        return res.json();
    }).then(res => {
        return res;
    }).catch(error => {
        return error.response;
    })
    return data;
}

const RenderPersons = (persons) => {
    console.log("RenderPersons ", persons);
    // console.log("RenderPersons ", persons.results);
    let person_table = document.querySelector("#person_table");

    persons.map(person => {
        let tr = document.createElement("tr");
        let tdName = document.createElement("td");
        tdName.innerHTML = person.name;
        let tdHeight = document.createElement("td");
        tdHeight.innerHTML = person.height;
        tr.appendChild(tdName);
        tr.appendChild(tdHeight);
        person_table.appendChild(tr);

    })
   
}