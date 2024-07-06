import Main from '../../pages/main/main';

type AppScreenProps = {
  cardCount: number;
}

function App({ cardCount }: AppScreenProps) {
  return (
    <Main
      cardCount = {cardCount}
    />
  );
}

export default App;
