import "./Register.css";
import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

export const Addflat = () => {
  // "block": "C",
  // "flat_number": 310,
  // "type":"Owner" ,
  // "image": "https://gharoga.com/wp-content/uploads/2021/05/gharoga.com6_-2.jpg",
  // "residents":10,

  //  "name":"taniya",
  // "gender":"Female",
  // "age":21
  const [form, setForm] = useState([]);
  //   const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const addflat = () => {
    fetch(`https://apartment-flat.herokuapp.com/flat`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "content-type": "application/json" },
    }).then(alert("Flat added Successfylly.."));
  };

  return (
    <div id="regDiv">
      <h1>Add Flat</h1>
      <input
        type="text"
        onChange={handleChange}
        name="block"
        placeholder="Block Name"
      />
      <input
        type="Number"
        onChange={handleChange}
        name="flat_number"
        placeholder="Flat Number"
      />
      <input
        type="text"
        onChange={handleChange}
        name="type"
        placeholder="Owner/Tenent"
      />
      <input
        type="text"
        onChange={handleChange}
        name="image"
        placeholder="Image Url"
      />
      <input
        type="Number"
        onChange={handleChange}
        name="residents"
        placeholder="Number of Residents"
      />
      <input
        type="text"
        onChange={handleChange}
        name="name"
        placeholder="name"
      />
      <input
        type="text"
        onChange={handleChange}
        name="gender"
        placeholder="Male/Female"
      />
      <input
        type="Number"
        onChange={handleChange}
        name="age"
        placeholder="age"
      />
      <button id="regBtn" onClick={addflat}>
        Add
      </button>
    </div>
  );
};
