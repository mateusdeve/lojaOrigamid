import React from 'react';
import './styles.css';
import Head from '../Head';
import { Link } from 'react-router-dom';

const Produtos = () => {

    const [produtos, setProdutos] = React.useState(null);

    React.useEffect(()=> {
        fetch('https://ranekapi.origamid.dev/json/api/produto')
        .then(r=> r.json())
        .then(json => setProdutos(json))

    },[])
    if(produtos == null) {
        return null;
    }

    return (
        <section className="produtos animeLeft">
            <Head  title="Produtos" description="Lista de produtos" />
            {produtos.map((produto) => (
                <Link to={`produto/${produto.id}`} key={produto.id}>
                    <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo}/>
                    <h1 className="nome">{produto.nome}</h1>
                </Link >
            ))}
        </section>
    )
}

export default Produtos;
