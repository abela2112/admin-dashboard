import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import React from 'react';
import { Header } from '../components';

const change = (args) => {
    console.log("args: ", args);
    document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
}
const ColorPicker = () => {
    return (
        <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category='page' title='Color Picker' />
            <div className='text-center'>
                <div id="preview" />
                <div className='flex justify-center items-center gap-20 flex-wrap'>

                    <div>
                        <p className='font-semibold text-2xl mb-4 mt-2 '>Inline pallete</p>
                        <ColorPickerComponent
                            id='inline-pallete'
                            mode='Palette'
                            modeSwitcher={false}
                            inline
                            showButtons={false}
                            change={change}
                        />
                    </div>
                    <div>
                        <p className='font-semibold text-2xl mb-4 mt-2 '>Inline pallete</p>
                        <ColorPickerComponent
                            id='inline-pallete'
                            mode='Picker'
                            modeSwitcher={false}
                            inline
                            showButtons={false}
                            change={change}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ColorPicker