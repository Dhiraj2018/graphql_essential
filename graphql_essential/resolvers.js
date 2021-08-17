
const resolvers = {hello:()=>"hi this is dhiraj",
 getFriend:({id})=>{
    let input = friendDatabase[id] 
    return new Friend(id, input)
 }
 ,
 createFriend:({input})=>{
    let id = require('crypto').randomBytes(10).toString('hex');
    friendDatabase[id]= input;
    return new Friend(id, input);
 }
};

export default resolvers;