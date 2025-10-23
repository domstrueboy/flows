import { useState } from "react";
import { useDispatch } from "react-redux";
import { createFlow } from "./flowsSlice";
import type { SubmitFormEvent } from "../../shared/types";

export function CreateFlow() {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const handleSubmit = (e: SubmitFormEvent) => {
    e.preventDefault();
    const title = value;
    dispatch(createFlow(title));
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Имя нового потока"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" disabled={value.length === 0}>
        Создать
      </button>
    </form>
  );
}
