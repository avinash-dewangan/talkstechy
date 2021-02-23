import '../styles/App.scss';
import Header from './Header';
import MainContainer from './MainContainer';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <MainContainer />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
