import EditorCanvas from './Editor/Editor';
import Author from './home/Author';
import Heading from './home/Heading';

export default function Home() {
  return (
    <div>
    <Heading></Heading>
    <Author></Author>
    <EditorCanvas></EditorCanvas>  
    </div>
  )
}
