const initBannerCarroussel = () => {
   
   const slider = new Glide('.glide', {
      type: 'carousel',
      // autoplay: 4000,
      hoverpause: true,
      animationDuration: 800,
      perView: 1
    })
    
    slider.mount()
}

export { initBannerCarroussel }