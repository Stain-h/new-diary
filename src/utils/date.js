export function formatDate(date, getTime=false){
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);

  const hours = ('0' + date.getHours()).slice(-2); 
  const minutes = ('0' + date.getMinutes()).slice(-2);
  const seconds = ('0' + date.getSeconds()).slice(-2); 

  const dateStr = year + '-' + month + '-' + day
  const timeString = hours + ':' + minutes  + ':' + seconds;

  return getTime ? dateStr + ' ' + timeString : dateStr;
}

export function formatDayOfWeek(date){
  const weekDay = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = weekDay[date.getDay()];

  return dayOfWeek;
}
