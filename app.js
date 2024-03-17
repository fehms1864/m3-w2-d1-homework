const { MongoClient } = require('mongodb');

//Create Instance of MongoClient for mongodb
//name of data base is statsdb
var client = new MongoClient("mongodb://127.0.0.1:27017/statsdb");

//Connect to statsdb
client.connect()
.then(() => {

    /**
     * Task 1
     */
    // console.log('Connected Successfully & Database created!');
    // client.close();

    var dbo = client.db('statsdb');

    /**
     * Task 2
     */
    // dbo.createCollection('uscensus').then(function() {
    //     console.log("'uscensus' Collection Created");
    //     //Close the database connection
    //     client.close();
    // })

    /**
     * Task 3
     */
    // dbo.collection("uscensus").insertMany(stats).then(function(data) {
    //     console.log("Number of stat documents inserted: " + data.insertedCount);
    //     client.close();
    // })

    /**
     * Task 4
     */
    // var newEntries = [
    //     {
    //         'city': 'Pacoima', 
    //         'zip': '91331', 
    //         'state': 'CA', 
    //         'income': '60360',
    //         'age': '33'
    //     },
    //     {
    //         'city': 'Ketchikan', 
    //         'zip': '99950', 
    //         'state': 'AK', 
    //         'income': '00000',
    //         'age': '00'
    //     }
    // ]
    // dbo.collection('uscensus').insertMany(newEntries).then(function(entries) {
    //     console.log("Number of new documents inserted:" + entries.insertedCount);
    //     client.close();
    // })

    /**
     * Task 5
     */
    // var query = {city: "Corona", state: "NY"}
    // dbo.collection("uscensus").find(query)
    // .toArray()
    // .then(items => {
    //     console.log(`Successfully found the documents: ${items[0]}`);
    //     console.log(`The zip code for Corona, NY is: ${items[0].zip}`)
    //     client.close();
    // })

    /**
     * Task 6
     */
    // var query = {state: "CA"}
    // dbo.collection("uscensus").find(query)
    // .toArray()
    // .then(items => {
    //     console.log(`Successfully found ${items.length} documents.`);
    //     console.log(items)
    //     client.close();
    // })

    /**
     * Task 7
     */
    // var query = {state: "AK"}
    // var newvalues = {$set: {income: "38910", age: "46"}};
    // dbo.collection("uscensus").updateOne(query, newvalues)
    // .then(function(doc) {
    //     console.log("1 document updated");
    //     console.log(doc);
    //     client.close();
    // })

    /**
     * Task 8
     */
    // var mysort = {state: 1}
    // dbo.collection("uscensus").find()
    // .sort(mysort)
    // .toArray()
    // .then(items => {
    //     console.log(`Successfully sorted ${items.length} documents.`);
    //     console.log(items);
    //     client.close();
    // })

})
.catch(error => console.log('Failed to connect', error));

var stats =[
    {
        'city': 'San Juan', 
        'zip': '00926', 
        'state': 'PR', 
        'income': '34781',
        'age': '44'
    },
    {
        'city': 'Corona', 
        'zip': '11368', 
        'state': 'NY', 
        'income': '50797',
        'age': '32'
    },
    {
        'city': 'Chicago', 
        'zip': '60629', 
        'state': 'IL', 
        'income': '42019',
        'age': '31'
    },
    {
        'city': 'El Paso', 
        'zip': '79936', 
        'state': 'TX', 
        'income': '54692',
        'age': '31'
    },
    {
        'city': 'Los Angeles', 
        'zip': '90011', 
        'state': 'CA', 
        'income': '36954',
        'age': '28'
    },
    {
        'city': 'Norwalk', 
        'zip': '90650', 
        'state': 'CA', 
        'income': '66453',
        'age': '35'
    }
]