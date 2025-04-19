import { initHeaderMenu } from "./components/header-menu.js"
import { initBannerCarroussel } from "./components/banner-carrossel.js"
import { initLancamentosCarroussel } from "./components/lancamentos-carroussel.js"
import { initFooterAccordion } from "./components/footer-accordion.js"

document,addEventListener('DOMContentLoaded', () => {
   initHeaderMenu()
   initBannerCarroussel()
   initLancamentosCarroussel()
   initFooterAccordion()
})