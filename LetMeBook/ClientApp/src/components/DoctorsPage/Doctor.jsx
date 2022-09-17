import axios from 'axios';
import React, { Component } from 'react';
import './Doctor.css'

import { Route } from 'react-router';
import { Link } from 'react-router-dom';


export class Doctor extends Component {
   // static displayName = Doctor.name;
    constructor(props) {
        super(props);
        this.state = {
            doctors: [],
            loading: true
        }
    }

    componentDidMount (){
        this.populateDoctorsData();
    }
    I
    populateDoctorsData()
    {
        axios.get("api/Doctors/GetDoctors").then(result => {
            const response = result.data;
            this.setState({doctors: response, loading: false});
        })
    }

    renderAllDoctors(doctors) {
       
        return (
            //<table className="table table-striped">
            //    <thead>
            //        <tr>
            //            <th>Doctor Name</th>
            //            <th>Experience</th>
            //            <th>Speciality</th>
            //        </tr>
            //    </thead>
            //    <tbody>
            //        {
            //            doctors.map(doctor => (
            //                <tr key={doctor.doctor_ID}>
            //                    <td>{doctor.doctor_Name}</td>
            //                    <td>{doctor.doctor_Experience}</td>
            //                    <td>{doctor.doctor_Speciality}</td>
            //                 </tr> 
            //            ))
            //        }
            //    </tbody>
            //    </table>
        
                doctors.map(doctor =>
                    { 
                        var id =doctor.doctor_ID
                        var name = doctor.doctor_Name
                        var experience = doctor.doctor_Experience
                        var speciality = doctor.doctor_Speciality
                        
                        return (

                    <div key={doctor.doctor_ID}>
                        
                            <div class="doctorProfile cardMargin">
                                 
                               <img class="card-img-top"></img>
                                <div class="card-body">
                                    <h5 class="card-title">Doctor Name: {doctor.doctor_Name}</h5>
                                    <h5 class="card-title">Experience: {doctor.doctor_Experience}</h5>
                                    <h5 class="card-title">Speciality: {doctor.doctor_Speciality}</h5>
                                {/* <a href="/doctorBooking" class="button" role="button"  >BOOK</a> */}
                                
                               
                                {/* <Link to={'/doctorBooking'}
                                 key={ doctor.doctor_ID}  class="button">BOOK</Link> */}
                                 <Link to={{
                                    pathname: '/doctorBooking',
                                    state: {name: name, experience: experience, speciality: speciality}
                                    }} >Learn More</Link>

                                    {/*<div className="alignCenter1">Doctor Name: {doctor.doctor_Name}</div>*/}
                                    {/*<div className="alignCenter2">Experience: {doctor.doctor_Experience}</div>*/}
                                    {/*    <div className="alignCenter3">Speciality: {doctor.doctor_Speciality}</div>*/}
                                 </div>
                             </div>
                        
                     </div>
                )})
        
                    // <div>
                    //     <a href="">
                    //         <div className="doctorProfile">
                    //             <div className="doctorImage">
                    //                 <img></img>
                    //             </div>
                    //             <div className="alignCenter1">Doctor Name</div>
                    //             <div className="alignCenter2">Experience</div>
                    //             <div className="alignCenter3">Speciality</div>
                    //         </div>
                    //     </a>
                    // </div>
                
                
            )
    }


    render() {

        let content = this.state.loading ? (
            <p>
                <em>Loading...</em>
            </p>
        ) : (
                this.renderAllDoctors(this.state.doctors)
            )

        return (
            <div className="container1">
                {content}
            </div>
            // <div>
            //     <div>
            //         <div className="profileName">
            //             <p>Pediatrician</p>
            //         </div>

            //         <div className="container1">
            //             {/* Profile rectangle for each doctor */}
            //             <div>
            //                 <a href="">
            //                     <div className="doctorProfile">
            //                         <div className="doctorImage">
            //                             <img></img>
            //                         </div>
            //                         <div className="alignCenter1">Doctor Name</div>
            //                         <div className="alignCenter2"> City </div>
            //                         <div className="alignCenter3">Rating </div>
            //                     </div>
            //                 </a>
            //             </div>
            //             {/* one profile rec endds. Clickable */}
            //             <div>
            //                 <a href="">
            //                     <div className="doctorProfile">
            //                         <div className="doctorImage">
            //                             <img></img>
            //                         </div>
            //                         <div className="alignCenter1">Doctor Name</div>
            //                         <div className="alignCenter2"> City </div>
            //                         <div className="alignCenter3">Rating </div>
            //                     </div>
            //                 </a>
            //             </div>

            //             <div>
            //                 <a href="">
            //                     <div className="doctorProfile">
            //                         <div className="doctorImage">
            //                             <img></img>
            //                         </div>
            //                         <div className="alignCenter1">Doctor Name</div>
            //                         <div className="alignCenter2"> City </div>
            //                         <div className="alignCenter3">Rating </div>
            //                     </div>
            //                 </a>
            //             </div>

            //             <div>
            //                 <a href="">
            //                     <div className="doctorProfile">
            //                         <div className="doctorImage">
            //                             <img></img>
            //                         </div>
            //                         <div className="alignCenter1">Doctor Name</div>
            //                         <div className="alignCenter2"> City </div>
             //                        <div className="alignCenter3">Rating </div>
             //                    </div>
             //                </a>
             //            </div>
             //        </div>
             //    </div>
             //</div>
        );
    }
}

