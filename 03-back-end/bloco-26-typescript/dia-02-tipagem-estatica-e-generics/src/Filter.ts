// Resolução baseada no gabarito presente no course da Trybe
// source: https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/4e3b7d3a-94a1-4fce-9545-0f2b04f8ccd9/day/55580b57-6754-49bc-83bf-465967e0d2a1/lesson/8d531efb-efb4-4bc6-91fc-e7c38de7423b/solution

type callbackFilter<T> = (value: T, index?: number, array?: Array<T>) => boolean;

function myFilter<T>(array: T[], callback: callbackFilter<T>): T[] {
  const newArray: T[] = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// Forma simplicada em apenas uma linha com number
console.log(myFilter<number>([1, 2, 3], (item) => item < 3 ));

// Forma destrinchada com number
const arrayNumber: number[] = [1, 2, 3];
const removeItemThree = (item: number) => item < 3;
const newArrayNumber = myFilter<number>(arrayNumber, removeItemThree);
console.table([arrayNumber, newArrayNumber]);

// Forma simplificada com string
console.log(myFilter<string>(['a', 'b', 'c'], (item) => item !== 'a' ));

export default myFilter;
