// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaProdutos`
// dentro desse `<div>`.
import { useState } from "react";

export default function Home() {
  const [listaProdutos, setProdutos] = useState([
    { id: 1, nome: 'Meu Querido Ex', preco: 'R$ 25,99' },
    { id: 2, nome: 'Trono de Vidro', preco: 'R$ 35,70' },
    { id: 3, nome: 'Os Dois Morrem no Final', preco: 'R$ 49,99' }
  ]);

  return (
    <div>
         <h1>Livros de Romance e Fantasia</h1>
        {listaProdutos.map(produto => (
          <div key={produto.id}>
            <h2>{produto.nome}</h2>
            <p>Valor: {produto.preco}</p>
          </div>
        ))}
      </div>   
  );
}