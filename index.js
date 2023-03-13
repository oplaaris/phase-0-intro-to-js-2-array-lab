// Write your solution here!
beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

function destructivelyAppendCat(name){
  cats.push(name);
  return cats;
}
function destructivelyPrependCat(name){
  cats.unshift(name);
  return cats;
}
function destructivelyRemoveLastCat(name){
  cats.pop(name);
  return cats;
}function destructivelyRemoveFirstCat(name){
  cats.shift(name);
  return cats;
}
function appendCat(name){
  let newCats= [...cats, name];
  return newCats;
}
function prependCat(name){
  let newCats= [name, ...cats];
  return newCats;
}
function removeLastCat(){
  let newCats = cats.slice(0. -1);
  return newCats;
}
function removeFirstCat(){
  let newCats = cats.slice(1);
  return newCats;
}
