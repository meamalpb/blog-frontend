import EditorJS from '@editorjs/editorjs';
import { useEffect } from 'react';

function EditorCanvas() {
    useEffect(() => {
        const editor = new EditorJS({
          holder: 'editorjs',
        });
    
    
      editor.isReady
            .then(() => {
                console.log('Editor.js is ready to work!')
                /** Do anything you need after editor initialization */
            })
            .catch((reason) => {
                console.log(`Editor.js initialization failed because of ${reason}`)
            });
          })
    return (
        <>
            <div id='editorjs'></div>
        </>
    )
}

export default EditorCanvas;