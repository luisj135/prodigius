$(document).on('ready', function(){
	google.setOnLoadCallback(drawChart);
	function drawChart() {
	    var data = google.visualization.arrayToDataTable([
	        ['Media', 'GB'],
	        ['Audio', 1100],
	        ['Video', 460],
	        ['Photo', 340],
	        ['Other', 100]
	    ]);

	    var options = {
	        pieHole: 0.4,
	        legend: 'none',
	        pieSliceText: 'none',
	        width: 220,
	        height: 220,
	        slices: {0: {color: '#4daf7b'}, 1: {color: '#e6623d'}, 2: {color: '#ebc85e'}, 3: {color: '#f4ede7'}},
	        chartArea:{left:"10px", top:"10px", width:"92%", height:"92%"}
	    };

	    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
	    chart.draw(data, options);

	    var data2 = google.visualization.arrayToDataTable([
	        ['Month', 'Traffic'],
	        ['June',  1100],
	        ['July',  1580],
	        ['August',  1300],
	        ['September',  1430],
            ['October',  1430],
            ['November',  1930]
	    ]);

	    var options2 = {
	        width: 220,
	        height: 220,
	        legend: 'none',
	        colors: ['#4daf7b'],
	        chartArea:{left:0, top:0, width:"100%", height:"100%"},
	        hAxis:{textPosition:"none", gridlines:{color:"#fff"}, baselineColor:"#4daf7b"},
	        vAxis:{textPosition:"none", gridlines:{color:"#fff"}, baselineColor:"#4daf7b"}
	    };

	    var chart2 = new google.visualization.ColumnChart(document.getElementById('columnchart'));
	    chart2.draw(data2, options2);
	}
});

var page = require('page');
var yo = require('yo-yo');
var main = document.getElementById('main-controller');
page('/', function (ctx, next) {
	
	var html = yo`<div class="container">
          <div class="row">
            <div class="col s10 push-s1">
              <div class="row">
                <div class="col s12 m12">
                  <div class="row">
                    <h1 class="title_gen center">Metro Vibes Prodigius</h1>
                    <nav class="nav-extended menu_pri">
                      <div class="nav-content">
                        <ul class="tabs tabs-transparent">
                          <li class="tab"><a href="#test1"><i aria-hidden="true" class="fa fa-map-marker"></i><span>check in</span><span class="badge">4</span></a></li>
                          <li class="tab"><a href="#test2"><i aria-hidden="true" class="fa fa-heart"></i><span>events</span></a></li>
                          <li class="tab"><a href="#test3" class="active"><i aria-hidden="true" class="fa fa-user"></i><span>account</span></a></li>
                          <li class="tab"><a href="#"><i aria-hidden="true" class="fa fa-cog"></i><span>settings</span></a></li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                  <div class="col s8 push-s2">
                    <div class="row diagram_stats">
                      <nav class="nav-extended">
                        <div class="nav-content">
                          <ul class="tabs tabs-transparent">
                            <li class="tab"><a href="#diagram" class="active">Diagram Stats</a></li>
                            <li class="tab"><a href="#month">Month Report</a></li>
                          </ul>
                        </div>
                      </nav>
                      <div id="diagram" class="col s12">
                        <div id="data_transfer" class="tab-pane fade">
                          <div class="row">
                            <div class="col s5 push-s3 center">
                              <h6>Data Transfer</h6>
                              <div id="donutchart" class="donutchart right"></div>
                            </div>
                          </div>
                          <ul class="stats-data clearfix">
                            <li><a href="#"><span>audio</span><strong>55%</strong></a></li>
                            <li class="reds"><a href="#"><span>video</span><strong>23%</strong></a></li>
                            <li class="yellow"><a href="#"><span>photo</span><strong>17%</strong></a></li>
                          </ul>
                          <ul class="stats-links clearfix">
                            <li><a href="#"><i aria-hidden="true" class="fa fa-cloud-upload center"></i> <span>upload files</span></a></li>
                            <li><a href="#"><i aria-hidden="true" class="fa fa-share-alt center"></i> <span>share link</span></a></li>
                            <li><a href="#"><i aria-hidden="true" class="fa fa-refresh center"></i> <span>back up</span></a></li>
                          </ul>
                        </div>
                      </div>
                      <div id="month" class="col s12">
                        <div id="data_cart" class="tab-pane fade">
                          <div class="row">
                            <div class="col s5 push-s3 center">
                              <h6>Data chart</h6>
                              <div id="columnchart" class="columnchart"></div>
                            </div>
                          </div>
                          <ul class="stats-data clearfix">
                            <li><a href="#"><span>audio</span><strong>56%</strong></a></li>
                            <li class="reds"><a href="#"><span>video</span><strong>66%</strong></a></li>
                            <li class="yellow"><a href="#"><span>photo</span><strong>68%</strong></a></li>
                          </ul>
                          <ul class="stats-links clearfix">
                            <li><a href="#"><i aria-hidden="true" class="fa fa-cloud-upload center"></i> <span>upload files</span></a></li>
                            <li><a href="#"><i aria-hidden="true" class="fa fa-share-alt center"></i> <span>share link</span></a></li>
                            <li><a href="#"><i aria-hidden="true" class="fa fa-refresh center"></i> <span>back up</span></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col s8 push-s2">
                    <div class="row">
                      <div class="widget-container widget_avatar boxed">
                        <div class="avatar-image"><img src="images/bg_user.png" alt=""/></div>
                        <div class="inner clearfix">
                          <div class="avatar"><img src="images/bg_user_der.png" alt=""/></div>
                          <h5>John Raymons</h5><span class="subtitle">Your talent amazes! This is awesome. Excited to see the final product.</span>
                        </div>
                        <div class="post-meta-links">
                          <ul class="clearfix">
                            <li class="post-view"><a href="#"><span><i aria-hidden="true" class="fa fa-eye"></i>172</span></a></li>
                            <li class="post-comm"><a href="#"><span><i aria-hidden="true" class="fa fa-comments"></i>34</span></a></li>
                            <li class="post-like"><a href="#"><span><i aria-hidden="true" class="fa fa-heart"></i>210</span></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col s6 push-s3">
                    <div class="widget-container widget_profile widget_categories boxed">
                      <div class="widget-title">
                        <div class="avatar"><img src="images/bg_user_iz.png" alt=""/></div>
                        <h5>Courtney Timmons</h5><span class="subtitle">15,323 followers</span>
                      </div>
                      <div class="inner">
                        <ul>
                          <li class="first"><a href="#" hidefocus="true" style="outline: none;"><span>Edit user</span><i aria-hidden="true" class="fa fa-user right"></i></a></li>
                          <li class="current-menu-item"><a href="#" hidefocus="true" style="outline: none;"><span>Web statistics</span><i aria-hidden="true" class="fa fa-bar-chart right"></i></a></li>
                          <li><a href="#" hidefocus="true" style="outline: none;"><span>Upload settings</span><i aria-hidden="true" class="fa fa-wrench right"></i></a></li>
                          <li class="last"><a href="#" hidefocus="true" style="outline: none;"><span>Events</span><i aria-hidden="true" class="fa fa-map-marker right"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
	console.log(html);
	main.appendChild(html);
})

page();

// if (!window.Intl) {
//     window.Intl = require('intl'); // polyfill for `Intl`
// }
// var IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat');
// require('intl-relativeformat/dist/locale-data/en.js');
// require('intl-relativeformat/dist/locale-data/es.js');

// var rf = new IntlRelativeFormat('es');



