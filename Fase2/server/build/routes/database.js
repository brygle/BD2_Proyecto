"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cassandra_driver_1 = __importDefault(require("cassandra-driver"));
const client = new cassandra_driver_1.default({
    contactPoints: ['3.17.65.53'],
    localDataCenter: 'datacenter1',
    keypace: 'BASES'
});
exports.default = client;
