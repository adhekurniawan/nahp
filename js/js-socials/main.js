$("#share").jsSocials({
  shares: ["email", "twitter", "facebook", "googleplus", "linkedin", "pinterest", "stumbleupon", "whatsapp"]
});

$("#shareNative").jsSocials({
    showLabel: false,
    showCount: false,

    shares: [{
        renderer: function() {
            var $result = $("<div>");

            var script = document.createElement("script");
            script.text = "(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = \"//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.3\"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'facebook-jssdk'));";
            $result.append(script);

            $("<div>").addClass("fb-share-button")
                .attr("data-layout", "button_count")
                .appendTo($result);

            return $result;
        }
    }, {
        renderer: function() {
            var $result = $("<div>");

            var script = document.createElement("script");
            script.src = "https://apis.google.com/js/platform.js";
            $result.append(script);

            $("<div>").addClass("g-plus")
                .attr({
                    "data-action": "share",
                    "data-annotation": "bubble"
                })
                .appendTo($result);

            return $result;
        }
    }, {
        renderer: function() {
            var $result = $("<div>");

            var script = document.createElement("script");
            script.src = "//platform.linkedin.com/in.js";
            $result.append(script);

            $("<script>").attr({ type: "IN/Share", "data-counter": "right" })
                .appendTo($result);

            return $result;
        }
    }, {
        renderer: function() {
            var $result = $("<div>");

            var script = document.createElement("script");
            script.text = "window.twttr=(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],t=window.twttr||{};if(d.getElementById(id))return t;js=d.createElement(s);js.id=id;js.src=\"https://platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);t._e=[];t.ready=function(f){t._e.push(f);};return t;}(document,\"script\",\"twitter-wjs\"));";
            $result.append(script);

            $("<a>").addClass("twitter-share-button")
                .text("Tweet")
                .attr("href", "https://twitter.com/share")
                .appendTo($result);

            return $result;
        }
    }, {
        renderer: function() {
            var $result = $("<div>");

            var script = document.createElement("script");
            script.src = "//assets.pinterest.com/js/pinit.js";
            $result.append(script);

            $("<a>").append($("<img>").attr("//assets.pinterest.com/images/pidgets/pinit_fg_en_rect_red_20.png"))
                    .attr({
                        href: "//www.pinterest.com/pin/create/button/?url=http%3A%2F%2Fjs-socials.com%2Fdemos%2F&media=%26quot%3Bhttp%3A%2F%2Fgdurl.com%2Fa653%26quot%3B&description=Next%20stop%3A%20Pinterest",
                        "data-pin-do": "buttonPin",
                        "data-pin-config": "beside",
                        "data-pin-color":"red"
                    })
                    .appendTo($result);

            return $result;
        }
    }]
});