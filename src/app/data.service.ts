// import { Injectable } from '@angular/core';
// import { last } from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {
//   recordDetails = [
//     { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', phone: '1234567890', address: '123 Main St' },
//     { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', phone: '9876543210', address: '456 Elm St' },
//     { id: 3, firstName: 'Robert', lastName: 'Brown', email: 'robert.brown@example.com', phone: '5551234567', address: '789 Oak St' },
//     { id: 4, firstName: 'Emily', lastName: 'Clark', email: 'emily.clark@example.com', phone: '2223334444', address: '101 Maple St' },
//     { id: 5, firstName: 'Michael', lastName: 'Davis', email: 'michael.davis@example.com', phone: '9998887777', address: '202 Pine St' },
//   ];
//   idGenerator=5;

//   constructor() { }
//   addEmployee(employee:any){
//     if(employee){
//       this.idGenerator++;
//       this.recordDetails.push({
//         id:this.idGenerator,
//         firstName:employee.firstName,
//         lastName:employee.lastName,
//         email:employee.email,
//         phone:employee.phone,
//         address:employee.address,  
//       })
//     }
//   }
//   updateEmployee(employee:any){
//     if(employee?.id){
//       let data:any = [];
//       this.recordDetails.forEach(d => {
//         if(d.id == employee.id){
//         data.push({
//           id:employee.id,
//           firstName:employee.firstName,
//           lastName:employee.lastName,
//           email:employee.email,
//           phone:employee.phone,
//           address:employee.address,

//         })
//         }
//         else {
//           data.push(d);
//         }
//       })
//       this.recordDetails=data;
//     }
//   }
// }
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  recordDetails = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', phone: '1234567890', address: '123 Main St' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', phone: '9876543210', address: '456 Elm St' },
    { id: 3, firstName: 'Robert', lastName: 'Brown', email: 'robert.brown@example.com', phone: '5551234567', address: '789 Oak St' },
    { id: 4, firstName: 'Emily', lastName: 'Clark', email: 'emily.clark@example.com', phone: '2223334444', address: '101 Maple St' },
    { id: 5, firstName: 'Michael', lastName: 'Davis', email: 'michael.davis@example.com', phone: '9998887777', address: '202 Pine St' },
  ];
  idGenerator = 5;

  constructor() { }

  addEmployee(employee: any) {
    if (employee) {
      this.idGenerator++;
      this.recordDetails.push({
        id: this.idGenerator,
        firstName: employee.firstName,
        lastName: employee.lastName,
        email: employee.email,
        phone: employee.phone,
        address: employee.address,
        
      });
    }
  }

  updateEmployee(employee: any) {
    if (employee?.id) {
      let data: any = [];
      this.recordDetails.forEach(d => {
        if (d.id == employee.id) {
          data.push({
            id: employee.id,
            firstName: employee.firstName,
            lastName: employee.lastName,
            email: employee.email,
            phone: employee.phone,
            address: employee.address,
          });
        } else {
          data.push(d);
        }
      });
      this.recordDetails = data;
    }
  }

  getEmployeeById(id: number): any {
    return this.recordDetails.find(employee => employee.id === id) || null;
  }
}
