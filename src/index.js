import React from 'react';
import ReactDOM from 'react-dom';

// import KEY from './api_key';
import SearchBar from './components/search_bar';

const App = () => {
    return (
      <div>
        <SearchBar />
      </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));