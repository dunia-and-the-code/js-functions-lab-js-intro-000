// write your code below!
function happyHolidays(string) {
  return "Happy holidays!";
}

function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`;
}


function happyHolidaysTo(holiday = 'Independence Day', name = 'you') {
  return `Happy ${holiday}, ${name}!`;
}
holiday("Independence Day");
name("you");

function holidayCountdown(holiday, days) {
  return `It's ${days} days until ${holiday}!`;
}
days(20);
holiday("Mother's Day");
