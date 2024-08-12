// Para cada objeto renderizado, adicione um botão.
// Utilize o atributo onClick para o botão.
// No valor do onClick, passe a função adicionarItemPedidos, 
// por exemplo: onClick={() => adicionarItemPedidos(produto)}
// No conteúdo do botão, coloque o texto "Selecionar" ou algo semelhante.

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
      <button onClick={adicionarPedido}> Adicionar</button>
      <div>
        {listaPedidos.map(pedido=>(
          <div key={pedido.id}>
            <h2>{pedido.nome}</h2>
            <p>Quantidade: {pedido.quantidade}</p>
            <p>Valor Total: {pedido.precoTotal}</p>
            <button onClick={() => removerItemPedidos(pedido.id)}>Selecionar</button>
          </div>
        ))}
      </div>
      </div>
      );
    }
