// Crie o estado `listaPedidos`.
// Dentro do componente, crie a função `adicionarItemPedidos`.
// A função recebe um parâmetro, que pode ser nomeado como `objeto`.
// Dentro da função, utilize `setListaPedidos` para adicionar o `objeto` à `listaPedidos`.
// Exemplo: `setListaPedidos([...listaPedidos, objeto]);`

import React, { useState } from "react";
export default function Home() {
  const [listaProdutos, setListaPedidos] = useState([ 
    { id: 1, nome: 'Meu Querido Ex', preco: 'R$ 25,99'},
    { id: 2, nome: 'Trono de Vidro', preco: 'R$ 35,70'},
    { id: 3, nome: 'Os Dois Morrem no Final', preco: 'R$ 49,99'}]);

  function adicionarItemPedidos(objeto){
    setListaPedidos([...listaPedidos, objeto]);
  }

  const adicionarPedido = () => {
    const novoPedido={id:3, nome: 'Os Dois Morrem no Final', preco: 'R$149,97'};
    adicionarItemPedidos(novoPedido);
  };

  return (
    <div>
      <h1>Meus Pedidos</h1>
      <button onClick={adicionarPedido}> Adicionar Pedido</button>
      <div>
        {listaPedidos.map(pedido=>(
          <div key={pedido.id}>
            <h2>{pedido.nome}</h2>
            <p>Valor: {pedido.preco}</p>
          </div>
        ))}
      </div>
      </div>
      );
    }
