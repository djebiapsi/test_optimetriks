import { faker } from '@faker-js/faker';

var arbre = []
for (let i = 0; i < 5; i++) {
        let obj = {}
    obj["name"] = faker.name.fullName()
    let childs = Math.floor(Math.random() * 2)
    var children = []
    for (let i = 0; i < childs; i++) {
        let child = {}
        child["name"] = faker.name.fullName()
        child["child"] = []
        children.push(child)
    }
    console.log(children)
    obj["children"] = children
    arbre.push(obj)
    
}

//console.log(arbre)