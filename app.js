(function () {
  const peopleInSpace = {
    message: "success",
    number: 6,
    crew: [
      { craft: "ISS", name: "Oleg Kononenko" },
      { craft: "ISS", name: "David Saint-Jacques" },
      { craft: "ISS", name: "Anne McClain" },
      { craft: "CBU", name: "Alexey Ovchinin" },
      { craft: "BAA", name: "Nick Hague" },
      { craft: "ISS", name: "Christina Koch" },
      { craft: "ISS", name: "Christina Kiss" },
    ],
  };

  let peopleNumberEl = document.querySelector("[data-number]");
  let spacemanList = document.querySelector(".ba-spaceman-list");
  peopleNumberEl.textContent = peopleInSpace.crew.length;
  //   console.log(peopleNumberEl);
  let liTmpl = document.getElementById("li-tmpl");
  liTmpl = liTmpl.innerHTML;

  spacemanList.innerHTML = "";
  for (let index = 0; index < peopleInSpace.crew.length; index++) {
    let crewmanHtml = liTmpl
      .replace(/{{craft}}/gi, peopleInSpace.crew[index].craft)
      .replace(/{{name}}/gi, peopleInSpace.crew[index].name)
      .replace(/{{index}}/gi, index + 1);
    spacemanList.innerHTML += crewmanHtml;
  }
})();
