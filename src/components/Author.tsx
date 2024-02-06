import img from '../assets/img.jpeg';
import '../styles/App.css';

function Author() {
  return (
    <div id='author' className='center'>
        <div className="center-container">
      <div className="line"></div>
      <div className='author-details'>
        <img className='dp' src={img} alt="boy" />
        <div className="center-container one">
        <h3>AMAL P B</h3>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Author;
