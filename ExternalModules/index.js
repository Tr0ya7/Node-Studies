// --name=Your name

import minimist from "minimist"

const args = minimist(process.argv.slice(2))

console.log(args)

const name = args["name"]

console.log(name)