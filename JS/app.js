'use strict'
const employees = [];
function Employee(employeeId, fullName, department, level, imageUrl) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = 0;
    this.netSalary = 0;
    employees.push(this);
}

let employee1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "./asset/home/zaid/HR-management-system/assets/employee-engagement-tips-for-administrative-professional - Copy.jpg")
let employee2 = new Employee(1001, "Lana Ali", "Finance", "Senior", "./asset/home/zaid/HR-management-system/assets/images - Copy.jpg")
let employee3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "./asset/home/zaid/HR-management-system/assets/blog-employee-development-cycle - Copy.png")
let employee4 = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "./asset/home/zaid/HR-management-system/assets/download - Copy.jpg")
let employee5 = new Employee(1004, "Omar Zaid", "Development", "Senior", "./asset/home/zaid/HR-management-system/assets/iStock-1179798706 - Copy.jpg")
let employee6 = new Employee(1005, "Rana Saleh", "Development", "Junior", "./asset/home/zaid/HR-management-system/assets/images (1) - Copy.jpg")
let employee7 = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "./asset//home/zaid/HR-management-system/assets/download (1) - Copy.jpg")


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

Employee.prototype.renderEmployee = function () {
   
    document.getElementById("tbodyId").innerHTML += "<tr><td>"+this.fullName+"</td><td>"+this.netSalary+"</td></tr>";
}

for (let i = 0; i < employees.length; i++) {
    employees[i].calculateSalary();   
    employees[i].renderEmployee(); 
}


