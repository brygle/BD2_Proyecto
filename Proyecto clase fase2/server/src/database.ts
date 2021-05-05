import { Client } from 'cassandra-driver';


const cliente = new Client({
    contactPoints: ['3.17.65.53'],
    //localDataCenter: 'datacenter1',
    keyspace: 'BASES'
});

export default cliente;

