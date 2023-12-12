import type { LinksFunction, ActionFunctionArgs } from "@remix-run/node";
import styles from "~/styles/login.css?inline";
import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { Form, useActionData } from "@remix-run/react";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  if (
    formData.get("username") === "barkha" &&
    formData.get("password") === "password"
  )
    return "Logged In Successfully";
  return "Log In Failed";
}

export default function Login() {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const [loginStatus, setLoginStatus] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setLoginForm((old) => ({ ...old, [e.target.name]: e.target.value }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loginForm.username === "barkha" && loginForm.password === "password") {
      setLoginStatus("Logged In Successfully");
    } else {
      setLoginStatus("Log In Failed");
    }
  };

  const loginMessage = useActionData<typeof action>();

  return (
    <div>
      <h3>User Login</h3>
      <div className="col">
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="fgroup">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={loginForm.username}
              onChange={handleChange}
            />
          </div>
          <div className="fgroup">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginForm.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Login</button>
          <p>{loginStatus}</p>
        </form>

        <Form method="post" autoComplete="off">
          <div className="fgroup">
            <label htmlFor="username2">Username</label>
            <input type="text" id="username2" name="username" />
          </div>
          <div className="fgroup">
            <label htmlFor="password2">Password</label>
            <input type="password" id="password2" name="password" />
          </div>
          <button type="submit">Login</button>
          <p>{loginMessage}</p>
        </Form>
      </div>
    </div>
  );
}
