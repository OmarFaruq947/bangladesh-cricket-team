import React, { useState } from 'react';
import './persons.css';
import fackdata from '../Data/fackdata.json';
import Person from '../person/person';
import Summery from '../summery_panel/summery';


const Persons = () => {
    //console.log(fackdata); // data cole asce.
    const [persons, setPersons]=useState(fackdata);
    const [addPerson, setAddPerson] = useState([]);

    const handleAddPerson = (person) =>{
        // console.log("person added ok???");
        const newAddPerson = [...addPerson, person];
        setAddPerson(newAddPerson);
    }

    return (
        <div className="personsPanel">
            
            <div className="personsContainer">
                {
                    persons.map(person1 => <Person 
                
                        handleAddPerson_info={handleAddPerson}
                    person={person1}>

                    </Person>)
                }
            </div>

            <div className="personInfoCount">

                <Summery addPerson={addPerson}></Summery>

            </div>
        </div>
    );
};
export default Persons;