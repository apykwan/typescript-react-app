import { useContext } from 'react';
import { Link } from "@reach/router";

import { Store } from '../store/Store';

function Header():JSX.Element {
    const { state } = useContext(Store);

    return (
         <header className="header">
            <div>
                <h1>Rick and Morty</h1>
                <p>Pick your favorite episode!!</p>
            </div>
            <div>
                <Link to="/" className="header-link__item">Home</Link>
                <Link to="/faves" className="header-link__item">Favorite(s): {state.favorites.length}</Link>
            </div>
      </header>
    )
}

export default Header;