"use client";

import React, { Suspense } from 'react';
import { useParams, useSearchParams } from 'next/navigation';

function DetailContent() {
    const params = useParams();
    const searchParams = useSearchParams();

    const agentId = params?.id;
    const agentName = searchParams.get('name');
    const agentDescription = searchParams.get('description');

    return (
        <>
            <h1>Detalhes do Agente</h1>
            <p>ID do Agente: {agentId}</p>
            <p>Nome do Agente: {agentName}</p>
            <p>Descrição do Agente: {agentDescription}</p>
        </>
    );
}

export default function DetailPage() {
    return (
        <Suspense fallback={<p>Carregando detalhes...</p>}>
            <DetailContent />
        </Suspense>
    );
}
