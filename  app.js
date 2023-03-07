'use strict'
var employees = [];
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
function Employee(id, fullName, department, level, imageUrl) {
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.level = level ;
    this.salary= function(){
        if (this.level=="Junior") {
            
            this.salary = getRndInteger(500,1000) ; 
        } else { if (this.level=="Mid-Senior") {
            
            this.salary= getRndInteger(1000,1500) ; 
        } else { if (this.level=="Senior") {
           
            this.salary = getRndInteger(1500,2000) 
            
        }
            
        }
            
        }
    }
    this.salary()
    this.netSalary=this.salary * 0.925;
    employees.push(this) ;   
}
Employee.prototype.render= function(){
    document.write(`<div>Employee Name :${this.fullName} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Net Salary = ${this.netSalary}</div>`)}

    let ghazi = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "https://via.placeholder.com/150");
    let lana = new Employee(1001, "Lana Ali", "Finance", "Senior", "https://via.placeholder.com/150");
    let tamara = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "https://via.placeholder.com/150");
    let safi = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "https://via.placeholder.com/150");
    let omar = new Employee(1004, "Omar Zaid", "Development", "Senior", "https://via.placeholder.com/150");
    let rana = new Employee(1005, "Rana Saleh", "Development", "Junior", "https://via.placeholder.com/150");
    let hadi = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "https://via.placeholder.com/150");
  

for (let i = 0; i < employees.length; i++) {
    employees[i].render();}