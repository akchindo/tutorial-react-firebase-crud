import { useState } from "react";

import { db } from "./firebase-config";
import "./App.css";
import { useEffect } from "react";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

function App() {
  const [newName, setNewName] = useState("")
  const [newAge, setNewAge] = useState("")
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createuser =  async () => {
     await addDoc(usersCollectionRef, {name: newName,  age:Number( newAge)})
  } 

  const updateUser = async(id,age) => {
    const userDoc= doc(db, "users" ,id)
    const newFields = {age: age + 1}
    await updateDoc( userDoc, newFields)
  }

  const deleteUser = async(id) => {
    const userDoc= doc(db, "users" ,id)
    await deleteDoc(userDoc)

  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      console.log(data);
    };

    getUsers();
  }, []);

  return (
    <div>
      <input type="text"  placeholder="Name..." onChange={(e) => {setNewName(e.target.value)}}/>
      <input type="number"  placeholder="Age..." onChange={(e) => {setNewAge(e.target.value)}}/>
      <button onClick={createuser}>Create User</button>


      {users.map((user) => {
        return (
          <div>
            {""}
            <h1>Name : {user.name}</h1>
            <h1>Age : {user.age}</h1>
            <button onClick={() => {updateUser(user.id, user.age)}}>{""} Increase Age</button>
            <button onClick={() => {deleteUser(user.id)}}>Delete User</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
