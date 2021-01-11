
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './main.scss';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import AboutUs from './Pages/About';
import Header from './components/Header';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/about" component={AboutUs} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
