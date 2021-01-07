import React ,{useEffect,useState} from 'react';
import {useForm} from  "react-hook-form";

type userData = {
    firstName : string,
    age : number
}
const UserForm = (props:any) =>{
    const {register,handleSubmit,errors} = useForm<userData>();
    const onSubmit = (data) => {
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
            </form>
        </div>
    );
}
export default UserForm;