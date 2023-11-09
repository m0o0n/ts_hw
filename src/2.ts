/*
  Ваше завдання полягатиме у створенні двох класів – Employee та Manager.

  Клас Employee повинен включати:

  властивість name, яка буде доступна всім.
  властивість department, яка буде доступна лише всередині класу Employee.
  salary, яке буде доступне лише всередині класу Employee та його підкласів.


  Клас Manager повинен бути підкласom класу Employee

  Необхідно реалізувати в класі Manager конструктор, який викликатиме конструктор суперкласу та збільшуватиме salary на 10000.

*/

class Employee {
  constructor(public name: string, protected department: string, private salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }

  increaseSelary(increase: number) {
    this.salary += increase
  }
}

class Manager extends Employee {
  // Реалізуйте конструктор та збільшіть salary на 10000
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary)
  }          
  increase(increase: number) {
    super.increaseSelary(increase)
  }

}
const manager = new Manager('Vlad', 'IT Support', 0)
manager.increase(10000)
export { };