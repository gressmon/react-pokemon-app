import React, { FunctionComponent } from 'react';
import PokemonsDetail from './pages/pokemon-detail';
import PokemonList from './pages/pokemon-list';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import PokemonCreate from './pages/pokemon-create';

const App: FunctionComponent = () => {

    return (
        <Router>
            <div>
                <nav>
                    <div className="nav-wrapper teal">
                        <Link to="/" className="brand-logo center">Pokédex</Link>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/" component={PokemonList} />
                    <Route exact path="/pokemons" component={PokemonList} />
                    <Route exact path="/pokemons/create" component={PokemonCreate} />
                    <Route exact path="/pokemons/edit/:id" component={PokemonEdit} />
                    <Route path="/pokemons/:id" component={PokemonsDetail} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;