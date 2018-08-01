/**
 * Created by makswood on 04.07.2018.
 */
$(document).ready(function () {

    $('.btn, .btn-add, .select2-choices, .btn-submit, .audience, select option').focus(function() {
        this.blur();
    });
     var active = $('.secondary-nav .active').offset();

  //  $( ".bottom-navigation" ).scrollLeft( active.left - ($('.bottom-navigation').width() - $('.secondary-nav .active').width())/2 );
    $( ".bottom-navigation" ).animate({scrollLeft: active.left - ($('.bottom-navigation').width() - $('.secondary-nav .active').width())/2}, 800);;

    $('.company-form  input, .company-form-faq  input').on("focusout", function () {
        $('.input-bottom').removeClass('focused');
    });
    $('.company-form  input, .company-form-faq  input').on("focus", function () {

        $('.input-bottom').removeClass('focused');
        $(this).next('.input-bottom').toggleClass('focused');
    });

    $('#range').on('change', function() {
        if ($(this).val() == 'starting' ) {$('.for-range-to').fadeOut(); $('.text-range-from').hide(); $('.text-range-to').show();}
        if ($(this).val() == 'range' )    {$('.for-range-to').fadeIn();  $('.text-range-from').show(); $('.text-range-to').hide();}
    });

    if ($('.grid').length > 0) {
        var grid = new Muuri('.grid', {
            layoutDuration: 400,
            layoutEasing: 'ease',
            dragEnabled: true,
            dragSortInterval: 50,
            dragReleseEasing: 'ease'

        });
    }
 //   grid.destroy();

    function initGrid() {

        var dragCounter = 0;
        var gridElement = $('.grid');
        grid = new Muuri(gridElement, {
         //   items: generateElements(20),
            layoutDuration: 400,
            layoutEasing: 'ease',
            dragEnabled: true,
            dragSortInterval: 50,
            dragContainer: document.body,
          /*  dragStartPredicate: function (item, event) {
                var isDraggable = sortFieldValue === 'order';
                var isRemoveAction = elementMatches(event.target, '.card-remove, .card-remove i');
                return isDraggable && !isRemoveAction ? Muuri.ItemDrag.defaultStartPredicate(item, event) : false;
            },*/
            dragReleaseDuration: 400,
            dragReleseEasing: 'ease'
        })
            .on('dragStart', function () {
                ++dragCounter;
                docElem.classList.add('dragging');
            })
            .on('dragEnd', function () {
                if (--dragCounter < 1) {
                    docElem.classList.remove('dragging');
                }
            })
            .on('move', updateIndices)
            .on('sort', updateIndices);

    }

   // initGrid();

   /* $('.grid').packery({
        // options
        itemSelector: '.grid-item',
        gutter: 10
    });*/
    // initialize Packery
   /* var $grid = $('.grid').packery({
        itemSelector: '.grid-item',
        // columnWidth helps with drop positioning
        columnWidth: 230
    });*/

// make all items draggable
  //  var $items = $grid.find('.grid-item').draggable();
// bind drag events to Packery
    // $grid.packery( 'bindUIDraggableEvents', $items );
   /*  (function() {
        $(function() {
            $('.gridly').gridly({
                columns: 6
            });
            $('.gridly').gridly('draggable');
            return $('.gridly .brick').click(function(event) {
                var size;
                event.preventDefault();
                event.stopPropagation();
                $(this).toggleClass('small');
                $(this).toggleClass('large');
                if ($(this).hasClass('small')) {
                    size = 210;
                }
                if ($(this).hasClass('large')) {
                    size = 300;
                }
                $(this).data('width', size);
                $(this).data('height', size);
                return $('.gridly').gridly('layout');
            });
        });

    }).call(this);*/
   /* if ($(window).width() > 1360) {
        $('.gridly').gridly({
            base: 54,
            gutter: 5,
            columns: 12,
            draggable: {
                zIndex: 800,
                selector: '> *'
            }
        });
    }*/
    if ($('#gallery-upload-btn').length > 0) {
        var uploader = new qq.FineUploader({
            element: document.getElementById("gallery-upload-btn"),
            autoUpload: true,
            multiple: true,
            dragAndDrop: {
                extraDropzones: [$('div.drag-and-drop-area')[0]],
                hideDropzones: false
            },
            callbacks: {
                onComplete: function () {
                    console.log('alarm');


                    (function () {
                        $(function () {
                            var brick;
                            brick = ['<div class="sortable-inner">' +
                            '<div class="sortable-img-wrap">' +
                            '<div class="overlay">' +
                            '<div class="remove-wrapper form-control">' +
                            '<a href="javascript:;" class="remove-icon"><i class="far fa-trash-alt"></i></a>' +
                            '</div>' +
                            '</div><img src="', e.target.result,
                                '" title="', escape(theFile.name), '"/></div>' +
                                '<div class="sortable-block">' +
                                '<span class="company-fields form-group">' +
                                '<span class="is-loading no-margin" style="width: 100%;"></span>' +
                                '<input type="text" class="form-control " id="company-description-1" placeholder="Add a description">' +
                                '</span>' +
                                '<i class="fa fa-check color--green animation-hide animation-hidden"></i></span>'].join('');

                            $('.gridly').append(brick);
                            return $('.gridly').gridly();


                        });

                    }).call(this);

                }
            },

            classes: {
                dropActive: "qq-upload-drop-area-active"
            },
        });
    }


    $('.time-restrictions .remove-for-radio a').click(function (e) {

        $('#eventTime').timepicker('setTime', '12:00 AM');
        $('#eventTime2').timepicker('setTime', '12:00 AM');
        $('.faq-block-single2 sub').removeClass('checked-true');
        $('.faq-block-single2 .remove-wrapper').addClass('checked-true');

    });


    $('.rooms-block a.btn-add').on("click", function (e) {
        e.preventDefault();
        var template = $('#addRoom').html();
        $(this).before(template);
    });
    $('.pro-block a.btn-add').on("click", function (e) {
        e.preventDefault();
        var template = $('#addPro').html();
        $(this).before(template);
    });
    $('.event-block a.btn-add').on("click", function (e) {
        e.preventDefault();
        var template = $('#addEventVendor').html();
        $(this).before(template);
    });
   $('.video-block a.btn-add').on("click", function (e) {
        e.preventDefault();
        var template = $('#addVideo').html();
        $(this).before(template);
    });

    $(document).on("click", '.room-delete a', function(e) {
        e.preventDefault();

        $(this).closest('.room-block-row').remove();
    });
    $(document).on("click", '.pro-delete a', function(e) {
        e.preventDefault();

        $(this).closest('.pro-block-row').remove();
    });

    $(document).on("click", '.room-delete a', function(e) {
        e.preventDefault();

        $(this).closest('.video-block-row').remove();
    });

    $(document).on("click", '.overlay .remove-wrapper .remove-icon, .remove-wrapper span', function(e) {
        e.preventDefault();

        $(this).closest('.sortable-element').remove();
        $('#upload-file-info3').html('Upload floor plan');
    });

    $(document).on("click", '.documents-list .remove-wrapper a', function(e) {
        e.preventDefault();

        $(this).closest('.documents-list').find('.profile-uploaded').attr('src', 'img/placeholder.jpg');
        $('#upload-file-info2').html('Upload photo');
    });

     $(document).on('change', '#my-file-selector2', function(e) {
         if (this.files && this.files[0]) {
             var reader = new FileReader();
             reader.onload = function (e) {
                 $('.profile-uploaded')
                     .attr('src', e.target.result);
             };
             reader.readAsDataURL(this.files[0]);
         }
       //  console.log(this.files);
     });
     $(document).on('change', '#my-logo-selector', function(e) {
         if (this.files && this.files[0]) {
             var reader = new FileReader();
             reader.onload = function (e) {
                 $('.company-logo img')
                     .attr('src', e.target.result);
             };
             reader.readAsDataURL(this.files[0]);
         }
       //  console.log(this.files);
     });
    $(document).on('change', '#upload-event-file', function(e) {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('.event-uploaded')
                    .attr('src', e.target.result);
            };
            reader.readAsDataURL(this.files[0]);
        }
      //  console.log(this.files);
    });

    $(document).on("click", 'a.switch-tab', function(e) {
        e.preventDefault();
        $(' a[href="' + $(this).attr('href') + '"]').tab('show');
    });

    $(document).on("click", '.uploaded-gallery a' , function(e) {
        e.preventDefault();
      //  var expandImg =$(".profile-uploaded2");
        $('.profile-uploaded2').attr('src', $(this).attr('href'));
        $('.uploaded-gallery .column').removeClass('active');
        $(this).closest('.uploaded-gallery .column').addClass(' active');
    });


    $(document).on("click", '.document-remove a', function(e) {
        e.preventDefault();
       console.log('remove room');
        $(this).closest('.form-group').remove();
    });
    $(document).on('click', '.remove-for-radio a', function (e) {
        e.preventDefault();
        console.log ('click');
        $(this).closest('.form-group').find('input[type="radio"]').prop('checked', false);
        $(this).closest('.form-group').find('input[type="checkbox"]').prop('checked', false);
        $(this).closest('.faq-block-single').find('.faq-block-single-extend').hide('slow');
    });
    $('.user-profile, .vendor-profile').click(function (e) {
        $(this).toggleClass('clicked');
        var $dropdown = $(this).find('.dropdown-menu');
        $dropdown.slideToggle('fast');
      /*  $dropdown.fadeToggle('fast');*/
    });


     $(document).click(function(event){


        if ($(event.target).closest('.vendor-profile').length) {

            return; //do nothing if event target is within the navigation
        } else {
            /*$('.dropdown-wrap .dropdown-menu').slideToggle('fast');*/
            $('.dropdown-wrap .dropdown-menu').fadeOut('fast');
            $('.vendor-profile').removeClass('clicked');
        }
    });
    $(document).on("change keyup paste click", '.userConfirmPassword',  function () {
        if ( ($('.userConfirmPassword').val().length != 0 ) && ($('.userNewPassword').val().length != 0 )) {
            $('.pwd-upd').addClass('visible');
        }else {
            $('.pwd-upd').removeClass('visible');
        }
    });
    $(document).on("change", '.company-form  input, .company-form-faq  input, .input-check-group input, .audience',  function () {
        var that = this;

        if (($(this).val().length > 1) || ($('.audience').val() != " ")) {
            $(this).addClass(" saving");

       //         console.log(that.value);
            setTimeout(function () {

                $(that).removeClass(" saving");

                $(that).closest('.form-group').find(".color--green").delay(1000).toggleClass('animation-show');
                $(that).closest('.form-group').find(".color--green").delay(300).removeClass('animation-hide');
                setTimeout(function () {


                    $(that).parent('.form-group').find(".color--green").delay(300).removeClass('animation-show');
                }, 300);
            }, 500);
            setTimeout(function () {


                $(that).closest('.form-group').find(".color--green").delay(300).removeClass('animation-show');
                $(that).closest('.form-group').find(".color--green").addClass('animation-hide');

            }, 800);
            setTimeout(function () {

                $(that).closest('.form-group').find(".color--green").delay(1000).removeClass('animation-hide');

            }, 1800);
            /*  setTimeout(function() {

             $('<i class="fa fa-check color--green animation-hide"></i>').remove();
             } , 1200);*/
            //  $(this).append('<i class="fa fa-check color--green animation-hide"></i>');
        }
        if ($(this).val().length < 1) {
            console.log(that.value);
            $(this).removeClass(" saving");
            $(that).closest('.form-group').find(".color--green").delay(300).addClass('animation-hide');
            setTimeout(function () {

                $(that).closest('.form-group').find(".color--green").delay(1000).removeClass('animation-hide');

            }, 1800);
        }
    });
    if ($('.eventDate').length > 0) {
        $('.eventDate').datepicker({
            format: 'M d, yyyy',
            orientation: "left top",
            defaultDate: '',
            autoclose: true,
            autofocus: true,
            container: 'body'
        }).on("changeDate", function (event) {
            var current = $(event.target);
            console.log($(this).val());
            //   $(this).closest('.panel').addClass('checked-true');
            setTimeout(function () {
                var target = $(eventDate).not(current);
                var tdt = target.datepicker('getDate');
                if (target && (tdt == null || tdt.toString() != current.datepicker('getDate').toString())) {
                    $(eventDate).not(current).datepicker('setDate', event.date);
                }
            }, 300);
        }).on("hide", function (event) {
            if ($(this).val() != '') {
                console.log(' value');
            }
            else {
                $(this).closest('sub').removeClass('checked-true');
            }
        });
    }

    $('.faq-block-single input[type=text], #timepair input[type=select]').change(function() {
        if ($(this).val() !='') {
            console.log(' value');
            $(this).closest('sub').addClass('checked-true');
        }
        else {
            console.log(' value');
            $(this).closest('sub').removeClass('checked-true');
        }

    });
    $(document).on("mouseup click mouseleave", ".faq-block-single", function() {
           //     console.log('hello');
        if ( ($(this).find("input:checkbox:checked").length > 0) || ( ($(this).find('.venue-capacity-number').length > 0) && ($(this).find('.venue-capacity-number').text() != 'N/A')) || ( $(this).find("input:radio:checked").length > 0 )  || ( ( $(this).find('input[type="text"]').length > 0) && ($(this).find('input[type="text"]').val().length != 0)) )
        {
            $(this).find('sub').addClass('checked-true ');
            $(this).find('.remove-wrapper').removeClass('checked-true ');
        }
        else
        {
            $(this).find('sub').removeClass('checked-true');
            $(this).find('.remove-wrapper').addClass('checked-true ');
        }

    });

  /*  $( "#sortable" ).sortable( {
        helper:'clone'
    });*/

  //  $( "#sortable" ).disableSelection();
   // $('.company-select-city').select2();
    $('.album-select, #range').select2({
        minimumResultsForSearch: -1
    });

    if ($('.copy-text').length  ) {
        var clipboard = new ClipboardJS('.copy-text');

        clipboard.on('success', function(e) {

            $('.copy-text').not(e.trigger).html('<i class="far fa-clone"></i>Copy to clipboard</a>');
            $(e.trigger).html('<i class="far fa-clone"></i>Copied</a>');
        });
    }


  /*  $(document).on('click', '.copy-text',  function() {
        /!* Get the text field *!/
        var copyText = $(this).closest('.admin-badge-content').find('.inputCopy').text();
        console.log(copyText);
        $(this).html('<i class="far fa-clone"></i>Copied</a>');
        /!* Select the text field *!/
        copyText.select();
     //  console.log(copyText.value());
        /!* Copy the text inside the text field *!/
      //  copyText.select();
        document.execCommand("copy");

        /!* Alert the copied text *!/
        alert("Copied the text: " + copyText.value);
    });*/
   /* $( "#sortable" ).sortable({  helper:'clone' } );*/
   // $( "#sortable2" ).disableSelection();

    $("#Phone").inputmask({"mask": "(999) 999-9999"});
    $("div.alert").on("click", "button.close", function() {
        $(this).parent().animate({opacity: 0}, 500).hide('slow');
    });

    $('.readMoreTrigger').click(function () {
        $('.readMoreContent').css({ "height": "auto"});
        $(this).hide();
        /*if ($('.readMoreContent').data('shown')) {
            $(this).text('Read more..');
            $('.readMoreContent').animate({
                "height": "auto"
            }, 'fast');
            $('.readMoreContent').data('shown',false);
        } else {
            $(this).text('Read less..');
            $(this).hide();
            $('.readMoreContent').animate({
                "height": "auto"
            }, 'fast');
            $('.readMoreContent').data('shown',true);
        }*/
        /*$('.readMoreContent').slideUp('fast');
         if($(this).prev().is(':hidden') == true) {
         $(this).prev().slideDown('fast');
         $(this).text('Read less..')
         }*/
    });
    /*$('.readMoreContent').hide();*/
   /* $('.readMoreContent').data("orig_height", $('.readMoreContent').css("height")).css({
        height: "485px"
    });*/

    var inputEventTime = "input.eventTime";
    var time1 = $('#eventTime');
    var time2 = $('#eventTime2');

    time1.timepicker({
        icons: {
            up: 'fa fa-angle-up',
            down: 'fa fa-angle-down'
        },
        orientation: {
            x: 'left', y: 'top'
        },
        minuteStep: 5,
        defaultTime: '12:00 AM'
    }).on('changeTime.timepicker', function(e) {
       /* setTimeout(function () {
            var that = this;
            $(that).removeClass(" saving");

            $('#timepair').closest('.time-restrictions').find(".color--green").delay(1000).toggleClass('animation-show');
           // $('.company-form select').closest('.form-section').find(".color--green").delay(300).removeClass('animation-hide');
            setTimeout(function () {


                $(that).parent('.form-group').find(".color--green").delay(300).removeClass('animation-show');
            }, 300);
        }, 500);*/
        var start = e.time.value;
        var end = $('#eventTime2').val();

        var stt = new Date("November 13, 2013 " + start);
        stt = stt.getTime();

        var endt = new Date("November 13, 2013 " + end);
        endt = endt.getTime();

        $('.time-restrictions h4 sub').addClass('checked-true');
       $('.time-restrictions .remove-wrapper').removeClass('checked-true');


    });
    time2.timepicker({
        icons: {
            up: 'fa fa-angle-up',
            down: 'fa fa-angle-down'
        },
        orientation: {
            x: 'left', y: 'top'
        },
        minuteStep: 5,
        defaultTime: '12:00 AM'
    }).on('changeTime.timepicker', function(e) {

        var start = $('#eventTime').val();
        var end = e.time.value;


        var stt = new Date("November 13, 2013 " + start);
        stt = stt.getTime();

        var endt = new Date("November 13, 2013 " + end);
        endt = endt.getTime();


       $('.time-restrictions h4  sub').addClass('checked-true');
        $('.time-restrictions .remove-wrapper').removeClass('checked-true');

    });

    if ($('#timepair').length > 0) {
        var basicExampleEl = document.getElementById('timepair');
        var datepair = new Datepair(basicExampleEl);
        $('.faq-block-single2').on('click mouseleave', function () {

            if ($(this).find('.eventTime').length > 0 && $(this).find('.eventTime').val().length > 0 && ( ($(this).find('#eventTime').val() != $(this).find('#eventTime2').val()) && ( $(this).find('#eventTime').val() != "12:00 AM" ))) {
                console.log($(this).find('.eventTime').val());
                //     $(this).find('sub').addClass('checked-true');
            }
            if (($(this).find('#eventTime').val() == $(this).find('#eventTime2').val()) || ( $(this).find('#eventTime').val() == "12:00 AM" )) {
                //  $(this).find('sub').removeClass('checked-true');
            }

            // $(this).parent('.faq-block').find('sub').addClass('checked-true ');
        });
    }

    $('inputEventTime').timepicker({
        change: function(time) {
            // the input field
            console.log('alert');

        }
    });

    if ($('#eventTime3').length > 0) {
        /*   add event time */
        var inputEventTime = "input.eventTime";
        var time3 = $('#eventTime3');
        var time4 = $('#eventTime4');

        time3.timepicker({
            icons: {
                up: 'fa fa-angle-up',
                down: 'fa fa-angle-down'
            },
            orientation: {
                x: 'left', y: 'top'
            },
            minuteStep: 5,
            defaultTime: '12:00 AM'
        }).on('changeTime.timepicker', function (e) {
            /* setTimeout(function () {
             var that = this;
             $(that).removeClass(" saving");

             $('#timepair').closest('.time-restrictions').find(".color--green").delay(1000).toggleClass('animation-show');
             // $('.company-form select').closest('.form-section').find(".color--green").delay(300).removeClass('animation-hide');
             setTimeout(function () {


             $(that).parent('.form-group').find(".color--green").delay(300).removeClass('animation-show');
             }, 300);
             }, 500);*/
            var start = e.time.value;
            var end = $('#eventTime4').val();

            var stt = new Date("November 13, 2013 " + start);
            stt = stt.getTime();

            var endt = new Date("November 13, 2013 " + end);
            endt = endt.getTime();

            //   $('.faq-block-single2 sub').addClass('checked-true');
            //   $('.faq-block-single2 .remove-wrapper').removeClass('checked-true');


        });
        time4.timepicker({
            icons: {
                up: 'fa fa-angle-up',
                down: 'fa fa-angle-down'
            },
            orientation: {
                x: 'left', y: 'top'
            },
            minuteStep: 5,
            defaultTime: '12:00 AM'
        }).on('changeTime.timepicker2', function (e) {

            var start = $('#eventTime3').val();
            var end = e.time.value;


            var stt = new Date("November 13, 2013 " + start);
            stt = stt.getTime();

            var endt = new Date("November 13, 2013 " + end);
            endt = endt.getTime();


            // $('.faq-block-single2 sub').addClass('checked-true');
            $('.faq-block-single2 .remove-wrapper').removeClass('checked-true');

        });
    }
    if ($('#timepair').length > 0) {
        var basicExampleEl = document.getElementById('timepair');
        var datepair = new Datepair(basicExampleEl);
        $('.faq-block-single2').on('click mouseleave', function () {

            if ($(this).find('.eventTime').length > 0 && $(this).find('.eventTime').val().length > 0 && ( ($(this).find('#eventTime').val() != $(this).find('#eventTime2').val()) && ( $(this).find('#eventTime').val() != "12:00 AM" ))) {
                console.log($(this).find('.eventTime').val());
                //     $(this).find('sub').addClass('checked-true');
            }
            if (($(this).find('#eventTime').val() == $(this).find('#eventTime2').val()) || ( $(this).find('#eventTime').val() == "12:00 AM" )) {
                //  $(this).find('sub').removeClass('checked-true');
            }

            // $(this).parent('.faq-block').find('sub').addClass('checked-true ');
        });
    }

 /*  end add event time */




    $("div.alert").on("click", "button.close", function() {
        $(this).closest('.alert').slideUp({opacity: 0}, 500).hide('slow');
    });
    $('.progress-bar').animate(
        {width:'20%'},
        {
            duration:2000,
            step: function(now, fx) {
                if(fx.prop == 'width') {
                    $(".progress-text span").html(Math.round(now)  + '%');
                }
            }
        }
    );
    $(function () {
        $('[data-toggle="popover"]').popover({ trigger: "hover" })
    })
    $('#toggle').on('click',
        function() {
            $('body').toggleClass('no-scroll');
            $('#toggle').toggleClass('opened');


            //  $('#popout').animate({right: 0}, 'slow');
            $('#popout').toggleClass('visible');
            $('.header .overlay2').toggleClass('visible');
            //   $('body').toggleClass('stop-scrolling')
        });

    $('#toggle').on('tap',
        function() {
            $('body').toggleClass('no-scroll');
            $('#toggle').toggleClass('opened');


            //  $('#popout').animate({right: 0}, 'slow');
            $('#popout').toggleClass('visible');
            $('.header .overlay2').toggleClass('visible');
            //  $('body').toggleClass('stop-scrolling')
        });
    function formatState (state) {
        if (!state.id) {
            return state.text;
        }
        var baseUrl = "/user/pages/images/flags";

        var $state = $(

          // '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
             '<span><i class="fas ' + state.element.className + '"></i> ' + state.text + '</span>'
        );
        return $state;
    };
    function format(state) {
        var originalOption = state.element;
        console.log(state)
        /*   return "<img class='flag' src='images/flags/" + state.id.toLowerCase() + ".png' alt='" + $(originalOption).data('foo') + "' />" + state.text;-*/
        return '<span><i class="fas ' + state.element.className + '"></i> ' + state.text + '</span>';
    };
    function format2(state) {
        var originalOption = state.element;

        return "<img class='flag' src='images/flags/" + state.id.toLowerCase() + ".png' alt='" + $(originalOption).data('foo') + "' />" + state.text;
    }
    if ($(window).width() < 768) {

       /* $(".js-select-single").select2({
            templateResult: formatState,
            formatSelection: formatState,
            minimumResultsForSearch: -1,
            escapeMarkup: function (m) {
                return m;
            }


        });*/
/*
        $(".js-select-single").select2().on("change", function(e) {
            if (e.added) {
                var icon = "";
                $('.select2-search-choice DIV').filter(function() {
                    icon = '<span><i class="fas ' + e.added.className + '"></i> ' + state.text + '</span>';
                    return $(this).text() == e.added.id;
                }).prepend(icon);
            }
        })*/
    }


    function DropDown(el) {
        this.dd = el;
        this.placeholder = this.dd.children('span');
        this.opts = this.dd.find('ul.dropdown > li');
        this.val = '';
        this.index = -1;
        this.initEvents();
    }
    DropDown.prototype = {
        initEvents : function() {
            var obj = this;

            obj.dd.on('click', function(event){
                $(this).toggleClass('active');
                return false;
            });

            obj.opts.on('click',function(){
                var opt = $(this);
                var inn = $(this).find('a').html();
                var href = $(this).find('a').attr("href");
                obj.val = opt.text();
                console.log (href);
                obj.index = opt.index();
                obj.placeholder.html(inn);

                $('.pills-primary  a[href="' + href + '"]').tab('show');

            });
        },
        getValue : function() {
            return this.val;
        },
        getIndex : function() {
            return this.index;
        }
    }

    $(function() {

        var dd = new DropDown( $('#dd') );

        $(document).click(function() {

            // all dropdowns
            $('.wrapper-dropdown-2').removeClass('active');
        });

    });

    changePaceholder()


    var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('current') ;
            $item.addClass('current');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function () {
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for (var i = 0; i < curInputs.length; i++) {
            if (!curInputs[i].validity.valid) {
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid) nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.active').trigger('click');
});
$(window).resize(function() {
    changePaceholder();
});
function changePaceholder() {
    if ($(window).width() < 768) {
        $("input.room-seated-input").attr("placeholder", "Min");
        $("input.room-seated-input-max").attr("placeholder", "Max");
    }

    else {
        $("input.room-seated-input").attr("placeholder", "Max seated");
        $("input.room-seated-input-max").attr("placeholder", "Max standing");
    }
}