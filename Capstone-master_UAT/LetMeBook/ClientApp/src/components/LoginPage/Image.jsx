import * as React from 'react';
import '../LoginPage/Image.css'
import image from '../../Assets/doctorNurse.png'

function Headline() {
    return(
        <div>
            <img  className='image' src={image}></img>
        </div>
    );
}
export default Headline;