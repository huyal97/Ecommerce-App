import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  url : string[] = [
    "assets/adminpanel/plugins/jquery/jquery.min.js","assets/adminpanel/plugins/jquery-ui/jquery-ui.min.js",
  "assets/adminpanel/plugins/bootstrap/js/bootstrap.bundle.min.js","assets/adminpanel/plugins/chart.js/Chart.min.js",
  "assets/adminpanel/plugins/sparklines/sparkline.js",
  "assets/adminpanel/plugins/jqvmap/jquery.vmap.min.js","assets/adminpanel/plugins/jqvmap/maps/jquery.vmap.usa.js",
  "assets/adminpanel/plugins/jquery-knob/jquery.knob.min.js",
  "assets/adminpanel/plugins/moment/moment.min.js","assets/adminpanel/plugins/daterangepicker/daterangepicker.js",
  "assets/adminpanel/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js",
  "assets/adminpanel/plugins/summernote/summernote-bs4.min.js","assets/adminpanel/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js",
  "assets/adminpanel/dist/js/adminlte.js",
  "assets/adminpanel/dist/js/demo.js","assets/adminpanel/dist/js/pages/dashboard.js"
];

  loadAPI: Promise<any>;
  constructor() { }


  ngOnInit(): void {
    this.loadAPI = new Promise((resolve) => {
     console.log('resolving promise...');
       this.loadScript();
   });


  }
  public loadScript() {
    this.url.forEach(url => {
    console.log('preparing to load...')
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('body')[0].appendChild(node);

    });

}

}
