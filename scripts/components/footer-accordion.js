const initFooterAccordion = () => {

   const accordionItems = document.querySelectorAll('.mobile-accordion__item')

   accordionItems.forEach(item => item.addEventListener('click', (event) => {

      const itemJaAtivo = document.querySelector('.mobile-accordion__item--ativo')

      if(itemJaAtivo && itemJaAtivo !== event.currentTarget) {
         itemJaAtivo.classList.remove('mobile-accordion__item--ativo')
      }

      event.currentTarget.classList.toggle('mobile-accordion__item--ativo')
   }))
}

export { initFooterAccordion }