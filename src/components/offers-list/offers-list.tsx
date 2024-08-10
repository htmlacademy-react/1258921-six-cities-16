import PlaceCard from '../place-card/place-card';
import { Offer as OfferTypes } from '../types/offers';

type PlaceCardsClassNames = string;

type OffersListProps = {
  placeCardsClassNames: PlaceCardsClassNames;
  offers: OfferTypes[];
}

function OffersList({ offers, placeCardsClassNames }: OffersListProps): JSX.Element {
  const cardsArray: JSX.Element[] = [];
  let count = 0;

  offers.forEach((offer, index) => {
    cardsArray.push(
      <PlaceCard
        offer={offers[index]}
        placeCardsClassNames={placeCardsClassNames}
        key={count} //chto suda luchshe dobavlyat v etoi situazii?
      />
    );
    count++;
  });

  return (
    <>
      {/* If i delete this, i will get an error */}
      {cardsArray}
    </>
  );
}


export default OffersList;
