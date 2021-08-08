function helpfn()
{
    console.log(`
    help command executed
    List of all commands
        node main.js tree "path"
        node main.js organise "path"
        node main.js help
        `);
}
// helpfn();

module.exports={
    helpfcn: helpfn,
}