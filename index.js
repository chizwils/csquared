$(document).ready(function(){
    $('.modal').modal();
    
    
    //miliseconds to days
        var days = function(ms){
            var total = Math.floor(ms / 86400000);
            return total;
        }
        //miliseconds to hrs
        var hours = function(ms){
            var total= Math.floor(ms / 3600000);
            return total;
        }
        //miliseconds to minutes
        var min = function(ms){
            var total = Math.floor(ms / 60,000);
            return total;
        }
        //miliseconds to seconds
        var secs = function(){
            var total = Math.floor(ms / 1000);
            return total;
        }
         var countDownDate = new Date('Nov 1, 2017').getTime();


         //update count down every 1 second
         var x = setInterval(function(){
             //get todays date and time
             var now = new Date().getTime();
             //find the differnce btw now and date set
             var timeDif = countDownDate - now;

             //time calculation for days hours minutess and seconds
             var d = days(timeDif);
             
             
             var h = hours(timeDif);
             var m = min(timeDif);
             var s = secs(timeDif);
            document.getElementById('daying').innerHTML = "days ";

         });

  })