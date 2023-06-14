'use strict'

let allEmployees = JSON.parse(localStorage.getItem("employee"));

let departmentData = [];



departmentData.push(getDepartmentObj("Administration"));
departmentData.push(getDepartmentObj("Marketing"));
departmentData.push(getDepartmentObj("Development"));
departmentData.push(getDepartmentObj("Finance"));

console.log(departmentData);

function getDepartmentObj(depName) {
    let empNum = 0;
    let totalSalary = 0;
    for (let i = 0; i < allEmployees.length; i++) {
        if (allEmployees[i].department === depName) {
            empNum += 1;
            totalSalary = totalSalary + allEmployees[i].netSalary;
        }
    }
    return { "empNum": empNum, "salaryAvg": totalSalary / empNum, depName, totalSalary }
}


let tBodyElement = document.getElementById("tbodyID");

for (let i = 0; i < departmentData.length; i++) {
    let trEl = document.createElement("tr");
    let tdEl1 = document.createElement("td");
    let tdEl2 = document.createElement("td");
    let tdEl3 = document.createElement("td");
    let tdEl4 = document.createElement("td");
    
    trEl.id = "trID";
    tdEl1.textContent = departmentData[i].depName;
    tdEl2.textContent = departmentData[i].empNum;
    tdEl3.textContent = departmentData[i].totalSalary;
    tdEl4.textContent = departmentData[i].salaryAvg;
    
    tdEl1.className = "tdClass";
    tdEl2.className = "tdClass";
    tdEl3.className = "tdClass";
    tdEl4.className = "tdClass";

   
    trEl.appendChild(tdEl1);
    trEl.appendChild(tdEl2);
    trEl.appendChild(tdEl3 );
    trEl.appendChild(tdEl4);

    tBodyElement.appendChild(trEl);
} 
let tableElement = document.getElementById("tableTag");
let tFootElement = document.createElement("tfoot");
tFootElement.id = "tFootID"

let tdFooterElement1 = document.createElement("td");
let tdFooterElement2 = document.createElement("td");
let tdFooterElement3 = document.createElement("td");
let tdFooterElement4 = document.createElement("td");

tdFooterElement1.className="tdClass";
tdFooterElement2.className="tdClass";
tdFooterElement3.className="tdClass";
tdFooterElement4.className="tdClass";

let sumTotalSalary = 0;
let sumAvgSalary = 0;
let sumNumEmp =0;
for(let i =0 ; i < departmentData.length ; i++){
    sumTotalSalary += departmentData[i].totalSalary;
    sumAvgSalary += departmentData[i].salaryAvg;
    sumNumEmp += departmentData[i].empNum;
}

tdFooterElement1.textContent = "Total";
tdFooterElement2.textContent = sumNumEmp;
tdFooterElement3.textContent = sumTotalSalary;
tdFooterElement4.textContent = sumAvgSalary;


tFootElement.appendChild(tdFooterElement1);
tFootElement.appendChild(tdFooterElement2);
tFootElement.appendChild(tdFooterElement3);
tFootElement.appendChild(tdFooterElement4);
tableElement.appendChild(tFootElement);
