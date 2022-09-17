import React, {Component} from 'react';
import './DoctorBook.css'
import axios from 'axios';


export class DoctorBook extends Component{
    static displayName = DoctorBook.name;
    constructor(props){
      super(props);
      this.state={
          value:this.props.location.state,
      }

  }
  
  


    render(){
        return (
          <div>
            <div className="docProfile">
              <p>Doctor Profile</p>
            </div>
            {/* Doctor image and details */}
            <div className="docDetails">
              {/* Doc IMage */}
              <div className="docImage">
                <p>Doc Image</p>
              </div>
              {/* Doc Details */}
              <div>
                <table>
                  <tr>
                    <td>
                      <p>Name: </p>
                    </td>
                    <td>
                      <p>{this.props.location.state.name}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Speciality: </p>
                    </td>
                    <td>
                      <p>{this.props.location.state.speciality}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Experience: </p>
                    </td>
                    <td>
                      <p>{this.props.location.state.experience} years</p>
                    </td>
                  </tr>
                </table>
              </div>
            </div>

            {/* Booking Div */}
            <div className="booking">
              <tr>
                <td>
                  <p>Date: </p>
                </td>
                <td>
                  <input type="date" placeholder="" />
                </td>
              </tr>
              <tr>
                <td>
                  <p>Time: </p>
                </td>
                <td>
                  <input type="time" />
                </td>
              </tr>
              <tr>
                <td>
                  <p>Duration: </p>
                </td>
                <td>
                  <input type="number" />
                </td>
              </tr>
              <tr>
                <td>
                  <p>Reason: </p>
                </td>
                <td>
                  <textarea classname="reason" rows={10} cols={50} />
                </td>
              </tr>
            </div>
            {/* booking Buttons  */}
            <div className="bookingButton">
              <button type="submit">Book </button>
              <input type="button" value="Back" />
            </div>
          </div>
        );
    }

}

// export default function DoctorBook(props){
//   console.log(props.key)
//   return(  <h1>fsbf</h1>)
  
  
// }