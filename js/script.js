if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function(position){
        var logitude = position.coords.longitude
        var latitude = position.coords.latitude
        document.getElementById('logitude').innerHTML = `Sua logitude é ${logitude}`
        document.getElementById('latitude').innerHTML = `Sua latitude é ${latitude}`

    }, function(error){
        document.getElementById('latitude').innerHTML = `Parabens, passou pelo teste...`
    })
}