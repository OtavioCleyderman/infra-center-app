import { MenuNavigation } from "../../components/MenuNavigation"
import { CarouselFade } from "../../components/CarouselFade"
import { LastNews } from "../../components/LastNews"
import { Container } from "./styles"
import { QuickAccess } from "../../components/QuickAccess"

export function Home() {
  return (
    <>
      <MenuNavigation />
      <CarouselFade />
      <Container>
        <LastNews />
        <QuickAccess />
      </Container>
    </>
  )
}