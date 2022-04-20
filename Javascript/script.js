function changeData(planetIndex){
    const travel = fetch("../data.json").then(response => response.json()).then(data =>
        {
            document.getElementById("dest-planet").innerHTML= data.destinations[planetIndex].name;
            document.getElementById("dest-description").innerHTML= data.destinations[planetIndex].description;
            document.getElementById("distance").innerHTML= data.destinations[planetIndex].distance;
            document.getElementById("time").innerHTML= data.destinations[planetIndex].travel;
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


function changeCrew(crewIndex){
    const travel = fetch("../data.json").then(response => response.json()).then(data =>
        {
            document.getElementById("crew-title").innerHTML= data.crew[crewIndex].role;
            document.getElementById("crew-name").innerHTML= data.crew[crewIndex].name;
            document.getElementById("crew-description").innerHTML= data.crew[crewIndex].bio;
        
            document.getElementById("crew-img").src= "." + data.crew[crewIndex].images.webp;

            var elements = document.getElementsByClassName("destinations");
            elements = Array.from(elements);

            // elements.forEach(element => {
            //     if (element.classList.contains("marked")){
            //         element.classList.remove("marked");
            //     }
            //     if (element === elements[planetIndex]){
            //         element.classList.add("marked");
            //     }
            // });
        }
        );

}



function changeData(technologyIndex){
    const travel = fetch("../data.json").then(response => response.json()).then(data =>
        {
            document.getElementById("technology-name").innerHTML= data.technology[technologyIndex].name;
            document.getElementById("technology-description").innerHTML= data.technology[technologyIndex].description;
            document.getElementById("technology-img").src= "." +data.technology[technologyIndex].images.portrait;
            
            

            var elements = document.getElementsByClassName("rounded-button");
            elements = Array.from(elements);

            elements.forEach(element => {
                if (element.classList.contains("selected-button")){
                    element.classList.remove("selected-button");
                    element.classList.add("unselected-button");
                }
                if (element === elements[technologyIndex]){
                    element.classList.add("selected-button");
                }
            });
        }
        );

}