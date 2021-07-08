import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExternalScriptService {
  urlList:string[]  = ["assets/plugins/jquery/dist/jquery.min.js",
  "assets/plugins/bootstrap/dist/js/bootstrap.min.js",
  "assets/plugins/jquery-bar-rating/dist/jquery.barrating.min.js",
  "assets/plugins/owl-carousel/owl.carousel.min.js",
  "assets/plugins/gmap3.min.js",
  "assets/plugins/imagesloaded.pkgd.js",
  "assets/plugins/isotope.pkgd.min.js",
  "assets/plugins/bootstrap-select/dist/js/bootstrap-select.min.js",
  "assets/plugins/jquery.matchHeight-min.js",
  "assets/plugins/slick/slick/slick.min.js",
  "assets/plugins/elevatezoom/jquery.elevatezoom.js",
  "assets/plugins/Magnific-Popup/dist/jquery.magnific-popup.min.js",
  "assets/plugins/revolution/js/jquery.themepunch.tools.min.js",
  "assets/plugins/revolution/js/jquery.themepunch.revolution.min.js",
  "assets/plugins/revolution/js/extensions/revolution.extension.video.min.js",
  "assets/plugins/revolution/js/extensions/revolution.extension.slideanims.min.js",
  "assets/plugins/revolution/js/extensions/revolution.extension.layeranimation.min.js",
  "assets/plugins/revolution/js/extensions/revolution.extension.navigation.min.js",
  "assets/plugins/revolution/js/extensions/revolution.extension.parallax.min.js",
  "assets/plugins/revolution/js/extensions/revolution.extension.actions.min.js",
  "assets/plugins/revolution/js/extensions/revolution.extension.kenburn.min.js",
  "assets/plugins/revolution/js/extensions/revolution.extension.migration.min.js",
  "assets/js/main.js"];

  constructor() {


  }

  public loadAllUrl(){

    this.urlList.forEach(element => {
      this.loadJsFile(element);
    });

  }

  private loadJsFile(url:string) {

    if (document.querySelector(`script[src*="${url}"]`) ==null) {
      let body = <HTMLDivElement> document.head;
            let script = document.createElement('script');
            script.innerHTML = '';
            script.src = url;
            script.id = url;
            script.async = false;
            script.defer = true;
            body.appendChild(script);
    }



  }
}
