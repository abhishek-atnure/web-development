
function dogYears(humanAge) {
    let myAge = humanAge;
    let earlyYears = 2;//earlyyears=2
    earlyYears *= 10.5;
    let laterYears = myAge - 2;//substracted 2 from human age
    laterYears *= 4;
    let myAgeInDogYears = laterYears + earlyYears;
    let myName = 'ABHISHEK'.toLowerCase();
    console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);
    console.log('abhishek'.toLowerCase())
};

dogYears(24)
