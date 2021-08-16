import express from 'express';
const app =express();
import schema from './schema';
import { graphqlHTTP} from 'express-graphql';


app.get('/',(req, res)=>{
    res.send('graph ql is amazing')
})

const root = {hello:()=>"hi this is dhiraj"};
app.use('/graphql',
graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true


}))

app.listen(8080,()=>{
    console.log(`server running in port 8080`)
})
