const numbers =  new Array(1,2,3,4,5);
// console.log(numbers);

// console.log(numbers[2]);

// let Names = ['Pruthvi', 'Kushal','Yeshwanth', 'vishal'];
// console.log(Names);
// console.log(Names[2]);

// Names.push('sai kiran');

// console.log(Names);
// Names.unshift('Tarun');

// console.log(Names);

// Names.pop();
// console.log(Names);

// Names[1] = 'Arun';
// console.log(Names);

// console.log('Pruthvi');
// let name1 = 'Pruthvi Raj';

// console.log(name1.substring(8,11).toUpperCase());


// console.log(name1);
// console.log(name1.length);
// let NameArr = name1.split(' ');
// let name2 = name1.toUpperCase();
// console.log(name2);
// // console.log(NameArr);

// // console.log(NameArr[0]);






// class Pruthvi {
//      constructor(fullname,birthyear){
//         this.fullname=fullname;
//         this.birthyear=birthyear;
//     }
// }

// class Raj extends Pruthvi{
//     constructor(fullname, birthyear, course){
//         super(fullname, birthyear);
//         this.course = course;
//     }

// }

// const Student = new Raj('Kushal', 1997, 'CSE');
// console.log(Student);


const pruthvi = {
    fullName: 'Pruthvi Raj',
    Designation: 'Software',
    Age: 27,
    Hobbies: ['Box cricket','Movies','Social Media'],
    address: {
        Street: '7-2-49/A/B',
        City: 'Hyderabad',
        state: 'Telanagana',
    } 
   
}

// console.log(pruthvi.fullName);
// console.log(pruthvi.Designation);
// console.log(pruthvi.address.City);
// console.log(pruthvi.Hobbies);
// console.log(pruthvi.Hobbies[1]);


// pruthvi.Email = 'pruthvi.ch99@gmail.com';

// console.log(pruthvi);


const Employees =[
    {
        id:1,
        Name: 'Pruthvi Raj',
        Designation: 'MERN-Stack'
    },
    {
        id:2,
        Name: 'Kushal Pandra',
        Designation: 'SalesForce'
    },
    {
        id:3,
        Name: 'Sai kiran',
        Designation: 'Dev-Ops'
    },
    {
        id:4,
        Name: 'Vishal Reddy',
        Designation: 'Tester'
    }

]

console.log(Employees);
// console.log(`My Name is ${Employees[0].Name} and my Designation is ${Employees[0].Designation}.`);
// console.log(`My Name is ${Employees[1].Name} and my Designation is ${Employees[1].Designation}.`);
// console.log(`My Name is ${Employees[2].Name} and my Designation is ${Employees[2].Designation}.`);
// console.log(`My Name is ${Employees[3].Name} and my Designation is ${Employees[3].Designation}.`);

Employees[0].Email = 'pruthvi.ch99@gmail.com';

console.log(Employees[0]);

console.log(Employees[1]);

console.log(Employees[2]);

Employees[1].Email = 'pandra.kushal@gmail.com';

console.log(Employees[1]);

const EmployeeData = JSON.stringify(Employees);
// console.log(EmployeeData);
console.log(typeof EmployeeData);
