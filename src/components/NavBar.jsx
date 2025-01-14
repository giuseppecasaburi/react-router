import { NavLink } from "react-router-dom"


function NavBar() {

    const navigationMenu = [
        {
            path: "/",
            title: "Home"
        },
        {
            path: "/postlist",
            title: "Post List" 
        },
        {
            path: "/contacts",
            title: "Contacts"
        }
    ]


    return (
        <header>
            <nav>
                <ul>
                    {navigationMenu.map((page) => {
                        return (
                            <li key={page.title}>
                                <NavLink to={page.path}>{page.title}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
    
}

export default NavBar;