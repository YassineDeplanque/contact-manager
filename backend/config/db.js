import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

export const connection = async () => {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    })

    try {
        const [results] = await connection.query(
            'SELECT * FROM `contacts`'
        );
        console.log(results);
    } catch (error) {
        console.log(error);
    }

    return connection;
}
    