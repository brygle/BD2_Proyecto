"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cassandra_driver_1 = require("cassandra-driver");
const cliente = new cassandra_driver_1.Client({
    contactPoints: ['127.0.0.1'],
    localDataCenter: 'datacenter1',
    keyspace: 'bases'
});
exports.default = cliente;
