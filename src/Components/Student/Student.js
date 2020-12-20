import React from 'react';
import './Student.css'

const Student = (props) => {
    const {picture, name, _id, address, phone, email, income} = props.student;
    const handleBtn = props.handleBtn;
    return (
        <div className="student">
            <div>
                <img src={picture} alt=""/>

            </div>
        <div>

            <h2>Name: {name}</h2>
            <h4>ID: {_id}</h4>
            <h5>Address: {address}</h5>
            <h5>Phone: {phone}</h5>
            <h5>E-mail: {email}</h5>
            <h4>Annual Income: {income}</h4>


            
            
        </div>
        <div>
            <button onClick={() => handleBtn(props.name)} className="btn"> <strong>ADD ME</strong></button>
        </div>
        </div>
    );
};

export default Student;