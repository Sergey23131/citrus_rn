const getUser = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
}

const getPosts = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(value => value.json())
}

export {getUser, getPosts}