import React, { useState } from "react";
import Swal from "sweetalert2";

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {
  const id = selectedEmployee.id;

  const [name, setName] = useState(selectedEmployee.name);
  const [rollno, setRollno] = useState(selectedEmployee.rollno);
  const [email, setEmail] = useState(selectedEmployee.email);
  const [address, setAddress] = useState(selectedEmployee.address);
  const [contact, setContact] = useState(selectedEmployee.contact);

  const handleUpcontact = (e) => {
    e.preventDefault();

    if (!name || !rollno || !email || !address || !contact) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const employee = {
      id,
      name,
      rollno,
      email,
      address,
      contact,
    };

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        employees.splice(i, 1, employee);
        break;
      }
    }

    setEmployees(employees);
    setIsEditing(false);

    Swal.fire({
      icon: "success",
      title: "Student Updated!",
      text: `${employee.name} data has been upcontactd.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpcontact}>
        <h1>Edit Student</h1>
        <label htmlFor="name">First Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="rollno">Last Name</label>
        <input
          id="rollno"
          type="text"
          name="rollno"
          value={rollno}
          onChange={(e) => setRollno(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="address">address</label>
        <input
          id="address"
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label htmlFor="contact">contact</label>
        <input
          id="contact"
          type="contact"
          name="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Update Student" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Edit;
