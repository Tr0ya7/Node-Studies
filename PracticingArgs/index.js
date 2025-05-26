// external
import minimist from "minimist"
// internal
import sum from "./sum.js"

const args = minimist(process.argv.slice(2))
const a = parseInt(args['a'])   // --a=value
const b = parseInt(args['b'])   // --b=value

sum(a, b)