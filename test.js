const Poseur = require('.');


const fn = async () => {

    const database = new Poseur.Db('test');

    await database.connect();
    database.table(['example']);
    await database.establish({ example: {} });

    // database.card.changes(function (change) {

    //     console.log(JSON.stringify(change, null, 2));
    // });

};

fn();