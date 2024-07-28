const chai = () => {
  let usernamem = "ankit"
  // console.log(this)
}

chai();


( (name) => {
      // console.log(`db is connected two ${name}`)
})('ankit')


const iceTeaPrice = 200;
// iceTeaPrice >= 100 ? console.log("tea") :  console.log("coffee")

 let score = 11;
 do{
  // console.log(`Score is ${score}`)
  score++;
 }while(score <= 10)

  let arr = [1,3,5,7,9]

  for (const ankit of arr) {
    // console.log(ankit)
    
  }

  const map = new Map()
  map.set('IN', "India")
  map.set('USA', "United state of America")

  // console.log(map)

  for(const [key, value] of map){
    // console.log(key, ':-', value);
  }


  let coding = ["Java", "cpp", "python"]

  coding.forEach(function (val){
    // console.log(val)
  })

coding.forEach((item) => {
  // console.log(item)
})

function printMe(item){
  // console.log(item)
}

coding.forEach(printMe)


const myNums = [1,2,3,4,5]

const newNums = myNums.filter((num) => num > 2)

// console.log(newNums)


const myNumbers = [1,2,3,4,5,6,7,8,9]

myNumbers.map((num) => num + 10)


const myNum = [1,3,5,7]


const myTotal = myNum.reduce()

