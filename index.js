const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is the path of the macaroon file you wish to use with Zeus? ', (macaroonPath) => {
    const macaroonHex = fs.readFileSync(macaroonPath).toString('hex');

    console.log(`Your hex-formatted macaroon is: ${macaroonHex }`);

    rl.close();
});
