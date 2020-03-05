class ViewController {

  init() {
    // Menu controller
    this.menu = document.getElementById('bark-header__menu-slider');
    this.menuController = document.getElementById('bark-header--toggle');

    // Modal controller
    this.modal = document.getElementById('bark-modal');
    this.modalControllers = document.getElementsByClassName('signup-modal');
    this.modalCloseController = document.getElementById('bark-modal__close-btn');

    // Responsive slider
    this.sliderBreakpoint = 767;
    this.sliderLgItems = document.getElementsByClassName('carousel-lg');
    this.sliderSmItems = document.getElementsByClassName('item-wrap');
    this.resizeTimer;
    this.screen = {
        width: window.screen.width,
        height: window.screen.height
    }
    this.updateSlider();

    this.addEventControllers();
  }

  addEventControllers() {
    window.onresize = this.windowResize;
    this.menuController.onclick = this.toggleSlide;
    this.modalCloseController.onclick = this.toggleModal;
    for(var i = 0; i < this.modalControllers.length; i++) this.modalControllers[i].onclick = this.toggleModal;
  }

  toggleSlide() {
    let menuClassString = vc.menu.className;
    let controllerClassString = vc.menuController.className;
    vc.menu.className = ! menuClassString.includes('slide-down') ? menuClassString.concat(' slide-down') : menuClassString.replace(' slide-down','');
    vc.menuController.className = ! controllerClassString.includes("close") ? controllerClassString.concat(" close") : controllerClassString.replace(' close','');
  }

  toggleModal() {
    let modalClassString = vc.modal.className;
    vc.modal.className = ! modalClassString.includes('fade-in') ? modalClassString.concat(' fade-in') : modalClassString.replace(' fade-in','');
  }

  windowResize() {
    clearTimeout(vc.resizeTimer);
    vc.resizeTimer = setTimeout(function() {
      vc.screen.width = window.screen.width;
      vc.screen.height = window.screen.height;
      vc.updateSlider();
    }, 250);
  }

  updateSlider() {

    if(this.screen.width >= this.sliderBreakpoint){
      // add carousel-item to sliderLgItems
      for(var i = 0; i < this.sliderLgItems.length; i++){
        let itemClassString = this.sliderLgItems[i].className;
        this.sliderLgItems[i].className = ! itemClassString.includes('carousel-item') ? itemClassString.concat(' carousel-item') : itemClassString;
      }
      // remove carousel-item from sliderSmItems
      for(var i = 0; i < this.sliderSmItems.length; i++){
        let itemClassString = this.sliderSmItems[i].className;
        this.sliderSmItems[i].className = ! itemClassString.includes('carousel-item') ? itemClassString : itemClassString.replace('carousel-item', '');
      }

    } else {
      // add carousel-item to sliderSmItems
      for(var i = 0; i < this.sliderSmItems.length; i++){
        let itemClassString = this.sliderSmItems[i].className;
        this.sliderSmItems[i].className = ! itemClassString.includes('carousel-item') ? itemClassString.concat(' carousel-item') : itemClassString;
      }
      // remove carousel-item from sliderLgItems
      for(var i = 0; i < this.sliderLgItems.length; i++){
        let itemClassString = this.sliderLgItems[i].className;
        this.sliderLgItems[i].className = ! itemClassString.includes('carousel-item') ? itemClassString : itemClassString.replace('carousel-item', '');
      }
    }

  }
}

const vc = new ViewController();
window.onload = vc.init();
