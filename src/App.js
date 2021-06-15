class App {
  constructor(list) {
    list = [
      new Film("F&F1", "Azione", "2020"),
      new Film("Amore e Odio", "Thriller", "2021"),
      new Film("2030", "Horror", "2022"),
      new Film("Pippo e Pluto", "Drammatico", "2023"),
      new Film("L'altro mondo", "Comico", "2024"),
      new Film("La casa Stregata", "Romantico", "2025")
    ];

    this.list = list
    this.showList(list)
  }

  //Mostra la lista passata come parametro sulla pagina HTML
  showList(values){
    let obj = '<ul class="list-group">';

    for (let i = 0; i < values.length; i++) {
      obj += '<li class="list-group-item">' + values[i] + "</li>";
    }

    obj += "</ul>";

    document.getElementById("list").innerHTML = obj;
  }

  //cerca la stringa scritta nella searchbar in tutti i titoli dei film della lista
  searchFilm(){
    let value = document.getElementById("search").value
    let res = []

    for(let i=0 ; i<this.list.length ; i++){
      let str = this.list[i].title.toUpperCase()
      if(str.search(value.toUpperCase())>=0){
        res.push(this.list[i])
      }
    }
    this.showList(res)
  }
}

class Film {
  constructor(title, category, year) {
    this.title = title
    this.category = category
    this.year = year
  }

  toString() {
    return this.title + " " + this.category + " " + this.year;
  }
}

const app = new App();


