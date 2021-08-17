import { buildSchema} from 'graphql';

const schema = buildSchema ( `
    type Friend {
        id:ID
        firstName: String
        lastName:String
        gender:String
        email:String
    }
    type Email{
        email:String
    }

    input FriendInput {
        id:ID
        firstName: String
        lastName:String
        gender:String
        email:String

    }
    type Mutation {
        createFriend(input:FriendInput) :Friend
    }


    type Query {
        hello:String
        friend:Friend
    }


`)

export default schema;