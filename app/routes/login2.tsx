import type { LinksFunction, ActionFunctionArgs } from "@remix-run/node";
import styles from "~/styles/login.css?inline";
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
  const loginMessage = useActionData<typeof action>();

  return (
    <div>
      <h3>User Login</h3>
      <Form method="post" autoComplete="off">
        <div className="fgroup">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="fgroup">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Login</button>
        <p>{loginMessage}</p>
      </Form>
    </div>
  );
}
