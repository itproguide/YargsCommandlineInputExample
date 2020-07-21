const fs = require('fs');
const itemList =  require('./itemList')

const add = (itemname,price)=>{
const itemlist = JSON.parse(fs.readFileSync('./itemlist.json'));
const index = (itemlist.findIndex((x)=>x.itemname==itemname))
if(index == -1 )
{    
    itemlist.push({"itemname":itemname, "price":price});
    console.log(itemlist);
}
else{
    itemlist[index].price +=price;
    console.log(itemlist);
}

fs.writeFileSync("itemList.json", JSON.stringify(itemlist));
}

const remove = (itemname)=>{
   const itemlist = JSON.parse(fs.readFileSync('./itemlist.json'));
   const filteredlist = (itemlist.filter((x)=>x.itemname !== itemname))
    console.log(filteredlist);
    fs.writeFileSync("itemlist.json", JSON.stringify(filteredlist));

}

const print = ()=>{
    const itemlist = JSON.parse(fs.readFileSync('./itemlist.json'));
    console.log(itemlist);

}
module.exports = {
    add,
    remove,
    print
}