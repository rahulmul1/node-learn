const fs = require('fs')
const data = require('./data.json')
console.log(data.name);


fs.readFile('data.json', (err, data) => {
    console.log('start callback fn');
    if (err) return console.error(err);
    console.log(data.toString());
    console.log(data.name);
    console.log(JSON.parse(data).name);
});


const data1 = {
    name : 'rahul',
    ph : '9321'
}

fs.writeFile('writeData.json', JSON.stringify(data1), (err) => {
    console.log('start callback fn');
    if (err) return console.error(err);
    else console.log('writing finished');
})


