
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './main.scss';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import AboutUs from './Pages/About';
import Header from './components/Header';
import Navigation from './components/Navigation';
import BurgerMenu from './components/BurgerMenu';
import Footer from './components/Footer';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navigation />
        <BurgerMenu />
        <Switch>
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
