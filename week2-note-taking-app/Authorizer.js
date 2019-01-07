function Authorizer(users){
    return (username,password)=>{
        return typeof users[username] !== 'undefined' && users[username] === password;
    }
}

module.exports = Authorizer