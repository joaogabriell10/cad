import React, {useState, useEffect} from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from '../assets/react.svg'

const Listagem = () => {

    const [dados, setDados] = useState([])

    function receberDados(){
        axios.get('http://localhost:8080/produto'
        ).then(response => {
            console.log(response.data)
            setDados(response.data)
        })
        .catch(error => console.log(error))
    }
    
    useEffect(()=>{
       receberDados()
    }, [])

    const ItensLista = () => dados.map(
        produto => 
        <li key={produto.id} style={{listStyle: 'none'}}>
            <Card style={{ width: '18rem', borderRadius:8, 
                            margin: 16,  
                            backgroundColor:'pink' }}>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
                <Card.Title>{produto.nome}</Card.Title>
                <Card.Text>
                    {produto.descricao}
                </Card.Text>
                <Card.Text>
                    {produto.preco}
                </Card.Text>
                <Link to="/detalhe" state={{produto: produto}}>
                    Detalhe do Produto
                </Link>
            </Card.Body>
            </Card>
        </li>
    )

    
    return (
    <div>
        <h1>Cadastrar Produto</h1>
        <Link to={"/cadastro"}>
            CADASTRO
        </Link>

        <ul>
            <ItensLista />
        </ul>

    </div>
    );
}

export default Listagem