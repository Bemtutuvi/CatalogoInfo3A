// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaPedidos`
// dentro desse `<div>`.

import React, { useState } from "react";

export default function Home() {
  const [listaProdutos, setProdutos] = useState([
    { id: 1, nome: 'Meu Querido Ex', preco: 'R$ 25,99'},
    { id: 2, nome: 'Trono de Vidro', preco: 'R$ 35,70'},
    { id: 3, nome: 'Os Dois Morrem no Final', preco: 'R$ 49,99'}
  ]);

  const [listaPedidos, setListaPedidos] = useState([]);

  const adicionarItemPedidos = (objeto) => {
    setListaPedidos([...listaPedidos, objeto]);
  }

  const adicionarPedido = () => {
    const novoPedido={id:3, nome: 'Os Dois Morrem no Final', quantidade: 3, precoTotal: 'R$149,97'};
    adicionarItemPedidos(novoPedido);
  }

  const removerItemPedidos = (id)=>{
    setListaPedidos(listaPedidos.filter(pedido=>pedido.id !== id));
  };

  return (
    <div>
    <h1>Meus Pedidos</h1>
    <button onClick={adicionarPedido}>Adicionar</button>
    <div>
      {listaPedidos.map(pedido =>(
        <div key={pedido.id}>
          <h2>{pedido.nome}</h2>
          <p>Quantidade:{pedido.quantidade}</p>
          <p>Valor Total:{pedido.precoTotal}</p>
          </div>
      ))}
    </div>
    </div>
  );
}