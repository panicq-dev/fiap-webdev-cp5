import React from 'react';
import Link from "next/link";

export default function AgentsList({ agents }) {
    return (
        <div>
            {agents.map((agent) => {
                const params = new URLSearchParams({
                    id: agent.uuid,
                    name: agent.displayName,
                    description: agent.description,
                });

                return (
                    <Link href={`/details/${agent.uuid}?${params.toString()}`} key={agent.uuid}>
                        <div>
                            <h2>{agent.displayName}</h2>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
