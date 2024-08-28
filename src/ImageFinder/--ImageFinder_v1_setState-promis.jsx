import React, { Component } from "react";
import { Container } from "./ImageFinder.styled";
import ImageGalleryV1 from "./components/ImageGallery/ImageGallery_v1";
import SearchBar from "./components/SearchBar";
import searchAPI from "./services/searchAPI";
import Button from "./components/Button";
import Loader from "./components/Loader";

class ImageFinder extends Component {
  state = {
    query: "",
    imagesList: [],
    totalHits: null,
    page: 1,
    isLoading: false,
  };

  onSearchImage = async query => {
    this.setState({ isLoading: true });
    if (query !== this.state.query) {
      // ! Промісифікація setState для виконання подальшого коду лише після гарантованого завершення виконання setState
      await new Promise(resolve => {
        this.setState({ page: 1, query, imagesList: [] }, resolve);
      });
    }

    const { hits, totalHits } = await searchAPI.fetchImage(
      query,
      this.state.page,
    );

    this.setState(prevState => ({
      imagesList: [...prevState.imagesList, ...hits],
      totalHits,
      isLoading: false,
    }));
  };

  loadMoreBtn = async () => {
    this.setState(
      prevState => ({ page: prevState.page + 1 }),
      () => this.onSearchImage(this.state.query),
    );
  };

  render() {
    const { imagesList, totalHits, isLoading } = this.state;
    const remainsItems = totalHits - imagesList.length;
    const isDisabledLoadMoreBtn = remainsItems === 0;

    return (
      <Container>
        <SearchBar onSetQuery={this.onSearchImage} />
        <ImageGalleryV1 imagesList={imagesList} />

        {isLoading && <Loader />}
        {imagesList.length > 0 && (
          <Button
            onLoadMore={this.loadMoreBtn}
            isDisabledLoadMoreBtn={isDisabledLoadMoreBtn}
          />
        )}
      </Container>
    );
  }
}

export default ImageFinder;
