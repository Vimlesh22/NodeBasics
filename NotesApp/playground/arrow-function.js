var square = x => x*x;
var user= {
  name:'Vimlesh',
  sayHi:() => {
    console.log(`Hi. I am ${this.name}`);
  },
  sayHiAlt() {
    console.log(`Hi. I am ${this.name}`);
  }
};

// console.log(user.sayHi());
// function MyApp() {
//   this.name="hamid";
//   // function getName() {
//   //     return this.name;
//   // }
//   var getName = ()=>{
//     return this.name;
//   }
//   this.getName = function () {
//     return getName()
//   }
// }
// // console.log(new MyApp().getName());
