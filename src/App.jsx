
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';
import Navbar from './components/Navbar';

function App() {
  return (
    <div >
      <header className='container-nav' >
        <Navbar />
      </header>
      <main className="container-main" >
        <div className="container">
          <ImageComponent src="https://images.unsplash.com/photo-1713709165652-098baac9656c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Ship Image" description="A big ship"/>
          <ButtonComponent text="Cliccami"/>
        </div>
      </main>
    </div>
  );
}

export default App;
