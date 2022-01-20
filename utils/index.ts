/**
 * Get Today Date
 * @returns string | yyyy-mm-dd | Ex: 2022-01-21
 */
export const getTodayDate = (): string => {
  const today = new Date();
  let dd: number | string = today.getDate();
  let mm: number | string = today.getMonth() + 1; // January is 0 index | getMonth = 0-11 index
  let yyyy = today.getFullYear();
  // Desired output : min = "2022-01-23"
  // console.log(`${yyyy}-${mm}-${dd}`)  // Problem : "2022-8-21"

  // Populate 0 value to the string
  if (mm < 10) {
    mm = '0' + mm;
  }
  if (dd < 10) {
    dd = '0' + dd;
  }

  return `${yyyy}-${mm}-${dd}`; // Solved : 2022-01-21
};
