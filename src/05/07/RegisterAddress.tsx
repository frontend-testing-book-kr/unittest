import { useState } from "react";
import { Form } from "../06/Form";
import { postMyAddress } from "./fetchers";
import { handleSubmit } from "./handleSubmit";
import { checkPhoneNumber, ValidationError } from "./validations";

/* 리스트 5-46
<Form
  onSubmit={handleSubmit((values) => {
    try {
      checkPhoneNumber(values.phoneNumber);
      // 데이터 취득 함수
    } catch (err) {
      if (err instanceof ValidationError) {
        setPostResult("올바르지 않은 값이 포함되어 있습니다");
        return;
      }
    }
  })}
/>
*/

export const RegisterAddress = () => {
  const [postResult, setPostResult] = useState("");
  return (
    <div>
      <Form
        onSubmit={handleSubmit((values) => {
          try {
            checkPhoneNumber(values.phoneNumber);
            postMyAddress(values)
              .then(() => {
                setPostResult("등록되었습니다");
              })
              .catch(() => {
                setPostResult("등록에 실패했습니다");
              });
          } catch (err) {
            if (err instanceof ValidationError) {
              setPostResult("올바르지 않은 값이 포함되어 있습니다");
              return;
            }
            setPostResult("알 수 없는 에러가 발생했습니다");
          }
        })}
      />
      {postResult && <p>{postResult}</p>}
    </div>
  );
};
