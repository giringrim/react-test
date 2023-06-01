import './App.css';
import { Link } from 'react-router-dom';
import { getDatas } from './datas/product';
import Header from './components/Header';

function App() {
  const datas = getDatas();

  return (
    <div className='wrap'>
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
    </div>
  );
}

export default App;
