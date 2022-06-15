import React from 'react'
import Slider from './Banner'

export default function Navbar({ children }) {
    const navLinks = <>
        <li><a>Home</a></li>
        <li><a>Games</a></li>
        <li><a>Explore</a></li>
        <li><a>User guide</a></li>
        <li><a>Contact Us</a></li>
    </>
    return (
        <div class="drawer">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                <div class="w-full navbar bg-base-300">
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div class="flex-1 px-2 mx-2">Navbar Title</div>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal">
                            {navLinks}
                        </ul>
                    </div>
                    <div class="flex-none hidden lg:block">

                        <div class="avatar">
                            <div class="w-12 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=3174" />
                            </div>
                        </div>
                    </div>
                </div>
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">

                    <label for="my-drawer-3" className='absolute top-2 right-2 h-8 w-8 bg-teal-500 text-white rounded-full flex items-center justify-center z-50'>X</label>
                    {navLinks}

                </ul>

            </div>
        </div>
    )
}
