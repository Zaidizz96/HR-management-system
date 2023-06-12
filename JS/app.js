'use strict'
const employees = [];



function Employee(fullName, department, level, imageUrl) {
    this.employeeId = 0;
    this.fullName = fullName;
    this.department = department
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = 0;
    this.netSalary = 0;
    employees.push(this);
}

let employee1 = new Employee("Ghazi Samer", "Administration", "Senior", "./assets/male.jpg")
let employee2 = new Employee("Lana Ali", "Finance", "Senior", "./assets/female.jpg")
let employee3 = new Employee("Tamara Ayoub", "Marketing", "Senior", "./assets/female.jpg")
let employee4 = new Employee("Safi Walid", "Administration", "Mid-Senior", "./assets/male.jpg")
let employee5 = new Employee("Omar Zaid", "Development", "Senior", "./assets/male.jpg")
let employee6 = new Employee("Rana Saleh", "Development", "Junior", "./assets/female.jpg")
let employee7 = new Employee("Hadi Ahmad", "Finance", "Mid-Senior", "./assets/male.jpg")

const formElement = document.getElementById("formTag");
formElement.addEventListener("submit", eventHandler);

function eventHandler(event) {
    event.preventDefault();
    console.log(event);
    let Fname = event.target.fName.value;
    let empDepartment = event.target.dep.value;
    let empLevel = event.target.Lev.value;
    let empImg = event.target.imgU.value;

    let newEmployee = new Employee(Fname, empDepartment, empLevel, empImg);
    newEmployee.calculateSalary();
    newEmployee.renderEmployee();

}

Employee.prototype.generateID = function () {
    for (let x = 1; x < employees.length; x++) {
        employees[0].employeeId = 1000;
        employees[x].employeeId = 1000 + x;
    }
}

Employee.prototype.calculateSalary = function () {
    let min;
    let max;
    switch (this.level) {
        case "Senior":
            min = 1500;
            max = 2000;
            break;
        case "Mid-Senior":
            min = 1000;
            max = 1500;
            break;
        case "Junior":
            min = 500;
            max = 1000;
            break;
    }
    this.salary = (Math.floor(Math.random() * (max - min + 1) + min));
    this.netSalary = this.salary - this.salary * .075;
}

Employee.prototype.renderEmployee = function (i) {
   
    let cardElement = document.createElement("div");
    cardElement.className= "card"; 

    let subCardElement = document.createElement("div");
    subCardElement.className= "card-element"; 

    let imgEL = document.createElement("img");
    imgEL.src = this.imageUrl;
    imgEL.className="card-image";

    let detailsSubCardElement = document.createElement("div");
    detailsSubCardElement.className= "card-element"; 

    let labelElement = document.createElement("label");
    labelElement.className = "card-label";
    labelElement.textContent = "Name :" + this.fullName + " - ID :" + this.employeeId + 
    "  Department : " + this.department + " - level :" + this.level;
    detailsSubCardElement.appendChild(labelElement);

    subCardElement.appendChild(imgEL);
    cardElement.appendChild(subCardElement);
    cardElement.appendChild(detailsSubCardElement);
     
    document.getElementById("cardsId").appendChild(cardElement);
}   

for (let i = 0; i < employees.length; i++) {
    employees[i].calculateSalary();
    employees[i].generateID();
    employees[i].renderEmployee(i);

}
console.log(employees);




