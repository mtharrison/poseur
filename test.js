const Monsieur = require('.');


const fn = async () => {

    const database = new Monsieur.Db('develop', { host: 'localhost', port: 27017 });

    await database.connect();

    console.log('connected');

    database.table(['mytable']);

    console.log(database.mytable);

    await database.close();

    console.log('closed');
};

fn();