# Evidence 1ESPV/panicq-dev-fiap-webdev-cp5
hasGit: true
nextRoots: [
  {
    "pkgPath": "package.json",
    "dir": "/Volumes/externo/FIAP/corretor-avaliacoes/turmas/2026/checkpoint-5/1ESPV/panicq-dev-fiap-webdev-cp5",
    "next": "16.4.0",
    "axios": "^1.20.0",
    "react": "19.3.0",
    "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start",
      "lint": "eslint"
    }
  }
]
API: Valorant
components: 6 (em components/: 6)
- AgentsList @ app/components/AgentsList.js
- BreakStyle @ app/components/BreakStyle.js
- Description @ app/components/Description.js
- Footer @ app/components/Footer.js
- PhotoAgent @ app/components/PhotoAgent.js
- TitleComponent @ app/components/titleComponent.js

## axios (8)
app/details/[id]/page.js:4: import axios from 'axios';
app/details/[id]/page.js:20: const response = await axios.get(
app/services/page.js:2: import axios from "axios";
app/services/page.js:12: const res = await axios.get(
package-lock.json:11: "axios": "^1.20.0",
package-lock.json:2448: "node_modules/axios": {
package-lock.json:2450: "resolved": "https://registry.npmjs.org/axios/-/axios-1.20.0.tgz",
package.json:12: "axios": "^1.20.0",

## fetch (0)


## useState (4) / useEffect (4)
use client: 8
dynamic routes:
app/details/[id]/page.js
Link/useRouter: link=2 router=2

## Extras hints
useMemo=0 useCallback=0 useRef=0
localStorage=0
loadingHints=1 errorHints=1 searchHints=8

## Honeypots
nenhum

## Vercel links
https://fiap-webdev-cp5.vercel.app/
https://vercel.com/font
https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme

## Git commits: 10 branch=main
```
8	Laboratório FIAP <labsfiap@fiap.com.br>
     2	Gabriel Almeida <bielmdasantos@gmail.com>
```
```
43a0f3c Revise project link presentation in README
f9484bd Fix link to the Vercel deployment
ebc3dc9 feat: componentização
1571a73 feat: Descrevendo funções + comentários
536190c feat: Description Component
8bc19e0 feat: README.md
51b6155 fix: agent details
1101788 feat: detail-page
91199e1 feat: requisição get
33afa0d Initial Create
```

## README preview


Esse site é uma apresentação dos agentes do jogo "Valorant" da RIOT Games.
Os agentes são organizados em lista, conforme o clique no nome dos agentes, o usuário é redirecionado pra outra página com suas respectivas informações (ID do Agente, Nome do Agente, Descrição do Agente e Foto do Agente), aonde existe um botão que retorna a página principal.


Veja nosso projeto: [fiap-webdev-cp5-a6rvk9nsp.vercel.app](https://fiap-webdev-cp5.vercel.app/)
<br>
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser t

## Participantes preview
| `Diego Rayhan Jalhium Machado` | 569129 |
| `Gabriel Almeida dos Santos` | 573690 |
| `Kaue Tsuyoshi Horoiwa` | 571192 |