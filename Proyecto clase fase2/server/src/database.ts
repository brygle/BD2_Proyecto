import { Client } from 'cassandra-driver';


const cliente = new Client({
    contactPoints: ['127.0.0.1'],
    localDataCenter: 'datacenter1',
    keyspace: 'bases'
});

export default cliente;

