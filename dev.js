let projectName = process.argv[2]
let fs = require('fs')

fs.writeFileSync('./project.js', `exports.name = '${projectName}'`)

let exec = require('child_process').execSync;
exec('vue-cli-service serve', {stdio: 'inherit'});