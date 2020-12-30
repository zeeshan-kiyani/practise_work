import React , {useState,useEffect} from 'react';
// interface IComponent {
//     parentComponent: string;
//   }

const Footer = (props : any) =>{
    // const parentComponent : string  = props.comp;
    const [parentComponent , setParentComponent] = useState<string>(props.comp);  
    useEffect(() => {
        console.log(props)
    })
    return(
        <>
            <p>
                {`My parent component is ${parentComponent}`}
                <button onClick = {() => setParentComponent('New App') }>Change Parent</button>
            </p>
        </>
    );
}
export default Footer;
