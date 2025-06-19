
import sidevideos from "../assets/images/sidevideo.mp4";

function Sidevideo() {
  return (
   
      <video autoPlay muted loop playsInline className="w-100 h-100 rounded-4 object-fit-cover">
        <source src={sidevideos} type="video/mp4" />
      </video>
    
  );
}

export default Sidevideo;
