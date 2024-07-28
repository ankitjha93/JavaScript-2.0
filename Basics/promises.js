const promiseOne = new Promise(function(resolve, reject){
     setTimeout(function(){
      // console.log("Async task is complete")
      resolve();
      
     },1000)
})

promiseOne.then(function(){
  // console.log("promise consumed")
})


const promiseTwo = new Promise(function(resolve, reject){
  setTimeout(function(){
  //  console.log("Async task is complete")
   resolve({username : "ankit", password : "123"});
   
  },1000)
})

promiseTwo.then(function(user){
console.log(user)
})


const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = false;
    if(!error){
      resolve({username : "ankit", email : "ankit@gmail.com"});
   
    }else{
      reject('error : something went wrong')
    }
  
  },1000)
})

promiseThree.then((user) => {
  console.log(user);
  return user.username;
}).then((username) => {
  console.log(username)
}).catch((err) => {
  console.log(err)
}).finally(() => console.log("resolve or rejected the issue"))


const promiseFive = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = false;
    if(!error){
      resolve({username : "JavaScript", email : "ankit@gmail.com"});
   
    }else{
      reject('error : JS went wrong')
    }
  
  },1000)
})


// async function consumePromiseFive(){
//           try {
//               const response = await promiseFive
//               console.log(response)
//           } catch (error) {
//             console.log(error)
//           }
// }

// consumePromiseFive()

async function getAllUsers(){
try {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
} catch (error) {
  
}
}


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))