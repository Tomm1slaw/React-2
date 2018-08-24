var movies = [{
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        img: 'https://images.pexels.com/photos/921914/pexels-photo-921914.jpeg?auto=compress&cs=tinysrgb&h=350'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        img: 'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&h=350'
    },
    {
        id: 3,
        title: 'Książe Czaruś',
        desc: 'Film o młodym księciu',
        img: 'https://images.pexels.com/photos/929435/pexels-photo-929435.jpeg?auto=compress&cs=tinysrgb&h=350'
    },
    {
        id: 4,
        title: 'Rider',
        desc: 'Film o mistrzu kierownicy',
        img: 'https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&h=350'
    }
];
// var moviesElements = movies.map(function(movie) {
//   return React.createElement('li', {key: movie.id},
//       React.createElement('h2', {}, movie.title),
//       React.createElement('p', {}, movie.desc),
//       React.createElement('img', {src: movie.img})
//     );
// });
// var element =
//   React.createElement('div', {},
//     React.createElement('h1', {}, 'Lista filmów'),
//     React.createElement('ul', {}, moviesElements)
//   );
// ReactDOM.render(element, document.getElementById('app'));

// cut code

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function() {
        return React.createElement(
            "li", {
                key: this.props.movie.id
            },
            React.createElement("img", {
                src: this.props.movie.img
            }),
            React.createElement(MovieTitle, {
                title: this.props.movie.title
            }),
            React.createElement(MovieDescription, {
                desc: this.props.movie.desc
            }),
        );
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    render: function() {
        return React.createElement("h2", {}, this.props.title);
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired
    },
    render: function() {
        return React.createElement("p", {}, this.props.desc);
    }
});

var MovieList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired
    },
    render: function() {
        var moviesElements = this.props.movies.map(function(film, index) {
            return React.createElement(Movie, {
                key: index,
                movie: film,
            });
        });
        var element = React.createElement(
            "div", {},
            React.createElement("h1", {}, "Lista Filmów"),
            React.createElement("ul", {}, moviesElements)
        );
        return element;
    }
});

var element = React.createElement(MovieList, {
    movies: movies
});
ReactDOM.render(element, document.getElementById("app"));