import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Users.css';
import Student from '../Student/Student';



const Users = () => {
    
    const first15 = fakeData.slice(0,14);
    const [students,setStudents] = useState(first15);
    
    const [cart, setCart] = useState([])
    const handleBtn = (Users) => {
        const newCart = [...cart, Users];
        setCart(newCart);
        
     const cart = (props) => {
        const cart = props.cart;
        let totalIncome = 0;
        for(let i = 0; i < cart.length; i++) {
            const Users = cart[i];
            totalIncome = totalIncome + Users.income;
            
        }
    }
   
    }
    return (
        <div>
            <h1 >User's List</h1>
        <div className="classroom">

            <div className="student-box">
            
                {
                    students.map(sd => <Student student={sd} handleBtn={handleBtn}></Student> )
                }

            </div>
            <div className="cart-box">
                <h1>This is Cart</h1>
                <h3>User Added: {cart.length}</h3>
                <h3>Total Income:{cart.income}</h3>

            </div>

            
        </div>
        </div>
    );
};

export default Users;