import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor'
import React from 'react'
import { Header } from '../components'
// import { Link } from 'react-router-dom'

const Editor = () => {
    return (
        <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category={'App'} title={'Editor'} />

            <RichTextEditorComponent>
                {/* <EditorData/> */}
                <Inject services={[HtmlEditor, Image, Toolbar, Link, QuickToolbar, Link
                ]

                } />
            </RichTextEditorComponent>

        </div>
    )
}

export default Editor