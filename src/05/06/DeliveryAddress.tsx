export const DeliveryAddress = ({ title = "배송지" }: { title?: string }) => {
  return (
    <fieldset>
      <legend>{title}</legend>
      <div>
        <label>
          우편번호
          <input type="text" name="postalCode" placeholder="16397" />
        </label>
      </div>
      <div>
        <label>
          시/도
          <input type="text" name="prefectures" placeholder="경기도" />
        </label>
      </div>
      <div>
        <label>
          시/군/구
          <input type="text" name="municipalities" placeholder="수원시 권선구" />
        </label>
      </div>
      <div>
        <label>
          도로명
          <input type="text" name="streetNumber" placeholder="매곡로 67" />
        </label>
      </div>
    </fieldset>
  );
};
