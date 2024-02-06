import '../styles/App.css';
import NavBar from './AppBar';
import EditorCanvas from './Editor/Editor';
import Author from './Author';
import Heading from './Heading';


function App() {
  
  return (
    <>
    <NavBar></NavBar>
    <Heading></Heading>
    <Author></Author>
    <EditorCanvas></EditorCanvas>      
    </>
  )
}

export default App
