import React from 'react';

export const dynamic = 'force-dynamic';

export default async function DetailPage({ params, searchParams }) {
    const { id } = await params;
    const agentId = id;
    const agentName = searchParams?.name ?? '';

    return (
        <>
            <h1>Detalhes do Agente</h1>
            <p>ID do Agente: {agentId}</p>
            <p>Nome do Agente: {agentName}</p>
        </>
    );
}
