import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Chats = () => {

    const { workspace_id, channel_id } = useParams()
    const navigate = useNavigate()

    const ChatsInfo = [
        {
            name: 'Workspace UTN',
            channel: [
                {
                    name: 'General',
                    id: 0,
                    messages: [
                        {
                            text: 'Hola a todos',
                            id: 0,
                            user: 'pepe',
                            date: '2022-01-01'
                        },
                        {
                            text: 'Que tal?',
                            id: 1,
                            user: 'juan',
                            date: '2022-01-01'
                        },
                        {
                            text: 'No se que es slack',
                            id: 2,
                            user: 'fiora',
                            date: '2022-01-02'
                        }
                    ]
                },
                {
                    name: 'Consultas',
                    id: 1,
                    messages: [
                        {
                            text: 'isNaN es una funcion rara o normal?',
                            id: 0,
                            user: 'pepe',
                            date: '2022-01-05'
                        },
                        {
                            text: 'No se ni que es isNaN, solo se css',
                            id: 1,
                            user: 'pedrito',
                            date: '2022-01-06'
                        },
                        {
                            text: 'isNaN es una funcion para saber si un valor es NaN, no se igual que es NaN',
                            id: 2,
                            user: 'fiora',
                            date: '2022-01-08'
                        }
                    ]
                }
            ],
            id: 0
        },
        {
            name: 'Clases de Next.js',
            id: 1,
            channel: [
                {
                    name: 'Novedades',
                    id: 0,
                    messages: [
                        {
                            text: 'Hola a todos',
                            id: 0,
                            user: 'pepe',
                            date: '2022-01-01'
                        },
                        {
                            text: 'Que tal?',
                            id: 1,
                            user: 'juan',
                            date: '2022-01-01'
                        },
                        {
                            text: 'No se que es slack',
                            id: 2,
                            user: 'fiora',
                            date: '2022-01-02'
                        }
                    ]
                },
                {
                    name: 'Tareas',
                    id: 1,
                    messages: [
                        {
                            text: 'Hola a todos',
                            id: 0,
                            user: 'pepe',
                            date: '2022-01-01'
                        },
                        {
                            text: 'Que tal?',
                            id: 1,
                            user: 'juan',
                            date: '2022-01-01'
                        },
                        {
                            text: 'No se que es slack',
                            id: 2,
                            user: 'fiora',
                            date: '2022-01-02'
                        }
                    ]
                }
            ],
        },
        {
            name: 'Clases de piano',
            id: 2,
            channel: [
                {
                    name: 'General',
                    id: 0,
                    messages: [
                        {
                            text: 'Hola a todos',
                            id: 0,
                            user: 'pepe',
                            date: '2022-01-01'
                        },
                        {
                            text: 'Que tal?',
                            id: 1,
                            user: 'juan',
                            date: '2022-01-01'
                        },
                        {
                            text: 'No se que es slack',
                            id: 2,
                            user: 'fiora',
                            date: '2022-01-02'
                        }
                    ]
                }
            ],
        },
        {
            name: 'Juegos',
            id: 3,
            channel: [
                {
                    name: 'General',
                    id: 0,
                    messages: [
                        {
                            text: 'Hola a todos',
                            id: 0,
                            user: 'pepe',
                            date: '2022-01-01'
                        },
                        {
                            text: 'Que tal?',
                            id: 1,
                            user: 'juan',
                            date: '2022-01-01'
                        },
                        {
                            text: 'No se que es slack',
                            id: 2,
                            user: 'fiora',
                            date: '2022-01-02'
                        }
                    ]
                }
            ],
        }
    ]

    // Busca el workspace seleccionado
    const workspace_seleccionado = ChatsInfo.find(workspace => workspace.id === Number(workspace_id));
    // Busca el canal seleccionado si el channel_id está presente
    const channel_seleccionado = channel_id ? workspace_seleccionado.channel.find(canal => canal.id === Number(channel_id)) : null;

    const [openNewChannelForm, setOpenNewChannelForm] = useState(false);

    // Función para alternar la visibilidad del formulario de nuevo canal
    const toggleNewChannelForm = () => {
        setOpenNewChannelForm(!openNewChannelForm);
    };

    return (
        <div>
            <h1>{workspace_seleccionado.name}</h1>

            {/* Lista de canales con enlaces */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {workspace_seleccionado.channel.map(channel => {
                    return (
                        <Link key={channel.id} to={`/workspace/${workspace_id}/${channel.id}`}>
                            {channel.name}
                        </Link>
                    );
                })}
            </div>

            {/* Formulario para crear un nuevo canal */}
            {
                openNewChannelForm
                    ? (
                        <form>
                            <div>
                                <label htmlFor='new_channel_name'>Nombre nuevo canal:</label>
                                <input name='new_channel_name' id='new_channel_name' />
                            </div>
                            <button type='submit'>Confirmar</button>
                            <button onClick={toggleNewChannelForm} type='button'>Cancelar</button>
                        </form>
                    )
                    : <button onClick={toggleNewChannelForm}>Crear canal</button>
            }

            {/* Mensajes del canal seleccionado */}
            <div>
                {
                    channel_seleccionado ? (
                        channel_seleccionado.messages.map(mensaje => {
                            return (
                                <div key={mensaje.id}>
                                    <b>Fecha: {mensaje.date}</b>
                                    <p><b>{mensaje.user} dijo:</b> {mensaje.text}</p>
                                    <hr />
                                </div>
                            );
                        })
                    ) : <h2>No has seleccionado ningún canal</h2>
                }
            </div>
        </div>
    );
};

export default Chats;