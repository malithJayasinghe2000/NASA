import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Solar from "./Solar";
import planet_video from "../videos/planet_video.mp4";


export default function Main(props) {
  // const { handleToggleModel, data } = props;
  const [data, setData] = useState(null)

  
  return (
    <div className="imgContainer bigImage">
    <video autoPlay loop muted className="background-video">
      <source src={planet_video} type="video/webm" />
      
    </video>
      {/* <Solar /> */}
      {/* Image */}
      {/* <img
        src={data.hdurl}
        alt={data.title || "bg-img"}
        className="bigImage"
        style={{ width: "100%", height: "auto" }}
      /> */}

      {/* Card */}
      <div
        className="card-main"
        style={{
          background: "black",
          opacity: "0.8",
          width: "100%",
          height: "100vh",
          color: "white",
          position: "fixed",
          
          // backgroundColor: "rgba(255, 255, 255, 0.7)",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          zIndex: "1", // Ensure the card is on top of other content
        }}
      >
        {/* Card Content */}
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <h2 className="main-head">Welcome to Beautiful-NASA</h2>
        <p className="main-p">This application allows you to connect with NASA APIs. Enjoy the views and functionality!</p>
        <br />
        <Link to="/login" className="btn btn-primary w-23 lets-btn">
          Let's Go  <i class="fa-solid fa-rocket rocket-animation" ></i>
        </Link>
      </div>

      {/* Additional Content */}
      

      {/* {data && (
        <Footer data={data} handleToggleModel={handleToggleModel} />
      )} */}
    </div>
  );
}
