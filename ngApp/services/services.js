var live;
(function (live) {
    var Services;
    (function (Services) {
        var MovieService = (function () {
            function MovieService($resource) {
                this.$resource = $resource;
                this.MovieResource = $resource('/api/movies/:id');
            }
            MovieService.prototype.saveMovie = function (movie) {
                return this.MovieResource.save(movie);
            };
            MovieService.prototype.getMovies = function () {
                return this.MovieResource.query();
            };
            MovieService.prototype.removeMovie = function (id) {
                return this.MovieResource.delete({ id: id });
            };
            return MovieService;
        }());
        Services.MovieService = MovieService;
        angular.module('live').service('movieService', MovieService);
    })(Services = live.Services || (live.Services = {}));
})(live || (live = {}));
