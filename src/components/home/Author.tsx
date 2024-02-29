import img from "../../assets/img.jpeg";
import '../../styles/App.css';

function Author() {
  return (
    <div id='author' className='center'>
        <div className="center-container">
      <div className="line"></div>
      <div className='author-details'>
        <img className='dp' src={img} alt="boy" />
        <div className="center-container">
        <h3 className='name'>AMAL P B</h3>
        <h4 className='time'>Apr 15, 2020 · 4 min read</h4>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Author;
