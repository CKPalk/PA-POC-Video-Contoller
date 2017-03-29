
const ratings = {
  negative: 'ad_rating__negative',
  unrated: 'ad_rating__unrated',
  positive: 'ad_rating__positive'
}

export const isNegativeRating = ad => ad.rating === ratings.negative
export const isUnrated = ad => !ad.rating || ad.rating === ratings.unrated
export const isPositiveRating = ad => ad.rating === ratings.positive

export default ratings
