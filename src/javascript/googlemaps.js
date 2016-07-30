function initMap() {
          var myLocation =  {lat: 5.566497399999999, lng: -0.17941220000000158};
          var mapDiv = document.getElementById('map');
          var map = new google.maps.Map(mapDiv, {
              center: myLocation,
              zoom: 19    
          });
    
        var marker = new google.maps.Marker({
            position: myLocation,
            map: map,
            title: "Palace Pharmacy"
        });
        marker.setMap(map);
        }
    

