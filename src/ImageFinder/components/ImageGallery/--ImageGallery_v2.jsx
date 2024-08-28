import { Component } from "react";

import searchAPI from "../../services/searchAPI";
import ImageGalleryItem from "../ImageGalleryItem";
import Button from "../Button";
import Loader from "../Loader";
import { ImageGalleryList } from "./ImageGallery.styled";

class ImageGallery extends Component {
  state = {
    imagesList: [],
    totalHits: null,
    page: 1,
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevQuery !== nextQuery) {
      this.setState({
        isLoading: true,
        page: 1,
        imagesList: [],
      });

      this.fetchQuery();
    } else {
      if (prevPage !== nextPage) {
        this.setState({ isLoading: true });
        this.fetchQuery();
      }
    }
  }

  fetchQuery = async () => {
    const { query } = this.props;
    const { page } = this.state;

    try {
      const { hits, totalHits } = await searchAPI.fetchImage(query, page);

      this.setState(prevState => ({
        imagesList: [...prevState.imagesList, ...hits],
        totalHits,
      }));
    } catch (error) {
      console.log("error :>> ", error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  loadMoreBtn = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { isLoading, totalHits, imagesList } = this.state;
    const remainsItems = totalHits - imagesList.length;
    const isDisabledLoadMoreBtn = remainsItems === 0;

    return (
      <>
        <ImageGalleryList>
          {imagesList.map(image => (
            <ImageGalleryItem image={image} key={image.id} />
          ))}
        </ImageGalleryList>

        {isLoading && <Loader />}

        {imagesList.length > 0 && (
          <Button
            onLoadMore={this.loadMoreBtn}
            isDisabledLoadMoreBtn={isDisabledLoadMoreBtn}
          />
        )}
      </>
    );
  }
}

export default ImageGallery;
