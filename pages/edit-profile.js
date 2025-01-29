document.addEventListener("DOMContentLoaded", () => {
    // Add your OpenCage API key here
    const API_KEY = "a148e48fafc94535ae130af577869158";

    // Function to get the user's live location
    function fetchLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
        } else {
            console.log("Geolocation is not supported by your browser.");
        }
    }

    // Success callback for geolocation
    function successCallback(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Use OpenCage Geocoder API to reverse geocode coordinates
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data && data.results && data.results.length > 0) {
                    const town = data.results[0].components.town || data.results[0].components.city || "Unknown Town";
                    const state = data.results[0].components.state || "Unknown State";

                    console.log(`Town: ${town}, State: ${state}`);
                    // alert(`Your location: ${town}, ${state}`);
                    localStorage.setItem("town", town);
                    localStorage.setItem("state", state);
                } else {
                    console.log("Unable to fetch location details.");
                }
            })
            .catch(error => {
                console.error("Error fetching location data:", error);
            });
    }

    // Error callback for geolocation
    function errorCallback(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                console.log("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                console.log("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                console.log("The request to get user location timed out.");
                break;
            default:
                console.log("An unknown error occurred.");
                break;
        }
    }
    // Call the function to fetch location
    fetchLocation();
})