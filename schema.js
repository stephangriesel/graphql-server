const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

// Data
const customers = [
    {id:'1', name:'John Doe', email:'jdoe@gmail.com', age:35},
    {id:'2', name:'Frikkie Bas', email:'frik@gmail.com', age:15},
    {id:'3', name:'Koos Wortel', email:'wortelluva@gmail.com', age:62},
];

// Customer Type
const CustomerType = new GraphQLObjectType({
    name: 'Customer',
    fields:() => ({
        id: {type:GraphQLString},
        name: {type:GraphQLString},
        email: {type:GraphQLString},
        age: {type:GraphQLInt},
    })
});

// Root query
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        customer: {
            type:CustomerType,
            args:{
                id:{type:GraphQLString}
            },
            resolve(parentValue, args){
                for(let i = 0;i < customers.length;i++){
                    if(customer[i].id == args.id){
                        return customers[i];
                    }
                }
            }
        }
    }
    
});

module.exports = new GraphQLSchema({
    query: RootQuery
});