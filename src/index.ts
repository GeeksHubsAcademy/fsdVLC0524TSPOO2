import User from "./user";


// Create new users
// -----------------------------------------------------------------------------
const adminUser = User.create({
    name: "Administrator",
    email: "admin@example.com",
    password: "admin123",
    isActive: true,
    roleId: 1,
 });
 
 const numberOfNewUsers = 10;
 for (let i = 1; i <= numberOfNewUsers; i++) {
    User.create({
       name: `User${i + 1}`,
       email: `user${i + 1}@example.com`,
       password: "password123",
       isActive: true,
       roleId: 2,
    });
 }
 
 // Get all users
 // -----------------------------------------------------------------------------
 
 // const users = User.find();
 // console.log(users);
 
 // Get user by id
 // -----------------------------------------------------------------------------
 // const user = User.findById(4);
 // console.log(user);
 
 // Delete user by id
 // -----------------------------------------------------------------------------
 
 const deleteResults = User.delete(400);
 if (deleteResults == true) {
    console.log("Delete successful");
 } else {
    console.log("Failed to delete");
 }
 
 // Update user by id
 // -----------------------------------------------------------------------------
 
 const updatedUser = User.update(8, {
    name: "John",
    email: "john@example.com",
    password: "lamborghini1234"
 });
 
 if (updatedUser) {
    console.log("Updated successfully");
 } else {
    console.log("Failed to update");
 }
 
 // Get all users
 // -----------------------------------------------------------------------------
 
 // const users = User.find();
 // console.log(users);
 