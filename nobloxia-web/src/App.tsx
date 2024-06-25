import './App.css';
import icon from './assets/nobloxia-house.png';
import SocialLinks from './configs/SocialLinks.tsx';

function App() {
  return (
    <>
      <a href={SocialLinks.Group.redirect} className="container" target="_blank" rel="noopener noreferrer">
        <img src={icon} className='logo' alt='Nobloxia Logo' />
        <div>
          <h1>Nobloxia</h1>
          <p>The Best Games on Roblox</p>
        </div>
      </a>
    </>
  );
}

export default App;
