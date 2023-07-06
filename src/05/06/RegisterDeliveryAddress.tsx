type Props = { onChange: (flag: boolean) => void };

export const RegisterDeliveryAddress = ({ onChange }: Props) => {
  return (
    <fieldset>
      <legend>새로운 배송지를 등록하시겠습니까?</legend>
      <label>
        <input
          type="radio"
          name="registerDeliveryAddress"
          value={0}
          onChange={() => {
            onChange(false);
          }}
        />
        아니오
      </label>
      <label>
        <input
          type="radio"
          name="registerDeliveryAddress"
          value={1}
          onChange={() => {
            onChange(true);
          }}
        />
        네
      </label>
    </fieldset>
  );
};
