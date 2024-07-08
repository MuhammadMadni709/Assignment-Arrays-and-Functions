// Assignment 1: Building Your Friend List //
// type Friend = {firstName : string, lastName:string, id?:number}
// let people : {friends : Friend[]} = {friends : []}
// let friend1 : Friend = {firstName:"Maaz", lastName:"Ahmed", id:10}
// let friend2 : Friend = {firstName:"faizan", lastName:"siddiqe", id:11}
// let friend3 : Friend = {firstName:"arsalan", lastName:"khan", id:12}
// people.friends.push(friend1)
// people.friends.push(friend2)
// people.friends.push(friend3)
// console.log(people);
// Assignment 2:Manipulating an Array: Rearranging Words //
// const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"]
// scrambledArray.shift()
// scrambledArray.unshift("I")
// scrambledArray.pop()
// scrambledArray.splice(1,3)
// scrambledArray.splice(3,0, "student", "of")
// let response = scrambledArray.join(" ");
// console.log(response);
// Assignment 3: Company Product Catalog   ///
// type Products = {name:string,model:number,cost:number,quantity:number,}
// let inventory : Products [] = []
// let product1 : Products = {name: "Samsung", model: 2024, cost: 450000, quantity : 5}
// let product2 : Products = {name: "laptop", model: 2022, cost: 250000, quantity : 10}
// let product3 : Products = {name: "smartwatch", model: 2019, cost: 100000, quantity : 2}
// inventory.push(product1)
// inventory.push(product2)
// inventory.push(product3)
// console.log(inventory[2].quantity);
// Assignment 4: Student List Organizer //
// type Student = {name: string,seniorStudent: boolean,assignmentComplete:boolean,}
// let student1 : Student = {name: "M Madni", seniorStudent: true, assignmentComplete: true}
// let student2 : Student = {name: "M umar", seniorStudent: false, assignmentComplete: true}
// let student3 : Student = {name: "M fazil", seniorStudent: false, assignmentComplete: false}
// let student_1 = student1.seniorStudent && student1.assignmentComplete
// let student_2 = student2.seniorStudent && student2.assignmentComplete
// let student_3 = student3.seniorStudent && student3.assignmentComplete
// function students (){
//     if (student1.assignmentComplete && student1.seniorStudent === student_1){
//         console.log(student1);
//     }else if (student2.assignmentComplete && student2.seniorStudent === student_2){
//         console.log(student2);
//     }else{
//         console.log(student3);
//     }
// }
// students()
var arr = ["A", "B", "C", "D", "E", "F", "G"];
console.log(arr.indexOf("F")); //5
