function theBeatlesPlay(musician, instrument) {
  var newArray = [];

  for (let i = 0; i < musician.length;  i++) {
    newArray.push(`${musician[i]} plays ${instrument[i]}`);
}
return newArray;
}

function johnLennonFacts(facts) {

var i = 0;

while (i < facts.length) {

facts[i] = facts[i] + "!!!";

}

return facts;

}

function iLoveTheBeatles(number) {

var newArray = [];

var i = 0;

do {

i++;

newArray.push(“I love the Beatles!”);

} while (i < 15);
return newArray;
}
}
}
