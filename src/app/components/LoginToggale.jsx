"use client";
import { useStateContext } from "@/context/StateContext";

export default function LoginToggle() {
  const { login, setLogin } = useStateContext();

  return (
    <button onClick={() => setLogin(!login)}>
      <label className="label">
        Hover me
    <input type="checkbox" defaultChecked className="toggle" />
    
  </label>
    </button>
  );
}


