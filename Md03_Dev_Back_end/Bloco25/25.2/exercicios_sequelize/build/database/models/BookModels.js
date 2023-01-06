"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const AuthorModel_1 = __importDefault(require("./AuthorModel"));
class Books extends sequelize_1.Model {
}
Books.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: sequelize_1.STRING,
        allowNull: false
    },
    authorId: {
        type: sequelize_1.INTEGER,
        allowNull: false
    },
    genreId: {
        type: sequelize_1.INTEGER,
        allowNull: false
    }
}, {
    sequelize: _1.default,
    modelName: 'books',
    timestamps: false,
    underscored: true
});
Books.belongsTo(AuthorModel_1.default);
AuthorModel_1.default.hasMany(Books);
exports.default = Books;
