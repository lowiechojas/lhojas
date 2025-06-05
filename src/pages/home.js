import '../App.css'; // Adjust the path as necessary
import image1 from '../assets/image1.jpg'; // Adjust the path as necessary

function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>This is the landing page.</p>
      <img src={image1} alt="Light Bulb" />
    </div>
  );
}

export default Home;
