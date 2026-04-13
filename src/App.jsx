import LoginForm from './components/LoginForm'
import './index.css'

function App() {
  const handleLogin = (data) => {
    console.log('Login Submitted:', data);
    alert('Login successful! Check console for details.');
  };

  return (
    <div className="container">
      <div className="card">
        <LoginForm onSubmit={handleLogin} />
      </div>
      <p style={{ marginTop: '2rem', color: '#94a3b8', fontSize: '0.875rem' }}>
        Designed for Kalvium Testing Assignment
      </p>
    </div>
  )
}

export default App
