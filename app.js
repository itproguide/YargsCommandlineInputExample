console.log("welcome to ITProGuide");
const yg = require('yargs');
const commands =  require('./commands');

//console.log(JSON.parse(fs.readFileSync('./itemlist.json')));
//console.log(yg.argv._[0]);
const command =  yg.argv._[0];
const itemname = yg.argv.itemname;
const price = yg.argv.price;

if (command=="add")
{
commands.add(itemname,price);
}
else if(command == "remove")
{
    commands.remove(itemname);
}
else if(command == "print")
{
    commands.print();
}
