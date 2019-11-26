import React from 'react'
import Input from '../componentes/Input'
import Button from '../componentes/Button'

import './style.css'



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            nomes: []
        }
    }

    onChangeInput = (element) => {
        let value = element.target.value
        this.setState({ value: value })
    }

    onClickButton = () => {
        this.setState({

            nomes: [
                this.state.value,
                ...this.state.nomes
            ]
        })
    }

    excluirNome=(item)=>{
      let novoNomes= this.state.nomes.filter(nome=>(
          nome !== item
      ))  
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                
                <div className='cadastro'>
                <Input
                    type='text'
                    placeholder='Digite seu nome'
                    change={this.onChangeInput}
                />
                <Button
                    classe='btn-cadastrar'
                    clique={this.onClickButton}
                >
                    Cadastrar
                </Button>
                    
                </div>
                <ul>
                    {this.state.nomes.map((valor, index) => {
                        return (
                            <div className='resultado' key={index}>
                                <li>{valor}</li>
                                <Button
                                    classe='btn-remover'
                                    clique={()=>this.excluirNome(valor)}
                                > X
                                </Button>
                            </div>
                        )
                    })}
                </ul>
            </div>
        )
    }

}

export default Home






