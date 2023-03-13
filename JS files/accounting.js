// accounting.js

// get department and employee data from local storage
const departments = JSON.parse(localStorage.getItem("departments")) || [];
console.log(departments)
// function to calculate the total salary of a department
function getTotalSalary(department) {
  return department.employees.reduce((acc, curr) => acc + curr.salary, 0);
}

// function to calculate the average salary of a department
function getAvgSalary(department) {
  const totalSalary = getTotalSalary(department);
  return totalSalary / department.employees.length;
}

// function to render a department row in the table
function renderDepartmentRow(department) {
  const departmentRow = document.createElement("tr");

  // department name
  const nameCell = document.createElement("td");
  nameCell.textContent = department.name;
  departmentRow.appendChild(nameCell);

  // number of employees
  const numEmployeesCell = document.createElement("td");
  numEmployeesCell.textContent = department.employees.length;
  departmentRow.appendChild(numEmployeesCell);

  // total salary
  const totalSalaryCell = document.createElement("td");
  totalSalaryCell.textContent = getTotalSalary(department);
  departmentRow.appendChild(totalSalaryCell);

  // average salary
  const avgSalaryCell = document.createElement("td");
  avgSalaryCell.textContent = getAvgSalary(department);
  departmentRow.appendChild(avgSalaryCell);

  return departmentRow;
}

// function to render the department table
function renderDepartmentTable() {
  const departmentTableBody = document.querySelector("#department-table tbody");
  

  let totalEmployees = 0;
  let totalSalary = 0;

  for (const department of departments) {
    const departmentRow = renderDepartmentRow(department);
    departmentTableBody.appendChild(departmentRow);

    totalEmployees += department.employees.length;
    totalSalary += getTotalSalary(department);
  }

  // update total employee count
  const totalEmployeesCell = document.querySelector("#total-employees");
  totalEmployeesCell.textContent = totalEmployees;

  // update total salary
  const totalSalaryCell = document.querySelector("#total-salary");
  totalSalaryCell.textContent = totalSalary;

  // update average salary
  const avgSalaryCell = document.querySelector("#avg-salary");
  avgSalaryCell.textContent = totalSalary / totalEmployees;
}

// render the department table on page load
renderDepartmentTable();
