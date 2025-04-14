import { initHeaderMenu } from "./components/header-menu.js"
import { initBannerCarroussel } from "./components/banner-carrossel.js"
import { initLancamentosCarroussel } from "./components/lancamentos-carroussel.js"

document,addEventListener('DOMContentLoaded', () => {
   initHeaderMenu()
   initBannerCarroussel()
   initLancamentosCarroussel()
})