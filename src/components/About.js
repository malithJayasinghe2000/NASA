import { Container } from "react-bootstrap";
import Header from "./Header";
import Solar from "./Solar";


export default function About() {
    return (
        <div>
         
        
        <Header/>
        <Container className="d-flex flex-column align-items-center " style={{ minHeight: "90vh" }}>
            <br /><br /><br /><br /><br /><br /><br />
                <h2 style={{color:"white",fontFamily:"poppins"}}>About NASA</h2>
                <br />
                <p style={{color:"white",fontFamily:"poppins",textAlign:"center"}}>
                    The National Aeronautics and Space Administration (NASA) is an independent agency of the U.S. federal government responsible for the civilian space program, as well as aeronautics and aerospace research.
                </p>
                <p style={{color:"white",fontFamily:"poppins",textAlign:"center"}}>
                    NASA was established in 1958, succeeding the National Advisory Committee for Aeronautics (NASA). Since its establishment, NASA has been at the forefront of space exploration, conducting missions to explore the Earth, the Moon, and beyond.
                </p>
                <p style={{color:"white",fontFamily:"poppins",textAlign:"center"}}>
                    NASA's missions include sending astronauts to space, launching satellites for communication and scientific research, and conducting robotic missions to explore other planets and celestial bodies in our solar system and beyond.
                </p>
                <p style={{color:"white",fontFamily:"poppins",textAlign:"center"}}>
                    The agency's vision is to reach for new heights and reveal the unknown for the benefit of humankind.
                </p>
                </Container>
            </div>
      
            
           
        
    );
}
