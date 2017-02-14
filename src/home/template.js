
var yo = require('yo-yo')
var translate = require('../translate')

module.exports = yo`<div class="container">
          <div class="row">
            <div class="col s10 push-s1">
              <div class="row">
                <div class="col s12 m12">
                  <div class="row">
                    <h1 class="title_gen center">Metro Vibes Prodigius</h1>
                    <nav class="nav-extended menu_pri">
                      <div class="nav-content">
                        <ul class="tabs tabs-transparent">
                          <li class="tab"><a href="#test1"><i aria-hidden="true" class="fa fa-map-marker"></i><span>${translate.message('check_in')}</span><span class="badge">4</span></a></li>
                          <li class="tab"><a href="#test2"><i aria-hidden="true" class="fa fa-heart"></i><span>${translate.message('events')}</span></a></li>
                          <li class="tab"><a href="#test3" class="active"><i aria-hidden="true" class="fa fa-user"></i><span>${translate.message('account')}</span></a></li>
                          <li class="tab"><a href="#"><i aria-hidden="true" class="fa fa-cog"></i><span>${translate.message('settings')}</span></a></li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                  <div class="col s8 push-s2">
                    <div class="row diagram_stats">
                      <nav class="nav-extended">
                        <div class="nav-content">
                          <ul class="tabs tabs-transparent">
                            <li class="tab"><a href="#diagram" class="active">${translate.message('diagram_stats')}</a></li>
                            <li class="tab"><a href="#month">${translate.message('month_report')}</a></li>
                          </ul>
                        </div>
                      </nav>
                      <div id="diagram" class="col s12">
                        <div id="data_transfer" class="tab-pane fade">
                          <div class="row">
                            <div class="col s5 push-s3 center">
                              <h6>${translate.message('data_transfer')}</h6>
                              <div id="donutchart" class="donutchart right"></div>
                            </div>
                          </div>
                          <ul class="stats-data clearfix">
                            <li><a href="#"><span>${translate.message('audio')}</span><strong>55%</strong></a></li>
                            <li class="reds"><a href="#"><span>${translate.message('video')}</span><strong>23%</strong></a></li>
                            <li class="yellow"><a href="#"><span>${translate.message('photo')}</span><strong>17%</strong></a></li>
                          </ul>
                          <ul class="stats-links clearfix">
                            <li><a href="#"><i aria-hidden="true" class="fa fa-cloud-upload center"></i> <span>${translate.message('upload')}</span></a></li>
                            <li><a href="#"><i aria-hidden="true" class="fa fa-share-alt center"></i> <span>${translate.message('shared_link')}</span></a></li>
                            <li><a href="#"><i aria-hidden="true" class="fa fa-refresh center"></i> <span>${translate.message('back_up')}</span></a></li>
                          </ul>
                        </div>
                      </div>
                      <div id="month" class="col s12">
                        <div id="data_cart" class="tab-pane fade">
                          <div class="row">
                            <div class="col s5 push-s3 center">
                              <h6>${translate.message('data_chart')}</h6>
                              <div id="columnchart" class="columnchart"></div>
                            </div>
                          </div>
                          <ul class="stats-data clearfix">
                            <li><a href="#"><span>${translate.message('audio')}</span><strong>80%</strong></a></li>
                            <li class="reds"><a href="#"><span>${translate.message('video')}</span><strong>5%</strong></a></li>
                            <li class="yellow"><a href="#"><span>${translate.message('photo')}</span><strong>15%</strong></a></li>
                          </ul>
                          <ul class="stats-links clearfix">
                            <li><a href="#"><i aria-hidden="true" class="fa fa-cloud-upload center"></i> <span>${translate.message('upload')}</span></a></li>
                            <li><a href="#"><i aria-hidden="true" class="fa fa-share-alt center"></i> <span>${translate.message('shared_link')}</span></a></li>
                            <li><a href="#"><i aria-hidden="true" class="fa fa-refresh center"></i> <span>${translate.message('back_up')}</span></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cont_json">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`
