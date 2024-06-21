"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user");
// Create new users
// -----------------------------------------------------------------------------
var adminUser = user_1.default.create({
    name: "Administrator",
    email: "admin@example.com",
    password: "admin123",
    isActive: true,
    roleId: 1,
});
var numberOfNewUsers = 10;
for (var i = 1; i <= numberOfNewUsers; i++) {
    user_1.default.create({
        name: "User".concat(i + 1),
        email: "user".concat(i + 1, "@example.com"),
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
var deleteResults = user_1.default.delete(400);
if (deleteResults == true) {
    console.log("Delete successful");
}
else {
    console.log("Failed to delete");
}
// Update user by id
// -----------------------------------------------------------------------------
var updatedUser = user_1.default.update(8, {
    name: "John",
    email: "john@example.com",
    password: "lamborghini1234"
});
if (updatedUser) {
    console.log("Updated successfully");
}
else {
    console.log("Failed to update");
}
// Get all users
// -----------------------------------------------------------------------------
// const users = User.find();
// console.log(users);
