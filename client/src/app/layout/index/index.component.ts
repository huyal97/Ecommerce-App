import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ScriptService } from './script.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class IndexComponent implements OnInit {
//   url : string[] = ["https://js.stripe.com/v3/",'assets/plugins/jquery/dist/jquery.min.js','assets/plugins/bootstrap/dist/js/bootstrap.min.js',
//   "assets/plugins/jquery-bar-rating/dist/jquery.barrating.min.js,assets/plugins/owl-carousel/owl.carousel.min.js",
//   "assets/plugins/gmap3.min.js","assets/plugins/imagesloaded.pkgd.js","assets/plugins/isotope.pkgd.min.js",
//   "assets/plugins/bootstrap-select/dist/js/bootstrap-select.min.js","assets/plugins/jquery.matchHeight-min.js",
//   "assets/plugins/slick/slick/slick.min.js","assets/plugins/elevatezoom/jquery.elevatezoom.js",
//   "assets/plugins/Magnific-Popup/dist/jquery.magnific-popup.min.js","assets/plugins/jquery-ui/jquery-ui.min.js",
//   "https://maps.googleapis.com/maps/api/js?key=AIzaSyAx39JFH5nhxze1ZydH-Kl8xXM3OK4fvcg&amp;region=GB",
//   "plugins/revolution/js/jquery.themepunch.tools.min.js","assets/plugins/revolution/js/jquery.themepunch.revolution.min.js",
//   "assets/plugins/revolution/js/extensions/revolution.extension.video.min.js","assets/plugins/revolution/js/extensions/revolution.extension.slideanims.min.js",
//   "assets/plugins/revolution/js/extensions/revolution.extension.layeranimation.min.js","assets/plugins/revolution/js/extensions/revolution.extension.navigation.min.js",
//   "assets/plugins/revolution/js/extensions/revolution.extension.parallax.min.js","assets/plugins/revolution/js/extensions/revolution.extension.actions.min.js",
//   "assets/plugins/revolution/js/extensions/revolution.extension.kenburn.min.js","assets/plugins/revolution/js/extensions/revolution.extension.migration.min.js",
//   "assets/js/main.js"
// ];

  loadAPI: Promise<any>;
  constructor(private script : ScriptService) { }

  ngOnInit(): void {
  //   this.loadAPI = new Promise((resolve) => {
  //     console.log('resolving promise...');
  //     this.loadScript();
  // });

  }
  // public loadScript() {
  //   this.url.forEach(url => {
  //   console.log('preparing to load...')
  //   let node = document.createElement('script');
  //   node.src = url;
  //   node.type = 'text/javascript';
  //   node.async = true;
  //   node.charset = 'utf-8';
  //   document.getElementsByTagName('body')[0].appendChild(node);

  //   });



}
