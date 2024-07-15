import PlaceCard from '../place-card/place-card';
import { Offers } from '../types/offers';

type cardCount = number;
type PlaceCardsClassNames = string;

type OffersListProps = {
  cardCount: cardCount;
  offers: Offers;
  PlaceCardsClassNames: PlaceCardsClassNames;
}

function OffersList({ cardCount, offers, PlaceCardsClassNames }: OffersListProps): JSX.Element {
  const cardsArray: JSX.Element[] = [];
  for (let i = 0; i < cardCount; i++) {
    cardsArray.push(<PlaceCard
      offers={offers}
      PlaceCardsClassNames={PlaceCardsClassNames}
    />); // Why i can't use offers[i] here in props
  }

  return (
    <>
      {/* <PlaceCard offers={offers} /> */}  {/* If i delete this, i will get an error */}
      {cardsArray}
    </>
  );
}


export default OffersList;
