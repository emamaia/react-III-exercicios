import React from 'react';
import Button from './Button'

import './style.css'



class Contador extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contador: 0,
            classe: 'botao-add',
           
        }
    }

    adicionaUm = () => {
        this.setState((prevState) => {
            return {
                contador: prevState.contador + 1,
                classe:'botao-diminuir'
            }
        })
    }

    diminuiUm = () => {
        this.setState((prevState) => {
            return {
                contador: prevState.contador - 1,
                classe: 'botao-diminuir'
            }
        })
    }

    resetar = () => {
        this.setState((prevState) => {
            return {
                contador: 0,
                classe: 'botao-diminuir',
              
            }
        })
    }




    render() {
        return (
            <div>
                <h2>Contador</h2>
                <p>{this.state.contador}</p>

                <Button
                    classe={this.state.classe}
                    handleClick={this.adicionaUm}
                >
                    Adicionar
                    </Button>

                <Button
                    classe={this.state.classe}
                    handleClick={this.diminuiUm}
                >
                    Diminuir
                    </Button>


                <Button
                    classe={this.state.classe}
                    handleClick={this.resetar}
                >
                    Reset
                    </Button>

            </div>
        )
    }
}



export default Contador