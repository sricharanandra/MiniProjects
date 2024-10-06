function getWeekEndDate(date) {
  const dayOfWeek = date.getDay();
  const diff = dayOfWeek >= 0 ? 7 - dayOfWeek : -dayOfWeek;
  const weekEndDate = new Date(date.getTime() + diff * 24 * 60 * 60 * 1000);
  return weekEndDate;
}
function calculateAge(birthdate) {
  const today = new Date();
  const age = today.getFullYear() - birthdate.getFullYear();
  const monthDiff = today.getMonth() - birthdate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthdate.getDate())
  ) {
    age--;
  }
  return age;
}
