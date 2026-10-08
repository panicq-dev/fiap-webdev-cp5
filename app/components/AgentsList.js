import React from 'react';
import Link from 'next/link';

// Função para mostrar os agentes
export default function AgentsList({ agents }) {
    return (

        <div>
            {agents.map((agent) => (
                <div className="p-4" key={agent.uuid}>
                    {/* Link para entrar nos detalhes do agente */}
                    <Link href={`/details/${agent.uuid}`}>
                        {/* Texto do agente */}
                        <div>
                            <h2>{agent.displayName}</h2>
                            <br/>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}
