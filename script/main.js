            $('.say_hello_buttn').click(function(event) {
                event.preventDefault();
                
                 $('.say_hello_buttn').removeClass('active');
                 $(this).addClass("active");
                var url = $(this).attr('href');
                // $("#target").load(url);

                $.ajax({
                    url: url,
                    success: function(data) {
                        $("#target").html(data);
                    }
                });

                if (url != window.location) {
                    window.history.pushState(null, null, url);
                }
                return false;
            });