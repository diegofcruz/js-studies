
// First test

function fetchUser(id: number): Promise<string> { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve('User name')
            } else {
                reject(new Error('Invalid ID'))
            }
        }, 500)
    })
}

fetchUser(-1)
    .then((user) => {
        console.log('User fetched:', user)
    })
    .catch((error) => {
        console.error('Error fetching user:', error.message)
    })

fetchUser(1)
    .then((user) => {
        console.log('User fetched:', user)
    })
    .catch((error) => {
        console.error('Error fetching user:', error.message)
    })

// First test - The callbacks run in an independent order, the crash not generate impact in the execution

