import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home/Home';
import { useEffect, useRef, useState } from 'react';
import preloaderGif from './images/preloaderGif2.gif'

function App() {
  const [preloader, setPreloader] = useState(false);

  useEffect(() => {
    setPreloader(true);
    setTimeout(() => {
      setPreloader(false)
    }, .1)

  }, [])


  return (
    <div>
      {
        preloader ?
          (
            <div className="text-center preloader d-flex justify-content-center align-items-center w-100">
              <img src={preloaderGif} alt="" />
            </div>
          ) : (
            <Home></Home>
          )
      }
    </div>
  );
}

export default App;
