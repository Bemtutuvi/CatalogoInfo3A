// Crie e exporte uma função que retorna uma estrutura HTML.
// Nomeie a função como `Home`, lembrando-se sempre de usar a primeira letra maiuscula.
// Inclua uma tag `<h1>` dentro da função, e insira um texto relacionado ao tema escolhido.

// Crie um estado chamado `arrayProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 5 objetos, cada um contendo 4 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `arrayProdutos`
// dentro desse `<div>`.

// Crie o estado `meusPedidos`.
// Dentro do componente, crie a função `adicionarItemPedidos`.
// A função recebe um parâmetro, que pode ser nomeado como `produto`.
// Dentro da função, utilize `setMeusPedidos` para adicionar o `produto` à `meusPedidos`.
// Exemplo: `setMeusPedidos([...arrayPedidos, produto]);`

// Para cada objeto renderizado, adicione um botão.
// Utilize o atributo onClick para o botão.
// No valor do onClick, passe a função adicionarItemPedidos, 
// por exemplo: onClick={() => adicionarItemPedidos(pedido)}
// No conteúdo do botão, coloque o texto "Selecionar" ou algo semelhante.

// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `arrayPedidos`
// dentro desse `<div>`.

// Dentro do componente, crie a função `removerItemPedidos`.
// A função recebe um parâmetro `id`, que é o identificador do item a ser removido.
// Crie uma variável `listaAux` para armazenar a lista filtrada sem o item com o `id` fornecido.
// Utilize `setListaPedidos` para atualizar o estado com a nova lista filtrada.
// Exemplo: `setListaPedidos(listaAux);`

// Dentro do `map`, crie um botão para cada item.
// Utilize o atributo `onClick` para definir a ação do botão.
// No valor do `onClick`, chame a função `removerItemPedidos`.
// Passe o identificador (`id`) do item como parâmetro para `removerItemPedidos`, o mesmo que você usa no `map`.
// No conteúdo do botão, coloque o texto "Remover".

import React, {useState} from "react";
import Header from "./components/Header";

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
            <button onClick={adicionarPedido}>Item Adicionado</button>
        <div>
            {listaPedidos.map(pedido=>(
                <div key={pedido.id}>
                    <h2>{pedido.nome}</h2>
                    <p>Quantidade:{pedido.quantidade}</p>
                    <p>Valor Total: {pedido.precoTotal}</p>
                    <button onClick={()=> removerItemPedidos(pedido.id)}>Remover</button>
                    </div>
            ))}
        </div>
        </div>
    );
}