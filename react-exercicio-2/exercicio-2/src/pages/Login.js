import React from 'react'
import Input from '../componentes/Input'
import Button from '../componentes/Button'


function Login(props) {
    return (
        <form className='login-form'>
            <div className='group-label'>
                <label className='label'>Digite seu e-mail:</label>
                <Input
                    type='text'
                    placeholder='Digite seu e-mail'
                // onChange={}
                />
            </div>

            <div className='group-label'>
                <label className='label'>Digite sua senha:</label>
                <Input
                    type='password'
                    placeholder='Digite sua senha'
                // onChange={}
                />
            </div>

            <Button
            className='btn-remover'
            // clique={}
            >
                Enviar
            </Button>


        </form>
    )
}



export default Login