import { Offers } from '../types/offers';
import { Link } from 'react-router-dom';
import { useState } from 'react';

type PlaceCardsClassNames = string;

type PlaceCardProps = {
  offers: Offers;
  PlaceCardsClassNames: PlaceCardsClassNames;
}

{/* I need to iterate offers here   update: no*/ }


function PlaceCard({ offers, PlaceCardsClassNames }: PlaceCardProps): JSX.Element {
  //activeOffer
  //offers[0].id
  const [count, setActiveOffer] = useState(0); // (Добавьте в состояние компонента активную карточку с предложением)

  function countHandler() {
    // console.log(evt.target.alt);
    setActiveOffer(count + 1);
  }


  const [activeCard, setActiveCard] = useState(offers[0].id);

  function activeCardHandler() {
    setActiveCard(activeCard + '1'); {/* Sdes nichego ne proishodit vrode (sagotovka dlya dalneishego ispolsovaniya) */ }
  }

  // const [className, setClassName] = useState(' place-card'); //PlaceCardsClassNames
  // function classNameHandler() {
  //   setClassName({PlaceCardsClassNames}); //ne rabotaet
  // }



  // classList.add //Mojno peredat class s pomoshiy sostoyaniya useState
  // const cardClass = {PlaceCardsClassNames} + ' place-card' // ne rabotaet

  // };
  // <button className={className} onClick={() => setClassName("bar")}>Clicking this will change the class name from "foo" to "bar"</button>
  return (
    // <article className="cities__card place-card" onMouseEnter={() => {
    <article className='cities__card place-card' onMouseEnter={() => {
      {/* Mne nujno peredat v Main v props Offers list etot class cities__card */ }
      countHandler();
      activeCardHandler();
      // classNameHandler();
    }}
    > {/* Kak peredat dve function v onMouseEnter?*/}
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
          {/* <Link to="#">{offers[0].title}</Link> Potom ubrat comments */}
          <Link to="#">{activeCard}</Link>
        </h2>
        <p className="place-card__type">{offers[0].type}</p>
      </div>
    </article>
  );
}


export default PlaceCard;
