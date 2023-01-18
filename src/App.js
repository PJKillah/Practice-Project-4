import React from 'react';
import './App.css';
import Nav from './Components/Navbar';
import Main from './Components/Main';
import data from './data';

export default function App() {
  const mainElements = data.map(card => {
    return(
      <Main 
        key={card.id}
        {...card}
      />
    )
  })
  return (
    <div className="App">
        <Nav />
        <section className='mainElements'>
            {mainElements}
        </section>
    </div>
  );
}


