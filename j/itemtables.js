var tableapi = 0;
var newsMode = 0;    

function downloadStringAsFile(csvVar, filename) {
  var textFileAsBlob = new Blob(['\ufeff' + csvVar], {type:'text/plain'});
  var fileNameToSaveAs = filename;
  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  if (window.URL != null){
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
  } else {
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }
  downloadLink.click();
}

function tryClear(s) {
  if (s.match(/^[\s\d,]*? [ÑˆÑ‚\.Ñ€ÐµÐ´]*$/)) {
    os = '';    
    while (os != s) {
      os = s;
      s = s.replace('ÑˆÑ‚.', '')
           .replace('ÐµÐ´.', '')
           .replace('Ñ€ÑƒÐ±.', '')
           .replace('Ñ€.', '')
           .replace('ÑˆÑ‚', '')
           .replace('ÐµÐ´', '')
           .replace('Ñ€ÑƒÐ±', '')
           .replace('Ñ€', '')
           .replace('Ñ€.', '')
           .trim()
           ;
    }
  }
  if (s == 'â€”')
    s = '';
  if ((s.match(/^[\d]+\s[\d]+$/)) || (s.match(/^[\d]+\s[\d]+\s[\d]+$/))) {
    os = '';    
    while (os != s) {
      os = s;
      s = s.replace(/\s/, '')
           ;
    }
  }
  return s;
}

function initCSVDownloadButtons() {
  $('.livedownload').on('click', function () {
    csvVar='';    
    filename = $(this).parents('.tab-pane').attr('csvname');
    if (typeof(filename) == 'undefined') {
      filename = $(this).data('filename');
      if (typeof(filename) == 'undefined') {
        filename = 'downloadfile.csv';
      }
    }
    var nextrowsscips = [];
    var newrowsscrips = [];
    $(this).parent().parent().find('table tr').each(function(){
      if (!$(this).hasClass('skipexport')) {
        newrowsscrips = [];
        var len=$(this).find('td,th').length;
        i=0;
        $(this).find('td,th').each(function() {
          var cell=$(this);
          var cs = cell.attr('colspan');
          cs = cs ^ 0;
          if (cs==0) cs=1;
          var rs = cell.attr('rowspan');
          rs = rs ^ 0;
          if (rs==0) rs=1;
          
          t=cell.text();
          if (nextrowsscips.indexOf(i) !== -1) 
            csvVar += ';';
          if(t.indexOf(';')>0)
            csvVar+=tryClear(t.replace(';','\;'));
          else
            csvVar+=tryClear(t);
          if(i+1<len)
            csvVar+=';';
          for (var j=1; j<cs; j++) {
            i++;
            csvVar+=';';
          }
          if (rs > 1)
            newrowsscrips.push(i);
          i++;
        });
        csvVar+='\n';
        nextrowsscips = newrowsscrips;
      }
    });    
    downloadStringAsFile(csvVar, filename);
  });
}


function initItemsTable(cat, path, d1, d2) {
  initCSVDownloadButtons();
  ornum=10;
  cols =  [
            { "data": "photo", name:'photo', orderable: false},
            { "data": "name", name:'nme' },
            { "data": "cat", name: 'cat' }];
  if (cat != 'bybrand')
    cols.push({ "data": "brnd", name: 'brnd' });
  else ornum = 9;
  if (cat != 'byseller')
    cols.push({ "data": "seller", name: 'seller' });
  else ornum = 9;
  cols.push({ "data": "delscheme" , name: 'delscheme', width: 40},
            { "data": "count", name: 'count', className: 'number', render: $.fn.dataTable.render.number('&nbsp;', '.', 0, '', ''), width: 40},
            { "data": "comments", name: 'comments', className: 'number', render: $.fn.dataTable.render.number('&nbsp;', '.', 0, '', '&nbsp;'), width: 40},
            { "data": "prfin", name: 'prfin', className: 'number', render: $.fn.dataTable.render.number('&nbsp;', '.', 0, '', '&nbsp;Ñ€.'), width: 40},
            { "data": "sellscount", name: 'sellscount', className: 'number', render: $.fn.dataTable.render.number('&nbsp;', '.', 0, '', ''), width: 50},
            { "data": "sellssum", name: 'sellssum', className: 'number', render: $.fn.dataTable.render.number('&nbsp;', '.', 0, '', '&nbsp;Ñ€.')},
            { "data": "graph", name: 'graph',  "orderable": false, width: 40}
        );
  
  tableapi = $('#example').DataTable( {
        'language': {thousands:' ', "processing":"","search":"ÐŸÐ¾Ð¸ÑÐº:","lengthMenu":"ÐŸÐ¾ÐºÐ°Ð·Ð°Ñ‚ÑŒ _MENU_ Ð·Ð°Ð¿Ð¸ÑÐµÐ¹","info":"Ð—Ð°Ð¿Ð¸ÑÐ¸ Ñ _START_ Ð´Ð¾ _END_ Ð¸Ð· _TOTAL_ Ð·Ð°Ð¿Ð¸ÑÐµÐ¹","infoEmpty":"Ð—Ð°Ð¿Ð¸ÑÐ¸ Ñ 0 Ð´Ð¾ 0 Ð¸Ð· 0 Ð·Ð°Ð¿Ð¸ÑÐµÐ¹","infoFiltered":"(Ð¾Ñ‚Ñ„Ð¸Ð»ÑŒÑ‚Ñ€Ð¾Ð²Ð°Ð½Ð¾ Ð¸Ð· _MAX_ Ð·Ð°Ð¿Ð¸ÑÐµÐ¹)","infoPostFix":"","loadingRecords":"Ð—Ð°Ð³Ñ€ÑƒÐ·ÐºÐ° Ð·Ð°Ð¿Ð¸ÑÐµÐ¹...","zeroRecords":"Ð—Ð°Ð¿Ð¸ÑÐ¸ Ð¾Ñ‚ÑÑƒÑ‚ÑÑ‚Ð²ÑƒÑŽÑ‚.","emptyTable":"Ð’ Ñ‚Ð°Ð±Ð»Ð¸Ñ†Ðµ Ð¾Ñ‚ÑÑƒÑ‚ÑÑ‚Ð²ÑƒÑŽÑ‚ Ð´Ð°Ð½Ð½Ñ‹Ðµ","paginate":{"first":"ÐŸÐµÑ€Ð²Ð°Ñ","previous":"ÐŸÑ€ÐµÐ´Ñ‹Ð´ÑƒÑ‰Ð°Ñ","next":"Ð¡Ð»ÐµÐ´ÑƒÑŽÑ‰Ð°Ñ","last":"ÐŸÐ¾ÑÐ»ÐµÐ´Ð½ÑÑ"},"aria":{"sortAscending":": Ð°ÐºÑ‚Ð¸Ð²Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ð´Ð»Ñ ÑÐ¾Ñ€Ñ‚Ð¸Ñ€Ð¾Ð²ÐºÐ¸ ÑÑ‚Ð¾Ð»Ð±Ñ†Ð° Ð¿Ð¾ Ð²Ð¾Ð·Ñ€Ð°ÑÑ‚Ð°Ð½Ð¸ÑŽ","sortDescending":": Ð°ÐºÑ‚Ð¸Ð²Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ð´Ð»Ñ ÑÐ¾Ñ€Ñ‚Ð¸Ñ€Ð¾Ð²ÐºÐ¸ ÑÑ‚Ð¾Ð»Ð±Ñ†Ð° Ð¿Ð¾ ÑƒÐ±Ñ‹Ð²Ð°Ð½Ð¸ÑŽ"},"select":{"rows":{"0":"ÐšÐ»Ð¸ÐºÐ½Ð¸Ñ‚Ðµ Ð¿Ð¾ Ð·Ð°Ð¿Ð¸ÑÐ¸ Ð´Ð»Ñ Ð²Ñ‹Ð±Ð¾Ñ€Ð°","1":"Ð’Ñ‹Ð±Ñ€Ð°Ð½Ð° Ð¾Ð´Ð½Ð° Ð·Ð°Ð¿Ð¸ÑÑŒ","_":"Ð’Ñ‹Ð±Ñ€Ð°Ð½Ð¾ Ð·Ð°Ð¿Ð¸ÑÐµÐ¹: %d"}}},
        'serverSide': true,
        'lengthChange': true,
        'lengthMenu': [ 10, 25, 50, 75, 100, 500 ],
        'processing': false,
        'searching': false,
        "dom": 'rt<"row mlr20"<"col-6 col-lg-3"l><"col-6 col-lg-3"i><"col-12 col-lg-6 text-right"p>>',
//        'scrollX': $("#itemsfilters").width() < 1500,
        'pageLength': 25,
        'responsive': true,
        'ajax': {
          url : "/getozondata?type=category&path="+encodeURIComponent(path),
          data: function(data) {
              flt = {};
              
              $(".filterarea.getdata select[data-field], .filterarea.getdata input[data-field]").each(function (t) {
                if ($(this).attr('type') == 'checkbox') {
                  flt[$(this).data('field')] = $(this).is(':checked');
                } else {
                  flt[$(this).data('field')] = $(this).val();
                }
              });
              data.d1 = d1;
              data.d2 = d2;
              data.section = cat;
              data.filter = flt;
           }
        },
        'order': [[ornum, 'desc']],
        'columns': cols    
      } );
    
  tableapi.on('draw', function () {
    if ($("#items").is(':visible')) {
      $(".linecustom").sparkline("html", {type:"bar",barColor:App.color.success, barSpacing: 1});
      sparkShowed = 1;
    } else {sparkShowed=0;}
  });
  $('<div class="row"><div class="col-12 text-right"><a href="#" id="downloadButton" class="btn btn-warning">Ð¡ÐºÐ°Ñ‡Ð°Ñ‚ÑŒ CSV</a></div>').appendTo("#example_wrapper");
  
  $('.filterarea.getdata input, .filterarea.getdata select').change( function() {    
    tableapi.draw();
  });  
  try {
    new $.fn.dataTable.FixedHeader(tableapi , {headerOffset: 60});
  } catch (err) {
  }
  tableapi.on('processing.dt', function (e, settings, processing) {
    if (processing) {
      $("#loading").addClass("be-loading-active");
    } else {
      $("#loading").removeClass("be-loading-active");
    }
  });  
  $("#downloadButton").on('click', function () {
    flt = {};
    $(".filterarea select[data-field], .filterarea input[data-field]").each(function (t) {
      if ($(this).attr('type') == 'checkbox') {
        flt[$(this).data('field')] = $(this).is(':checked');
      } else {
        flt[$(this).data('field')] = $(this).val();
      }
    });
    url = "/getozondata?type=category&mode=csv&path="+encodeURIComponent(path)+'&section='+cat+'&d1='+d1+'&d2='+d2+'&filter='+encodeURIComponent(JSON.stringify(flt));
    window.open(url);
    return false;
  });  
}

function initItemsWBTable(cat, path, d1, d2) {
  initCSVDownloadButtons();
  var cols =  [];
  if (cat == 'bysearch') {
    cols.push({ "data": "pos", name:'pos'});
  }
  cols.push({ "data": "photo", name:'photo', orderable: false});
  cols.push({ "data": "name", name:'nme' });
  cols.push({ "data": "clr", name: 'clr' });
  cols.push({ "data": "cat", name: 'cat' });
  if (cat != 'bybrand')
    cols.push({ "data": "brnd", name: 'brnd' });
  cols.push({ "data": "count", name: 'count', className: 'number', render: $.fn.dataTable.render.number('&nbsp;', '.', 0, '', '')},
            { "data": "comments", name: 'comments', className: 'number', render: $.fn.dataTable.render.number('&nbsp;', '.', 0, '', '&nbsp;')},
            { "data": "rating", name: 'rating', className: 'number', render: $.fn.dataTable.render.number('&nbsp;', '.', 0, '', '&nbsp;')},
            { "data": "prfin", name: 'prfin', className: 'number', render: $.fn.dataTable.render.number('&nbsp;', '.', 0, '', '&nbsp;Ñ€.')},
            { "data": "daysavail", name: 'daysavail', className: 'number', render: $.fn.dataTable.render.number('&nbsp;', '.', 0, '', '')},
            { "data": "sellscount", name: 'sellscount', className: 'number', render: $.fn.dataTable.render.number('&nbsp;', '.', 0, '', '')},
            { "data": "sellssum", name: 'sellssum', className: 'number', render: $.fn.dataTable.render.number('&nbsp;', '.', 0, '', '&nbsp;Ñ€.')},
            { "data": "graph", name: 'graph',  "orderable": false, width: 40}
        );
  srtc = 9;
  srto = 'desc';
  if (cat == 'bysearch') {
    srtc = 0;
    srto = 'asc';
  }
  if (cat == 'bycategory')
    srtc = 11;
  if (cat == 'bybrand')
    srtc = 10;
  tableapi = $('#example').DataTable( {
        'language': {thousands:' ', "processing":"","search":"ÐŸÐ¾Ð¸ÑÐº:","lengthMenu":"ÐŸÐ¾ÐºÐ°Ð·Ð°Ñ‚ÑŒ _MENU_ Ð·Ð°Ð¿Ð¸ÑÐµÐ¹","info":"Ð—Ð°Ð¿Ð¸ÑÐ¸ Ñ _START_ Ð´Ð¾ _END_ Ð¸Ð· _TOTAL_ Ð·Ð°Ð¿Ð¸ÑÐµÐ¹","infoEmpty":"Ð—Ð°Ð¿Ð¸ÑÐ¸ Ñ 0 Ð´Ð¾ 0 Ð¸Ð· 0 Ð·Ð°Ð¿Ð¸ÑÐµÐ¹","infoFiltered":"(Ð¾Ñ‚Ñ„Ð¸Ð»ÑŒÑ‚Ñ€Ð¾Ð²Ð°Ð½Ð¾ Ð¸Ð· _MAX_ Ð·Ð°Ð¿Ð¸ÑÐµÐ¹)","infoPostFix":"","loadingRecords":"Ð—Ð°Ð³Ñ€ÑƒÐ·ÐºÐ° Ð·Ð°Ð¿Ð¸ÑÐµÐ¹...","zeroRecords":"Ð—Ð°Ð¿Ð¸ÑÐ¸ Ð¾Ñ‚ÑÑƒÑ‚ÑÑ‚Ð²ÑƒÑŽÑ‚.","emptyTable":"Ð’ Ñ‚Ð°Ð±Ð»Ð¸Ñ†Ðµ Ð¾Ñ‚ÑÑƒÑ‚ÑÑ‚Ð²ÑƒÑŽÑ‚ Ð´Ð°Ð½Ð½Ñ‹Ðµ","paginate":{"first":"ÐŸÐµÑ€Ð²Ð°Ñ","previous":"ÐŸÑ€ÐµÐ´Ñ‹Ð´ÑƒÑ‰Ð°Ñ","next":"Ð¡Ð»ÐµÐ´ÑƒÑŽÑ‰Ð°Ñ","last":"ÐŸÐ¾ÑÐ»ÐµÐ´Ð½ÑÑ"},"aria":{"sortAscending":": Ð°ÐºÑ‚Ð¸Ð²Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ð´Ð»Ñ ÑÐ¾Ñ€Ñ‚Ð¸Ñ€Ð¾Ð²ÐºÐ¸ ÑÑ‚Ð¾Ð»Ð±Ñ†Ð° Ð¿Ð¾ Ð²Ð¾Ð·Ñ€Ð°ÑÑ‚Ð°Ð½Ð¸ÑŽ","sortDescending":": Ð°ÐºÑ‚Ð¸Ð²Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ð´Ð»Ñ ÑÐ¾Ñ€Ñ‚Ð¸Ñ€Ð¾Ð²ÐºÐ¸ ÑÑ‚Ð¾Ð»Ð±Ñ†Ð° Ð¿Ð¾ ÑƒÐ±Ñ‹Ð²Ð°Ð½Ð¸ÑŽ"},"select":{"rows":{"0":"ÐšÐ»Ð¸ÐºÐ½Ð¸Ñ‚Ðµ Ð¿Ð¾ Ð·Ð°Ð¿Ð¸ÑÐ¸ Ð´Ð»Ñ Ð²Ñ‹Ð±Ð¾Ñ€Ð°","1":"Ð’Ñ‹Ð±Ñ€Ð°Ð½Ð° Ð¾Ð´Ð½Ð° Ð·Ð°Ð¿Ð¸ÑÑŒ","_":"Ð’Ñ‹Ð±Ñ€Ð°Ð½Ð¾ Ð·Ð°Ð¿Ð¸ÑÐµÐ¹: %d"}}},
        "dom": 'rt<"row mlr20"<"col-6 col-lg-3"l><"col-6 col-lg-3"i><"col-12 col-lg-6 text-right"p>>',
        'scrollX': $("#itemsfilters").width() < 900,
        'serverSide': true,
        'lengthChange': false,
        'lengthMenu': [ 10, 25, 50, 75, 100, 500 ],
        'processing': false,
        'searching': false,
        'lengthChange': true,
        'pageLength': 25,
        'ajax': {
          url : "/getwbdata?type=category&d1="+d1+"&d2="+d2,
          type: 'POST',
          data: function(data) {
              flt = {};
              
              $(".filterarea select[data-field], .filterarea input[data-field]").each(function (t) {
                if ($(this).attr('type') == 'checkbox') {
                  flt[$(this).data('field')] = $(this).is(':checked');
                } else {
                  flt[$(this).data('field')] = $(this).val();
                }
              });
              data.section = cat;
              data.filter = flt;
              data.newsmode = newsMode;
              data.path = path;
           }
        },
        'order': [[srtc, srto]],
        'columns': cols    ,
        fixedHeader: true
      } );
    
  $('<div class="row"><div class="col-12 text-right"><a href="#" id="downloadButton" class="btn btn-warning">Ð¡ÐºÐ°Ñ‡Ð°Ñ‚ÑŒ CSV</a></div>').appendTo("#example_wrapper");
  tableapi.on('draw', function () {
    if ($("#items").is(':visible')) {
      $(".linecustom").sparkline("html", {type:"bar",barColor:App.color.success, barSpacing: 1});
      if (window.scrollY > 200)
        window.scrollTo(0, $('#example').offset().top-60);
      sparkShowed = 1;
    } else {sparkShowed=0;}
  });
  tableapi.on('processing.dt', function (e, settings, processing) {
    if (processing) {
      $("#loading").addClass("be-loading-active");
    } else {
      $("#loading").removeClass("be-loading-active");
    }
  });  
    
  $('.filterarea input, .filterarea select').change( function() {    
    tableapi.draw();
  });  
  try {
    new $.fn.dataTable.FixedHeader( tableapi , {headerOffset: 60});
  } catch (err) {
  }
  
  $("#downloadButton").on('click', function () {
    flt = {};
    $(".filterarea select[data-field], .filterarea input[data-field]").each(function (t) {
      if ($(this).attr('type') == 'checkbox') {
        flt[$(this).data('field')] = $(this).is(':checked');
      } else {
        flt[$(this).data('field')] = $(this).val();
      }
    });
    url = "/getwbdata?type=category&mode=csv&path="+encodeURIComponent(path)+'&section='+cat+'&d1='+d1+'&d2='+d2+'&filter='+encodeURIComponent(JSON.stringify(flt))+"&newsmode="+newsMode;
    window.open(url);
    return false;
  });
}

function initViewCheckboxes() {
  $('.drawsets input').on('change', function () {
    t = this;
    b = $(t).is(':checked');
    if (b)
      $(t).parents('.tab-pane').find('.' + $(t).data('field')).show();
    else
      $(t).parents('.tab-pane').find('.' + $(t).data('field')).hide();
    if ($(t).data('field') == 'ost')  {
      if (b)
        $(t).parents('.tab-pane').find('.top').attr('colspan', 5);
      else
        $(t).parents('.tab-pane').find('.top').attr('colspan', 3);
    }
  });

  $('.drawsets input').each(function () {
    t = this;
    b = $(t).is(':checked');
    if (b)
      $(t).parents('.tab-pane').find('.' + $(t).data('field')).show();
    else
      $(t).parents('.tab-pane').find('.' + $(t).data('field')).hide();
    if ($(t).data('field') == 'ost')  {
      if (b)
        $(t).parents('.tab-pane').find('.top').attr('colspan', 5);
      else
        $(t).parents('.tab-pane').find('.top').attr('colspan', 3);
    }
  });
}

function setNewsMode(x) {
  newsMode = x;
  tableapi.draw();
  if (newsMode > 0)
    $("#newsModeSelector").text('ÐÐ¾Ð²Ð¸Ð½ÐºÐ¸ Ð·Ð° '+x+' Ð´Ð½ÐµÐ¹');
  else
    $("#newsModeSelector").text('ÐÐ¾Ð²Ð¸Ð½ÐºÐ¸: Ð½Ðµ Ð²Ð°Ð¶Ð½Ð¾');
}
