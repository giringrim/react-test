import './App.css';
import { Link } from 'react-router-dom';
import { getDatas } from './datas/product';
import Header from './components/Header';
import React from 'react';

function App() {
  const datas = getDatas();

  return (
    <div className='wrap'>
        <React.StrictMode>
        <Header />
        
        <ul className='snb'>
        {
          datas.map((item, idx) => (
            <li key={idx}>
              <Link to={`/contents/${idx}`}>{item.name}</Link>
            </li>
            ))
        }
        <li>
          <Link to={`/contents/4`}>데이터가 없는 링크</Link>
        </li>
        </ul> 
        </React.StrictMode>
    </div>
  );
}

export default App;
