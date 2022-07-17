import React, { useState } from 'react';
import './styles/App.scss';
import CardProduct from './components/card-product/CardProduct';

function App() {
  const cardProduct = [{
    id: 1,
    state: 'normal',
    subtitle: 'с фуа-гра',
    text: ['10 порций', 'мышь в подарок'],
    weight: '0.5',
  }, {
    id: 2,
    state: 'normal',
    subtitle: 'с рыбой',
    text: ['40 порций', '2 мыши в подарок'],
    weight: '2',
  }, {
    id: 3,
    state: 'disabled',
    subtitle: 'с курой',
    text: ['100 порций', '5 мышей в подарок', 'заказчик доволен'],
    weight: '5',
  }];

  return (
    <div className="App">
      <div className='wrapper-content'>
        <header>
          <h1 className='title'>Ты сегодня покормил кота?</h1>
        </header>

        <main>
          <div className='container-cards' >
            {
              cardProduct.map((elem) =>
                <CardProduct id={elem.id} state={elem.state} subtitle={elem.subtitle} text={elem.text} weight={elem.weight} />
              )
            }
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
