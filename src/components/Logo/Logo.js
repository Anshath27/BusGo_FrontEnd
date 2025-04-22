import './Logo.css';
import logo from '../../images/logo1.jpg';

function Logo(){
    return(
      <div className='logo'>
         <img src={logo}/>
      </div>
    );
}

export default Logo;