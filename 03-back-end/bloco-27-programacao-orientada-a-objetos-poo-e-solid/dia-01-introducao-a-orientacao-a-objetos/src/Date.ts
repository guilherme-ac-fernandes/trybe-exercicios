class NewDate {
  private _day: number;
  private _month: number;
  private _year: number;

  constructor(
    day: number,
    month: number,
    year: number
  ) {
    if (!NewDate.validateDate(day, month, year)) {
      this._day = 1;
      this._month = 1;
      this._year = 1900;
    } else {
      this._day = day;
      this._month = month;
      this._year = year;
    }
  }

  private static validateDate(
    day: number,
    month: number,
    year: number,
    ): boolean {
      const dateString = `${year}-${month}-${day}`;
    if (new Date(dateString).getDate() !== day) return false;
    return true;
  }

  get day(): number {
    return this._day;
  }

  set day(value: number) {
    this._day = value;
  }

  get month(): number {
    return this._month;
  }

  set month(value: number) {
    this._month = value;
  }

  get year(): number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
  }

  getMonthName(): string {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    return months[this.month - 1];
  }

  isLeapYear(): boolean {
    return this._year % 4 === 0;
  }

  compare(date: NewDate): number {
    const currentDateString = new Date(`${this.year}-${this.month}-${this.day}`);
    const dateString = new Date(`${date.year}-${date.month}-${date.day}`);

    if (currentDateString > dateString) return 1;
    if (currentDateString < dateString) return -1;
    return 0;
  }

  // Resolução proveniente do gabarito presente no course da Trybe
  // source: https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/62c97d81-c729-445d-9e9f-f636a5c24231/day/fcaf7bf1-52e1-48c5-86b8-916432bd415c/lesson/cc5ac329-4c17-421e-a0ac-d9eaee99e952
  format(formatting: string): string {
    const conditions: boolean[] = [
      (!formatting.match(/a{2,4}/g)), // verifica se possui o ano na formatação
      (!formatting.match(/m{2}/g) && !formatting.match(/M{1}/g)), // verifica se tem o mês na formatação
      (!formatting.match(/d{2}/g)), // verifica se tem o dia na formatação
    ];

    if (conditions.every((cond) => cond)) {
      throw new Error(`O formato passado é inválido: ${formatting}`);
    }

    const day = this.day > 9 ? this.day.toString() : `0${this.day.toString()}`;
    const month = this.month > 9 
      ? this.month.toString() 
      : `0${this.month.toString()}`;
    const year = this.year.toString();

    const dateFormatting = formatting
      .replace('dd', day)
      .replace('mm', month)
      .replace('M', this.getMonthName())
      .replace('aaaa', year)
      .replace('aa', year.substr(-2));

    return dateFormatting;
  }
}

const testDate = new NewDate(29, 1, 1989);
console.log(testDate);

console.log(testDate);
console.log('Dia: ', testDate.day);
console.log('Mês: ', testDate.month);
console.log('Mês por extenso: ', testDate.getMonthName());
console.log('Ano: ', testDate.year);
console.log('É ano bissexto: ', testDate.isLeapYear() ? 'Sim' : 'Não');
console.log(testDate.format('dd/mm/aaaa'));
console.log(testDate.format('dd-mm-aaaa'));
console.log(testDate.format('aaaa/mm/dd'));
console.log(testDate.format('aaaa-mm-dd'));
console.log(testDate.format('dd de M de aa'));
console.log(testDate.format('dd, M de aaaa'));


const otherDate = new NewDate(30, 1, 2021);
const compared = testDate.compare(otherDate);
const compareStates = ['anterior', 'igual', 'posterior'];
console.log(`A primeira data é ${compareStates[compared + 1]} a segunda.`);


// data inválida
const invalidDate = new NewDate(31, 2, 2021);
console.log('Teste data inválida: ', invalidDate);
// formato inválido
console.log(invalidDate.format('a m d'));
