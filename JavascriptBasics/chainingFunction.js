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
pre.setFirstName("Siddesh").setLastName("Kubal");
console.log(pre.firstName+" "+pre.lastName);
console.log(object);
