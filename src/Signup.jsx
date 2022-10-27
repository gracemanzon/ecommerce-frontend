import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);

    axios
      .post("http://localhost:3000/users", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
        setStatus(error.response.status);
      });
  };

  return (
    <div id="signup">
      <div className="card" style={{ width: "22em" }}>
        <div className="card-header">Signup</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div>
              <p>Name: </p>
              <input name="name" type="text" value={name} onChange={(event) => setName(event.target.value)} />
              <small className={name.length > 20 ? "error" : ""}> {20 - name.length} /20</small>
            </div>
            <div>
              <p>Email: </p>
              <input name="email" type="email" />
            </div>
            <div>
              <p>Password: </p>
              <input name="password" type="password" />
            </div>
            <div>
              <p>Password Confirmation: </p>
              <input name="password_confirmation" type="password" />
            </div>
            <button type="submit" className="btn btn-primary">
              Signup
            </button>
            <ul>
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </form>
        </div>
      </div>
      {status ? <img src={`https://http.cat/${status}`} className="statusImg" /> : null}
    </div>
  );
}
