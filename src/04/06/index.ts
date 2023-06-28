export class ValidationError extends Error { }

export function checkLength(value: string) {
  if (value.length === 0) {
    throw new ValidationError("1문자 이상 입력해야 합니다");
  }
}
