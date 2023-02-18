import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from '../../firebaseconnection'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function Register() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const navigate = useNavigate()



  async function handleRegister(e) {
    e.preventDefault()

    if (email !== '' && senha !== '') {
      try {
        await createUserWithEmailAndPassword(auth, email, senha)
        navigate('/admin', { replace: true })

      } catch (error) {
        console.log('ERRO AO FAZER O CADASTRO!')
      }
    } else {
      alert('Preencha todos os campos!')
    }
  }




  return (
    <div className="home-container">
      <h1>Cadastre-se</h1>
      <span>Vamos criar sua conta</span>

      <form className="form" onSubmit={handleRegister}>
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

        <button type="submit">Cadastrar</button>
      </form>

      <Link className="button-link" to='/'>
        Já possui uma conta? Faça o login!
      </Link>
    </div>
  );
}

export default Register;
