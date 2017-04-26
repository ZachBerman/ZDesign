/* ==============================================
GOOGLE MAP
=============================================== */

	$(document).ready(function() {

			'use strict';

			// Map Coordination

			var latlng = new google.maps.LatLng(51.296320, -116.963145);

			// Map Options
			var myOptions = {
				zoom: 15,
				center: latlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				disableDefaultUI: true,
				scrollwheel: false,
				// Google Map Color Styles
				styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}]
			};

			var map = new google.maps.Map(document.getElementById('google-map'), myOptions);

			// Marker Image
			var image = 'assets/images/marker.png';
			
		  	/* ========= First Marker ========= */

		  	// First Marker Coordination
			
			var myLatlng = new google.maps.LatLng(51.296320, -116.963145);

			// Your Texts 

			 var contentString = '<div id="content">'+
			  '<div id="siteNotice">'+
			  '</div>'+
			  '<h4>' +

			  'ZDesign'+

			  '</h4>'+
			  '<p>' +

			  'PO Box 948' +

			  '</p>'+
			  '<p>' +

			  'Golden, BC V0A 1H0' +

			  '</p>'+
			  '</div>';
			

			var marker = new google.maps.Marker({
				  position: myLatlng,
				  map: map,
				  title: 'Hello World!',
				  icon: image
			  });


			var infowindow = new google.maps.InfoWindow({
			  content: contentString
			  });

			  
			 google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker);
			  });

			 /* ========= End First Marker ========= */
		
		});