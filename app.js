import { useState } from "react";
import "./styles.css";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullName = firstName && lastName ? `${firstName} ${lastName}` : "";

  return (
    <div className="app">
      <h1>Derived state demo</h1>

      <input
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <p>
        Full name: <strong>{fullName || "—"}</strong>
      </p>
    </div>
  );
}
