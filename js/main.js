$(function() {

   
var estado=1;
var vol=1;
	$("#fondo").animateSprite({
		fps: 12,
		loop: true,
		autoplay: false,
		animations: {
		    inicio:[0],
            camina: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65],
		}
		,
    	complete: function(){
			// this will be called when
			// there is no loop and the
			// animation finishes
			console.log('animation End');
            
     	}	
		
    });

	$("#llanta1").animateSprite({
		fps: 12,
		loop: true,
		autoplay: false,
		animations: {
		    inicio:[0],
            camina: [0, 1, 2, 3, 4, 5, 6],
		}
		,
    	complete: function(){
			// this will be called when
			// there is no loop and the
			// animation finishes
			console.log('animation End');
            
     	}	
		
    });
		$("#llanta2").animateSprite({
		fps: 12,
		loop: true,
		autoplay: false,
		animations: {
		    inicio:[0],
            camina: [0, 1, 2, 3, 4, 5, 6],
		}
		,
    	complete: function(){
			// this will be called when
			// there is no loop and the
			// animation finishes
			console.log('animation End');
            
     	}	
		
    });
			$("#llanta3").animateSprite({
		fps: 12,
		loop: true,
		autoplay: false,
		animations: {
		    inicio:[0],
            camina: [0, 1, 2, 3, 4, 5, 6],
		}
		,
    	complete: function(){
			// this will be called when
			// there is no loop and the
			// animation finishes
			console.log('animation End');
            
     	}	
		
    });
				$("#llanta4").animateSprite({
		fps: 12,
		loop: true,
		autoplay: false,
		animations: {
		    inicio:[0],
            camina: [0, 1, 2, 3, 4, 5, 6],
		}
		,
    	complete: function(){
			// this will be called when
			// there is no loop and the
			// animation finishes
			console.log('animation End');
            
     	}	
		
    });
	
	
	
    
    $("#luces").animateSprite({
		fps: 12,
		loop: true,
		autoplay: false,
		animations: {
		    apaga:[0],
            prende: [1],
		}
		,
    	complete: function(){
			// this will be called when
			// there is no loop and the
			// animation finishes
			console.log('animation End');
            
     	}	
		
    });
        $("#mecanismo").animateSprite({
		fps: 11,
		loop: false,
		autoplay: false,
		animations: {
		    inicio:[0],
            levanta: [0, 1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15,18, 19, 20, 21, 22, 23,27, 28, 29, 30 ],
            vuelve: [30, 29, 28, 27, 23, 22, 21, 20, 19, 18, 15, 14, 13, 12, 11, 10, 7, 6, 5, 4, 3, 2, 1, 0],
		}
		,
    	complete: function(){
			// this will be called when
			// there is no loop and the
			// animation finishes
			console.log('animation End');
            
     	}	
		
    });

//------------------------
//- Programacion Botones -
//------------------------
    
	$("#b_stop").on("click",function(){
    	vol=0;
        $("#fondo").animateSprite('stop');
		 $("#llanta1").animateSprite('stop');
		  $("#llanta2").animateSprite('stop');
		    $("#llanta3").animateSprite('stop');
			  $("#llanta4").animateSprite('stop');
            $("#luces").animateSprite('stop');
            $("#mecanismo").animateSprite('stop');
    });
//-------------
    $("#b_play").on("click",function(){
    	vol=1;
         $("#fondo").animateSprite('play', 'camina');
		  $("#llanta1").animateSprite('play', 'camina');
		  $("#llanta2").animateSprite('play', 'camina');
		   $("#llanta3").animateSprite('play', 'camina');
		    $("#llanta4").animateSprite('play', 'camina');
		
		
	});
       $("#b_luces").on("click",function(){
    	estado++;
           if(estado%2==0){
         $("#luces").animateSprite('play', 'prende');
           }
           else{
                $("#luces").animateSprite('play', 'apaga');
           }
		
	});
    
       $("#b_platon1").on("click",function(){
        
            $("#mecanismo").animateSprite('play', 'levanta');
           
           	});
      $("#b_platon2").on("click",function(){
          
            $("#mecanismo").animateSprite('play', 'vuelve');
           
           	});
    
    $("#b_reinicia").on("click",function(){
    vol=0;
        $("#luces").animateSprite('play', 'apaga');
        $("#fondo").animateSprite('play', 'inicio');
        $("#mecanismo").animateSprite('play', 'inicio');
	
    });
//-------------	



});