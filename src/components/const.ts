export const Setting = {
  CardCount: 4,
} as const;

export const AppRoute = {
  Main: '/',
  MainEmpty: '/main-empty',
  Favorites: '/favorites',
  FavoritesEmpty: '/favorites-empty',
  Login: '/login',
  Offer: 'offer',
  OfferNotLogged: 'offer-not-logged',
  PageNotFound: '*',
} as const;

export const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;

export const PlaceCardsClassNames = {
  main: 'cities__card',
  favorites: 'favorites__card',
} as const;
