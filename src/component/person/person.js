import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faPhone, faDollarSign, faAddressCard,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './person.css';

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
                    <p><span className="icon"><FontAwesomeIcon icon={faAddressCard}/></span> Address: {address}</p>
                    <p><span className="icon"><FontAwesomeIcon icon={faPhone}/></span> Phone: {phone}</p>
                    <p><span className="icon"><FontAwesomeIcon icon={faEnvelope}/></span> Email: {email}</p>
                    <p><span className="icon"><FontAwesomeIcon icon={faDollarSign}/></span> Salary: ${salary}/mount</p>
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