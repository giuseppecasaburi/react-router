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
        },
        {
            path: "/detailpost",
            title: "Dettagli del post"
        },
        {
            path: "/newpostpage",
            title: "Crea nuovo post"
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