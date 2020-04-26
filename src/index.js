import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homepage";
import TvShowsHomePage from "./pages/tvShowHomepage";
import PeopleHomePage from "./pages/peopleHomePage";
import MoviePage from './pages/movieDetailsPage';
import TvShowPage from './pages/tvShowDetailsPage';
import PersonPage from './pages/personDetailsPage';
import FavoriteMoviesPage from './pages/favoriteMoviesPage';
import FavoriteTvShowPage from './pages/favoriteTvShowPage';
import MovieReviewPage from './pages/movieReviewPage';
import TvShowReviewPage from './pages/tvShowReviewPage';
import "./globals/fontawesome";
import SiteHeader from './components/siteHeader';
import MoviesContextProvider from "./contexts/moviesContext";
import TvShowsContextProvider from "./contexts/tvShowsContext"
import GenresContextProvider from "./contexts/genresContext";
import PeopleContextProvider from "./contexts/peopleContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import AddTvShowReviewPage from './pages/addTvShowReviewPage';
import "../src/mainStyle.css";
// import { Auth0Provider } from './contexts/auth0-context';
import Profile from "./components/profile"
// import PrivateRoute from "./components/privateRoute";
import LoginPage from './pages/loginPage';
import SignupPage from './pages/signupPage';
import AuthContextProvider from './contexts/authContext'


const App = () => {

  return (
    <AuthContextProvider>
    <BrowserRouter>
    <div className="jumbotron main">
      <SiteHeader/>
      <div className="container-fluid">
          <MoviesContextProvider>
          <TvShowsContextProvider>
          <PeopleContextProvider>
          <GenresContextProvider>
              <Switch>
              <Route exact path="/login" component={LoginPage} />
                <Route path="/signup" component={SignupPage} /> />
                <Route exact path="/movies/reviews/form" component={AddMovieReviewPage} />
                <Route exact path="/tvShows/reviews/form" component={AddTvShowReviewPage} />
                <Route path="/movies/reviews/:id" component={MovieReviewPage} />
                <Route path="/tvShows/reviews/:id" component={TvShowReviewPage} />
                <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
                <Route exact path="/tvShows/favorites" component={FavoriteTvShowPage} />
                <Route path="/movies/:id" component={MoviePage} />
                <Route path="/tvShows/:id" component={TvShowPage} />
                <Route path="/people/:id" component={PersonPage} />
                <Route path="/tvShows" component={TvShowsHomePage} />
                <Route path="/people" component={PeopleHomePage} />
                <Route path="/profile" component={Profile}/>
                <Route path="/" component={HomePage} />
                <Redirect from="*" to="/" />
              </Switch>
            </GenresContextProvider>
            </PeopleContextProvider>
            </TvShowsContextProvider>
          </MoviesContextProvider>
          
        </div>
      </div>
  </BrowserRouter>
  </AuthContextProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));