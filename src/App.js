import '../src/styles/App.css';
import Header from './components/header'
import Juls from './components/juls'
import About from './components/about'
import Skills from './components/skills'
// import Proj  from './components/projects';
import Footer from './components/footer';

function App() {

  return (
    <>
      <Header />
      <Juls />
      <About />
      <Skills />
      {/* <Proj /> */}
      <Footer />
    </>
  );
}

export default App;
