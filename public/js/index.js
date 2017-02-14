$(document).on('ready', function () {
  google.setOnLoadCallback(drawChart)
  function drawChart () {
    var data = google.visualization.arrayToDataTable([
      ['Media', 'GB'],
      ['Audio', 1100],
      ['Video', 460],
      ['Photo', 340],
      ['Other', 100]
    ])

    var options = {
      pieHole: 0.4,
      legend: 'none',
      pieSliceText: 'none',
      width: 220,
      height: 220,
      slices: {0: {color: '#4daf7b'}, 1: {color: '#e6623d'}, 2: {color: '#ebc85e'}, 3: {color: '#f4ede7'}},
      chartArea: {left: '10px', top: ' 10px', width: '92%', height: '92%'}
    }

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'))
    chart.draw(data, options)

    var data2 = google.visualization.arrayToDataTable([
      ['Month', 'Traffic'],
      ['June', 1100],
      ['July', 1580],
      ['August', 1300],
      ['September', 1430],
      ['October', 1430],
      ['November', 1930]
    ])

    var options2 = {
      width: 220,
      height: 220,
      legend: 'none',
      colors: ['#4daf7b'],
      chartArea: {
        left: 0,
        top: 0,
        width: '100%',
        height: '100%'},
      hAxis: {
        textPosition: 'none',
        gridlines: {color: '#fff'},
        baselineColor: '#4daf7b'},
      vAxis: {
        textPosition: 'none',
        gridlines: {color: '#fff'},
        baselineColor: '#4daf7b'}
    }

    var chart2 = new google.visualization.ColumnChart(document.getElementById('columnchart'))
    chart2.draw(data2, options2)
  }
})

var page = require('page')
require('./home')
page()

$.getJSON ('js/data.json', function ( data ) {
  $.each (data, function ( key, val ) {
    if (key === 'wiget') {
      var wiget = '<div class="col s8 push-s2"><div class="row"><div class="widget-container widget_avatar boxed"><div class="avatar-image"><img src="images/bg_user.png" alt=""/></div><div class="inner clearfix"><div class="avatar"><img src="' + val.img + '" alt=""/></div><h5>' + val.name + '</h5><span class="subtitle">' + val.description + '</span></div><div class="post-meta-links"><ul class="clearfix"><li class="post-view"><a href="#"><span><i aria-hidden="true" class="fa fa-eye"></i>' + val.data.view + '</span></a></li><li class="post-comm"><a href="#"><span><i aria-hidden="true" class="fa fa-comments"></i>' + val.data.comments +'</span></a></li><li class="post-like"><a href="#"><span><i aria-hidden="true" class="fa fa-heart"></i>' + val.data.like + '</span></a></li></ul></div></div></div></div>'

      $('.cont_json').append(wiget)
    }

    if (key === 'perfil') {
      var perfil = '<div class="col s6 push-s3"><div class="widget-container widget_profile widget_categories boxed"><div class="widget-title"><div class="avatar"><img src="' + val.img + '" alt=""/></div><h5>' + val.name + '</h5><span class="subtitle">' + val.followers + ' followers</span></div><div class="inner"><ul><li class="first"><a href="#" hidefocus="true" style="outline: none;"><span>Edit user</span><i aria-hidden="true" class="fa fa-user right"></i></a></li><li class="current-menu-item"><a href="#" hidefocus="true" style="outline: none;"><span>Web statistics</span><i aria-hidden="true" class="fa fa-bar-chart right"></i></a></li><li><a href="#" hidefocus="true" style="outline: none;"><span>Upload settings</span><i aria-hidden="true" class="fa fa-wrench right"></i></a></li><li class="last"><a href="#" hidefocus="true" style="outline: none;"><span>Events</span><i aria-hidden="true" class="fa fa-map-marker right"></i></a></li></ul></div></div></div>'
      $('.cont_json').append(perfil)
    }
  })
})


