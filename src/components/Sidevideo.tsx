
import sidevideos from "../assets/images/sidevideo.mp4";

function Sidevideo() {
  return (
   
      <video autoPlay muted loop playsInline>
        <source src={sidevideos} type="video/mp4" />
      </video>
    
  );
}

export default Sidevideo;
