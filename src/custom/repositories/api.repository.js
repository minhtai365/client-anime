import { Api } from "../classes/api.classes";


/**
 * @return Api
 */

// Start login
let user = false;
export function userApi() {
  if (!user) {
    user = new Api("/users");
  }
  return user;
}
// Start Info
let getRecently = false;
export function getRecentlyApi() {
  if (!getRecently) {
    getRecently = new Api("/recently");
  }
  return getRecently;
}

let getRecommended = false;
export function getRecommendedApi() {
  if (!getRecommended) {
    getRecommended = new Api("/recommended");
  }
  return getRecommended;
}

let getSlide = false;
export function getSlideApi() {
  if (!getSlide) {
    getSlide = new Api("/slide");
  }
  return getSlide;
}

let getRanking = false;
export function getRankingApi() {
  if (!getRanking) {
    getRanking = new Api("/ranking");
  }
  return getRanking;
}

let getAnimeInfo = false;
export function getAnimeInfoApi() {
  if (!getAnimeInfo) {
    getAnimeInfo = new Api("/anime");
  }
  return getAnimeInfo;
}

let getAnimeGenres = false;
export function getAnimeGenresApi() {
  if (!getAnimeGenres) {
    getAnimeGenres = new Api("/genres");
  }
  return getAnimeGenres;
}

// ?q=a&page=1&limit=30
let getAnimesearchs = false;
export function getSearchApi() {
  if (!getAnimesearchs) {
    getAnimesearchs = new Api("/search");
  }
  return getAnimesearchs;
}

let getAnimeComments = false;
export function getAnimeCommentsApi() {
  if (!getAnimeComments) {
    getAnimeComments = new Api("/anime/:animeId/comments");
  }
  return getAnimeComments;
}

let getAnimeEpisodes = false;
export function getAnimeEpisodesApi() {
  if (!getAnimeEpisodes) {
    getAnimeEpisodes = new Api("/anime/:animeId/episodes");
  }
  return getAnimeEpisodes;
}

let getAnimeEpisodeIndex = false;
export function getAnimeEpisodeIndexApi() {
  if (!getAnimeEpisodeIndex) {
    getAnimeEpisodeIndex = new Api("/anime/:animeId/episodes/:episodeIndex");
  }
  return getAnimeEpisodeIndex;
}
// let infoSet = false;
// export function setInfoApi() {
//   if (!infoSet) {
//     infoSet = new Api("/info/set");
//   }
//   return infoSet;
// }
// End Info

