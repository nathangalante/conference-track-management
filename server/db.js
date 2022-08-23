const spicedPg = require("spiced-pg");
const db = spicedPg(
    process.env.DATABASE_URL ||
        `postgres:postgres:postgres@localhost:5432/sales-tax`
);

exports.getTalks = () => {
    return db.query(`SELECT * FROM talks`, []);
};
