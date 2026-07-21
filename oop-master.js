const person ={
    firstName: 'prince',
    lastName: 'pal',
    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    },

    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
    person.fullName = 'prince sharma';


//getter is used to acess properties of an object
// setter is used to set or update the properties of an object


console.log(person.fullName);