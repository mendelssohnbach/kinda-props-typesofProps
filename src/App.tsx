import React from 'react';
import './App.css';

const App = () => {
  // This function will be triggered when the "container" is clicked
  const divClickedHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const div = event.currentTarget;

    console.log(
      'Element name: ',
      div.tagName,
      'Width: ',
      div.clientWidth,
      'Height: ',
      div.clientHeight
    );
  };

  // This function will be triggered when the headline is clicked
  const headingClickedHandler = (event: React.MouseEvent<HTMLHeadingElement>) => {
    event.stopPropagation();

    const heading = event.currentTarget;
    console.log(
      'Element name: ',
      heading.tagName,
      'Width: ',
      heading.clientWidth,
      'Height: ',
      heading.clientHeight
    );
  };

  // This function will be triggered when the image is clicked
  const imgClickedHandler = (event: React.MouseEvent<HTMLImageElement>) => {
    event.stopPropagation();

    const img = event.currentTarget;
    console.log(
      'Element name: ',
      img.tagName,
      'Width: ',
      img.clientWidth,
      'Height: ',
      img.clientHeight
    );
  };

  return (
    <div
      className="container"
      onClick={divClickedHandler}
    >
      <h1 onClick={headingClickedHandler}>Kindacode.com</h1>
      <img
        src="https://www.kindacode.com/wp-content/uploads/2021/08/cat.jpeg"
        alt="Kindacode.com"
        onClick={imgClickedHandler}
      />
    </div>
  );
};

export default App;
