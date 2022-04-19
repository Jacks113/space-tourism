function changeData(planetIndex){
    const travel = fetch("../data.json").then(response => response.json()).then(data =>
        {
            document.getElementById("dest-planet").innerHTML= data.destinations[planetIndex].name;
            document.getElementById("dest-description").innerHTML= data.destinations[planetIndex].description;
            document.getElementById("distance").innerHTML= data.destinations[planetIndex].distance;
            document.getElementById("time").innerHTML= data.destinations[planetIndex].time;
            document.getElementById("planet-img").src= "." + data.destinations[planetIndex].images.webp;

            var elements = document.getElementsByClassName("destinations");
            elements = Array.from(elements);

            elements.forEach(element => {
                if (element.classList.contains("marked")){
                    element.classList.remove("marked");
                }
                if (element === elements[planetIndex]){
                    element.classList.add("marked");
                }
            });
        }
        );

}