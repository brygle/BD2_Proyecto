"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cassandra_driver_1 = require("cassandra-driver");
const cliente = new cassandra_driver_1.Client({
    contactPoints: ['3.17.65.53'],
    //localDataCenter: 'datacenter1',
    keyspace: 'BASES'
});
exports.default = cliente;
