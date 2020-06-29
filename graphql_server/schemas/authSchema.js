const {registerUser,loginUser} = require('../resolvers/authResolver');
exports.Auth = `
    extend type Mutation
    {
        register(userInput:UserInput): AuthResponse
        login(userInput:UserInput) : AuthResponse
    }

    type AuthResponse
    {
        token: String,
        isRegistered: Boolean
    }
    input UserInput
    {
        name: String
        password: String
        email: String
    }
`;

exports.AuthResolver = {
    Mutation:{
        register: async (_,{userInput},{dataSources}) => {
            const {name,password,email} = userInput;
            let user = await registerUser(name,password,email);
            if(user._id)
            {
                return {isRegistered:true};
            }
            return {isRegistered:false};
        },
        login:  async (_,{userInput},{dataSources}) => { 
            const {password,email} = userInput;
            let token = await loginUser(password,email);
            return {token};
        }
    }
} 