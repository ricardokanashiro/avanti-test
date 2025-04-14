const initLancamentosCarroussel = () => {
   const emblaNode = document.querySelector('.embla')
   const options = { loop: false }
   const emblaApi = EmblaCarousel(emblaNode, options)

   const prevBtn = document.querySelector('.embla-wrapper__prev-btn')
   const nextBtn = document.querySelector('.embla-wrapper__next-btn')

   prevBtn.addEventListener('click', () => emblaApi.scrollPrev())
   nextBtn.addEventListener('click', () => emblaApi.scrollNext())
}

export { initLancamentosCarroussel }