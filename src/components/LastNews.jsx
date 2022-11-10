import { Span, Summary, Container } from "./styles/styleLastNews"

export function LastNews() {
  return (
    <Container>
      <h2>
        Últimas notícias 
        <Span>
          <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-newspaper" viewBox="0 0 16 16">
          <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"/>
          <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"/>
          </svg>
        </Span> 
      </h2>
      <details>
        <Summary>
          Servidor 022 em manutenção
        </Summary>
        <p>O servidor 022 entrou em manutenção, todos os seus serviços estão rodando normalmente pelo servidor alternativo. Em caso de algum problema acionar os responsáveis pela manutenção e acompanhamento @Teros e @Evo.</p>
      </details>
      <details>
        <Summary>
          Iniciado a migração para a nuvem dos servidores 10, 11 e 12!
        </Summary>
        <p>Processo ocorrerá durante a madrugada entre os dias 10 e 15 de novembro. Qualquer problema nesses servidores, resportar a equipe de @infra</p>
      </details>
      <details>
        <Summary>
          Problema de rede nas filiais resolvido!
        </Summary>
        <p>Foi identificado e corrigido o problema na rede das filiais. Rede normal e com alto desempenho após a correção.</p>
      </details>
    </Container>
  )
}