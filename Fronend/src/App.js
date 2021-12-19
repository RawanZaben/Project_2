import {Route } from 'react-router-dom';
import Dispensaries from './Components/Dispensaries/Dispensaries';
import Home from './Components/Home/Home';
import Card from './Components/Dispensaries/Card';
import Login from './Components/Login/Login';
import "./index.css"
function App() {
  return (
    <>
       <Route exact path="/" component={Home} />
       <Route   exact path="/dispensaries" component={Dispensaries} />
      <Route   exact path="/Login" component={Login} />
      <Route   exact path="/Card/:id" component={Card} />
    </>
  );
}
export default App;
