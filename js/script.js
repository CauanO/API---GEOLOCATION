if ('geolocation' in navigator ) {
    navigator.geolocation.getCurrentPosition(function(position){
        var logitude = position.coords.longitude
        var latitude = position.coords.latitude
        var mapUrl = "https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=" + latitude + "," + logitude + "&zoom=15";
        document.getElementById('mapFrame').src = mapUrl
        console.log(position)

    }, function(error){
        document.getElementById('latitude').innerHTML = `Parabens, passou pelo teste...`
    })
}