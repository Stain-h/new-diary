const today = new Date();

export const todayYear = today.getFullYear();
export const todayMonth = ('0' + (today.getMonth() + 1)).slice(-2);
export const todayDay = ('0' + today.getDate()).slice(-2);

export const todayHours = ('0' + today.getHours()).slice(-2);
export const todayMinutes = ('0' + today.getMinutes()).slice(-2);
export const todaySeconds = ('0' + today.getSeconds()).slice(-2);

export const todayDateStr = todayYear + '-' + todayMonth + '-' + todayDay;
export const todayTimeString = todayHours + ':' + todayMinutes + ':' + todaySeconds;

export const todayDateWithTime = todayDateStr + todayTimeString;

export function formatDayOfWeek() {
  const weekDay = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = weekDay[today.getDay()];

  return dayOfWeek;
}
