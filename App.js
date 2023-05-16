import React from 'react';
import ReactDOM from 'react-dom';
// import WindowWidthToggle from './WindowWidthToggle';

const App = () => {
  const [show, setShow] = React.useState(true);
  const [buttonValue, setButtonValue] = React.useState('Click to hide');

  const handleButton = (e) => {
    e.preventDefault();
    setShow(!show);
    if (buttonValue == 'Click to hide') {
      setButtonValue('Click to show');
    } else {
      setButtonValue('Click to hide');
    }
  };

  return (
    <main>
      <h2 className="title">
        Window Width Changes with changing size of Window
      </h2>
      <input type="button" value={buttonValue} onClick={handleButton} />
      <div className="displayArea">
        {show ? (
          <WindowWidthToggle />
        ) : (
          <p> Click the button to view the inner width of the window </p>
        )}
      </div>
    </main>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
