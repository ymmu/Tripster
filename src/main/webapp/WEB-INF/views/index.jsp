<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Tripster</title>
		
		<!-- AM Chart -->
		<link rel = "stylesheet" type = "text/css" href ="/resources/css/statistics.css">
		<link rel="stylesheet" href="https://www.amcharts.com/lib/3/plugins/export/export.css" type="text/css" media="all" />

		<!-- Bootstrap -->
		<link href="/resources/dist/css/bootstrap.css" rel="stylesheet" media="screen">
		<link href="/resources/assets/css/custom.css" rel="stylesheet" media="screen">
		<link href="/resources/updates/update1/css/search.css" rel="stylesheet" media="screen">
		<!-- Updates -->
		<link href="/resources/updates/update1/css/style01.css" rel="stylesheet" media="screen">
	
		<!-- Carousel -->
		<link href="/resources/examples/carousel/carousel.css" rel="stylesheet">
		<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<!--[if lt IE 9]>
		<script src="../resources/assets/js/html5shiv.js"></script>
		<script src="../resources/assets/js/respond.min.js"></script>
		<![endif]-->

		<!-- Fonts -->
		<link href='http://fonts.googleapis.com/css?family=Lato:400,100,100italic,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Open+Sans:700,400,300,300italic' rel='stylesheet' type='text/css'>
		<!-- Font-Awesome -->
		<link rel="stylesheet" type="text/css" href="/resources/assets/css/font-awesome.css" media="screen" />
		<!--[if lt IE 7]><link rel="stylesheet" type="text/css" href="../resources/assets/css/font-awesome-ie7.css" media="screen" /><![endif]-->

		<!-- REVOLUTION BANNER CSS SETTINGS -->
		<link rel="stylesheet" type="text/css" href="/resources/css/fullscreen.css" media="screen" />
		<link rel="stylesheet" type="text/css" href="/resources/rs-plugin/css/settings.css" media="screen" />

		<!-- Picker UI-->
		<link rel="stylesheet" href="/resources/assets/css/jquery-ui.css" />

		<!-- jQuery -->
		<script src="/resources/assets/js/jquery.v2.0.3.js"></script>

		<!-- Masonry -->
		<link href="/resources/updates/update1/css/masonry.css" rel="stylesheet">
		<script src="/resources/updates/update1/js/masonry.pkgd.js"></script>
		<script>
	        // http://masonry.desandro.com/masonry.pkgd.js added as external resource
	        docReady( function() {
	            var container = document.querySelector('.masonry');
	            var button = document.querySelector('#toggle-button');
	            var msnry = new Masonry( container, {
	                columnWidth: 2
	            });
	            var isActive = true;
	            eventie.bind( button, 'click', function() {
	                if ( isActive ) {
	                    msnry.destroy();
	                } else {
	                    msnry = new Masonry( container );
	                }
	                isActive = !isActive;
	            });
	        });
	        //@ sourceURL=pen.js
		</script>
	</head>
	
	<body id="top">
		
		<script>
            var result = '${msg}';
            if(result == 'success'){
                alert("가입한 이메일 인증 후 로그인 해주세요.");
            }
            if(result == 'delete'){
                alert("개인정보 중국에 판매완료!.");
            }
            if(result == 'findPassword'){
            	alert("가입된 이메일로 임시비밀번호가 전송되었습니다.")
            }
            
        </script>
        
		<!--####### HEADER #######-->
		<%@include file="include/header.jsp" %>

		<!--####### BANNER CONTAINER #######-->
		<div id="dajy" class="fullscreen-container2 mtslideb sliderbg fixed">
			
			<!--####### SEARCH BOX #######-->
			<div class="searchcontainer textcenter" style="">
							
				<span class="lato size48 slim white ">Where do you want to go?</span><br/>
				
					<form action="search/result">
						<div class=" wh95percent center">
							<input  id="keywordInput" name='keyword' type="text" class="form-control inph left" placeholder="예: 강남역" ></input>
							<button id='searchBtn' class="btn btn-default nbtn-search right" type="submit" ><span class="glyphicon glyphicon-search"></span></button>
						</div>
					</form>
					
			</div>
			<!-- END OF SEARCH BOX -->
			
			<!--####### BANNER #######-->
			<div class="fullscreenbanner">
				<ul>
					<!-- papercut fade turnoff flyin slideright slideleft slideup slidedown-->
					<!-- FADE -->
					<li data-transition="fade" data-slotamount="1" data-masterspeed="300">
						<img src="/resources/updates/update1/img/slider/slide1.jpg" alt=""/>
						<div class="tp-caption scrolleffect sft"
						     data-x="center"
						     data-y="120"
						     data-speed="1000"
						     data-start="800"
						     data-easing="easeOutExpo">
						</div>
					</li>

					<!-- FADE -->
					<li data-transition="fade" data-slotamount="1" data-masterspeed="300">

						<img src="/resources/updates/update1/img/slider/slide2.jpg" alt=""/>
						<div class="tp-caption scrolleffect sft"
						     data-x="center"
						     data-y="120"
						     data-speed="1000"
						     data-start="800"
						     data-easing="easeOutExpo"  >

						</div>
					</li>

					<!-- FADE -->
					<li data-transition="fade" data-slotamount="1" data-masterspeed="300">
						<img src="/resources/updates/update1/img/slider/slide3.jpg" alt=""/>
						<div class="tp-caption scrolleffect sft"
						     data-x="center"
						     data-y="120"
						     data-speed="1000"
						     data-start="800"
						     data-easing="easeOutExpo">

						</div>
					</li>

					<!-- FADE -->
					<li data-transition="fade" data-slotamount="1" data-masterspeed="300">
						<img src="/resources/updates/update1/img/slider/slide4.jpg" alt=""/>
						<div class="tp-caption scrolleffect sft"
						     data-x="center"
						     data-y="120"
						     data-speed="1000"
						     data-start="800"
						     data-easing="easeOutExpo">
						</div>
					</li>
				</ul>
				<div class="tp-bannertimer none"></div>
			</div>
			<!-- END OF BANNER -->
		</div>
		
		<script type="text/javascript">
		    var tpj=jQuery;
		    tpj.noConflict();
		    tpj(document).ready(function() {
		        if (tpj.fn.cssOriginal!=undefined)
		            tpj.fn.css = tpj.fn.cssOriginal;
		        tpj('.fullscreenbanner').revolution(
		            {
		                delay:9000,
		                startwidth:1170,
		                startheight:600,
		                onHoverStop:"off",						// Stop Banner Timet at Hover on Slide on/off
		                thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
		                thumbHeight:50,
		                thumbAmount:3,
		                hideThumbs:0,
		                navigationType:"bullet",				// bullet, thumb, none
		                navigationArrows:"solo",				// nexttobullets, solo (old name verticalcentered), none
		                navigationStyle:false,				// round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom
		                navigationHAlign:"left",				// Vertical Align top,center,bottom
		                navigationVAlign:"bottom",					// Horizontal Align left,center,right
		                navigationHOffset:30,
		                navigationVOffset:30,
		                soloArrowLeftHalign:"left",
		                soloArrowLeftValign:"center",
		                soloArrowLeftHOffset:20,
		                soloArrowLeftVOffset:0,
		                soloArrowRightHalign:"right",
		                soloArrowRightValign:"center",
		                soloArrowRightHOffset:20,
		                soloArrowRightVOffset:0,
		                touchenabled:"on",						// Enable Swipe Function : on/off
		                stopAtSlide:-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
		                stopAfterLoops:-1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic
		                hideCaptionAtLimit:0,					// It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
		                hideAllCaptionAtLilmit:0,				// Hide all The Captions if Width of Browser is less then this value
		                hideSliderAtLimit:0,					// Hide the whole slider, and stop also functions if Width of Browser is less than this value
		                fullWidth:"on",							// Same time only Enable FullScreen of FullWidth !!
		                fullScreen:"off",						// Same time only Enable FullScreen of FullWidth !!
		                shadow:0								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)
		            });
		    });
		</script>
		<!-- END OF BANNER CONTAINER -->



		<!-- WRAP -->
		<div class="wrap cst03 bgfix " >
		
			<!--####### HEADER #######-->
			<%@include file="include/footer2.jsp" %>
		</div>
		<!-- END OF WRAP -->

		<!-- Javascript -->
		<!-- This page JS -->
		<script src="/resources/updates/update1/js/js-new-homepage.js"></script>

		<!-- Custom functions -->
		<script src="/resources/assets/js/functions.js"></script>

		<!-- Picker UI-->
		<script src="/resources/assets/js/jquery-ui.js"></script>

		<!-- Easing -->
		<script src="/resources/assets/js/jquery.easing.js"></script>

		<!-- jQuery KenBurn Slider  -->
		<script type="text/javascript" src="/resources/rs-plugin/js/jquery.themepunch.revolution.min.js"></script>

		<!-- Nicescroll  -->
		<script src="/resources/assets/js/jquery.nicescroll.min.js"></script>

		<!-- CarouFredSel -->
		<script src="/resources/assets/js/jquery.carouFredSel-6.2.1-packed.js"></script>
		<script src="/resources/assets/js/helper-plugins/jquery.touchSwipe.min.js"></script>
		<script type="text/javascript" src="/resources/assets/js/helper-plugins/jquery.mousewheel.min.js"></script>
		<script type="text/javascript" src="/resources/assets/js/helper-plugins/jquery.transit.min.js"></script>
		<script type="text/javascript" src="/resources/assets/js/helper-plugins/jquery.ba-throttle-debounce.min.js"></script>

		<!-- Custom Select -->
		<script type='text/javascript' src='/resources/assets/js/jquery.customSelect.js'></script>

		<!-- Include all compiled plugins (below), or include individual files as needed -->
		<script src="/resources/dist/js/bootstrap.min.js"></script>
	</body>
</html>