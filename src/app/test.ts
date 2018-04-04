interface User{
    title: string,
    age: number,
    isAdmin: boolean
}

const users: Array<User> = [];

function decorateUser(userObj): User{
    return {
        title: userObj.title || '',
        age: userObj.age || 0,
        isAdmin: userObj.isAdmin || false
    }
}

users.push({
    title: 'Bob',
    age: 0,
    isAdmin: false
})