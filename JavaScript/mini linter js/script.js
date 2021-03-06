let story = `Last weekend, I took literally the most beautiful bike ride 
of my life. The route is called "The 9W to Nyack" and it actually stretches 
all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s 
really an adventure from beginning to end! It is a 48 mile loop and it basically
 took me an entire day. I stopped at Riverbank State Park to take some extremely 
 artsy photos. It was a short stop, though, because I had a really long way left to go.
  After a quick photo op at the very popular Little Red Lighthouse, I began my trek across 
  the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! 
  I was already very tired by the time I got to the other side.  An hour later, I reached 
  Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  
  Something that was very surprising to me was that near the end of the route you actually 
  cross back into New York! At this point, you are very close to the end.`;

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually'];
let storyWords = (story.split(' '))


let betterWords = storyWords.filter(val => {
    return !unnecessaryWords.includes(val)
})


let reallyCount = 0
let basicallyCount = 0
let veryCount = 0

betterWords.forEach(value => {
    if (value === 'really') {
        return reallyCount += 1
    } else if (value === 'basically') {
        return basicallyCount += 1
    } else if (value === 'very') {
        return veryCount += 1
    }
})

let removeWords = storyWords.filter(val => {
    return !overusedWords.includes(val)
})



let sentCount = 0
storyWords.forEach(value => {
    if (value[value.length - 1] === '.' || value[value.length - 1] == '!') {
        return sentCount += 1;
    }
})


storyWords.sort();
var max = 0, result, freq = 0;
for (var i = 0; i < storyWords.length; i++) {
    if (storyWords[i] === storyWords[i + 1]) {
        freq++;
    }
    else {
        freq = 0;
    }
    if (freq > max) {
        result = storyWords[i];
        max = freq;
    }
    return result;
}





console.log(betterWords)
console.log('really present in array ' + reallyCount + ' times ')

console.log('basically present in array ' + basicallyCount + ' times ')

console.log('very present in array ' + veryCount + ' times ')


console.log(sentCount)

console.log(betterWords.join(' '))


console.log(removeWords)

console.log(result)







