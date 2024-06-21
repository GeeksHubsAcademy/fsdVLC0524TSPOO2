"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("./database");
var User = /** @class */ (function () {
    // Constructor para asignar
    function User() {
        this._id = 0;
        this._name = "";
        this._email = "";
        this._password = "";
        this._isActive = true;
        this._roleId = 0;
    }
    Object.defineProperty(User.prototype, "id", {
        //Getters y setters de cada una de las propiedades encapsuladas y posteriormente asignadas
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "isActive", {
        get: function () {
            return this._isActive;
        },
        set: function (value) {
            this._isActive = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "roleId", {
        get: function () {
            return this._roleId;
        },
        set: function (value) {
            this._roleId = value;
        },
        enumerable: false,
        configurable: true
    });
    //Métodos estáticos QUE SE PUEDEN INVOCAR/EJECUTAR sin necesidad de haber instanciadol a clase previamente
    //C
    User.create = function (data) {
        var user = __assign({ id: User.idCounter++ }, data);
        database_1.usersDataSource.push(user);
        return data;
    };
    //R
    User.find = function () {
        return database_1.usersDataSource;
    };
    //R
    User.findById = function (id) {
        return database_1.usersDataSource.find(function (user) { return user.id === id; });
    };
    //U
    User.update = function (id, data) {
        var index = database_1.usersDataSource.findIndex(function (user) { return user.id === id; });
        if (index !== -1) {
            database_1.usersDataSource[index] = __assign(__assign({}, database_1.usersDataSource[index]), data);
            return database_1.usersDataSource[index];
        }
        else {
            return null;
        }
    };
    //D
    User.delete = function (id) {
        var index = database_1.usersDataSource.findIndex(function (user) { return user.id === id; });
        if (index !== -1) {
            database_1.usersDataSource.splice(index, 1);
            return true;
        }
        else {
            return false;
        }
    };
    User.idCounter = 1;
    return User;
}());
exports.default = User;
