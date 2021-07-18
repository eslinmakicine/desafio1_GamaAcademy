import * as S from './styled'; 
import './App.css';
import imgBlackFriday from '../../assets/blackFriday.png';
import logo from '../../assets/logo.png';
import React,  {useState} from 'react';

export default function App() {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');

    function enviarDados(nome, email) {
        if (email.indexOf('@')==-1 || email.length < 1 || email.indexOf('.')==-1) {
            alert("Insira um email válido!");
        }
        else if (nome.length < 1 ) {
            alert("Insira um nome válido!");
        }
        else {
            let dados = {nome, email};
            localStorage.setItem('dados', JSON.stringify(dados));
            console.log("Você inseriu o email com sucesso");        
            setEmail('');
            setNome('');
        }
    }

    return (
    <S.ContainerApp>
        <S.DivApp>
            <S.DivConteudo>
            <S.teste className="teste"> 
            <S.Logo src={logo}  />
            </S.teste>
            <S.Img src={imgBlackFriday}  />
            <S.Span>Cadastre-se aqui para receber as ofertas da Black Friday!</S.Span>
            <S.Input type="text" name="nome" placeholder="Seu nome" 
                value={nome} onChange={e => setNome(e.target.value)} /> 
            <S.Input type="email" name="email" placeholder="email@exemplo.com" 
                value={email} onChange={e => setEmail(e.target.value)} />  
            <S.Button type="button" onClick={() => enviarDados(nome,email)}>Cadastrar</S.Button> 
            </S.DivConteudo>
        </S.DivApp>
    </S.ContainerApp>
    )
}
