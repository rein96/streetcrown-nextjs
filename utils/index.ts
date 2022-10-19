/**
 * Get Today Date
 * @returns string | yyyy-mm-dd | Ex: 2022-01-21
 */
export const getTodayDate = (): string => {
  const today = new Date();
  let dd: number | string = today.getDate();
  let mm: number | string = today.getMonth() + 1; // January is 0 index | getMonth = 0-11 index
  const yyyy = today.getFullYear();
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

/** Ex: 14940 -> output: Rp 14.940 */
export const rupiahFormatter = (number: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumSignificantDigits: 10,
  }).format(number);
};
