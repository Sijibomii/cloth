import Navigation from "./components/Navigation"
import Preloader from "./components/Preloader"
import Home from "./pages/Home"

class App {
  // entry point for the entire application
  constructor () {
  
    this.template = window.location.pathname
    // create preloader
    this.createPreloader()

    // create navigation
    this.createNavigation()

    this.createPages()


    // animations


  }

  createPreloader(){
    this.preloader = new Preloader({})
    
    this.preloader.once('completed', this.onPreloaded.bind(this))
  }

  createNavigation(){
    this.navigation = new Navigation({
      template: this.template 
    })
  }

  createPages () {   
    // wrapper
    this.home = new Home({  
      navigation: this.navigation, 
      transition: '',
      template: this.template
    })
    this.pages = {
      '/': this.home,
    }
    // here is where we set the pages by template
    this.page = this.pages[this.template]  
  }

  onPreloaded () { 
    this.page.show()  
  }

}

// new App();

