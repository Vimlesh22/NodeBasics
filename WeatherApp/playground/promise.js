var asynAdd = (a,b) => {
  return new Promise((resolve,reject) =>{
    setTimeout(() => {
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a+b);
      }else {
        reject('Unable to Add....as argument msut be number');
      }
    },1500)

  })
}
asynAdd(8,7).then((res) => {
console.log('Result',res);
return asynAdd(res,33);
}).then((res) => {
  console.log('Should be ',res);
}).catch((errorMessage) => {
  console.log(errorMessage);
});
//
// var addPromise = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve('Hello it workred');
//     reject('It failed');
//   },1500)
//   //resolve('Hello it workred');
//   //reject('It failed');
// })
// addPromise.then((message) => {
//   console.log('Success',message);
// },(errorMessage) => {
//   console.log('Error',errorMessage);
// })
