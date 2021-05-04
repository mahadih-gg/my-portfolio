import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home/Home';
import { useEffect, useState } from 'react';
import preloaderGif from './images/preloaderGif2.gif'

function App() {
  const [preloader, setPreloader] = useState(false);

  useEffect(() => {
    setPreloader(true);
    setTimeout(() => {
      setPreloader(false)
    }, 3000)
  }, [])

  return (
    <div>
      {
        preloader ?
          (
            <div className="text-center preloader">
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
