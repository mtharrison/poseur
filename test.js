const Monsieur = require('.');


const fn = async () => {

    const database = new Monsieur.Db('develop', { host: 'localhost', port: 27017 });

    await database.connect();

    console.log('connected');

    const collection = database.db.collection('test');

    collection.insertMany([
        {a : 1}, {a : 2}, {a : 3}
      ], function(err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
      });

    await database.close();

    console.log('closed');
};

fn();