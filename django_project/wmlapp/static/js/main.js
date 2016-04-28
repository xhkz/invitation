var map = undefined;

function init_map() {
    var marker_pos = {lat: -37.875448, lng: 144.975045};
    var center_pos = {lat: -37.875448, lng: 144.975545};

    var width = $(window).outerWidth();

    map = new google.maps.Map(document.getElementById('map'), {
        center: center_pos,
        zoom: width < 480 ? 15 : 18,
        disableDefaultUI: true,
        styles: [
            {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [{"visibility": "on"}, {"color": "#e0efef"}]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [{"visibility": "on"}, {"hue": "#1900ff"}, {"color": "#c0e8e8"}]
            },
            {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [{"visibility": "simplified"}]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{"lightness": 100}, {"visibility": "simplified"}]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [{"visibility": "off"}]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{"visibility": "off"}, {"lightness": 700}]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{"color": "#7dcdcd"}]
            }
        ]
    });

    var image = {
        url: 'static/img/heart-marker.png',
        scaledSize: new google.maps.Size(
            width < 480 ? 25 : 50,
            width < 480 ? 27 : 54
        )
    };

    new google.maps.Marker({
        position: marker_pos,
        map: map,
        icon: image
    });
}

function init_particles() {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 40,
                "density": {"enable": true, "value_area": 800}
            },
            "color": {"value": "#ffffff"},
            "shape": {
                "type": "circle",
                "stroke": {"width": 0, "color": "#000000"},
                "polygon": {"nb_sides": 5}
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}
            },
            "line_linked": {
                "enable": true,
                "distance": 200,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 5,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {"enable": false, "mode": "grab"},
                "onclick": {"enable": false, "mode": "push"},
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 150,
                    "line_linked": {"opacity": 1}
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
}

var arrow = document.querySelector('.arrow');

$(document).ready(function () {
    $('#fullpage').fullpage({
        normalScrollElements: '#map',
        controlArrows: false,
        slidesNavigation: true,
        afterLoad: function (anchorLink, index) {
            if (index == 4 && map == undefined) {
                init_map();
            }
            arrow.style.display = (index == 5) ? 'none' : 'block';
        }
    });

    init_particles();

    $('.countdown').countdown('2016/05/01 12:00:00', function (event) {
        $(this).html(event.strftime('%D day%!D %H:%M:%S'));
    });

    $('.arrow').on('click', function () {
        $.fn.fullpage.moveSectionDown();
    });
});