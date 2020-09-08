import React from 'react'
import './styles.css'
import { useParams } from 'react-router-dom'
import Produtos from '../Produtos';
import Head from '../Head';

const Produto = () => {

    const [produto, setProduto] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const {id} = useParams();

    React.useEffect(() => {
        async function fetchProduto(url) {
            try{
                    setLoading(true);
                    const response = await fetch(url);
                    const json = await response.json();
                    setProduto(json);
            }catch(erro) {
                setError('Um error ocorreu');
            } finally{
                setLoading(false);
            }
        }

        fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
    },[id])

    if(loading) return <div className="loading"></div>
    if(error) return <p>{error}</p> 
    if(produto == null) return null;

    return (
        <section className="produto animeLeft">
            <Head  title={`Produto | ${produto.nome}`} description={`Esse é um produto : ${produto.nome}`} />
            <div>
                {produto.fotos.map((foto) => (
                    <img key={foto.src} src={foto.src} alt={foto.titulo}/>
                ))}
            </div>
            <div>
                <h1>{produto.nome}</h1>
                <span className="preco">R$ {produto.preco}</span>
                <p className="descricao">{produto.descricao}</p>
            </div>
        </section>
    )
}

export default Produto
