import * as React from 'react';
import logo from '../../Assets/logo.png';
import FBLogo from '../../Assets/FacebookLogo.png';
import '../LoginPage/Phone.css'
import GLogo from '../../Assets/GoogleLogo.png';


function Phone() {
    return (
        <div className='phone'>
            
            <img  className='imag' src={logo} alt="Logo" />
            <p className='font'>Let's Book Your Appointment at your Fingertips.</p>

            <div className='greypart'>
                <div>
                <button className='facebookBtn'><img className='FbIcon' src={FBLogo}/>Continue With FaceBook</button>
                </div>
                {/* onClick={this.myfunction} */}
                <div>
                <button className='googleBtn'><img className='FbIcon' src={GLogo} />Continue With Google</button>
                </div>
                <div className='signInText'>
                    <p>By Signing in you agree to our</p><a href='https://www.termsandcondiitionssample.com/'>Terms & conditions</a>
                    <p>Already have an Account?</p>
                </div>
            </div>
        </div>
    );
}

export default Phone;