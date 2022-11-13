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
      isBtnDisabled: false,
    };
  }

  handleInputChange = (ev) => {
    const { target } = ev;
    // console.log(target.value);
    this.setState({ [target.name]: target.value }, () => {
      const { searchInput } = this.state;
      const MinNumberInput = 2;
      const newButtonDisabled = searchInput.length >= MinNumberInput;
      console.log(newButtonDisabled);
      console.log(searchInput);
      this.setState({
        isBtnDisabled: newButtonDisabled,
      });
    });
  };

  searchAlbumsAPIs = async () => {
    const { searchInput } = this.state;
    const response = await searchAlbumsAPIs(searchInput);
    console.log(response);
    // if (!response.results.length) {
    //   this.setState({
    //     notFoundMessage: true,
    //   });
    // } else {
    //   response.results.forEach((item) => {
    //     item.quantity = 1;
    //   });
    //   this.setState({
    //     productList: response.results,
    //     notFoundMessage: false,
    //   });
    // }
  };

  render() {
    const { isBtnDisabled } = this.state;
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
