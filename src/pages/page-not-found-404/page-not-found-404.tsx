import Logo from '../../components/logo/logo';


function PageNotFound() {
  return (
    <>
      <h2 style={{ textAlign: 'center', color: '#4481c3', marginTop: '150px', fontSize: '30px' }}>Page not found: 404</h2>
      <p style={{ marginTop: '150px', textAlign: 'center' }}>
        <Logo />
      </p >
    </>
  );
}

export default PageNotFound;
