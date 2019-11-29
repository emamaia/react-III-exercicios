import config from './config'


function getUser(nomeDoUsuario){
    const url= `/users/${nomeDoUsuario}`
    return config.get(url)
}

function getRepos(nomeDoUsuario){
    const url= `/users/${nomeDoUsuario}/repos`
    return config.get(url)
}
export {getUser, getRepos}