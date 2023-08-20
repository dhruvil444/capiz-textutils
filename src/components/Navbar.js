import React from 'react'
import logo from '../bootstrap-logo-black.svg'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    // const brand = "../../public/brand.png";
    return (
        <header className=" brand sticky top-0 z-10 text-white brand shadow-lg">
            <section className="max-w-4xl mx-auto p-4 flex items-center justify-between">
                <div className='flex items-center'>
                    <img src={logo} alt="" className='w-10 me-2' /> <h2>{props.title}</h2>
                    <div className="links">
                        <a href="/">Docs</a><a href="/">Examples</a><a href="/">Icons</a><a href="/">Themes</a><a href="/">Blog</a></div>
                </div>
                {/* Search Module */}
                <div>
                    <form>
                        <div className="relative">
                            <div className="absolute inset-y-0 pl-2 left-0 items-center justify-center flex">
                                <svg width="20" height="20" class="DocSearch-Search-Icon" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                {/* <svg className=" w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path fill='white' stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg> */}
                            </div>

                            <label className="flex">
                                <input className="shadow-lg text- pl-10 bg-transparent placeholder:text-white outline-none focus:border-white  border p-1 rounded-md w-64 placeholder:'asdasd text-slate-800 border-opacity-70 border-white" placeholder="Search" />
                            </label>
                        </div>
                    </form>
                </div>
                {/*Social Handle Dark Mode Handler*/}
                <button onClick={props.modeToogle}>
                    <div>
                        {props.mode ? (
                            <svg
                                version="1.1"
                                id="fi_66275"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                width="24"
                                height="24"
                                viewBox="0 0 45.16 45.16"
                                style={{ enableBackground: 'new 0 0 45.16 45.16' }}
                                xmlSpace="preserve"
                            >
                                <g>
                                    <g>
                                        <path fill="white" d="M22.58,11.269c-6.237,0-11.311,5.075-11.311,11.312s5.074,11.312,11.311,11.312c6.236,0,11.311-5.074,11.311-11.312
     S28.816,11.269,22.58,11.269z"/>
                                        <g>
                                            <g>
                                                <path fill="white" d="M22.58,7.944c-1.219,0-2.207-0.988-2.207-2.206V2.207C20.373,0.988,21.361,0,22.58,0c1.219,0,2.207,0.988,2.207,2.207
             v3.531C24.787,6.956,23.798,7.944,22.58,7.944z"/>
                                            </g>
                                            <g>
                                                <path fill="white" d="M22.58,37.215c-1.219,0-2.207,0.988-2.207,2.207v3.53c0,1.22,0.988,2.208,2.207,2.208c1.219,0,2.207-0.988,2.207-2.208
             v-3.53C24.787,38.203,23.798,37.215,22.58,37.215z"/>
                                            </g>
                                            <g>
                                                <path fill="white" d="M32.928,12.231c-0.861-0.862-0.861-2.259,0-3.121l2.497-2.497c0.861-0.861,2.259-0.861,3.121,0
             c0.862,0.862,0.862,2.26,0,3.121l-2.497,2.497C35.188,13.093,33.791,13.093,32.928,12.231z"/>
                                            </g>
                                            <g>
                                                <path fill="white" d="M12.231,32.93c-0.862-0.863-2.259-0.863-3.121,0l-2.497,2.496c-0.861,0.861-0.862,2.26,0,3.121
             c0.862,0.861,2.26,0.861,3.121,0l2.497-2.498C13.093,35.188,13.093,33.79,12.231,32.93z"/>
                                            </g>
                                            <g>
                                                <path fill="white" d="M37.215,22.58c0-1.219,0.988-2.207,2.207-2.207h3.531c1.219,0,2.207,0.988,2.207,2.207c0,1.219-0.988,2.206-2.207,2.206
             h-3.531C38.203,24.786,37.215,23.799,37.215,22.58z"/>
                                            </g>
                                            <g>
                                                <path fill="white" d="M7.944,22.58c0-1.219-0.988-2.207-2.207-2.207h-3.53C0.988,20.373,0,21.361,0,22.58c0,1.219,0.988,2.206,2.207,2.206
             h3.531C6.956,24.786,7.944,23.799,7.944,22.58z"/>
                                            </g>
                                            <g>
                                                <path fill="white" d="M32.928,32.93c0.862-0.861,2.26-0.861,3.121,0l2.497,2.497c0.862,0.86,0.862,2.259,0,3.12s-2.259,0.861-3.121,0
             l-2.497-2.497C32.066,35.188,32.066,33.791,32.928,32.93z"/>
                                            </g>
                                            <g>
                                                <path fill="white" d="M12.231,12.231c0.862-0.862,0.862-2.259,0-3.121L9.734,6.614c-0.862-0.862-2.259-0.862-3.121,0
             c-0.862,0.861-0.862,2.259,0,3.12l2.497,2.497C9.972,13.094,11.369,13.094,12.231,12.231z"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                                <g>
                                </g>
                            </svg>
                        ) : (
                            <svg id="fi_4489231" height="24" viewBox="0 0 32 32" width="24" className="text-white" xmlns="http://www.w3.org/2000/svg" data-name="Layer 4">
                                <path fill="white" d="m30.706 19.721a1 1 0 0 0 -1.042-.234 13.423 13.423 0 0 1 -17.151-17.152 1 1 0 0 0 -1.276-1.278 15.214 15.214 0 0 0 -5.727 3.623 15.422 15.422 0 0 0 21.81 21.81 15.214 15.214 0 0 0 3.623-5.728 1 1 0 0 0 -.237-1.041z"></path>
                            </svg>
                        )}

                    </div>
                </button>

            </section>
        </header>
    )
}


Navbar.propTypes = { title: PropTypes.string.isRequired }

Navbar.defaultProps = { title: "Rahi" }