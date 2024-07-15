type Location = {
  'latitude': number;
  'longitude': number;
  'zoom': number;
}

type City = {
  'name': string;
  'location': Location;
}

type Offer = {
  'id': string;
  'title': string;
  'type': string;
  'price': number;
  'city': City;
  'location': Location;
  'isFavorite': boolean;
  'isPremium': boolean;
  'rating': number;
  'previewImage': string;
  test: number;
}


export const offers: Offer[] = [
  {
    'id': '6af6f711-c28d-4121-82cd-e0b462a27f00',
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
    'price': 120,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4,
    'previewImage': 'https://url-to-image/image.png',
    test: 21
  },
  {
    'id': '6af6f711-c28d-4121-82cd-e0b462a27f01',
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
    'price': 120,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496371,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4,
    'previewImage': 'https://url-to-image/image.png',
    test: 21
  },
  {
    'id': '6af6f711-c28d-4121-82cd-e0b462a27f02',
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
    'price': 120,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496372,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4,
    'previewImage': 'https://url-to-image/image.png',
    test: 21
  },
  {
    'id': '6af6f711-c28d-4121-82cd-e0b462a27f03',
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
    'price': 120,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496374,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499943,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4,
    'previewImage': 'https://url-to-image/image.png',
    test: 21
  },
];

