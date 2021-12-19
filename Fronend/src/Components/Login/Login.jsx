import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function NavBar() {

  const [Users, setUsers] = useState([]);
  const [input, setPassword] = useState("");
  const [NewUsers, setNewUsers] = useState("");
  const history = useHistory();

  const interuser = (e) => {

    setNewUsers(e.target.value);
  };
  const interbass = (e) => {
    setPassword(e.target.value);
  };
  const singIn = async () => {
    const res = await axios.post("http://localhost:5000/login", {
      username: NewUsers,
      password: input,
    });
    if (res.data === "welcome") {
      history.push("/Dispensaries");
    }
    setUsers(res.data);
    console.log(res.data);
  };
  return (
    <div>  
      <div className="vh-100 d-flex text-light justify-content-center align-items-center">
            <div style={{ height:"450px ", borderRadius:"15px "}} className=" p-2 col-md-3 bg-dark text-center   ">
                <h2 > User Name </h2>
                <input
          onChange={(e) => {
            interuser(e);
          }}
          type="text"
          placeholder="UserName"
          className="form-control mb-5 w-75 m-auto" />

                 <h2> Password </h2>
                 <input onChange={(e) => {    interbass(e);  }} type="Password" placeholder="Password"className=" m-auto mb-5 form-control w-75 m-3" />
        
              
           
                <button className=" btn btn-info px-5 fw-bold py-1"
          onClick={(e) => {
            singIn();
          }}
        >
          sign in
        </button>{" "}
                 <p className="mt-2 mb-5"> Register </p>
                 <h6>{Users}</h6>
            </div>
        </div>
    </div>
    
  );
}


