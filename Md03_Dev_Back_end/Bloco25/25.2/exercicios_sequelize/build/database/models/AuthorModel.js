"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Authors extends sequelize_1.Model {
}
Authors.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.STRING,
        allowNull: false
    }
}, {
    sequelize: _1.default,
    modelName: 'authors',
    timestamps: false,
    underscored: true
});
exports.default = Authors;
