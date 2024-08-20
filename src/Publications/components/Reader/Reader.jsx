import Controls from "../Controls";
import Progress from "../Progress";
import Publication from "../Publication";
import React, { Component } from "react";

const LS_KEY = "publication_reader_progressIndex";
class Reader extends Component {
  state = {
    publicationIndex: 0,
  };

  componentDidMount = () => {
    // console.log(typeof localStorage.getItem(LS_KEY)); // string

    // я зробив так:
    // const index = Number(localStorage.getItem(LS_KEY));
    // this.setState({ publicationIndex: index ? index : 0 });

    // Це спрацювало, бо якщо у LS нічого немає, то Number(null) приведеться до нуля (0).
    // Але це погано, бо може прийти і якийсь рядок. Тому треба робити перевірку на null(чи компонент не false):
    const savedStateIndex = localStorage.getItem(LS_KEY);
    if (savedStateIndex) {
      this.setState({ publicationIndex: Number(savedStateIndex) });
    }

    // Якби це був масив чи об'єкт то треба було б розпарсити значення методом JSON.parse().
    // const index = localStorage.getItem(LS_KEY);
    // const parsedIndex = JSON.parse(index);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.publicationIndex !== this.state.publicationIndex) {
      this.setLocalStorage(this.state.publicationIndex);
    }
  }

  setLocalStorage = index => {
    localStorage.setItem(LS_KEY, JSON.stringify(index));
    // в цьому прикладі можна і без JSON.stringify, бо це просто число/рядок, а не масив чи об'єкт:
    // localStorage.setItem(LS_KEY, index);
    // Але для універсальності залишу так.
  };

  changeIndex = step => {
    const { publicationIndex } = this.state;
    const itemsLength = this.props.items.length;

    if (publicationIndex === 0 && step === -1) {
      this.setState({ publicationIndex: itemsLength - 1 });
      // this.setLocalStorage(itemsLength - 1);
      return;
    }

    if (publicationIndex === itemsLength - 1 && step === 1) {
      this.setState({ publicationIndex: 0 });
      // this.setLocalStorage(0);
      return;
    }

    this.setState(prevState => {
      // this.setLocalStorage(prevState.publicationIndex + step);

      return {
        publicationIndex: prevState.publicationIndex + step,
      };
    });
  };

  render() {
    const { items } = this.props;
    const { publicationIndex } = this.state;
    const { title, text } = items[publicationIndex];
    const currentIndex = publicationIndex + 1;
    const totalItems = items.length;

    const prevBtnDisabled = publicationIndex === 0;
    const nextBtnDisabled = currentIndex === totalItems;

    return (
      <div>
        <Controls
          changeIndex={this.changeIndex}
          prevBtnDisabled={prevBtnDisabled}
          nextBtnDisabled={nextBtnDisabled}

          // totalItems={totalItems}
          // publicationIndex={publicationIndex}
        />
        <Progress currentIndex={currentIndex} totalItems={totalItems} />
        <Publication title={title} text={text} />
      </div>
    );
  }
}

export default Reader;
