// Objects - 12/08/21 -  /////

// Exercise 1: ///

// const person = {
//     firstName: "Wase",
//     lastName: "Mekonen",
//     age: 28,
//     eyeColor: "Brown",
//     fullName: function(){
//        return  this.firstName+" "+this.lastName
//     },
//     yearOfbirth: function(){
//         return 2021-this.age
//     },
// }

// person.age=29;
// person.eyeColor = "Black"

// console.log("Full Name: "+person.fullName());
// console.log("Year of birth is: "+person.yearOfbirth());
// console.log("Color Eyes: "+person.eyeColor);

// Exercise 2: ///

const student= {
    firstName: "Wase",
    lastName: "Mekonen",
    telephone: "0548392293",
    mail: "Mekonen.wase@gmail.com",
    grades: [89,90,100,70,85,98,0,100],
    fullName: function(){
        return this.firstName+" "+this.lastName;
    },
    avgOfGrades : function(){
        let sum=0;
        for(let i = 0; i<this.grades.length; i++){
            sum+=this.grades[i];
        }
        return sum/this.grades.length;

    },
    minStudentGrade: function(){
        let minOfGrades = this.grades[0];
        for(let i=1; i< this.grades.length; i++){
            if(this.grades[i] <= minOfGrades){
                minOfGrades=this.grades[i];
            }
        }
        return minOfGrades;
    }

};

// A: ///

console.log(student.firstName);
console.log(student.lastName);
console.log(student.telephone);
console.log(student.mail);
console.log(student.grades);
console.log("fullNmae: "+student.fullName());
console.log("averge grade is : "+student.avgOfGrades());
console.log("the min grade is : "+student.minStudentGrade());




































