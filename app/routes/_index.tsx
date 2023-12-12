import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import Calculator from "~/assets/calculator.svg?react";

export const meta: MetaFunction = () => {
  return [
    { title: "My Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export function loader() {
  return json({ message: "message from the !!server" });
}

export default function Index() {
  const { message } = useLoaderData<typeof loader>();
  const [count, setCount] = useState(1);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>We 😍 vite!</h1>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount((c) => c + 5)}>Add 5</button>
      <p>{message}</p>
      <Link to="readme">Go To Read ME page</Link>
      <Calculator width={24} />
    </div>
  );
}
