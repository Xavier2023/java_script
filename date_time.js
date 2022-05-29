let val;

const today = new Date();
let birthday = new Date('03-15-1999 11:25:00');
birthday = new Date('March 15 1999');
birthday = new Date('03/15/1999');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(15);
birthday.setFullYear(1999);
birthday.setHours(5);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);