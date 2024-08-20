// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.
import React, { useState } from 'react';

export default function ProductList() {
    const [listaProdutos, setListaProdutos] = useState([
        {
            id: 1,
            nome: 'Meu Querido Ex',
            preco: 'R$ 25,99'
        },
        {
            id: 2,
            nome: 'Trono de Vidro',
            preco: 'R$ 36,70'
        },
        {
            id: 3,
            nome: 'Os Dois Morrem no Final',
            preco: '49,99'
        }
    ]);

    return (
        <div>
            <h1>Lista de Produtos</h1>
            <ul>
                {listaProdutos.map(produto => (
                    <li key={produto.id}>
                        {produto.nome} - {produto.preco}
                    </li>
                ))}
            </ul>
        </div>
    );
}

