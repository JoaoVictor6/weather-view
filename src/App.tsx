import Menu from './components/Menu';
import { Container } from './styles/pages/app';
import sunrise from './assets/images/sunrise.png';
import sunset from './assets/images/sunset.png';

function App() {
  return (
    <>
      <Menu />
      <Container>
        <header>
          <section className="header__title">
            <h1>20 º</h1>
          </section>
          <section className="header__footer">
            <p>
              <img src={sunrise} alt="sunrise hour" />
              7:23 am
            </p>
            <p>
              5:10 pm
              <img src={sunset} alt="sunset hour" />
            </p>
          </section>
        </header>
      </Container>
    </>
  );
}

export default App;
