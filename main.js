var output = '';
var students = ["Ben","Alex","Keith","Ethan","Dominic"];
var GPAs = [9,6,8,4,6];

//using return functions

//takes an array and returns the index of the first instance of "findME"
function search(array,findMe){
  for(var i = 0; i<array.length;i++){
    if (array[i]===findMe)
      return i;
  }
}
function findGPA(student){
  var index = search(students,student);
  return GPAs[index];
}
var temp = findGPA("Keith");
console.log("Keith's GPA is:",temp);

//using console.log
function searchLog(array,findMe){
  for(var i = 0; i<array.length;i++){
    if(array[i]===findMe)
      console.log(findMe + " is at index "+i);
  }
}

function findGPALog(student){
  for(var i = 0; i < students.length; i++){
    if(students[i]===student){
      console.log(student+"'s GPA is "+students[i]);
    }
  }
}

var temp = findGPALog("Keith");
console.log("Keith's GPA is:",temp);
