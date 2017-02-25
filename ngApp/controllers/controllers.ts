namespace live.Controllers {

    export class HomeController {
      public movies;

      public deleteMovie(id){
        this.movieService.removeMovie(id);
      }
      constructor(
        private movieService
      ){
        this.movies = this.movieService.getMovies();
      }



    }
    export class AddController{
      public movie;

      public addMovie(){
        this.movieService.saveMovie(this.movie);
      }
      public constructor(
        private movieService
      ){

      }
    }

    export class EditController{
      public movie;
      public id;

      public editMovie(){
        this.movie.id = this.id;
        this.movieService.saveMovie(this.movie);
      }
      constructor(
        private movieService,
        public $stateParams
      ){
        if($stateParams){
          this.id = $stateParams['id'];
        }
      }
    }
}
