import React , {useState,useEffect} from 'react';

const Footer = (props : any) =>{
    const parentComponent : string  = props.comp; 
    useEffect(() => {
        console.log(props)
    })
    return(
        <>
            <p>
                {`My parent component is ${parentComponent}`}
            </p>
        </>
    );
}
export default Footer;
