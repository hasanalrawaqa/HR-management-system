'use strict'
var departments = JSON.parse(localStorage.getItem('departments')) || [];
var Employees = JSON.parse(localStorage.getItem('Employees')) || [];

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function Employee(id, fullName, department, level, imageUrl) {
  this.id = id;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageUrl = imageUrl;
  this.salary();
  this.netSalary = (this.salaryValue * 0.925).toFixed(2) + "JD";
  Employees.push(this);
  this.render();
}

Employee.prototype.salary = function() {
  if (this.level == "Junior") {
    this.salaryValue = getRndInteger(500, 1000);
  } else if (this.level == "Mid-Senior") {
    this.salaryValue = getRndInteger(1000, 1500);
  } else if (this.level == "Senior") {
    this.salaryValue = getRndInteger(1500, 2000);
  }
  return this.salaryValue;
}

Employee.prototype.render = function() {
  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.src = this.imageUrl;
  img.alt = `${this.fullName} image`;
  card.appendChild(img);

  const info = document.createElement('div');
  info.classList.add('info');

  const fullName = document.createElement('h2');
  fullName.textContent = this.fullName;
  info.appendChild(fullName);

  const department = document.createElement('p');
  department.textContent = `Department: ${this.department}`;
  info.appendChild(department);

  const level = document.createElement('p');
  level.textContent = `Level: ${this.level}`;
  info.appendChild(level);

  const id = document.createElement('p');
  id.textContent = `ID: ${this.id}`;
  info.appendChild(id);

  const salary = document.createElement('p');
  salary.textContent = `Net Salary: ${this.netSalary}`;
  info.appendChild(salary);

  card.appendChild(info);

  const section = document.querySelector(`section[data-department='${this.department}']`);

  if (section) {
    section.appendChild(card);
  } else {
    const section = document.createElement('section');
    section.classList.add('department');
    section.setAttribute('data-department', this.department);

    const title = document.createElement('h2');
    title.textContent = this.department;
    section.appendChild(title);

    section.appendChild(card);
    document.body.appendChild(section);
   

  }
  const departmentsStr = JSON.stringify(Employees);
  localStorage.setItem("departments", departmentsStr);
};

let ghazi = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "assets/Ghazi.jpg");
let lana = new Employee(1001, "Lana Ali", "Finance", "Senior", "assets/Lana.jpg");
let tamara = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "assets/Tamara.jpg");
let safi = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "assets/Safi.jpg");
let omar = new Employee(1004, "Omar Zaid", "Development", "Senior", "assets/Omar.jpg");
let rana = new Employee(1005, "Rana Saleh", "Development", "Junior", "assets/Rana.jpg");
let hadi = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "assets/Hadi.jpg");

function generateEmployeeId() {
  let id = getRndInteger(1000, 10000);
  while (Employees.some(employee => employee.id === id)) {
    id = getRndInteger(1000, 10000);
  }
  return id;
}


const form = document.getElementById('form');
const departmentSections = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const id = generateEmployeeId();
  const fullName = form.elements['full-name'].value;
  const department = form.elements.department.value;
  const imageUrl = form.elements.imageurl.value;
  const level = form.elements.level.value;
  
  const employee = new Employee(id, fullName, department, level, imageUrl);
  
  Employees = JSON.parse(localStorage.getItem('Employees')) || [];
  Employees.push(employee);
  localStorage.setItem('Employees', JSON.stringify(Employees));
  
 

});

window.addEventListener('DOMContentLoaded', () => {
  const storedEmployees = JSON.parse(localStorage.getItem('Employees')) || [];

  for (const employee of storedEmployees) {
   

    const card = new Employee(
      employee.id,
      employee.fullName,
      employee.department,
      employee.level,
      employee.imageUrl
    ).render();
    
    
  }
});
const administration = [];
  const Finance = [];
  const Marketing = [];
  const Development = [];
for (let i = 0; i < Employees.length; i++) {
  switch (Employees[i]['department']) { 
    case 'Administration':
      administration.push(Employees[i])
      break;
      case 'Finance':  
        Finance.push(Employees[i])
        break;
        case 'Marketing':
        Marketing.push(Employees[i]);
        break;
        case 'Development':
          Development.push(Employees[i]);
          break;
    default:
      break;
  }  
}
departmentSections.push(administration);
departmentSections.push(Finance);
departmentSections.push(Marketing);
departmentSections.push(Development);
console.log(departments)
console.log(departmentSections);

