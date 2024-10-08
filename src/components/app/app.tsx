import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import { HelmetProvider } from 'react-helmet-async';
import {Offer as OfferTypes} from '../types/offers';
import Main from '../../pages/main/main';
import MainEmpty from '../../pages/main-empty/main-empty';
import Favorites from '../../pages/favorites/favorites';
import FavoritesEmpty from '../../pages/favorites-empty/favorites-empty';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';
import OfferNotLogged from '../../pages/offer-not-logged/offer-not-logged';
import PageNotFound from '../../pages/page-not-found-404/page-not-found-404';
import PrivateRoute from '../private-route/private-route';
import { PlaceCardsClassNames } from '../const';

type CardCount = number;
// type PlaceCardsClassNames = string;

type AppScreenProps = {
  cardCount: CardCount;
  offers: OfferTypes[];
  // placeCardsClassNames: PlaceCardsClassNames;
}

function App({ cardCount, offers }: AppScreenProps) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <Main
                cardCount={cardCount}
                offers={offers}
                placeCardsClassNames={PlaceCardsClassNames.main}
              />
            }
          />
          <Route
            path={AppRoute.MainEmpty}
            element={<MainEmpty />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <Favorites
                  // cardCount={cardCount}
                  offers={offers}
                  placeCardsClassNames={PlaceCardsClassNames.favorites}
                />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.FavoritesEmpty}
            element={<FavoritesEmpty />}
          />
          <Route
            path={AppRoute.Offer}
            element={
              <Offer/>
            }
          />
          <Route
            path={AppRoute.OfferNotLogged}
            element={<OfferNotLogged />}
          />
          <Route
            path={AppRoute.Login}
            element={<Login />}
          />
          <Route
            path={AppRoute.PageNotFound}
            element={<PageNotFound />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}


export default App;
