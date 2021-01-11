import React ,{useEffect,useState} from 'react';
import {useForm} from  "react-hook-form";
import {useSelector, useDispatch} from "react-redux";
import {addUser} from  '../redux/actions/user-action'
 

type userData = {
    firstName : string,
    age : number
}
const UserForm = (props:any) =>{
    const {register,handleSubmit,errors} = useForm<userData>();
    const user = useSelector<any>(state => state.userReducer);
    console.log(user) 
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        dispatch(addUser({addUserMessage:"user added successfully"}))
        alert(JSON.stringify(data))
    }
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>First Name</label>
                <input name="firstName" ref={register({required:true})} />
                {errors.firstName && "First Name is required"}
                <label>Age</label>
                <input name="age" ref={register({required:true})} />
                {errors.age && "Age is required"}
                <input type="submit" />
                <p>
                    {/* {user} */}
                </p>
            </form>
        </div>
    );
}
export default UserForm;