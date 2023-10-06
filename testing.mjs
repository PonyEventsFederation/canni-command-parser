import fs from "fs";
let json = JSON.stringify(process.env, null, "   ");

fs.writeFileSync("eetestingtesting", json);

console.log(json);
process.exit(1);
