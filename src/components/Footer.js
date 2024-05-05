export default function Footer(props) {
  const {showModal,handleToggleModel,data} = props


  return (
    <footer>
    <div className="bgGradient"></div>
    <div>
      <h2 style={{color:"white"}}>{data?.title}</h2>
        <h1 style={{color:"white"}}>© {data?.date}  Astronomy Picture of the Day</h1>
        </div>
       <button onClick={handleToggleModel}><i className="fa-solid fa-circle-info"></i></button>
      
    </footer>
  );
}