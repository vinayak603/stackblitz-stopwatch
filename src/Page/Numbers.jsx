export default function FormatTime(timeInMillis){
  const milliseconds = (timeInMillis % 1000).toString().padStart(3, '0');
  const seconds = Math.floor((timeInMillis / 1000) % 60).toString().padStart(2, '0');
  const minutes = Math.floor((timeInMillis / 1000 / 60) % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}.${milliseconds}`;
};