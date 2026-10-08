"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';

export default function DetailPage() {
    const params = useParams();
    const router = useRouter();
    const agentId = params?.id;
    const [agent, setAgent] = useState(null);

    useEffect(() => {
        if (!agentId) return;

        async function carregarDetalhes() {
            const response = await axios.get(
                `https://valorant-api.com/v1/agents/${agentId}?language=pt-BR`
            );
            setAgent(response.data.data);
        }

        carregarDetalhes();
    }, [agentId]);

    if (!agent) {
        return <p>Carregando detalhes...</p>;
    }

    return (
        <div>
            <div>
                <button onClick={() => router.push("/")}>
                    Voltar
                </button>
            </div>

            <div>
                <h1>{agent.displayName}</h1>
                <p>ID do Agente: {agent.uuid}</p>
                <p>Descrição: {agent.description}</p>
                {agent.displayIcon && <img src={agent.displayIcon} alt={agent.displayName} width={200} />}
            </div>
        </div>
    );
}
