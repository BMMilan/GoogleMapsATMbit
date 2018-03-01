function initMap() {
    const uluru = {lat: 44.798855, lng: 20.486683};
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: uluru
    });
    const marker = new google.maps.Marker({
        position: uluru,
        map: map
    });

}
