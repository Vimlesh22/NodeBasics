function celebrityIDCreator(theCelebrities){
  var i;
  var uniqueID=100;
  for (i = 0; i < theCelebrities.length; i++) {
    theCelebrities[i]["id"]= function () {
      return uniqueID + i;
    }
  }
  return theCelebrities;
}
var actionCelebs= [{name:"vimlesh",id:0},{name:"anshul",id:0},{name:"siddhesh",id:0}];
var createIdForActionCelebs= celebrityIDCreator(actionCelebs);
var stalloneID=createIdForActionCelebs[2];
console.log(stalloneID.id());
