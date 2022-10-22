import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Form.css";

function Form() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7f7a512 ",
        "template_qdux3ck",
        form.current,
        "_5dxnU5QafOLc0l8t"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent");
        },
        (error) => {
          console.log(error.text);
          console.log("Message Not Sent");
        }
      );
    e.target.reset();
  };

  const [changer, setChanger] = useState(false);
  const [flag, setFlag] = useState();
  const pageChanger = () => {
    setChanger(flag);
    setFlag(!changer);
  };
  return (
    <div className="Former-Main">
      {!flag ? (
        <div
          className="Former"
          style={{
            transform: " rotateX(180deg) rotateY(180deg) rotateZ(180deg)  ",
            transition: "all 0.25s ease-in",
          }}
        >
          <h1 className="Set-Header">Knowledge</h1>
          <div className="Displayer">
            <h5>
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment.
            </h5>
          </div>
        </div>
      ) : (
        <div
          className="Former"
          style={{
            transform: "rotateY(180deg) rotateZ(-180deg)  rotateX(-180deg) ",

            transition: "all 0.25s ease-out",
          }}
        >
          <form onSubmit={sendEmail} ref={form}>
            <h1 className="Email-Header">Reach Out</h1>

            <div className="Form-Placer">
              <div className="Name-Sitter">
                <input
                  className="Name-Form"
                  type="text"
                  placeholder="Enter Your Name"
                  name="user_name"
                />
              </div>
              <div className="Email-Sitter">
                <input
                  className="Email-Form"
                  type="email"
                  aria-required
                  placeholder="Enter Your Email"
                  name="user_email"
                />
              </div>

              <div className="Email-Sitter">
                <textarea
                  className="Subject-Form"
                  type="message"
                  aria-required
                  placeholder="Description"
                  name="message"
                />
              </div>
            </div>
            <div className="button-placer">
              <input className="smt-btn" type="submit" value="Send" />
            </div>
          </form>
        </div>
      )}
      <div className="button-placer1">
        {!flag ? (
          <button className="smt-btn1" onClick={pageChanger}>
            Chat
          </button>
        ) : (
          <button className="smt-btn2" onClick={pageChanger}>
            Set
          </button>
        )}
      </div>
    </div>
  );
}

export default Form;
