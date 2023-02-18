import { useState, useEffect } from "react";
import './home.css'
import { Link } from "react-router-dom";
import { auth } from '../../firebaseconnection'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function Home() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const navigate = useNavigate()



  async function handleLogin(e) {
    e.preventDefault()

    if (email !== '' && senha !== '') {
      try {
        await signInWithEmailAndPassword(auth, email, senha)
        navigate('/admin', { replace: true })
      } catch (error) {
        console.log('ERRO AO FAZER LOGIN')
      }
    } else {
      alert('Preencha todos os campos!')
    }
  }




  return (
    <div className="home-container">
      <h1>Lista de Tarefas</h1>
      <span>Planeje sua agenda de forma fácil.</span>

      <form className="form" onSubmit={handleLogin}>
        <input
          type='text'
          placeholder="Digite seu e-mail..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type='password'
          placeholder="Digite sua senha..."
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type="submit">Acessar</button>
      </form>

      <Link className="button-link" to='/register'>
        Não possui uma conta? Cadastre-se
      </Link>
    </div>
  );
}

export default Home;
