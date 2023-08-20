import React, { useState } from 'react'
export default function TextForm(props) {

    const [text, setText] = useState("");


    function capitalizeFirstLetter(str) {
        return str
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    const onUpClick = () => {
        console.log("Hey Clicked", text);
        setText(text.toUpperCase());
    }

    const onLowClick = () => {
        console.log("Hey Clicked", text);
        setText(text.toLowerCase());
    }

    const onCapitaliseClick = () => {
        const originalString = text.toLowerCase();
        const capitalizedString = capitalizeFirstLetter(originalString);
        // console.log("Hey Clicked", text);
        setText(capitalizedString);
    }

    const onChangeHandler = (event) => {
        setText(event.target.value);
    }

    return (
        <div className={`${props.mode && 'dark'
            }`}>
            <div className={`container mx-auto mt-6 flex flex-col items-center `}>
                <label htmlFor="message" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">{props.text}</label>
                <textarea id="message" rows="16" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-cyan-400 dark:bg-gray-700  dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={text} onChange={onChangeHandler} placeholder="Write your text here..."></textarea>
                <div>
                    <button type="button" onClick={onUpClick} className="py-2.5 my-4 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Convert to Uppercase</button>
                    <button type="button" onClick={onLowClick} className="py-2.5 my-4 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Convert to Lowercase</button>
                    <button type="button" onClick={onCapitaliseClick} className="py-2.5 my-4 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Convert to Capitalise</button>

                </div>
            </div>
            <div className="container mx-auto my-5 flex flex-col items-center">
                <h2 className='font-medium text-gray-900 dark:text-white'>Your Text Summary</h2>

                <div className="container max-w-xs bg-slate-100 border border-slate-200 my-4 rounded-lg p-4 flex flex-col items-center justify-center dark:bg-slate-600">
                    <div className='flex my-3 '>
                        <p className='text-slate-400 text-sm font-medium w-32 mt-2 dark:text-gray-400'>Total Words:</p> <p className='text-slate-400 text-sm font-medium w-20 mt-2 flex dark:text-white'> {text.length === 0 ? "0" : text.trim().split(/\s+/).length}</p>
                    </div>
                    <div className='flex my-3'>
                        <p className='text-slate-400 text-sm font-medium w-32 mt-2 dark:text-gray-400'>Total Characters:</p> <p className='text-slate-400 text-sm font-medium w-20 mt-2 flex dark:text-white'>{text.length}</p>
                    </div>
                    <div className='flex my-3'>
                        <p className='text-slate-400 text-sm font-medium w-32 mt-2 dark:text-gray-400'>Total Reading time:</p> <p className='text-slate-400 text-sm font-medium w-20 mt-2 flex dark:text-white'>{text.split(' ').length * 0.008} Min</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

// TextForm.propTypes = { text: PropTypes.string.isRequired }
// TextForm.defaultProps = { text: "Please enter text to analyse" }
// Navbar.propTypes = { title: PropTypes.string.isRequired }

