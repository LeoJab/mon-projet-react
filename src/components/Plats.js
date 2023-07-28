import { useEffect } from "react";
import axios from "axios";

const Plats = () => {

    useEffect(() => {
        axios.get("https://127.0.0.1:8000/api/plats").then((res) => console.log(res));
    })

    return (
        <div>
            Voici tous les plats !
        </div>
    );
};

export default Plats;