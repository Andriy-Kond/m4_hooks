import React, { Component } from "react";
import { Container } from "./ImageFinder.styled";
import ImageGalleryV2 from "./components/ImageGallery/ImageGallery_v2";
import SearchBar from "./components/SearchBar";

class ImageFinder extends Component {
  state = {
    query: "",
  };

  setQuery = query => {
    this.setState({ query });
  };

  render() {
    const { query } = this.state;

    return (
      <Container>
        <SearchBar onSetQuery={this.setQuery} />
        <ImageGalleryV2 query={query} />
      </Container>
    );
  }
}

export default ImageFinder;
