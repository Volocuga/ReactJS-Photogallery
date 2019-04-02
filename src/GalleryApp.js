import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";
import { fetchData } from "./API";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { CardPage } from "./pages/CardPage";

class GalleryApp extends Component {
  state = {
    images: []
  };
  componentWillMount() {
    this._setSearchWorld("dog");
  }
  _setSearchWorld = searchWorld => {
    fetchData(searchWorld).then(data => {
      this.setState({
        images: data
      });
    });
  };

  render() {
    const { images } = this.state;
    
    return (
      <>
        <SearchHeader searchWorldFn={this._setSearchWorld} />
        <div className="container">
          <Switch>
            {/* <Route path="/" exact /> */}
            <Route
              path="/home"
              exact
              render={props => <HomePage {...props} images={images} />}
            />
            <Route path="/home/:id" component={CardPage} />

            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Redirect to="/home" />
          </Switch>
        </div>
      </>
    );
  }
}

export default GalleryApp;
