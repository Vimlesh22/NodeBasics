var Person = function(){
  this.firstName = "Vimlesh";
  this.lastName = "Kumar";
  this.course = "C-DAC";
  this.age = 23;
};

Person.prototype.setFirstName = function (firstName) {
  this.firstName = firstName;
  return this;
};

 Person.prototype.setLastName = function (lastName) {
  this.lastName = lastName;
  return this;
};

var pre = new Person();
pre.setFirstName("Siddesh").setLastName("Kubal");
console.log(pre.firstName+" "+pre.lastName);
