import { Router, RouteComponentProps } from '@reach/router';
import Header from './components/Header'
import HomePage from './pages/HomePage';
import FavPage from './pages/FavPage';

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
