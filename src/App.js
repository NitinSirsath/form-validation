import './App.css';
import form from './assets/form.jpg';
import AuthForm from './components/AuthForm';

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <AuthForm />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={form} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default App;