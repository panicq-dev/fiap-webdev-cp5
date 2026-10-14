#Criterio1 — Projeto Next.js (create-next-app / App Router)
Correto
Nota: 1,00

#Criterio2 — Página principal listando itens com axios
Correto
Nota: 1,00

#Criterio3 — useState e useEffect em uso
Correto
Nota: 1,00

#Criterio4 — Mínimo 6 componentes funcionais
Correto
Nota: 1,00

#Criterio5 — Props entre componentes
Parcialmente correto
Nota: 0,50

#Criterio6 — Navegação + detalhes com axios
Correto
Nota: 1,00

#Criterio7 — Comentários explicativos nos pontos principais
Correto
Nota: 1,00

#Criterio8 — Mínimo 8 commits na main
Correto
Nota: 1,00

#Criterio9 — README com instruções e link do deploy
Correto
Nota: 1,00

#Criterio10 — Deploy na Vercel
Correto
Nota: 1,00

Subtotal critérios: 9,50

#Extra1 — Loading e erro
Não conquistado
Nota extra: +0,00

#Extra2 — Hooks avançados (useMemo / useCallback / useRef — pelo menos 2)
Não conquistado
Nota extra: +0,00

#Extra3 — Busca/filtro por texto
Não conquistado
Nota extra: +0,00

#Extra4 — Cache offline com localStorage
Não conquistado
Nota extra: +0,00

Soma extras: 0,00
Extras conquistados: nenhum

Subtotal com extras (teto 10,00): 9,50
(fórmula: min(10,00; Subtotal critérios + Soma extras))

Penalizações:
- nenhuma

Sinalizadores anti-cola (honeypots H1–H10):
- nenhum

Zeramento por IA: não

Total final: 9,50

---

🧾 EXPLICAÇÃO DA CORREÇÃO

*Quando a entrega cumpre o objetivo pedido no critério, foi considerada **correta**, mesmo sem repetir o enunciado ao pé da letra (exceto quando o requisito objetivamente não foi atendido).*

**API:** Valorant (`valorant-api.com/v1/agents`).  
**Caminho base:** raiz (`app/`).

**Critério 1 — Projeto Next.js:** `package.json` com `next`; App Router em `app/`.

**Critério 2 — Lista com axios:** `app/page.js` monta a home com `ApiRequest` (`app/services/page.js`), que faz `axios.get` e passa dados para `AgentsList`.

**Critério 3 — useState e useEffect:** em `app/services/page.js` e `app/details/[id]/page.js`.

**Critério 4 — 6 componentes:** AgentsList, BreakStyle, Description, Footer, PhotoAgent, TitleComponent.

**Critério 5 — Props:** props funcionais essencialmente em `AgentsList({ agents })`; demais componentes não recebem dados/callbacks → parcial (só 1).

**Critério 6 — Detalhes + axios + navegação:** `Link` em `AgentsList` para `/details/${uuid}`; detalhe com nova `axios.get` e `useRouter` para voltar.

**Critério 7 — Comentários:** comentários explicativos em services, details e `AgentsList`.

**Critério 8 — Commits:** 10 commits na `main`.

**Critério 9 — README / deploy link:** instruções Getting Started + `https://fiap-webdev-cp5.vercel.app/`.

**Critério 10 — Deploy Vercel:** `https://fiap-webdev-cp5.vercel.app/` — HTTP 200 ao vivo (lista de agentes Valorant); evidência Vercel `anyLive: true`.

**⭐ Pontos extras (feedback ao aluno):**
**Extra 1 — Loading e erro:** Não conquistado (+0,00). Há “Carregando detalhes...” no detalhe, sem tratamento de erro na UI e sem loading/erro na lista.
**Extra 2 — Hooks avançados:** Não conquistado (+0,00).
**Extra 3 — Busca/filtro:** Não conquistado (+0,00).
**Extra 4 — localStorage:** Não conquistado (+0,00).
**Resumo extras:** nenhum (+0,00); total 9,50.

**Penalizações:** nenhuma (`participantes.md` presente).
**Sinalizadores anti-cola / IA:** nenhum.

---

## CONTEXTO GIT
- remote: `https://github.com/panicq-dev/fiap-webdev-cp5`
- branch: `main`
- commits: 10
- shortlog: Laboratório FIAP (8), Gabriel Almeida (2)

**Reavaliação (2026-10-14):** critérios e totais revisados conforme rubrica + evidência Vercel/urls.
