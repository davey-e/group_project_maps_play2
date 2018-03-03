const inialize = function(){

    const mapDiv = document.getElementById('main-map');
    const centre = {lat: 55.946996, lng: -3.201867};
    const zoom = 16;
    const markerCoords = {lat: 55.946996, lng: -3.201867};

    const mainMap = new MapWrapper(mapDiv, centre, zoom);
    
    mainMap.addMarker(markerCoords);

    // mainMap.addClickEvent();

}


document.addEventListener("DOMContentLoaded", inialize);