namespace live.Services {
  export class MovieService{
    public MovieResource;

    public saveMovie(movie){
      return this.MovieResource.save(movie);
    }
    public getMovies(){
      return this.MovieResource.query();
    }
    public removeMovie(id){
      return this.MovieResource.delete({id: id});
    }
    constructor(
      public $resource
    ){
      this.MovieResource = $resource('/api/movies/:id')
    }
  }
  angular.module('live').service('movieService', MovieService);
    }
