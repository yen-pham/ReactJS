import React from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';

function App() {
  return (
    <div>
      <Header/>
      <div class="container">
            <div class="row">
              <Search/>
              <TableData/>
              <AddUser/>
            </div>
      </div>
    </div>
  );
}

export default App;
