function Location() {
    var location = document.getElementById("loc").value;
  
    // Using HTML5 Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  
    function showPosition(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
  
      // Display the map with the found location
      var mapElement = document.getElementById("map");
      mapElement.innerHTML = `<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=${location}&center=${latitude},${longitude}&zoom=15&key=YOUR_API_KEY" allowfullscreen></iframe>`;
    }
  
    function showError(error) {
      switch(error.code) {
        case error.PERMISSION_DENIED:
          alert("User denied the request for Geolocation.");
          break;
        case error.POSITION_UNAVAILABLE:
          alert("Location information is unavailable.");
          break;
        case error.TIMEOUT:
          alert("The request to get user location timed out.");
          break;
        case error.UNKNOWN_ERROR:
          alert("An unknown error occurred.");
          break;
      }
    }
  }
  