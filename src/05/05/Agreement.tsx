/* 리스트 5-20
export const Agreement = ({ onChange }: Props) => {
  return (
    <div>
      <legend>이용계약 동의</legend>
      <label>
        <input type="checkbox" onChange={onChange} />
        서비스&nbsp;<a href="/terms">이용계약</a>을 확인했으며 이에 동의합니다
      </label>
    </div>
  );
};
*/

type Props = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export const Agreement = ({ onChange }: Props) => {
  return (
    <fieldset>
      <legend>이용계약 동의</legend>
      <label>
        <input type="checkbox" onChange={onChange} />
        서비스&nbsp;<a href="/terms">이용계약</a>을 확인했으며 이에 동의합니다
      </label>
    </fieldset>
  );
};
