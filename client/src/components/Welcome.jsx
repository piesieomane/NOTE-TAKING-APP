import Sammy from '../img/sammy.jpeg';
import '../css/main.css';

const Welcome = () => {
  return (
    <>
      <div className="wrapper">
        <h1>Welcome To My App</h1>
        <p>This is going to be the coolest app in the world!</p>
        <img src={Sammy} alt="Sammy" width={200} height={200} />
      </div>
    </>
  );
};

export default Welcome;
