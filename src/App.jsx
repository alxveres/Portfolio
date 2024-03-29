import React, {useEffect, useState} from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Spinner from "./components/spinner/Spinner";
import Particle from "./components/Particle/Particle";
import Footer from './components/footer/Footer'



const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);


  return (
      loading ? (
          <Spinner />
      ) : (
          <React.Fragment>
              <Header />
              <About />
              <Particle/>
              <Footer />
          </React.Fragment>
      )

  )
}

export default App