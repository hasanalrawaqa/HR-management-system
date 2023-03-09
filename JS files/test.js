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
  this.level = level;
  
  this.salary = function() {
    if (this.level=="Junior") {
      this.salary = getRndInteger(500, 1000); 
    } else if (this.level=="Mid-Senior") {
      this.salary = getRndInteger(1000, 1500);
    } else if (this.level=="Senior") {
      this.salary = getRndInteger(1500, 2000);
    }
  };
  
  this.salary();
  this.netSalary = this.salary * 0.925;
  Employees.push(this);   
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

let ghazi = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "https://via.placeholder.com/150");
let lana = new Employee(1001, "Lana Ali", "Finance", "Senior", "https://via.placeholder.com/150");
let tamara = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "https://via.placeholder.com/150");
let safi = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "https://via.placeholder.com/150");
let omar = new Employee(1004, "Omar Zaid", "Development", "Senior", "https://via.placeholder.com/150");
let rana = new Employee(1005, "Rana Saleh", "Development", "Junior", "https://via.placeholder.com/150");
let hadi = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "https://via.placeholder.com/150");

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