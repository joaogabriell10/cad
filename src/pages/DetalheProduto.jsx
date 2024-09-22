import {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from '../assets/react.svg'
import { useLocation, Navigate } from 'react-router-dom';

const DetalheProduto = () => {

    const {produto} = useLocation().state;
    const [clicou, setClicou] = useState(false);
    const [navegar, setNavegar] = useState(false);

    useEffect(()=>{
        if(clicou){
            setNavegar(true)
        }
        
        return () =>{
            setNavegar(false)
            setClicou(false)
        }
    }, [clicou])

    return (
        <>
            <Card>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>{produto.id} - {produto.nome}</Card.Title>             
                    <Card.Text>{produto.descricao}</Card.Text>
                    <Card.Text>{produto.codigo}</Card.Text>
                    <Card.Text>{produto.preco}</Card.Text>
                    <Card.Text>{produto.categoria}</Card.Text>
                    <Card.Text>{produto.destaque}</Card.Text>
                    
                    {(navegar) ? <Navigate 
                        to="/alterar" 
                        replace={false}
                        state={{produto: produto}}
                    /> : <></>}
                    
                    <Button onClick={()=>setClicou(true)}>
                        ALTERAR
                    </Button>

                </Card.Body>
            </Card>
        </>
    )
}

export default DetalheProduto