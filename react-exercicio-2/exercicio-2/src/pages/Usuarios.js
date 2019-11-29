import React from 'react'
import CardUsers from '../componentes/CardUsers'
import Input from '../componentes/Input'
import Button from '../componentes/Button';
import { getUser, getRepos } from '../service/users'

import './style.css'

class Usuarios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: '',
            users: {},
            repos: []
        }
    }

    valorInput = (valor) => {
        let valorInput = valor.target.value;
        this.setState({
            valor: valorInput
        })
    }

    pesquisaUsuario = () => {
        getUser(this.state.valor).then(res => {
            this.setState({
                users: res.data
            })
        }).catch(err => console.log(err))
    }

    pesquisarRepos = (login) => {
        getRepos(login).then(res => {
             this.setState({ repos: res.data})
            this.props.history.push({
                pathname: '/repos', 
                state: {repos: this.state.repos}
          });
        }
        )}

    


    render() {
        return (
            <section>

                <div className='paginaGit'>

                    <h1>Pesquisar usuário</h1>
                    <Input
                        placeholder='Pesquisar usuário'
                        type='text'
                        change={this.valorInput}
                    />

                    <Button
                        classe='btn-remover'
                        clique={this.pesquisaUsuario}
                    >
                        Pesquisar
                </Button>
                </div>

                {this.state.users.login &&

                <CardUsers
                    name={this.state.users.name}
                    user={this.state.users.login}
                    img={this.state.users.avatar_url}
                    clique={() => this.pesquisarRepos(this.state.users.login)}
                />
                }
                
            </section>
        )
    }
}


export default Usuarios