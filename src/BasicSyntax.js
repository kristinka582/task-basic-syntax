let font_ar = [
    1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000, 4000, 5000, 9000,
    10000,
];
let font_rom = [
    'I',
    'IV',
    'V',
    'IX',
    'X',
    'XL',
    'L',
    'XC',
    'C',
    'CD',
    'D',
    'CM',
    'M',
    'M&#8577;',
    '&#8577;',
    '&#8577;&#8578;',
    '&#8578;',
];

export function romanToInteger(str) {
    let result = 0;
    let posit = 0;
    let n = font_ar.length - 1;
    while (n >= 0 && posit < str.length) {
        if (str.substr(posit, font_rom[n].length) == font_rom[n]) {
            result += font_ar[n];
            posit += font_rom[n].length;
        } else n--;
    }
    return result;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
}
