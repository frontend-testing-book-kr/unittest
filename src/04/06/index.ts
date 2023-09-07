export class ValidationError extends Error { }

export function checkLength(value: string) {
  if (value.length === 0) {
    throw new ValidationError("1개 이상의 문자를 입력해주세요");
  }
}
