(function (window, document, $) {
  'use strict';
  /**
   * Countdown jQuery plugin
   *
   * Sample Usage:
   *
   * $('.countdown').countdown();
   * $('.countdown').countdown('destroy');
   *
   * @method
   * @customOptions
   *
   * @return   {object}
   */
  $.fn.extend({
    countdown: function (method, customOptions) {

      var options = 
      {
      	endTime: new Date("Sep 12 2013 15:48:00")

        onCountDownEnd: false;
        onCountDownChange: false;
      };

      var methods;

      options = $.extend(options, customOptions);

      methods = {
        /**
        * initializing function
        */
        init : function () {
          
          return this.each(function () { // Maintaining Chainability
           //console.log(options.endTime);
			     pocitadlo(options.endTime);
        
          });
        },

        end: function() {
          return this.each(function () {
          $(this).data('isEnd', true);
          });
        },

        /**
        * destroy function
        */
        destroy : function () {

        }
      };


	function setElement(id, fDays, fHours, fMinutes, fSeconds) {
 		// Ak je dlzka hodnoty mensia ako 2, zmen ju. (priklad: 9 sekund zmen na 09 sekund

		var fDaysKoncovka;
    var fHoursKoncovka;
    var fMinutesKoncovka;
    var fSecondsKoncovka;

    if (fDays < 10) {
			fDays = "0" + fDays;
		}
		if (fHours < 10) {
			fHours = "0" + fHours;
		}
		if (fMinutes < 10) {
			fMinutes = "0" + fMinutes;
		}

		if (fSeconds < 10) {
			fSeconds = "0" + fSeconds;
		}
		if (fDays === "01") {
			fDaysKoncovka = " ";
		} else {
			fDaysKoncovka = "s";
		}

		if (fHours === "01") {
			fHoursKoncovka = " ";
		} else {
			fHoursKoncovka = "s";
		}

		if (fMinutes === "01") {
			fMinutesKoncovka = " ";
		} else {
			fMinutesKoncovka = "s";
		}

		if (fSeconds === "01") {
			fSecondsKoncovka = " ";
		} else {
			fSecondsKoncovka = "s";
		}
		$(id).html("<div class='on'><h1>Countdown untill kick-off</h1><span id='countdown-days'>"+fDays+"<p>day"+fDaysKoncovka+"</p></span><span id='countdown-hours'>"+fHours+"<p>hour"+fHoursKoncovka+"</p></span><span id='countdown-minutes'>"+fMinutes+"<p>minute"+fMinutesKoncovka+"</p></span><span id='countdown-seconds'>"+fSeconds+"<p>second"+fSecondsKoncovka+"</p></span></div>");
	}

	function pocitadlo(endTime) {
 		var now		= new Date();
 	  var diff	= new Date(endTime - now);
 		var seconds_left  = Math.floor(diff / 1000);
 	
 		var seconds  = Math.floor(seconds_left / 1) % 60;
 		var minutes  = Math.floor(seconds_left / 60) % 60;
 		var hours    = Math.floor(seconds_left / 3600) % 24;
 		var days     = Math.floor(seconds_left / 86400) % 86400;
 		
 		setElement('.countDown', days, hours, minutes, seconds);
	
 		var timer = setTimeout(function () {
      pocitadlo(endTime);
    }, 1000);
 	}

      // methods caller
      if ( methods[method] ) {
        // call selected method
        return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
      } else if ( typeof method === 'object' || ! method ) {
        // call init
        return methods.init.apply( this, arguments);
      } else {
        // method not found
        $.error( 'Method ' +  method + ' does not exist on jQuery.countdown plugin' );
      }
    }
  });

}(window, document, jQuery));