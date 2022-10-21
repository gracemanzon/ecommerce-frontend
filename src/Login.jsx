import axios from "axios";

export function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const params = new FormData(event.target);

    axios
      .post("http://localhost:3000/sessions", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
      })
      .catch((errors) => {
        console.log(errors.response.data.errors);
      });
  };

  return (
    <div id="login" className="form">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
