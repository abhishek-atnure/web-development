let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 67;

if (runnerAge > 18 && registeredEarly) {
    raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly) {
    console.log(`They will race at 9:30 AM and race number is ${raceNumber}`);
}
else if (runnerAge > 18 && !registeredEarly) {
    console.log(`they will race at 11:00 AM ${raceNumber} race number`)
}
else if (runnerAge < 18) {
    console.log(`Youth registrants run at 12:30 PM ${raceNumber} race number`);
}
else {
    console.log('People who are 18 year old, see the registration desk');
}