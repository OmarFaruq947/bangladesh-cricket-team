import React from 'react';
import './summery.css';

const Summery = (props) => {
    const addPerson=props.addPerson;
    
    let total=0;
    for (let i = 0; i < addPerson.length; i++) {
        const person = addPerson[i];
        total = total+(person.salary);   
    }
    // console.log(total);
    return (
        <div>
            <div className="summery_section">
                <h5 className="total">Total Person:{addPerson.length}</h5>
                <hr/>
                <h4 className="total_salary">Total Salary</h4>
                <div className=" bg-primary salary">${total} </div>
                <button type="button" class="btn btn-outline-primary">Confirm</button>
               
            </div>
            <div>
  
            </div>
        </div>
        

    );
};

export default Summery;