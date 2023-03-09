'use strict'
var Employees = [];

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
  this.netSalary = this.salary * 0.925;
  Employees.push(this);   
}
 Employee.prototype.salary= function() {
   if (this.level=="Junior") {
     this.salary = getRndInteger(500, 1000); 
   } else if (this.level=="Mid-Senior") {
     this.salary = getRndInteger(1000, 1500);
   } else if (this.level=="Senior") {
     this.salary = getRndInteger(1500, 2000);
   }
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
  return card;
};

let ghazi = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "assets/Ghazi.jpg");
let lana = new Employee(1001, "Lana Ali", "Finance", "Senior", "assets/Lana.jpg");
let tamara = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "assets/Tamara.jpg");
let safi = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "assets/Safi.jpg");
let omar = new Employee(1004, "Omar Zaid", "Development", "Senior", "assets/Omar.jpg");
let rana = new Employee(1005, "Rana Saleh", "Development", "Junior", "assets/Rana.jpg");
let hadi = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "assets/Hadi.jpg");

const departments = {};
Employees.forEach((employee) => {
  if (!departments[employee.department]) {
    departments[employee.department] = [];
  }
  departments[employee.department].push(employee);
});

for (const department in departments) {
  const section = document.createElement('section');
  section.classList.add('department');
  
  const title = document.createElement('h2');
  title.textContent = department;
  section.appendChild(title);

  departments[department].forEach((employee) => {
    const card = employee.render();
    section.appendChild(card);
    document.body.appendChild(section);
  })}

  function generateEmployeeId() {
    let id = getRndInteger(1000, 10000);
    while (Employees.some(employee => employee.id === id)) {
      id = getRndInteger(1000, 10000);
    }
    return id;
  }
const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const id = generateEmployeeId();
  const fullName = form.elements['full-name'].value;
  const department = form.elements.department.value;
  const imageUrl= form.elements.imageurl.value
  const level = form.elements.level.value;
  
  const employee = new Employee(id, fullName, department, level, imageUrl);
  const departmentSection = document.querySelector(`section.department[data-department="${department}"]`);

  if (departmentSection) {
    const card = employee.render();
    departmentSection.appendChild(card);
  } else {
    const section = document.createElement('section');
    section.classList.add('department');
    section.setAttribute('data-department', department);
  
    const title = document.createElement('h2');
    title.textContent = department;
    section.appendChild(title);

    const card = employee.render();
    section.appendChild(card);
    document.body.appendChild(section);
  }
});