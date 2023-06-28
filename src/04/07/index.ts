export function greetByTime() {
  const hour = new Date().getHours();
  if (hour < 12) {
    return "좋은 아침입니다";
  } else if (hour < 18) {
    return "식사는 하셨나요";
  }
  return "좋은 밤되세요";
}
