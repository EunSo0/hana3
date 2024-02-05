const getLastDate = (year, month) => {
  const dt = new Date();
  dt.setFullYear(year);
  dt.setMonth(month - 1);
  dt.setDate(1);
  dt.setMonth(dt.getMonth() + 1);
  dt.setDate(0);
  return dt.getDate();
};
console.log(getLastDate(2024, 2));

const calendar = (year, month) => {
  
}