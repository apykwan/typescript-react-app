import { Router, RouteComponentProps } from '@reach/router';
import Header from './Header'
import HomePage from './HomePage';
import FavPage from './FavPage';
import './App.css';

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent

function App():JSX.Element {
  return (
    <div>
      <Header />
      <Router>
        <RouterPage pageComponent={<HomePage />} path="/" />
        <RouterPage pageComponent={<FavPage />} path="/faves" />
      </Router>
    </div>
  );
}

export default App;
