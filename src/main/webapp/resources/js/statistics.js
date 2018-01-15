//지도데이터 초기데이터
var mapData={
	    "map": "worldLow",
	    "areas": [{
	      "id": "US",
	      "color": "#8d1cc6",
	      "description": "United States is now selected.</br></br>Close this description box to unselect the area."
	      /*,"images": [{
	        "latitude": 40.712784,
	        "longitude": -74.005941,
	        "type": "circle",
	        "label": "New York"
	      }]*/
	    }]
	  };
//일정별 통계(detail) 그래프 설정
var graphConfig = [{
	    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
	    "fillAlphas": 0.5,
	    "labelText": "[[value]]",
	    "lineAlpha": 0.3,
	    "title": "Man",
	    "type": "column",
	    "newStack": true,
	    "color": "#000000",
	    "valueField": "Man"
	  }, {
	    "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
	    "fillAlphas": 0.8,
	    "labelText": "[[value]]",
	    "lineAlpha": 0.3,
	    "title": "Woman",
	    "type": "column",
	    "color": "#000000",
	    "valueField": "Woman"
	  }];
//일정관련 간단정보(brief) 그래프 초기데이
var chartData=[{
	        "plan": "Min",
	        "how_many":1,
	        "color": "#00c3ff"
	    }, 
	    {
	        "plan": "Max",
	        "how_many": 1,
	        "color": "#2A0CD0"
	    }, 
	    {
	        "plan": "Avg",
	        "how_many": 1,
	        "color": "#8A0CCF"
	}];
//일정별 성비, 나이 통계 초기데이터.
var chartDetailData=[{
    "Ages": '10s',
    "Man": 0,
    "Woman": 0,
  }, {
    "Ages": '20s',
    "Man": 0,
    "Woman": 0,
  }, {
    "Ages": '30s',
    "Man": 0,
    "Woman": 0,
  }, {
    "Ages": 'over 40s',
    "Man": 0,
    "Woman": 0,
	  }];


var categoryAxis={
  "gridPosition": "start",
  "axisAlpha": 0,
  "gridAlpha": 0,
  "position": "left"
};

//차트관련
var chart;
var chartDetail;
var chartMap;

//서버 데이터 관련
var likeList;
var detailList;
var dashBrief;
var countryList;

//지도데이터 초기데이터
var mapData2={
	    "map": "worldLow",
	    "getAreasFromMap": true, //추가
	    "areas": [{
	      "id": "US",
	      "color": "#8d1cc6",
	      "description": "United States is now selected.</br></br>Close this description box to unselect the area.",
	      "images": [{
	        "latitude": 40.712784,
	        "longitude": -74.005941,
	        "type": "circle",
	        "label": "New York"
	      }]
	    }]
	  };


//차트관련
var chartMap2;

//서버 데이터 관련
var rcmCountryList;

/**
 * Create the Google Map
 */
var gmap;

/**
 * Setup breaking points between amCharts and Google Maps
 */
AmCharts.amBreakLevel = 3;
AmCharts.amBreakLevelReturn = 2; // used to return from GMap
AmCharts.gBreakLevel = 4; //이 값보다 작으면 구글맵이 감춰진다.


AmCharts.ready( function() {
	 
	// 일정일수 통계------------------------------
	chart = new AmCharts.AmSerialChart();
	chart.dataProvider = chartData;
	chart.categoryField = "plan";
	var graph = new AmCharts.AmGraph();
	graph.valueField = "how_many";
	//graph.type = "line";
	graph.type = "column";
	//graph.fillAlphas = 0; // or delete this line, as 0 is default
	graph.fillAlphas=0.5,
	graph.bullet = "round";
	graph.lineColor = "#8d1cc6";
	graph.fillColorsField = "color",
	//console.log(graph);
	chart.addGraph(graph);
	chart.write( "chartdiv4" );
	console.log('차트만드는 안쪽');
	console.log(typeof(graph));
	/*
	var str = '';
	for(key in graph) {
		str += key+"="+graph[key]+"\n";
	}
	console.log(str);
	 */

	//detail charts------------------------------
	chartDetail = new AmCharts.AmSerialChart();
	chartDetail.dataProvider = chartDetailData;
	chartDetail.categoryField = "Ages";
	chartDetail.categoryAxis = categoryAxis;
	var graph2 = new AmCharts.AmGraph();
	graph2 = graphConfig[0];
	var graph3 = new AmCharts.AmGraph();
	graph3 = graphConfig[1];
	chartDetail.addGraph(graph2);
	chartDetail.addGraph(graph3);
	
	chartDetail.write( "chartdiv5" );
	console.log('차트만드는 안쪽2');
	
	//map chart---------------------------------
	chartMap = new AmCharts.AmMap();
	chartMap.dataProvider = mapData;
	chartMap.projection = "eckert3";
	chartMap.areasSettings = {
							    "autoZoom": true,
							    "selectedColor": "#CC0000"
							  };
	  
	chartMap.addListener({
	    "event": "descriptionClosed",
	    "method": function(ev) {
	      ev.chart.selectObject();
	    }
	  });
	chartMap.write("chartdiv");

	
	
	/*
	//map chart 추천
	//map chart 2 for recommand-----
	chartMap2 = new AmCharts.AmMap();
	chartMap2.dataProvider = mapData2;
	chartMap2.projection = "eckert3";
	chartMap2.areasSettings = {
							    "autoZoom": true,
							    "selectedColor": "#CC0000"
							  };
	//예제에 있어서 넣긴했는데.
	chartMap2.zoomControl= {
							    "bottom": 15,
							    "right": 15
							};  
	
	
	
	chartMap2.addListener({
	    "event": "zoomCompleted",
	    "method": function( e ) {  //18/1/8 예제에 포함되어 있어 넣었음.
	    	 //GMap inited?
	         
	        if ( typeof gmap === "undefined" ){
	        	console.log('dkdd');
		          return;

	        }

	        if ( chartMap2.zoomLevel() >= AmCharts.amBreakLevel ) {
	        	console.log('dkdd');
	          // sync position
	          gmap.setCenter( {
	            lat: chartMap2.zoomLatitude(),
	            lng: chartMap2.zoomLongitude()
	          } );

	          // set zoom level
	          gmap.setZoom( AmCharts.gBreakLevel );

	          // switch to Google map
	          document.getElementById( "chartdiv_rcm" ).style.visibility = "hidden";
	          document.getElementById( "gmap" ).style.visibility = "visible";
    	      }
    	      
	    }
	}); //addToListener
		
	chartMap2.write("chartdiv_rcm");
	console.log(AmCharts.zoomLevels);
	console.log(AmCharts.amBreakLevel);
	*/
	
});


//ajax로 화면 데이터세팅
$(document).ready(function(){   
    //console.log(window.location.pathname);
	$('.your-class').slick(getSliderSettings());
	//통계 데이터
	ajaxController('/dashboard/stat/1');
	
	//추천데이터. 크로스도메인 설정 필요
	ajaxController('http://127.0.0.1:8000/recommand/1');
    
});

var getSliderSettings =function () {
	console.log('getSliderSettings');
    return {
  	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  initialSlide:3
	  ,accessibility: true
	  ,draggable: false,
	  variableWidth: true
  }
};


//ymmu ajax-------------------------------------------
var ajaxController= function(url){
    
    $.ajax({
        method: "GET",
        url: url,
        crossDomain: true,
        dataType: 'json',
        success: function(data){
            
            //data for stat page 
            if(url.match("/stat")){
            
            	var dashBrief = data.dashBrief;
                $('#numPlans').text(dashBrief.numOfPlans);
                $('#totalDays').text(dashBrief.totalDays);
                
                //console.log($('#numPlans').val());
                //console.log($('#totalDays').val());
                
                //plan days info--------------------------------
                chartData[0].how_many=dashBrief.minPlanDays;
                chartData[1].how_many=dashBrief.maxPlanDays;
                chartData[2].how_many=dashBrief.avgDays;
                //chart.validateData(); //에러나서 다 막음
                console.log(chartData[2].how_many);
            	/* DATA OBJECT 출력하기
	            	var str = '';
	            	for(key in data.dashBrief) {
	            		str += key+"="+data.dashBrief[key]+"\n";
	            	}
	            	console.log(str);
            	*/
                
                //data likeList-------------------------
                likeList = data.likeList;
                console.log(likeList);
                makeTable(likeList);
                
              //data detailList-------------------------
                detailList = data.detailList;
                console.log(detailList);
                //makeTable(detailList);
                

				//data countryList-------------------------
				countryList = data.countryList;
				console.log(countryList);
				var key=0;
				var count=0;
				while(key < countryList.length) {
					var str = '';
					var i= key;
					count++;
					console.log(countryList[i].visitedCountryISO);
					console.log(countryList[key].visitedCountryISO);

					while(i!=countryList.length && countryList[key].visitedCountryISO == (countryList[i].visitedCountryISO) ){
						str += countryList[i].plan_title+"</br>";
						i++;
					}
					//지도에 다녀온 국가 데이터 넣는다
				      mapData.areas.push({
				          "id": countryList[key].visitedCountryISO,
				          "color": "#FACC2E",
				          "description": "<b>이 국가를 다녀온 일정:</b></br></br>" + str
				      }); 
				      key = i;
				  }
				  //console.log(countryList);
				  //chartMap.validateData(); //에러나서 다 막음
				  $('#numCountries').text(count); //방문국가수 업데이트
            }
            else if(url.match("/recommand")){ //추천
            	
            	console.log('추천데이터 ajax 데이터부분');
            	console.log(data);
            		//구글맵 세팅.
            	initGoogleMap(data);
            	chartMap2.dataProvider.areas= [];
            	for(var i=data.length-1; i>-1;i--){
            	
            		if(typeof data[i].iso2 == 'undefined'){
            			console.log('여기서 끝남:'+i)
            			break;
            		} //undefined 나오는 순간 for문 브레이크
            		else{
                			chartMap2.dataProvider.areas.push({
		          			      "id": data[i].iso2,
		        			      "color": "#8d1cc6"
		        			 });
            		}	
            	}//for
            	
            	chartMap2.listeners.push({
        		    "event": "clickMapObject",
        		    "method": function(event) {
        		    	//console.log(event);
        		    		//이벤트에서 previouslyHovered 에서 나라 ID 찾고 그걸로 밑에 데이터를 채운다
        		    	//console.log(event.mapObject.id);
        		    	
        		    	for(var i=data.length-1; i>-1;i--){
        	            	
                    		if(typeof data[i].iso2 == 'undefined'){
                    			break;
                    		} //undefined 나오는 순간 for문 브레이크
                    		else if(data[i].iso2 == event.mapObject.id){
                    			 $('.description_title').text(data[i].name_han+' '+data[i].name_eng); //지도서 클릭한 나라 이름
                    			 $('.country_or_city_description').text(data[i].description); //지도서 클릭한 나라 소개
                    			 $('#exchange_ymmu').html('<br>1'+data[i].money_unit+' = '+ data[i].exchange+'원<br>'+'10'+data[i].money_unit+' = '+ data[i].exchange*10+'원<br>'); //지도서 클릭한 나라 환율
                    			 $('#safe_ymmu').html(data[i].safe+'<br>'); //지도서 클릭한 나라 환율
                    			 $('#bigmac_ymmu').html('약 '+data[i].bigmac_price+data[i].money_unit+'<br><br>'+'<b>US달러 가격</b><br>'+data[i].bigmac_price_dallor); //지도서 클릭한 나라 환율
                    		}	
                    	}//for
        		    	

        		    	
        		        // GMap inited?
        		        if ( typeof gmap === "undefined" )
        		          return;
        		    	// sync position
        		        gmap.setCenter( {
        		          lat: chartMap2.zoomLatitude(),
        		          lng: chartMap2.zoomLongitude()
        		        } );
        		        //console.log('zoomlevel:'+chartMap2.zoomLevel());
        		        
        		        google.maps.event.trigger(gmap, 'resize'); // 구글맵 갱신.
        		        
        		    }
        		  });
            	
            }//else if
        }//success

    }); 
    
} //ajaxfunction

//일정-좋아요 테이블 세팅
$(function () {
	
	//일정-좋아요 테이블
	var $table = $('#table');
	//일정-좋아요 테이블 행 눌렀을 때 분석데이터 바인딩
	$table.on('click-row.bs.table', function (field, value, row, $el) {
		console.log(value);
		//
		$('#likeAnalysis').text("일정 "+ value.plan_title+" 분석");
        
		var ages='';
		//이전에 들어가 있던 데이터 초기화

		(function(chartDetailData){
			
			console.log('전: '+chartDetailData);
			var limit = 0; // 필요한 데이터는 총 나이대별로 2개씩 최대 8개이므로 타이틀일치로 최대 8번을 돌면 for문을 멈춘다
			for(key in detailList){
				if(limit>8) break;
				if(detailList[key].plan_title == value.plan_title){
					limit++;
					switch(detailList[key].numAges_who_chose_plan_id){
						case '10s':
							saveDate(0, key,chartDetailData);
							break;
						case '20s':
							saveDate(1, key,chartDetailData);
							break;
						case '30s':
							saveDate(2, key,chartDetailData);
							break;
						case 'over 40s':
							saveDate(3, key,chartDetailData);
							break;
						default:
							break;
					}
				}//if 바깥
			}//for
				//window.open('https://github.com/wenzhixin/bootstrap-table/issues/1808', '_blank');
			//console.log(chartDetailData);
			chartDetail.dataProvider = chartDetailData; 
			chartDetail.validateData();
		})(chartDetailData=[{
		    "Ages": '10s',
		    "Man": 0,
		    "Woman": 0,
		  }, {
		    "Ages": '20s',
		    "Man": 0,
		    "Woman": 0,
		  }, {
		    "Ages": '30s',
		    "Man": 0,
		    "Woman": 0,
		  }, {
		    "Ages": 'over 40s',
		    "Man": 0,
		    "Woman": 0,
			  }]);
		
		
		chartDetail.validateData();
		//console.log(chartDetailData);
	});
});
//일정-좋아요 테이블 안에서 쓰이는 함수
var saveDate = function(num, key, chartDetailData){
	if(detailList[key].sex=="남")
		chartDetailData[num].Man = detailList[key].num;
	else
		chartDetailData[num].Woman = detailList[key].num;
	
};


//일정-좋아요 테이블 생성 함수---------------------
var makeTable = function(list){
    
	console.log('makeTable 안쪽');
	 $('#table').bootstrapTable({
	    columns: [{
	        field: 'plan_title',
	        title: 'Your plan title'
	    }, {
	        field: 'num',
	        title: 'Like'
	    }],
	    data: list
	 });     
}

//ymmu ajax-------------------------------------------
// svg path for target icon
var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
// svg path for plane icon
var planeSVG = "M19.671,8.11l-2.777,2.777l-3.837-0.861c0.362-0.505,0.916-1.683,0.464-2.135c-0.518-0.517-1.979,0.278-2.305,0.604l-0.913,0.913L7.614,8.804l-2.021,2.021l2.232,1.061l-0.082,0.082l1.701,1.701l0.688-0.687l3.164,1.504L9.571,18.21H6.413l-1.137,1.138l3.6,0.948l1.83,1.83l0.947,3.598l1.137-1.137V21.43l3.725-3.725l1.504,3.164l-0.687,0.687l1.702,1.701l0.081-0.081l1.062,2.231l2.02-2.02l-0.604-2.689l0.912-0.912c0.326-0.326,1.121-1.789,0.604-2.306c-0.452-0.452-1.63,0.101-2.135,0.464l-0.861-3.838l2.777-2.777c0.947-0.947,3.599-4.862,2.62-5.839C24.533,4.512,20.618,7.163,19.671,8.11z";

var chart2 = AmCharts.makeChart( "chartdiv2", {
  "type": "pie",
  "theme": "light",
  "titles": [ {
    "text": "Visitors countries",
    "size": 17
  } ],
  "dataProvider": [ {
    "country": "United States",
    "visits": 7252
  }, {
    "country": "China",
    "visits": 3882
  }, {
    "country": "Japan",
    "visits": 1809
  }, {
    "country": "Germany",
    "visits": 1322
  }, {
    "country": "United Kingdom",
    "visits": 1122
  }, {
    "country": "France",
    "visits": 414
  }, {
    "country": "India",
    "visits": 384
  }, {
    "country": "Spain",
    "visits": 211
  } ],
  "valueField": "visits",
  "titleField": "country",
  "startEffect": "elastic",
  "startDuration": 2,
  "labelRadius": 15,
  "innerRadius": "50%",
  "depth3D": 10,
  "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
  "angle": 15,
  "export": {
    "enabled": true
  }
} );



/**
 * Create the amCharts Map
 */
var chartMap2 = AmCharts.makeChart( "chartdiv_rcm", {
  "type": "map",
  "theme": "light",
  "projection": "eckert3",
  "dataProvider": {
    "map": "worldLow",
    "getAreasFromMap": true,
    "areas": [{
	      "id": "AU",
	      "color": "#8d1cc6"
	    }]
  },
  "areasSettings": {
    "autoZoom": true,
    "selectedColor": "#0bff85"
  },
  "zoomControl": {
	"zoomControlEnabled": true,
    "bottom": 10,
    "right": 10,
    "zoomFactor":3
  },
  "listeners": [ 
	   {
	    "event": "zoomCompleted",
	    "method": function( e ) {
	
	      // GMap inited?
	      if ( typeof gmap === "undefined" )
	        return;

	     if ( chartMap2.zoomLevel() >= AmCharts.amBreakLevel ) {
		        // sync position
		        gmap.setCenter( {
		          lat: chartMap2.zoomLatitude(),
		          lng: chartMap2.zoomLongitude()
		        } );
		        console.log('after gmap -> setCenter');
		        console.log('chartMap2 zoomlevel:'+chartMap2.zoomLevel());
		        // set zoom level
		        gmap.setZoom( AmCharts.gBreakLevel );
		        //gmap.setZoom(chartMap2.zoomLevel());
		        console.log('gmap.getCenter: '+gmap.getZoom());
		
		        // switch to Google map
		        document.getElementById( "chartdiv_rcm" ).style.visibility = "hidden";
		        document.getElementById( "gmap" ).style.visibility = "visible";
		        google.maps.event.trigger(gmap, 'resize'); // 구글맵 갱신.
	      }
	    }
  }, 
	/*  
	  {
		    "event": "clickMapObject",
		    "method": function(event) {
		    	//console.log(event);
		    		//이벤트에서 previouslyHovered 에서 나라 ID 찾고 그걸로 밑에 데이터를 채운다
		    	//console.log(event.mapObject.id);
		    	
		    	for(var i=data.length-1; i>-1;i--){
	            	
            		if(typeof data[i].iso2 == 'undefined'){
            			break;
            		} //undefined 나오는 순간 for문 브레이크
            		else if(data[i].iso2 == event.mapObject.id){
            			 $('#description_title').text(data[i].name_han+' '+data[i].name_eng); //지도서 클릭한 나라 이름
            			 $('#country_or_city_description').text(data[i].description); //지도서 클릭한 나라 소개
            			 
            		}	
            	}//for
		    	

		    	
		        // GMap inited?
		        if ( typeof gmap === "undefined" )
		          return;
		    	// sync position
		        gmap.setCenter( {
		          lat: chartMap2.zoomLatitude(),
		          lng: chartMap2.zoomLongitude()
		        } );
		        //console.log('zoomlevel:'+chartMap2.zoomLevel());
		        
		        google.maps.event.trigger(gmap, 'resize'); // 구글맵 갱신.
		        
		    }
		  }*/]
} );

/** Create the Google Map*/
var gmap;

window.initGoogleMap=function(data) {
  gmap = new google.maps.Map( document.getElementById( 'gmap' ), {
    scrollwheel: true,
    
  } );
  
  //추천 도시 데이터 마커. 한 위치당 하나의마커가 필요하므로 for문으로
  marker_list =[]
  for(var i=0 ; i<data.length-2; i++){
	  
	  (function(i){ //i값을 제대로 넘겨주기 위한 클로저 처리
		  
		  var marker = new google.maps.Marker({
		      //position: {lat: -25.363, lng: 131.044},
			  position: {lat: data[i].lat, lng: data[i].lng},
		      map: gmap,
		      title: data[i].name
		    });
		  marker_list.push(marker);
		  //정보창
		  var infowindow = new google.maps.InfoWindow({
			    content: "<div id='contents'><h1 id='firstHeading' class='firstHeading'>"+data[i].name+"</h1></div>"
			  });
		  
		  //마커 클릭하면 정보창 보이게.
		  marker_list[i].addListener('click', function() {
			    infowindow.open(gmap, marker_list[i]);
        			//국가/도시정보 세팅
            	$('#fligh_price_ymmu').text('KRW '+data[i].flight_price);
            	$('#exchange_ymmu').text(data[i].exchange);
            	$('#airport_ymmu').text(data[i].airport);
            	$('#safe_ymmu').text(data[i].safe);
            	
			  });
	  })(i);
	  
  }

  
  gmap.addListener( "zoom_changed", function() {
    /**Switch back to amCharts*/
    if ( gmap.getZoom() < AmCharts.gBreakLevel ) {

      // sync position
      var center = gmap.getCenter();
      chartMap2.zoomToLongLat(
        AmCharts.amBreakLevelReturn,
        center.lng(),
        center.lat(),
        true
      );
      console.log('gmap.addListener: '+ center);
      // switch to Google map
      document.getElementById( "chartdiv_rcm" ).style.visibility = "visible";
      document.getElementById( "gmap" ).style.visibility = "hidden";
      //console.log(gmap);
    }
  } );
}


/** Function which tries to convert between amCharts zoom level and Google's */
function amZoomLevelToGoogle( level ) {

  // round
  level = Math.round( level );
  var newLevel = Math.round( Math.sqrt( level ) );

  // find a zoom level
  AmCharts.zoomLevels.forEach( function( zoomLevel ) {
    if ( level >= zoomLevel.am )
      newLevel = zoomLevel.g;
  } );
  return newLevel;
}

/** Function which tries to convert between Google's zoom level and amCharts */
function gZoomLevelToAm( level ) {

  // round
  level = Math.round( level );
  var newLevel = Math.round( Math.sqrt( level ) );

  // find a zoom level
  AmCharts.zoomLevels.forEach( function( zoomLevel ) {
    if ( level >= zoomLevel.g )
      newLevel = zoomLevel.am;
  } );
  return newLevel;
}



