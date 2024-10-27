// common code for the map

    function getLocation() {
        // Check if Geolocation is supported by the browser
        if (navigator.geolocation) {
            // Get the current position
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;

                    const newPoints = [...points, [latitude, longitude, 'white']]
                    console.log(latitude, longitude, 'white')
                    drawMap(newPoints)
                },
                (error) => {
                    // Handle possible errors
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            break;
                        case error.POSITION_UNAVAILABLE:
                            break;
                        case error.TIMEOUT:
                            break;
                        case error.UNKNOWN_ERROR:
                            break;
                    }
                }
            );
        } else {
            console.log('not supported')
        }
    }


    function drawMap(points) {
        // Select the minimap element
        const pointscontainer = document.getElementById('pointscontainer');
        pointscontainer.innerHTML = '';
        const minimap = document.getElementById('minimap');
        const minimapWidth = minimap.offsetWidth - 20;
        const minimapHeight = minimap.offsetHeight - 20;
        console.log('height', minimapHeight);
        console.log('width', minimapWidth);

        // Get min/max latitude and longitude
        const minLat = Math.min(...points.map(p => p[0]));
        const maxLat = Math.max(...points.map(p => p[0]));
        const minLng = Math.min(...points.map(p => p[1]));
        const maxLng = Math.max(...points.map(p => p[1]));

        console.log('Lat', minLat, maxLat);
        console.log('minLng', minLng, maxLng);

        // Function to transform latitude and longitude to x, y
        function latLngToXY(lat, lng) {
            const x = ((lng - minLng) / (maxLng - minLng)) * minimapWidth + 10;
            const y = ((maxLat - lat) / (maxLat - minLat)) * minimapHeight + 10; // Reverse Y-axis because in browsers Y grows downward
            return { x, y };
        }

        // Function to create a point div and place it on the minimap
        function createPoint(x, y, color) {
            const point = document.createElement('div');
            point.classList.add('map-marker');
            point.style.left = `${x - 5}px`;  // Subtract 5 to center the point
            point.style.top = `${y - 5}px`;   // Subtract 5 to center the point
            point.style.backgroundColor = color;
            pointscontainer.appendChild(point);
        }

        // Add points to the minimap
        window.points.forEach(([lat, lng, color]) => {
            const { x, y } = latLngToXY(lat, lng);
            createPoint(x, y, color);
        });


    }
