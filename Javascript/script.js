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
                    element.classList.add("unmarked");
                }
                if (element === elements[planetIndex]){
                    element.classList.add("marked");
                    element.classList.remove("unmarked");
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



function changeTechnology(technologyIndex){
    const travel = fetch("../data.json").then(response => response.json()).then(data =>
        {
            document.getElementById("technology-name").innerHTML= data.technology[technologyIndex].name;
            document.getElementById("technology-description").innerHTML= data.technology[technologyIndex].description;
            document.getElementById("technology-img").src = "." + data.technology[technologyIndex].images.portrait;
            document.getElementById("source-resp").srcset = "." + data.technology[technologyIndex].images.landscape;
            
            
            

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


document.getElementById("menuToggle").addEventListener("click", function(){
    var spans = document.getElementsByClassName("normalMenu");
    var el = document.getElementById("header-nav");
    if (el.classList.contains("showNav")) {
        el.classList.remove("showNav");
    }
    else{
        el.classList.add("showNav");
    }
    
    spans[0].classList.toggle("open1");
    spans[1].classList.toggle("open2");
    spans[2].classList.toggle("open3");
    
    
})