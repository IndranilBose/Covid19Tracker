$(document).ready(function(){
	//Get json data from URL
	$.getJSON("https://api.covid19india.org/data.json",function(data){
		var states = [];
		var confirmed = [];
		var recovered = [];
		var deaths = [];

        var totalActive ;
		var totalConfirmed ;
		var totalRecovered ;
		var totalDeath ;

        totalActive = data.statewise[0].active;
        totalConfirmed = data.statewise[0].confirmed;
        totalRecovered = data.statewise[0].recovered;;
		totalDeath = data.statewise[0].deaths;;
        
        $("#confirmed").append(totalConfirmed);
        $("#active").append(totalActive);
        $("#recovered").append(totalRecovered);
        $("#death").append(totalDeath);
        //console.log(data.statewise);
        $.each(data.statewise,function(id,obj){
        	states.push(obj.state);
        	confirmed.push(obj.confirmed);
        	recovered.push(obj.recovered);
        	deaths.push(obj.deaths);
        	 
        });
            states.shift();
        	confirmed.shift();
        	recovered.shift();
        	deaths.shift();


        	// Chart
        	var myChart = document.getElementById("myChart").getContext('2d');
        	var chart = new Chart(myChart,{
        		type:"bar",
        		data:{
        			
        			labels : states,
        			datasets: [
        			   {
        			   	   label: "Confirmed",
        			   	   data: confirmed,
        			   	   backgroundColor: "#2980B9",
        			   	   //minBarLength: 100,
        			   }, 
        			   {
        			   	  label: "Recovered",
        			   	   data: recovered,
        			   	   backgroundColor: "#28B463",
        			   	   //minBarLength: 100,
        			   },
        			   {
        			   	  label: "Deceased",
        			   	   data: deaths,
        			   	   backgroundColor: "#FF5733",
        			   	   //minBarLength: 100,
        			   	
        			   },
        			]
        		},
        		options:{}
        	});
	});

});