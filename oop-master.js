const person ={
    firstName: 'prince',
    lastName: 'pal',
    fullName(){
        return `${person.firstName} ${person.lastName}`;
    }

}

console.log(person.fullName());