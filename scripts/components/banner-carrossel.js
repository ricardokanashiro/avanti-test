import Glide from "@glidejs/glide"

const initBannerCarroussel = () => {
   
   const slider = new Glide('.banner-carroussel-glide', {
      type: 'carousel',
      autoplay: 4000,
      hoverpause: true,
      animationDuration: 800,
      perView: 1
    })
    
    slider.mount()
}

export { initBannerCarroussel }