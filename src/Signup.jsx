import axios from "axios";

export function Signup() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const params = new FormData(event.target);

    axios
      .post("http://localhost:3000/users", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
      })
      .catch((errors) => {
        console.log(errors.response.data.errors);
      });
  };

  return (
    <div id="signup" className="form">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <p>
            Name: <input name="name" type="text" />
          </p>
        </div>
        <div>
          <p>
            Email: <input name="email" type="email" />
          </p>
        </div>
        <div>
          <p>
            Password: <input name="password" type="password" />
          </p>
        </div>
        <div>
          <p>
            Password Confirmation: <input name="password_confirmation" type="password" />
          </p>
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
