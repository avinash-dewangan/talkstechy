//import logo from './logo.svg';
import logo from '../assets/talkstechylogo.png';
import '../styles/App.scss';
import Header from './common/Header';
import MainContainer from './common/MainContainer';
import Footer from './common/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Welcome to Talkstechy
        </h1>
        <a
          className="App-link"
          href="https://avinashdewangan.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          See React JS aap with netlify
        </a> 
      </header> */}

        <Header />
        <MainContainer />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
