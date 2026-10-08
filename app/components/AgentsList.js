import React from 'react';
import Link from 'next/link';

export default function AgentsList({ agents }) {
    return (
        <div>
            {agents.map((agent) => (
                <div className="p-4" key={agent.uuid}>
                    <Link href={`/details/${agent.uuid}`}>
                        <div>
                            <h2>{agent.displayName}</h2>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}
