import React from 'react';
import './App.css';

const App = () => {
  // This function will be triggered when the "container" is clicked
  // 「コンテナ」がクリックされたときにトリガーされます
  const divClickedHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const div = event.currentTarget;

    console.log(
      'Element name: ',
      div.tagName,
      'Width: ',
      div.clientWidth,
      'Height: ',
      div.clientHeight,
      'Offset: Top',
      div.offsetTop,
      'Offset: Left',
      div.offsetLeft
    );
  };

  // This function will be triggered when the headline is clicked
  // 見出しがクリックされたときにトリガーされます
  const headingClickedHandler = (event: React.MouseEvent<HTMLHeadingElement>) => {
    event.stopPropagation();

    const heading = event.currentTarget;
    console.log(
      'Element name: ',
      heading.tagName,
      'Width: ',
      heading.clientWidth,
      'Height: ',
      heading.clientHeight,
      'Offset: Top: ',
      heading.offsetTop,
      'Offset: Left: ',
      heading.offsetLeft
    );
  };

  // This function will be triggered when the image is clicked
  // 画像がクリックされたときにトリガーされます
  const imgClickedHandler = (event: React.MouseEvent<HTMLImageElement>) => {
    event.stopPropagation();

    const img = event.currentTarget;
    console.log(
      'Element name: ',
      img.tagName,
      'Width: ',
      img.clientWidth,
      'Height: ',
      img.clientHeight,
      'Offset Top: ',
      img.offsetTop,
      'Offset Left: ',
      img.offsetLeft
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
