import Footer from './components/Footer';
import Main from './components/Main';
import SideBar from './components/SideBar';
import { useEffect, useState } from "react"
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import planet from "../src/images/planet.png";


import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import { auth } from "./components/Firebase";
import About from './components/About';

function App() {
  const [data, setData] = useState(null)
  const [allData,setAllData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [user, setUser] = useState()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  function handleToggleModel() {
    setShowModal(!showModal)
  }

  // useEffect(() => {
  //   async function fetchAPIData() {
  //     const NASA_KEY = process.env.REACT_APP_NASA_API_KEY;
  //     const today = new Date().toISOString().split('T')[0];
  //     const startDate = "2024-04-01";
  //     const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&start_date=${startDate}&end_date=${today}`;

  //     try {
  //       const response = await fetch(url);
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch data');
  //       }
  //       const responseData = await response.json();
  //       setAllData(responseData);
  //       console.log('fetched from API today', responseData);
  //     } catch (err) {
  //       console.error('Error fetching APOD data:', err);
        
  //     }
  //   }
  //   fetchAPIData();
  // }, []);

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = process.env.REACT_APP_NASA_API_KEY
      const today = new Date().toISOString().split('T')[0];
      const startDate = "2024-04-22";
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&start_date=${startDate}&end_date=${today}`

      
      // const localKey = `NASA-${today}`
      // if (localStorage.getItem(localKey)) {
      //   const apiData = JSON.parse(localStorage.getItem(localKey))
      //   setAllData(apiData)
      //   console.log(apiData)
      //   console.log('fetched from cache today')
      //   return;
      // }
      // localStorage.clear()

      try {
        const res = await fetch(url)
        const apiData = await res.json()
        console.log(apiData)
        // localStorage.setItem(localKey, JSON.stringify(apiData));
        setAllData(apiData)
        console.log('fetched from API today')
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchAPIData()
  }, [])


  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = process.env.REACT_APP_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod?' +
        `api_key=${NASA_KEY}`

      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log(apiData)
        console.log('fetched from cache today')
        return;
      }
      localStorage.clear()

      try {
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData)
        console.log('fetched from API today')
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchAPIData()
  }, [])

  return (
    <>

      <Router>
        <div className='App'>
          <div className='auth-wrapper'>
            <div className='auth-inner'>
              <Routes>


                <Route path='/login'
                  element={user ? <Navigate to="/profile" /> : <Login />} />

                <Route path='/register'
                  element={user ? <Navigate to="/profile" /> : <Register />} />

                <Route path='/profile'
                 element={user ? <Profile allData={allData} />: <Login />} />

                <Route path='/' 
                element={data ? (<Main data={data} />) : (
                  <div className='loadingState'>
                    <img src={planet} alt="planet" />
                  </div>
                )} />

                

                <Route path='/about' element={<About />} />




              </Routes>
              <ToastContainer />

            </div>
          </div>

        </div>
      </Router>



      {/* {data ? (<Main data={data} />) : (
        <div className='loadingState'>
          <i className="fa-solid fa-earth-oceania"></i>
        </div>
      )} */}
      {/* {showModal && (
        <SideBar data={data} handleToggleModel={handleToggleModel} />
      )} */}


      {/* {data && (
        <Footer data={data} handleToggleModel={handleToggleModel} />
      )} */}
    </>
  );
}

export default App;
