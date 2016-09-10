(function($) {
"use strict";
	$(document).ready(function(){


  $(window).on("load", function() {

    /*--------------------------------------------------------------
      MOUNTAINGOAT - PRELOADER INIT
    --------------------------------------------------------------*/
    $("#mg_preloader_body").delay(500).slideUp(600);

    /*--------------------------------------------------------------
      MOUNTAINGOAT - HEIGHT INIT
    --------------------------------------------------------------*/
    $.fn.center = function () {
      this.css("position","absolute");
      this.css("top", ( $(window).height() - this.height() ) / 2  + "px");
      this.css("left", ( $(window).width() - this.width() ) / 2 + "px");
      return this;
    }

    $('#mg-hero').css({'height' : $(window).height()+"px"});
    $('.default-hide').css({'height' : $(window).height()+"px"});

    $(window).resize(function(){ 
      $('#mg-hero').css({'height' : $(window).height()+"px"});
      $('.default-hide').css({'height' : $(window).height()+"px"});
    });

    /*--------------------------------------------------------------
      MOUNTAINGOAT - ISOTOPE FILTERING INIT
    --------------------------------------------------------------*/
    var $container = $('.mg-portfolio-area'),
      colWidth = function () {
        var w = $container.width(), 
          columnNum = 1,
          columnWidth = 0;
        if (w > 1200) {
          columnNum  = 3;
        } else if (w > 1024) {
          columnNum  = 3;
        } else if (w > 667) {
          columnNum  = 3;
        } else if (w > 450) {
          columnNum  = 1;
        } else if (w > 385) {
          columnNum  = 1;
        }
        columnWidth = Math.floor(w/columnNum);
        $container.find('.item').each(function() {
          var $item = $(this),
            multiplier_w = $item.attr('class').match(/item-w(\d)/),
            multiplier_h = $item.attr('class').match(/item-h(\d)/),
            width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth,
            height = multiplier_h ? columnWidth*multiplier_h[1] : columnWidth*0.69;
          $item.css({
            width: width,
            height: height
          });
        });
        return columnWidth;
      },
      isotope = function () {
        $container.isotope({
          resizable: false,
          itemSelector: '.item',
          masonry: {
            columnWidth: colWidth(),
            gutterWidth: 3
          }
        });
      };
    isotope();

    

  });

  /*--------------------------------------------------------------
    MOUNTAINGOAT - COUNDOWN INIT
  --------------------------------------------------------------*/
  $('#mg_countdown').countDown({
    targetDate: {
      'day':    24,
      'month':  12,
      'year':   2016,
      'hour':   11,
      'min':    13,
      'sec':    0
    },
    omitWeeks: true
  });


  /*--------------------------------------------------------------
    MOUNTAINGOAT - PARTICLEGROUND INIT
  --------------------------------------------------------------*/
  $('#mg_scroll_particles').particleground({
    dotColor: '#ffffff',
    lineColor: '#ffffff'
  });



  /*--------------------------------------------------------------
  	MOUNTAINGOAT - INPUT FOCUS
  --------------------------------------------------------------*/
  $('input').focus(function(){
     $(this).data('placeholder',$(this).attr('placeholder'))
            .attr('placeholder','');
  }).blur(function(){
     $(this).attr('placeholder',$(this).data('placeholder'));
  });

  /*--------------------------------------------------------------
  	MOUNTAINGOAT - TEXTAREA AUTOSIZE
  --------------------------------------------------------------*/
  $('textarea#mgc_message').textareaAutoSize();


  /*--------------------------------------------------------------
    MOUNTAINGOAT - COUNTER ANIMATION INIT
  --------------------------------------------------------------*/
  $(document).scroll(function () {
      var y = $(document).scrollTop(),
          counter = $(".mg-main-counter");

      if (y >= 200) {
          counter.removeClass('mg-hide-counter');
      } else {
          counter.addClass('mg-hide-counter');
      }
  });

  /*--------------------------------------------------------------
  MOUNTAINGOAT - MAGNIFIC POPUP INIT
  --------------------------------------------------------------*/
  $('.thumb-portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
      }
    }
  });


  /*--------------------------------------------------------------
    MOUNTAINGOAT - AJAX MAILCHIMP INIT
  --------------------------------------------------------------*/
  $('#mg-form').ajaxChimp({
      callback: callbackFunction,
      url: 'http://link.us12.list-manage.com/subscribe/post?u=b9b1c70d4689dd640d1f11a28&id=2c40197dfd'
  });
  function callbackFunction (resp) {
      if (resp.result === 'success') {
        $('#mc-email').val('');
      }
  }

  /*--------------------------------------------------------------
    MOUNTAINGOAT - CONTACT FORM AJAXIFY INIT
  --------------------------------------------------------------*/
  $( "#mgc-contactForm" ).on( "submit", function( e ) {
      
      //Stop form submission & check the validation
      e.preventDefault();
      
      // Variable declaration
      var error       = false,
        name          = $('#mgc_name').val(),
        email         = $('#mgc_email').val(),
        mail_fail     = $('#mail_fail'),
        mail_success  = $('#mail_success'),
        submit_btn    = $('#mgc_submit_btn');
      
    // Form field validation
      if(name.length <= 1){
          var error = true;
          $('#mgc_name').parent().addClass('filed_error');
      }else{
          $('#mgc_name').parent().removeClass('filed_error');
      }
      if(email.length <= 6 || email.indexOf('@') == '-1'){
          var error = true;
          $('#mgc_email').parent().addClass('filed_error');
      }else{
          $('#mgc_email').parent().removeClass('filed_error');
      }
      if (error == true) {
        $(mail_success).fadeOut(500);
        $(mail_fail).slideDown(800);
      };

      // If there is no validation error, next to process the mail function
      if(error == false){

          $('i.mgc-submit-spinner').fadeIn(350);
          $(mail_success).hide();
          $(mail_fail).hide();
          $.ajax({
          url: $(this).attr('action'),
          data: $(this).serialize(),
          type: 'POST',
          success: function() {
            $(mail_fail).fadeOut(500);
            $(mail_success).slideDown(800);
            $('.single-cform-item input, .single-cform-item textarea').val('');
            $('.filed_error').removeClass('filed_error');
            $('.filed_ok').removeClass('filed_ok');
            $('i.mgc-submit-spinner').fadeOut('fast');
          },
          error: function() {
            $(mail_success).fadeOut(500);
            $(mail_fail).slideDown(800);
            $('i.mgc-submit-spinner').fadeOut('fast');
          }
          });

      }
  });    


  /*--------------------------------------------------------------
    MOUNTAINGOAT - CONTACT FORM INPUT INAMATION
  --------------------------------------------------------------*/
  $('.single-cform-item input, .single-cform-item textarea').focus(function() {
      $(this).closest('.single-cform-item').addClass('active_item').siblings().removeClass('active_item');
  }).focusout(function() {
    $('.single-cform-item').removeClass('active_item');
  });


  /*--------------------------------------------------------------
    MOUNTAINGOAT - CLICK AND ANIMATE SCROLL
  --------------------------------------------------------------*/
  $( ".start_browsing" ).on( "click", function(e) {
    if ($(".mg-main-counter").hasClass("mg-hide-counter")) {
      var minus = 240;
    } else {
      var minus = 0;
    }
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-minus;
    $('html, body').stop().animate({ 
        scrollTop: offsetTop,
    }, 500, 'easeInExpo');
    e.preventDefault();
  });

	});
})(jQuery);

