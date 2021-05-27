import Menu from "./menu/Menu";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Aula1 from "./pages/aula1/Aula1";
import Aula2 from "./pages/aula2/Aula2";
import Aula3 from "./pages/aula3/Aula3";
import Aula4 from "./pages/aula4/Aula4";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Menu} />
      <Route path="/aula1" component={Aula1} />
      <Route path="/aula2" component={Aula2} />
      <Route path="/aula3" component={Aula3} />
      <Route path="/aula4" component={Aula4} />
    </Router>
  );
}

export default App;
