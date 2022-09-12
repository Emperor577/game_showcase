export interface GameModel {
  id: number,
  slug: string,
  name: string,
  released: string,
  tba: boolean,
  background_image: string,
  rating: number,
  rating_top: number,
  ratings: Object,
  ratings_count: number,
  reviews_text_count: string,
  added: number,
  added_by_status: Object,
  metacritic: number,
  playtime: number,
  suggestions_count: number,
  updated: number,
  esrb_rating: Object,
  platforms: []
}
