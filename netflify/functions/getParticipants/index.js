
import { MongoClient } from 'mongodb';

const DB_URL = process.env['DB_URL'];
const dbInstance = new MongoClient(DB_URL);

async function getParticipants() {
    await dbInstance.connect();
    let participants = await dbInstance.db('students').collection('participants').find().toArray();

    return {
        statusCode: 200,
        "body": participants
    }
}

exports.main = getParticipants;
