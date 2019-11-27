import React from 'react'
import Card from '../componentes/Card'



const produtos = [
    {
        id:1,
        title: 'Celular muito caro',
        img: 'https://images-submarino.b2w.io/produtos/01/00/img7/01/00/item/134219/1/134219163SZ.jpg',
        price: 'Preço: seu rim'
    },

    {
        id:2,
        title: 'Celular muito mais caro ainda',
        img:'https://images-submarino.b2w.io/produtos/01/00/img7/01/00/item/134219/1/134219163SZ.jpg',
        price: 'Preço: seu fígado'
    },

    {
        id:3,
        title: 'Celular pra olhar',
        img:'https://images-submarino.b2w.io/produtos/01/00/img7/01/00/item/134219/1/134219163SZ.jpg',
        price: 'Preço: seu estômago'
    },

    {
        id:4,
        title: 'Celular pra desejar',
        img:'https://images-submarino.b2w.io/produtos/01/00/img7/01/00/item/134219/1/134219163SZ.jpg',
        price: 'Preço: sua córnea'
    },

    {
        id:5,
        title: 'Celular pra burguês',
        img:'https://images-submarino.b2w.io/produtos/01/00/img7/01/00/item/134219/1/134219163SZ.jpg',
        price: 'Preço: corpo nu'
    },

    {
        id:6,
        title: 'Celular loucura de caro',
        img:'https://images-submarino.b2w.io/produtos/01/00/img7/01/00/item/134219/1/134219163SZ.jpg',
        price: 'Preço: seu baço'
    }


]

function Produtos(props){
    return(
        <div>
            {produtos.map(item=>(
                
            <Card key={item.id}
                img={item.img}
                title={item.title}
                price={item.price}

            />
                
            ))
                }
           
        </div>
    )
}




export default Produtos