// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { ManagerUserComponent } from './manager-user.component';

// describe('ManagerUserComponent', () => {
//   let component: ManagerUserComponent;
//   let fixture: ComponentFixture<ManagerUserComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ManagerUserComponent]
//     })
//     .compileComponents();
    
//     fixture = TestBed.createComponent(ManagerUserComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Required for template-driven forms
import { ManagerUserComponent } from './manager-user.component';

describe('ManageUsersComponent', () => {
  let component: ManagerUserComponent;
  let fixture: ComponentFixture<ManagerUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagerUserComponent], // Declare the component
      imports: [FormsModule], // Import FormsModule for form handling
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerUserComponent); // Create the component instance
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger the component's lifecycle
  });

  // Test to ensure the component is created
  it('should create', () => {
    expect(component).toBeTruthy(); // Test if the component is created successfully
  });

  // Test to check if users array is initialized on ngOnInit
  it('should initialize users array on ngOnInit', () => {
    const mockUsers = [
      { firstName: 'John', lastName: 'Doe', address: '123 Main St', phone: '1234567890' },
    ];

    // Mock localStorage methods
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(mockUsers));

    component.ngOnInit(); // Call ngOnInit to load users

    expect(component.users).toEqual(mockUsers); // Verify that users are loaded correctly
  });

  // Test to add a new user on form submission
  it('should add a new user on form submission', () => {
    const mockForm = {
      valid: true,
      value: {
        firstName: 'Jane',
        lastName: 'Smith',
        address: '456 Elm St',
        phone: '9876543210',
      },
    };

    // Mock localStorage methods to handle setItem (storing users in localStorage)
    spyOn(localStorage, 'setItem'); // Mocking localStorage.setItem to track its call

    component.onSubmit(mockForm); // Call the onSubmit method

    expect(component.users.length).toBe(1); // Verify user is added to the array
    expect(component.users[0]).toEqual(mockForm.value); // Verify added user details
    expect(localStorage.setItem).toHaveBeenCalledWith('users', JSON.stringify([mockForm.value])); // Check if setItem is called correctly
  });

  // Test to edit an existing user
  it('should edit an existing user', () => {
    const user = { firstName: 'John', lastName: 'Doe', address: '123 Main St', phone: '1234567890' };
    component.users = [user]; // Assign a user to the users array
    spyOn(window, 'prompt').and.returnValue('Updated Name'); // Mock prompt for editing
    component.editUser(user); // Call the editUser method
    expect(user.firstName).toBe('Updated Name'); // Verify the user's first name is updated
  });

  // Test to delete a user
  it('should delete a user', () => {
    const user = { firstName: 'John', lastName: 'Doe', address: '123 Main St', phone: '1234567890' };
    component.users = [user]; // Assign a user to the users array
    spyOn(window, 'confirm').and.returnValue(true); // Mock confirmation dialog
    spyOn(localStorage, 'setItem'); // Mock localStorage.setItem for removal

    component.deleteUser(user); // Call the deleteUser method

    expect(component.users.length).toBe(0); // Verify the user is removed from the array
    expect(localStorage.setItem).toHaveBeenCalledWith('users', JSON.stringify([])); // Verify setItem is called with an empty array
  });
});
