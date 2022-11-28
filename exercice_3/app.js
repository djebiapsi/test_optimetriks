import { faker } from '@faker-js/faker';
// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');
 
// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');
 
// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');

let nbr = Math.floor(Math.random() * 600)
let persons = []
for (let i = 0; i < nbr; i++) {
    let  obj = {}
    obj["name"] =  faker.name.fullName()
    obj["country"] = faker.address.country() 
    persons.push(obj);
    
}
// console.log(persons)
persons.groupToMap