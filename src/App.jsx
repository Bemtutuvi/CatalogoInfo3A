import{useState} from 'react';
import Header from "./8-AtividadeCriarBotaoRemover/components/Header";
import ListaPedidos from './8-AtividadeCriarBotaoRemover/components/ListaPedidos';
import { Link } from "react-router-dom";
import "./globals.css";

export default function App() {

    const [listaProdutos, setProdutos]=useState([
        { id: 1, nome: 'Meu Querido Ex', preco: 'R$ 25,99' },
        { id: 2, nome: 'Trono de Vidro', preco: 'R$ 35,70' },
        { id: 3, nome: 'Os Dois Morrem no Final', preco: 'R$ 49,99'},
    ]);
    const [listaPedidos, setListaPedidos]=useState([]);

    const adicionarItemPedidos=(objeto)=>{
        setListaPedidos([...listaPedidos,objeto])
    }

    const removerItemPedidos = (id)=>{
        let remover=false;
        let listaAux=listaPedidos.filter((produto)=>{
            if(remover==false){
                if(produto.id !== id){
                return produto
            } else{
                remover=true;
                return null
            } }else{
                return produto
            }
        });
        setListaPedidos(listaAux);
    }
    return (
        <div>
            <h1>Minha Página</h1>
            <Lista adicionarItemPedidos={adicionarItemPedidos} listaProdutos={listaProdutos}/>
            <ListaPedidos removerItemPedidos={removerItemPedidos} listaPedidos={listaPedidos}/> 
            </div>
            );}