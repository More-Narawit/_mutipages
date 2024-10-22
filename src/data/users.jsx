const users = [
    {
        user: 'user',
        password: 'password',
        role: 'user',
        token: 'user'
    },
    {
        user: 'admin',
        password: 'admin',
        role: 'admin',
        token: 'admin'
    },
    {
        user: 'guest',
        password: 'guest',
        role: 'guest',
        token: 'guest'
    }
]

export function verifyUser(user, password) {
    const userFound = users.find((u) => {
        return u.user === user && u.password === password
    })//found: object(mem.addr), not found: null(0)

    return userFound ? { role: userFound.role, token: userFound.token } : null
}