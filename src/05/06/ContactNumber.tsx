export const ContactNumber = () => {
  return (
    <fieldset>
      <legend>연락처</legend>
      <div>
        <label>
          전화번호
          <input type="text" name="phoneNumber" />
        </label>
      </div>
      <div>
        <label>
          이름
          <input type="text" name="name" />
        </label>
      </div>
    </fieldset>
  );
};
