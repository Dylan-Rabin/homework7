function gettingJSON(){
    //Display the forecast
    // Your code here.
    
    //Set default location if one isn't provided - Ann Arbor
    let loc;
    if (document.querySelector("#location").value == ''){
        loc = "Ann Arbor";
    }
    else{
        loc = document.querySelector("#location").value;
    }
    
    console.log("Location is : " + loc);

    //set default temperature format if one isn't provided
    // format is F if not clicked or F, other it's C
    let format;
        if (document.querySelector("#celcius").checked){
            format = document.querySelector("#celcius").getAttribute('value');
        }
        else {
            format = document.querySelector("#fahrenheit").getAttribute('value');
        }

    console.log("Format is " + format);

    //key
    let key = "233890bf3687d18e28b62574d713c922";

    //set the query  
    let query;
    
    if (Number.isInteger(parseInt(loc))){
        query = "https://api.openweathermap.org/data/2.5/weather?zip=" + loc + "&APPID=" + key + "&units=" + format;
    }
    else{
        query = "https://api.openweathermap.org/data/2.5/weather?q=" + loc + "&APPID=" + key + "&units=" + format;
    }
    
    console.log("Query is :" + query);
    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.
    let location = document.querySelector("#loc");
    let temp = document.querySelector("#temp");
    let tempImg = document.querySelector("#tempImg");
   
    //Use returned json to update the values of the three 
    //elements in HTML.  
    //I would print the JSON to the console
    // Your code here.

    $.getJSON(query,function(json){
        console.log(JSON.stringify(json));
            let text = json["weather"][0]["description"];
            location.innerHTML = json.name;
            temp.innerHTML = json["main"].temp +' with '+ text;
            let link = "http://openweathermap.org/img/wn/" + json["weather"][0]["icon"] + ".png";
            tempImg.setAttribute("src", link);
            tempImg.setAttribute("alt", text);
            tempImg.setAttribute("title", "Weather Image")
            document.getElementById("forecast").style.display = "block";
    
  
    });
}
