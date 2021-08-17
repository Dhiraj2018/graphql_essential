import express from 'express';
const app =express();
import schema from './schema';
import { graphqlHTTP} from 'express-graphql';
import resolvers from './resolvers'


app.get('/',(req, res)=>{
    res.send('graph ql is amazing')
})

const friendDatabase= {};

class Friend {
    constructor(id, {firstName, lastName, gender, email}){
        this.id=id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;

    }
}
const root = resolvers

app.use('/graphql',
graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true


}))

app.listen(8080,()=>{
    console.log(`server running in port 8080`)
})
