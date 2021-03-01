import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faPhone, faDollarSign, faAddressCard,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './person.css';
import Summery from '../summery_panel/summery';

const Person = (props) => {
    const {flag, id, name, salary, address, phone, email } =props.person;
   
    return (
        <div className="single_person">
            <div className="flag_person">
                <img src={flag} alt=""/>
            </div>
            <div className="person_info">
                <h3 className="Person_mame text-primary" >{name} <span className="badge bg-primary"> ID:{id} </span></h3>
                <br/>
                <div className="personal_info">
                    <p> <FontAwesomeIcon icon={faDollarSign}/> Salary: ${salary}/mount</p>
                    <p> <FontAwesomeIcon icon={faAddressCard}/> Address: {address}</p>
                    <p><FontAwesomeIcon icon={faPhone}/> Phone: {phone}</p>
                    <p> <FontAwesomeIcon icon={faEnvelope}/> Email: {email}</p>
                </div>
                <br/>
                <div class="">
                    <button 
                    class="btn btn-primary" type="button"
                    onClick={ ()=> props.handleAddPerson_info(props.person)}
                    > <FontAwesomeIcon icon={faUserFriends} /> Add Now</button>
                </div>
            </div>
            
            

        </div>
    );
};

export default Person;