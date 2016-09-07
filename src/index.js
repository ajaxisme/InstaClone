import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/ImageList';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello</p>
        <ImageList />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
