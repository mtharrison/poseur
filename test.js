const Poseur = require('.');


const fn = async () => {

    const database = new Poseur.Db('wave');

    await database.connect();
    database.table(['card']);
    await database.establish({ card: {} });

    // database.card.changes(function (change) {

    //     console.log(JSON.stringify(change, null, 2));
    // });

};

fn();