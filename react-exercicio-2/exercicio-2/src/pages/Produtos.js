import React from 'react'
import Card from '../componentes/Card'
import Button from '../componentes/Button'
import Input from '../componentes/Input'
import listaProdutos from '../mock/listaProdutos'

import './style.css'


class Produtos extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: "",
            produtos: listaProdutos
        }
    }

    valorInput = (valor) => {
        let valorInput = valor.target.value;
        this.setState({
            value: valorInput
        })
    }

    pesquisaProduto = () => {
        let novoArray = this.state.produtos.filter(item => item.title.includes(this.state.value))
        this.setState({
            produtos: novoArray
        })
    }

    render() {
        return (
            <section>

                <div className='pesquisar'>
                    <Input

                        type='text'
                        placeholder='Pesquise seu produto'
                        change={this.valorInput}
                    />

                    <Button

                        clique={this.pesquisaProduto}

                    >
                        Pesquisar
                </Button>

                </div>

                <div className='produtos'>

                    {this.state.produtos.map(item => (

                        <Card key={item.id}
                            img={item.img}
                            title={item.title}
                            price={item.price}

                        />
                    ))
                    }

                </div>

            </section>
        )
    }
}

export default Produtos