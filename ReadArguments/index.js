// name=your name

console.log(process.argv)

const nameArg = process.argv.slice(2)
console.log(nameArg)

const userName = nameArg[0].split("=")[1]
console.log(userName)