var Person = function(){
  this.firstName = "Vimlesh";
  this.lastName = "Kumar";
  this.course = "C-DAC";
  this.age = 23;

  this.setFirstName = function (firstName) {
    this.firstName = firstName;
    return this;
  };

   this.setLastName = function (lastName) {
    this.lastName = lastName;
    return this;
  };
};

var pre = new Person();
var object=Object.assign({},pre);
console.log(object);
object.setFirstName("Harish");
console.log(object);
