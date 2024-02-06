import axios from "axios";
const ENDPOINT = process.env.TMDB_ENDPOINT;
const API_KEY = process.env.TMDB_API_KEY;
const CONSUMET = process.env.CONSUMET_API_URL;
export async function NowPlayingMovie(page:any=1){
    const response = await axios.get(
        `${ENDPOINT}/movie/now_playing?api_key=${API_KEY}&page=${page}`
      );
      var data = response.data.results;
      return data;
}
export async function TrendingMovie(page:any=1){
  const response = await axios.get(
      `${ENDPOINT}/trending/movie/week?api_key=${API_KEY}&page=${page}`
    );
    var data = response.data.results;
    return data;
}
export async function TopRatedMovie(page:any=1){
  const response = await axios.get(
      `${ENDPOINT}/movie/top_rated?api_key=${API_KEY}&page=${page}`
    );
    var data = response.data.results;
    return data;
}

export async function UpcomingMovie(page:any=1){
  const response = await axios.get(
      `${ENDPOINT}/movie/upcoming?api_key=${API_KEY}&page=${page}`
    );
    var data = response.data.results;
    return data;
}

export async function AiringTvSeries(){
  const response = await axios.get(
      `${ENDPOINT}/tv/on_the_air?api_key=${API_KEY}&page=1`
    );
    var data = response.data.results;
    return data;
}
export async function TrendingTvSeries(){
  const response = await axios.get(
      `${ENDPOINT}/trending/tv/week?api_key=${API_KEY}&page=1`
    );
    var data = response.data.results;
    return data;
}

export async function TopRatedTvSeries(){
  const response = await axios.get(
      `${ENDPOINT}/tv/top_rated?api_key=${API_KEY}&page=1`
    );
    var data = response.data.results;
    return data;
}

export async function getSearchResults(query:string){
  const response = await axios.get(`${ENDPOINT}/search/multi?api_key=${API_KEY}&query=${query}&page=1`);
  var data = response.data.results;
  return data;
}

export async function findMovie(id:string){
  const response = await axios.get(`${ENDPOINT}/movie/${id}?api_key=${API_KEY}`);
  var data = response.data;
  return data;
}

export async function findTV(id:string){
  const response = await axios.get(`${ENDPOINT}/tv/${id}?api_key=${API_KEY}`);
  var data = response.data;
  return data;
}

export async function relatedMovies(id: string){
  const response = await axios.get(`${ENDPOINT}/movie/${id}/recommendations?api_key=${API_KEY}`);
  var data = response.data.results;
  return data;
}

export async function relatedTV(id: string){
  const response = await axios.get(`${ENDPOINT}/tv/${id}/recommendations?api_key=${API_KEY}`);
  var data = response.data.results;
  return data;
}

export async function getTrailerMovie(id:string){
  const response = await axios.get(`${ENDPOINT}/movie/${id}/videos?api_key=${API_KEY}`);
  var data = response.data.results;
  return data;
}

export async function getTrailerTV(id:string){
  const response = await axios.get(`${ENDPOINT}/tv/${id}/videos?api_key=${API_KEY}`);
  var data = response.data.results;
  return data;
}

export async function getMovieCasts(id: string){
  const response = await axios.get(`${ENDPOINT}/movie/${id}/credits?api_key=${API_KEY}`);
  var data = response.data.cast;
  return data;
}
export async function getTVCasts(id: string){
  const response = await axios.get(`${ENDPOINT}/tv/${id}/credits?api_key=${API_KEY}`);
  var data = response.data.cast;
  return data;
}

export async function SeasonDetails(id: string,idx: string){
  const response = await axios.get(`${ENDPOINT}/tv/${id}/season/${idx}?api_key=${API_KEY}`);
  var data = response.data.episodes;
  return data;
}

export async function getMovieByGenre(id: string){
  const response = await axios.get(`${ENDPOINT}/discover/movie?api_key=${API_KEY}&sort_by=vote_count.desc&with_genres=${id}`);
  var data = response.data.results;
  return data;
}

export async function getTVByGenre(id: string){
  const response = await axios.get(`${ENDPOINT}/discover/tv?api_key=${API_KEY}&sort_by=vote_count.desc&with_genres=${id}`);
  var data = response.data.results;
  return data;
}

// ------------------------------------------------------------------------------------------------
// ANIME REQUEST
// ------------------------------------------------------------------------------------------------
export async function getAnimeTrending(){
  const response = await axios.get(`${CONSUMET}/meta/anilist/trending`);
  var data = response.data.results;
  return data;
}

export async function getAnimePopular(){
  const response = await axios.get(`${CONSUMET}/meta/anilist/popular`);
  var data = response.data.results;
  return data;
}



export async function getAnimeInfo(id:any){
  const response = await axios.get(`${CONSUMET}/meta/anilist/info/${id}`);
  var data = response.data;
  return data;

}

export async function watchAnime(epsId:any){
  const response = await axios.get(`${CONSUMET}/anime/gogoanime/servers/${epsId}`);
  var data = response.data;
  return data;
}

export async function searchAnime(query: any){
 const response = await axios.get(`${CONSUMET}/meta/anilist/${query}`);
 var data = response.data.results;
 return data;
}



