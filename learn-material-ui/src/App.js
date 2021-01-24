import './App.css';
import Home from "./components/index";
import CssBaseline from "@material-ui/core/CssBaseline";
import CVPage from "./components/CVPage";
import {Route, Redirect} from 'react-router-dom';
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/cv" component={CVPage} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Redirect to="/" />
    </>
  );
}

export default App;
