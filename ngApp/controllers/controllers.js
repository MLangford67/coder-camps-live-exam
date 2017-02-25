var live;
(function (live) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(movieService) {
                this.movieService = movieService;
                this.movies = this.movieService.getMovies();
            }
            HomeController.prototype.deleteMovie = function (id) {
                this.movieService.removeMovie(id);
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AddController = (function () {
            function AddController(movieService) {
                this.movieService = movieService;
            }
            AddController.prototype.addMovie = function () {
                this.movieService.saveMovie(this.movie);
            };
            return AddController;
        }());
        Controllers.AddController = AddController;
        var EditController = (function () {
            function EditController(movieService, $stateParams) {
                this.movieService = movieService;
                this.$stateParams = $stateParams;
                if ($stateParams) {
                    this.id = $stateParams['id'];
                }
            }
            EditController.prototype.editMovie = function () {
                this.movie.id = this.id;
                this.movieService.saveMovie(this.movie);
            };
            return EditController;
        }());
        Controllers.EditController = EditController;
    })(Controllers = live.Controllers || (live.Controllers = {}));
})(live || (live = {}));
