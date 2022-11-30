import { MenuNavigation } from "../../components/MenuNavigation"
import { CarouselFade } from "../../components/CarouselFade"
import { LastNews } from "../../components/LastNews"
import { Container , ContentText} from "./styles"
import { QuickAccess } from "../../components/QuickAccess"


export function Home() {
  return (
    <>
    <MenuNavigation />
      <Container>
        <CarouselFade />
        <ContentText>
          <LastNews />
          <QuickAccess />
        </ContentText>
      </Container>
    </>
  )
}