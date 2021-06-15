class App {
  constructor() {
    let lista = [
      new Film("Film 1", "Azione", "2020"),
      new Film("Film 2", "Thriller", "2021"),
      new Film("Film 3", "Horror", "2022"),
      new Film("Film 4", "Drammatico", "2023"),
      new Film("Film 5", "Comico", "2024"),
      new Film("Film 6", "Romantico", "2025"),
    ];

    let obj = '<ul class="list-group">';

    for (let i = 0; i < lista.length; i++) {
      obj += '<li class="list-group-item">' + lista[i].toString() + "</li>";
    }

    obj += "</ul>";

    document.getElementById("lista").innerHTML = obj;
  }
}

class Film {
  constructor(titolo, genere, anno) {
    this.titolo = titolo;
    this.genere = genere;
    this.anno = anno;
  }

  toString() {
    return this.titolo + " " + this.genere + " " + this.anno;
  }

  titolo;
  genere;
  anno;
}

const app = new App();
