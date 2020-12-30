import React , {useState,useEffect} from 'react';
import ReactTable from "react-table";
// import "react-table/react-table.css";  

let userData: {name:string,age:number}[];
let userHeaders : {Header:string, accessor:string}[];
userData = [
    {  name: 'Ayaan',  age: 26   },
    {  name: 'Ahana',  age: 22  },
    {  name: 'Peter',  age: 40  },
    {  name: 'Virat',  age: 30  },
    {  name: 'Rohit',  age: 32  },
    {  name: 'Dhoni',  age: 37  }
]  
userHeaders = [{  
    Header: 'Name',  
    accessor: 'name'  
   },{  
   Header: 'Age',  
   accessor: 'age'  
   }]  
const UserGrid = () => {
    
    return(
        <div>
            {/* <p>React table</p> */}
            
            <ReactTable  
                data={userData}  
                columns={userHeaders}  
                defaultPageSize = {2}  
                pageSizeOptions = {[2,4, 6]}  
            />  
        </div>
    );
}
export default UserGrid;