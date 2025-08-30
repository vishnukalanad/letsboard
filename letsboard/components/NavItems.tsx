import React from 'react';
import {Link, NavLink} from "react-router";
import {sidebarItems} from "~/constants";
import {cn} from "~/lib/utils";

function NavItems() {
    const user = {
        name: 'John Doe',
        email: 'contact@john.doe',
        avatar: '',
    }
    return (
        <section className="nav-items">
            <Link to="/" className="link-logo">
                <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px" />
                <h1>Let's Board</h1>
            </Link>

            <div className="container">
                <nav>
                    {sidebarItems.map((item, index) => (
                        <NavLink to={item.href} key={item.id}>
                            {({isActive} : {isActive: boolean}) => {
                                return<div className={cn('group nav-item', {
                                    'bg-primary-100 !text-white hover:!bg-primary-100': isActive,
                                })}>
                                    <img src={item.icon} alt={item.label} className={`group-hover:brightness-0 size-0 duration-300 group-hover:invert ${isActive ? 'brightness-0' : ''}`} />
                                    {item.label}
                                </div>
                            }}
                        </NavLink>
                    ))}
                </nav>

                <footer className="nav-footer">
                    <img src={user.avatar || "/assets/images/michael.webp"} alt={user.name} />

                    <article>
                        <h2>
                            {user?.name}
                        </h2>
                        <p>
                            {user?.email}
                        </p>
                    </article>

                    <button onClick={() => {
                        console.log('logout')
                    }} className="cursor-pointer">
                        <img src="/assets/icons/logout.svg" alt="logout" className="size-6" />
                    </button>
                </footer>
            </div>
        </section>
    );
}

export default NavItems;