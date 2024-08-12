// Crie o estado `listaPedidos`.
// Dentro do componente, crie a função `adicionarItemPedidos`.
// A função recebe um parâmetro, que pode ser nomeado como `objeto`.
// Dentro da função, utilize `setListaPedidos` para adicionar o `objeto` à `listaPedidos`.
// Exemplo: `setListaPedidos([...listaPedidos, objeto]);`

import React, { useState } from "react";

export default function Home() {
  const [listaProdutos, setProdutos] = useState([
    { id: 1, nome: 'Meu Querido Ex', preco: 'R$ 25,99' },
    { id: 2, nome: 'Trono de Vidro', preco: 'R$ 35,70' },
    { id: 3, nome: 'Os Dois Morrem no Final', preco: 'R$ 49,99' }
  ]);

  const [listaPedidos, setListaPedidos] = useState([]);

  const adicionarItemPedidos = (objeto) => {
    setListaPedidos([...listaPedidos, objeto]);
  };

  return (
    <div>
      <h1>Livros de Romance e Fantasia</h1>
      <div>
        {listaProdutos.map(produto => (
          <div key={produto.id}>
            <h2>{produto.nome}</h2>
            <p>{produto.preco}</p>
            <button onClick={() => adicionarItemPedidos(produto)}>
              Adicionar ao Pedido
            </button>
          </div>
        ))}
      </div>
      <div>
        <h2>Meus Pedidos</h2>
        {listaPedidos.map((pedido, index) => (
          <div key={index}>
            <h3>{pedido.nome}</h3>
            <p>{pedido.preco}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
