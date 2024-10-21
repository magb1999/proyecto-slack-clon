import React from "react";
import "./CardEntorno.css"
import workspaces from "../arrays/Entornos";
import FuntionCard from "./Card/Card";
import { Link } from "react-router-dom";

function Card() {

    const renderWorkspaces = workspaces.map(workspace => {
        return (
            <div key={workspace.id} className="workspace-item">
                {/* Renderiza la tarjeta para cada workspace */}
                <FuntionCard n={workspace.name} />

                {/* Renderiza el botón correspondiente */}
                <Link to={`/workspace/${workspace.id}`}>
                    <button className="Canals-text">Entrar</button>
                </Link>
            </div>
        );
    });

    return (
        <div>
            <h1>¡Hola de nuevo!</h1>

            <div className="Entornos">
                <div className="container">
                    <span className="Email">Espacios de trabajo para pepe@gmail.com</span>
                    <div className="Text-Entorno">
                        {/* Renderizamos el contenido combinado */}
                        {renderWorkspaces}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card