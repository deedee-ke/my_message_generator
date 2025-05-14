const subjects = ["The universe", "Your dog", "A potato", "The sun", "A cat", "Your computer", "A tree", "A cloud", "A rock", "Your favorite book"];
const verbs = ["wants you to", "says to", "believes you should", "thinks you can", "hopes you will", "wishes you to", "encourages you to", "suggests you should", "advises you to", "urges you to"];
const messages = ["be happy", "try harder", "take a break", "eat more vegetables", "read more books", "go for a walk", "learn something new", "call your friend", "watch a movie", "listen to music"];

const getRandom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const subject = getRandom(subjects);
const verb = getRandom(verbs);  
const message = getRandom(messages);
const randomMessage = `${subject} ${verb} ${message}.`;

console.log(randomMessage);