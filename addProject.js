let projectName = process.argv[2]
let fs = require('fs')
// 默认情况下，目标文件会被创建或覆盖。
fs.mkdirSync('./src/projects/'+projectName, { recursive: true }, (err) => {
    if (err) throw err;
});
fs.mkdir('./src/projects/'+projectName+'/assets', { recursive: true }, (err) => {
    if (err) throw err;
});
fs.mkdir('./src/projects/'+projectName+'/views', { recursive: true }, (err) => {
    if (err) throw err;
});
fs.copyFile('./public/index.html', './src/projects/'+projectName+'/index.html', (err) => {
    if (err) throw err;
});
fs.copyFile('./src/App.vue', './src/projects/'+projectName+'/App.vue', (err) => {
    if (err) throw err;
});
fs.copyFile('./src/main.js', './src/projects/'+projectName+'/main.js', (err) => {
    if (err) throw err;
});
fs.copyFile('./src/router.js', './src/projects/'+projectName+'/router.js', (err) => {
    if (err) throw err;
});
fs.copyFile('./src/store.js', './src/projects/'+projectName+'/store.js', (err) => {
    if (err) throw err;
});