import React, { useState } from "react";
import Alertbox from "./Alertbox";


const Contactform = () => {

const [alert, setalert] = useState(false);

  const [user, setuser] = useState({
    name: "",
    email: "",
    message: "",
  });

  let name, value;
  const postuserdata = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };

  const submitdata = async (e) => {
    e.preventDefault();

    const { name, email, message } = user;
    if (name && email && message) {
      const response = fetch(
        "https://eduwell-b81f2-default-rtdb.firebaseio.com/eduwelluserdata.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );
      if (response) {
        setuser({ name: "", email: "", message: "" });
        window.location.href = "/thankyoupage";
      } else {
        console.log("error");
        window.location.href = "*";
      }
    } else {
      console.log("please fill the form");
      setalert(true);
    }
  };

  return (
    <>
     <Alertbox display = {alert}/>
      <form action="">
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            name="name"
            value={user.name}
            onChange={postuserdata}
            placeholder="Full Name"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            className="form-control"
            name="email"
            value={user.email}
            onChange={postuserdata}
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <textarea
            type="text"
            className="form-control"
            rows="5"
            name="message"
            value={user.message}
            onChange={postuserdata}
            placeholder="Your Message"
          ></textarea>
        </div>
        <button type="submit" className="btn" onClick={submitdata}>
          Send Message
        </button>
      </form>

     
    </>
  );
};

export default Contactform;
