import { Offers } from '../types/offers';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AppRoute } from '../const';

type PlaceCardsClassNames = string;

type PlaceCardProps = {
  offers: Offers;
  placeCardsClassNames: PlaceCardsClassNames;
  onAnswer: (offers: any) => void;
}

function PlaceCard({ offers, placeCardsClassNames, onAnswer }: PlaceCardProps): JSX.Element {

  const [count, setActiveOffer] = useState(0); // (Добавьте в состояние компонента активную карточку с предложением)

  function countHandler() {
    setActiveOffer(count + 1);
  }

  return (
    // <article className="cities__card place-card" onMouseEnter={() => {
    <article className={`${placeCardsClassNames}  place-card`} onMouseEnter={() => {
      countHandler();
    }}
    >
      <div className="place-card__mark">
        <span>Premium {count}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="#">
          <img className="place-card__image" src={offers[0].previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{offers[0].price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">{offers[0].rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          {/* <Link to={AppRoute.Offer}>{offers[0].title}</Link> */}
          <Link to={AppRoute.Offer} onClick={
            () => {
              onAnswer(offers);
            }
          }
          >
            {offers[0].title}
          </Link>
        </h2>
        <p className="place-card__type">{offers[0].type}</p>
      </div>
    </article>
  );
}


export default PlaceCard;
