import '../App.css'; // Adjust the path as necessary
import mylogo from '../assets/images/LH.png';
import myprof from '../assets/images/me-prof.jfif';

function Home() {
  return(
  <div className='main-div'>
    <div className='branding'>
        
      <div className='name-tagline-container'>
        <img src={mylogo} alt="Logo" className='logo' />
        <h1 className='name-tagline'>LOWIE HOJAS<br/>
        <strong><em>CODE. CREATE. CONNECT.</em></strong></h1>
      </div>
      <div>
        <p className='tagline'>
            YOU envision it<br/>
            -- I build it into REALITY
        </p>
      </div>
    </div>

    <div className='img-prof'>
      <img src={myprof} alt="Profile" className='profile-pic' />
    </div>
  </div>
  );


}

export default Home;