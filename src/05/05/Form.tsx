import { useId, useState } from "react";
import { Agreement } from "./Agreement";
import { InputAccount } from "./InputAccount";

export const Form = () => {
  const [checked, setChecked] = useState(false);
  const headingId = useId();
  return (
    <form aria-labelledby={headingId}>
      <h2 id={headingId}>신규 계정 등록</h2>
      <InputAccount />
      <Agreement
        onChange={(event) => {
          setChecked(event.currentTarget.checked);
        }}
      />
      <div>
        <button disabled={!checked}>회원가입</button>
      </div>
    </form>
  );
};
