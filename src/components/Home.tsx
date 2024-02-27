import EditorCanvas from './Editor/Editor';
import Author from './Author';
import Heading from './Heading';

export default function Home() {
  return (
    <div>
    <Heading></Heading>
    <Author></Author>
    <EditorCanvas></EditorCanvas>  
    </div>
  )
}
