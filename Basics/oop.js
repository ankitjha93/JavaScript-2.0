// const user = {
//    username : "ankit",
//    isSignIn : true,


//    getUserDetails : function(){
//     console.log(" got the user details")
//     console.log(`Username : ${this.username}`)
//    }
// }

// console.log(user.getUserDetails())
// console.log(user.username)

// function createUser(){
    
// // }

// class User {
//      constructor(username, email, password){
//       this.username = username;
//       this.email = email;
//       this.password = password;
//      }

//      encryptPassword(){
//       return `${this.password} abc`
//      }
// }

const descriptors = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptors)

const chai = {
    name : 'ginger chai',
    price : 250,
    isAvailable : true,

    orderChai : function(){
      console.log('chai nhi bani')
    }
}

Object.defineProperty(chai, 'name' ,{
  // writable : false,
  enumerable : false,
})



console.log(Object.getOwnPropertyDescriptor(chai, 'name'))


for (let [key,value] of Object.entries(chai)) {
  if(typeof value !== 'function'){
   console.log(`${key} : ${value}`)
  }
}