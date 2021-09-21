
import './App.css';
import AddPlayer from './Component/AddPlayer';
import { Route,Switch} from 'react-router-dom';
import Delete from './Component/Delete';
import UpdatePlayer from './Component/UpdatePlayer';
import ShowPlayers from './Component/ShowPlayers';
import homepage from './Component/UserHomepage';
import home from './Component/Home';

function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={home} />
      <Route exact path="/home" component={homepage} />
      <Route exact path="/add" component={AddPlayer} />
      <Route exact path="/delete" component={Delete} />
      <Route exact path="/update" component={UpdatePlayer}/>
      <Route exact path="/show" component={ShowPlayers}/>
    </Switch>
    </div>
  );
}

export default App;
