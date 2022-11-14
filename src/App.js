import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import searchAlbumsAPIs from './services/searchAlbumsAPI';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      searchInputArt: '',
      isBtnDisabled: false,
      click: false,
      // notFoundcollection: false,
      collection: [],
    };
  }

  handleInputChange = (ev) => {
    const { target } = ev;
    // console.log(target.value);
    this.setState({ [target.name]: target.value }, () => {
      const { searchInput } = this.state;
      const MinNumberInput = 2;
      const newButtonDisabled = searchInput.length >= MinNumberInput;
      // console.log(newButtonDisabled);
      // console.log(searchInput);
      this.setState({
        isBtnDisabled: newButtonDisabled,
      });
    });
  };

  searchAlbumsAPIs = async () => {
    const { searchInput } = this.state;
    const response = await searchAlbumsAPIs(searchInput);
    // const MinNumberCollection = 1;
    // const newClick = response.length >= MinNumberCollection;
    // console.log(newClick);
    // console.log(response);
    // if (!response.results.length) {
    //   this.setState({
    //     notFoundcollection: true,
    //   });
    // } else {
    this.setState({
      collection: response,
      click: true,
      searchInputArt: searchInput,
      searchInput: '',
      // notFoundcollection: false,
    });
  };

  render() {
    const {
      isBtnDisabled,
      collection,
      searchInput,
      searchInputArt,
      click,
    } = this.state;
    return (
      <BrowserRouter>
        <p>TrybeTunes</p>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route
            path="/search"
            render={ () => (
              <Search
                searchAlbumsAPIs={ this.searchAlbumsAPIs }
                handleInputChange={ this.handleInputChange }
                isBtnDisabled={ isBtnDisabled }
                collection={ collection }
                searchInput={ searchInput }
                searchInputArt={ searchInputArt }
                click={ click }
              />
            ) }
          />
          <Route path="/album/:id" component={ Album } />
          <Route path="/favorites" component={ Favorites } />
          <Route path="/profile/edit" component={ ProfileEdit } />
          <Route path="/profile" component={ Profile } />
          <Route path="" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
