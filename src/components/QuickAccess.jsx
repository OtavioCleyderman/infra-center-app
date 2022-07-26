import { Webcredito} from "../assets/svg/Webcredito"
import { R2d2 } from "../assets/svg/R2d2"
import { PortalAntiFraude } from "../assets/svg/PortalAntiFraude"
import { GrafanaCartoes } from "../assets/svg/GrafanaCartoes"
import { GrafanaPesquisaCPF } from "../assets/svg/GrafanaPesquisaCPF"
import { MaterialSuporte } from "../assets/svg/MaterialSuporte"
import { SiteSuporteLojas } from "../assets/svg/SiteSuporteLojas"
import { PlantaoInfra } from "../assets/svg/PlantaoInfra"
import { PortalPlanilhas } from "../assets/svg/PortalPlanilhas"


export function QuickAccess() {
  return (
    <div>
      <h2>Acesso rápido</h2>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <a href="https://www.google.com.br" target="_blank" rel="noopener noreferrer">
              <PlantaoInfra />  
            </a>
            <h5 className="text-center">Plantão Infra</h5>
          </div>

          <div className="col">
            <a href="https://www.google.com.br" target="_blank" rel="noopener noreferrer">
              <R2d2 />
            </a>
            <h5 className="text-center">R2D2 Chat</h5>
          </div>

          <div className="col">
            <a href="https://www.google.com.br" target="_blank" rel="noopener noreferrer">
              <Webcredito />
            </a>
            <h5 className="text-center">Webcrédito</h5>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <a href="https://www.google.com.br" target="_blank" rel="noopener noreferrer">
              <GrafanaCartoes />
            </a>
            <h5 className="text-center">Grafana Cartões</h5>
          </div>

          <div className="col">
            <a href="https://www.google.com.br" target="_blank" rel="noopener noreferrer">
              <GrafanaPesquisaCPF />
            </a>
            <h5 className="text-center">Grafana Pesquisa CPF</h5>
          </div>

          <div className="col">
            <a href="https://www.google.com.br" target="_blank" rel="noopener noreferrer">
              <MaterialSuporte />
            </a>
            <h5 className="text-center">Material Suporte</h5>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <a href="https://www.google.com.br" target="_blank" rel="noopener noreferrer">
              <SiteSuporteLojas />
            </a>
            <h5 className="text-center">Site Suporte Lojas</h5>
          </div>


          <div className="col">
            <a href="https://www.google.com.br" target="_blank" rel="noopener noreferrer">
              <PortalPlanilhas />
            </a>
            <h5 className="text-center">Portal Planilhas</h5>
          </div>

          <div className="col">
            <a href="https://www.google.com.br" target="_blank" rel="noopener noreferrer">
              <PortalAntiFraude />
            </a>
            <h5 className="text-center">Portal Antifraude</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
