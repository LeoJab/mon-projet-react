import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <ul>
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/categorie">
                    <li>Categorie</li>
                </NavLink>
                <NavLink to="/plat">
                    <li>Plat</li>
                </NavLink>
                <NavLink to="/contact">
                    <li>Contact</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;