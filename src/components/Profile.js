import React, { useEffect, useState } from "react";
import { auth, db } from "./Firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import Footer from "./Footer";
import { Carousel } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Header from "./Header";
import planet from "../images/planet.png";
import Solar from "./Solar";
import MarsRover from "./MarsRover";

export default function Profile(props) {
  const [userDetails, setUserDetails] = useState(null);
  const { allData } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = process.env.REACT_APP_NASA_API_KEY;
      const url =
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&" + `api_key=${NASA_KEY}`;

      
      try {
        const res = await fetch(url);
        const apiData = await res.json();
        console.log("apiData:", apiData);
        setData(apiData);
      
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchAPIData();
  }, []);


  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  return (
    <div className="profile-container">
        <Header  />
        
        
      {userDetails ? (
        <>
        {/* <div className="d-flex justify-content-end">
        <button className="btn btn-primary" onClick={handleLogout}>
          Logout
        </button>
      </div> */}
          <div className="text-center">
            
            {/* <p>Email: {userDetails.email}</p> */}
            <Carousel className="custom-carousel " data-bs-theme="dark">
              {allData &&
                allData.map((item, index) => (
                  <Carousel.Item key={index} interval={1000}>
                    <Card className="text-center" style={{ minHeight: "300px"}}>
                      <img
                        src={item.url}
                        className="card-img-top"
                        style={{ maxWidth: "100%", height: "auto" }}
                        alt="NASA APOD"
                      />
                      <div className="card-body">
                      <h3 style={{color:"white",fontFamily:"poppins"}} className="Card.Title">{item.title}</h3>
                        <h6 style={{color:"white",fontFamily:"poppins"}} className="Card.Title">© {item.date}  Astronomy Picture of the Day</h6>
                        <br />
                        <p style={{color:"white",fontFamily:"poppins"}} className="Card.Text">
                          NASA Explanation: {item.explanation}
                        </p>
                      </div>
                    </Card>
                  </Carousel.Item>
                ))}
            </Carousel>
            
          </div>
          <br /><br /><br />
          
          <MarsRover data={data}/>
          
          


          
        </>
      ) : (
        <div className='loadingState'>
                    {/* <i className="fa-solid fa-earth-oceania"></i> */}
                    <img src={planet} alt="planet" />
                  </div>
      )}
      {/* <Footer /> */}
    </div>
  );
}
