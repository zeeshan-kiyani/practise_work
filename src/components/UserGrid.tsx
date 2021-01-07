import React , {useState} from 'react';
import {Table} from 'react-bootstrap'

let users: {id:number,name:string,age:number}[];
users = [
    { id: 1, name: 'Ayaan',  age: 26  },
    { id: 2, name: 'Ahana',  age: 22  },
    { id: 3, name: 'Peter',  age: 40  },
    { id: 4, name: 'Virat',  age: 30  },
    { id: 5, name: 'Rohit',  age: 32  },
    { id: 6, name: 'Dhoni',  age: 37  }
]  
const UserGrid = (props:any) => {
    let [userData,setUserData] = useState(users)
    let [isWriteable ,setIswriteable] = useState<boolean>(false);
    let [firstName, setFirstName] = useState<string>('');
    let [age, setAge] = useState<number>(0);
    let [editId ,setEditId] = useState<number>(0);
    const deleteUser = (id : number) => {
        userData = userData.filter(item => item.id !== id)
        setUserData(userData);
    }
    const editUser = (id) =>{
        setEditId(id);
        setIswriteable(true);
    }
    const saveUser = (id) =>{
        let editUser = userData.filter(item => item.id === id)
        editUser[0].name = firstName;
        setUserData(editUser);
        console.log(editUser)   
    }
    const setToDefault = () =>{
        setEditId(0);
        setIswriteable(false);
        setUserData(userData);
    }

    return(
        <div>
            <Table striped bordered hover  size="sm">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Age</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {userData.map((user:any) =>
                <tr>
                <td>{user.id}</td>
                <td>
                    {isWriteable === false
                        ?user.name
                        :editId === user.id ?<input type='text' onChange={(e)=>setFirstName(e.target.value)} value = {user.name}/>:user.name
                    }
                </td>
                <td>{user.age}</td>
                <td>
                    {editId !== user.id 
                    ?<a onClick={() => editUser(user.id)}>{"edit"}</a>
                    :<div>
                        <a onClick={() => saveUser(user.id)}>save</a>
                        |
                        <a onClick={() => setToDefault()}>cancel</a>
                    </div>
                    }
                </td>
                <td><a onClick={() => deleteUser(user.id)}>{"delete"}</a></td>
                </tr>
                )}
            </tbody>
            </Table>
        </div>
    );
}
export default UserGrid;