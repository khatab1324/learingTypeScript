let x:number=5;
// x="hi"; //wrong
let now:Date=new Date();

// Array of string
let StringArray :string []=["hi","1"]

// literal obj
let obj :{x:number,y:number}={
    x:10 ,
    y:20
}

// function
let func:(i:number)=>void =(i:number)=>{
    return i
}
console.log(func(12));

// When to use annotations
// 1) Function that returns the 'any' type
// const json = '{"x": 10, "y": 20}';
// const coordinates = JSON.parse(json);
// console.log(coordinates); // {x: 10, y: 20};

//to fix that we will tell ts to what expact
const json = '{"x": 10, "y": 20}';
const coordinates:{x:number,y:number} = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};

// 2) When we declare a variable on one line
// and initalizate it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;//we declare in here to remove the warrning 

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}


function sum(n1:number,n2:number):string{//this last :string it what expact the function will return
    return n1+n2.toString()
}
console.log(sum(2,4))


function throwError():never{//this just when the function retrun just an error

    throw new Error();
}
const logWeather = ({
    date,
    weather
  }: {
    date: Date;
    weather: string;
  }): void => {
    console.log(date);
    console.log(weather);
  };
  
 
  const profile = {
    name1: 'alex',
    age: 20,
    coords: {
      lat: 0,
      lng: 15
    },
    setAge(age: number): void {
      this.age = age;
    }
  };
  
  const { age, name1 }: { age: number; name1: string } = profile;
  const {
    coords: { lat, lng }
  }: { coords: { lat: number; lng: number } } = profile;

  const arr=[1,"1"];

  const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
  };
  

  // Type alias
  type Drink = [string, boolean, number];
  
  const pepsi: Drink = ['brown', true, 40];
  const sprite: Drink = ['clear', true, 40];
  const tea: Drink = ['brown', false, 0];