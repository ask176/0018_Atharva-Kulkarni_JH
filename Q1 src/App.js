import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="container- fluid">
      {" "}
      <mycomponent />
    </div>
  );
}
export default App;

export function mycomponent() {
  const headerApp = "MyChatApp";
  const studentName = "Atharva Kulkarni";
  const Studentid = "210940520018";
  const [inputchat, setinput] = useState("");
  const handleinput = (e) => {
    const newValue = e.target.newValue;
    setinputchat(newValue);
  };

  const sendMessge = () => {};
  return (
    <>
      <div>
        <div className="row bg-secondary p-2">
          <div className="col fs-1">{headerApp}</div>
          <div className="col fs-4">
            {studentName}
            {Studentid}
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-10 p-1">
            <input
              type="text"
              name=""
              id=""
              placeholder="Lest chat here...."
              className="form-control w-100"
            />
          </div>

          <div className="col-2 p1">
            <input
              type="button"
              value="send"
              className="form-control p-3 btn btn-outline-primary border round"
              onClick={sendMessage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
