export const InputAccount = () => {
  return (
    <fieldset>
      <legend>계정정보 입력</legend>
      <div>
        <label>
          메일주소
          <input type="text" placeholder="example@test.com" />
        </label>
      </div>
      <div>
        <label>
          비밀번호
          <input type="password" placeholder="8자 이상" />
        </label>
      </div>
    </fieldset>
  );
};
