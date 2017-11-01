// Test whether it actually works
const fs = require('fs')
const {execSync} = require('child_process')
const {basename} = require('path')
const chalk = require('chalk')

console.log(chalk.bold('\n ** Beginning tests ** \n\n'))

const files = fs.readdirSync(__dirname)
    .filter((filename) => { return filename.endsWith('.js') })
    .filter(filename => filename !== basename(__filename))
let passed = 0;

files.forEach(file => {
    const quineSourceCode = fs.readFileSync(file).toString().trim();
    const quine = execSync(`node ${file}`, {cwd: __dirname}).toString().trim();
    if (quine === quineSourceCode) {
        console.log(chalk.green('PASS: ') + file)
        passed++
    } else {
        console.log(chalk.red('FAIL: ') + file)
        console.log(quine, quineSourceCode)
    }
});

console.log(chalk.bold('\n\nResult: ') + `${passed} of ${files.length} passed, ${chalk.red(files.length - passed)} failed.`)