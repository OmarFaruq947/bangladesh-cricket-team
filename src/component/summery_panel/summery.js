import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUsers} from '@fortawesome/free-solid-svg-icons'
import './summery.css';

const Summery = (props) => {
    const addPerson=props.addPerson;
    console.log("cheack=",addPerson);
    let total=0;
    for (let i = 0; i < addPerson.length; i++) {
        const person = addPerson[i];
        total = total+person.salary;   
    }
    return (
        <div>
            <div className="summery_section">
                <h5 className="total">Total Person:{addPerson.length}</h5>
                <hr/>
                <h4 className="total_salary">Total Salary</h4>
                <div className=" bg-primary salary">$ {total} </div>
                <br/>
                <div className=" bg-primary salary" title="84.80 Bangladeshi Taka = 1 dollar">TK {total*84.80} </div>
                <button type="button" class="btn btn-outline-primary  confirm_btn">Confirm</button>
            </div>
            <div>
                <br/><br/><br/>
            <h1 className="total"><FontAwesomeIcon icon={faUsers}/> ({addPerson.length})</h1>
                <ol className="player_list">
                    { addPerson.map(person => <li>{person.name},  ({person.salary}$) </li>) }
                </ol>
            </div>
        </div>
    );
};

export default Summery;