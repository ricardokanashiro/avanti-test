const initLancamentosCarroussel = () => {
   const emblaWrappers = document.querySelectorAll('.embla-wrapper')
   const options = { loop: false }

   emblaWrappers.forEach(wrapper => {
      const emblaNode = wrapper.querySelector('.embla')
      const emblaApi = EmblaCarousel(emblaNode, options)
      
      const prevBtn = wrapper.querySelector('.embla-wrapper__prev-btn')
      const nextBtn = wrapper.querySelector('.embla-wrapper__next-btn')
   
      prevBtn.addEventListener('click', () => emblaApi.scrollPrev())
      nextBtn.addEventListener('click', () => emblaApi.scrollNext())
   })
}

export { initLancamentosCarroussel }