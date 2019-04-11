function myMap() {
			var mapProp= {
			    center:new google.maps.LatLng(-33.847530,151.210132),
			    zoom:16,
			};
			var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
			}


// NAV STICKY BAR 

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 