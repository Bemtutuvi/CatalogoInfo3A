// Dentro do componente, crie a função `removerItemPedidos`.
// A função recebe um parâmetro `id`, que é o identificador do item a ser removido.
// Crie uma variável `listaAux` para armazenar a lista filtrada sem o item com o `id` fornecido.
// Utilize `setListaPedidos` para atualizar o estado com a nova lista filtrada.
// Exemplo: `setListaPedidos(listaAux);`

import React, {useState} from "react";

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
    };

    function removerItemPedidos(id){
        const listaAux = listaPedidos.filter(pedido=>pedido.id !== id);
        setListaPedidos(listaAux);
    }

    return(
        <div>
            <h1>Meus Pedidos</h1>
            <button onClick={adicionarPedido}>Adicionar</button>
        <div>
            {listaPedidos.map(pedido=>(
                <div key={pedido.id}>
                    <h2>{pedido.nome}</h2>
                    <p>Quantidade:{pedido.quantidade}</p>
                    <p>Valor Total: {pedido.precoTotal}</p>
                    </div>
            ))}
        </div>
        </div>
    );
}