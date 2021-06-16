class App {
  constructor(list) {
    this.initList()
  }

  //inizializza la lista facendo la fetch dei valori dal server
  async initList() {
    const req = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=c4d79d0d1e50bf8bc86b7afbd240e4df&language=en&page=1");
    const data = await req.json();

    let list = [];
    let tmp;

    for (let i = 0; i < data.results.length; i++) {
        tmp = data.results[i];
        list.push(
            new Movie(
                tmp.title,
                tmp.overview,
                tmp.poster_path,
                tmp.backdrop_path,
                tmp.release_date
            )
        );
    }

    this.list = list
    this.showList(this.list)
  }

  //Mostra la lista passata come parametro sulla pagina HTML
  showList(values) {
    let obj = '<ul class="list-group">';

    for (let i = 0; i < values.length; i++) {
        obj += '<li class="list-group-item">' + values[i].toString() + "</li>";
    }

    obj += "</ul>";

    document.getElementById("list").innerHTML = obj;
  }

  //cerca la stringa scritta nella searchbar in tutti i titoli dei film della lista
  searchFilm() {
    let value = document.getElementById("search").value;
    let res = [];

    for (let i = 0; i < this.list.length; i++) {
        let str = this.list[i].title.toUpperCase();
        if (str.search(value.toUpperCase()) >= 0) {
            res.push(this.list[i]);
        }
    }
    this.showList(res);
  }

  showCards(){
    let values = this.list
    let obj = "<div id=\"films\" class='container-fluid'>"

    for(let i=0 ; i<values.length ; i++){
        obj += "<div class=\"card\">"
        obj += "<div class=\"card-body\">"
        obj += "<img class=\"card-img-top\" src=\"Assets/logo.png\" alt=\"Card image cap\"></img>"
        obj += "<h5 class=\"card-title\">" + values[i].title + "</h5>"
        obj += "<p class=\"card-text\">"+ values[i].overview + "</p>"
        obj += "<a href=\"#\" class=\"btn btn-primary\">Details</a>"
        obj += "</div>"
        obj += "</div>"
    }

    obj += "</div>"

    document.getElementById("films").innerHTML = obj
  }
}

class Movie {
  constructor(title, overview, poster_path, backdrop_path, date) {
    this.title = title;
    this.overview = overview;
    this.poster_path = poster_path;
    this.backdrop_path = backdrop_path;
    this.date = date;
  }

  toString() {
    return this.title + " | " + this.overview + " " + this.date;
  }
}

const app = new App();
