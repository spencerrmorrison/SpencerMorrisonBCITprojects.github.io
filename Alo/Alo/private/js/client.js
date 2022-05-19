
$(document).ready(function() {
    
    // GET A LIST OF 'THINGS' FROM THE SERVER AS HTML DATA
    $('#belowh1 #menu').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "html-list"},
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                $("#content").html(data);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#theh1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
        
    });
    
        $('#belowh1 #reserve').click(function(e) {
        
        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "json-list" },
            success: function(data) {
                console.log("SUCCESS JSON:", data);
              let t2 = "<table>";
                for(let i = 0; i < data.length; i++) {
                    t2 += "<tr><td>" + data[i]['Date'] + "</td><td>"
                      + data[i]['Time'] + "</td><td>" + data[i]['Table'] + "</td><td>"
                      + data[i]['Guests'] + "</td><td>" + data[i]['Expense'] + "</td></tr>";
                }
                t2 += "</table>";
                var div = $("#content");
                div.html(t2);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#theh1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

    /**
    $('#mainMenu #getJSONCourses').click(function(e) {

        //eval("console.log('lolomg')");
        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "getJSONCourses" },
            success: function(data) {
                //console.log("SUCCESS COURSES IN JSON:", data);
                let t2 = "<table>";
                for(let i = 0; i < data.length; i++) {
                    //console.log(data[i]['name']);
                    //console.log(data[i].credits);
                    t2 += "<tr><td>" + data[i]['name'] + "</td><td>"
                      + data[i]['number'] + "</td><td>" + data[i]['credits'] + "</td></tr>";
                }
                t2 += "</table>";
                var div = $("#content");
                div.html(t2);
//                var div = $("#content");
//                let htmlStr = "<ul>";
//                for(let i = 0; i < data.length; i++) {
//                    htmlStr += "<li>" + data[i] + "</li>";
//                }
//                htmlStr += "</ul>";
//                div.html(htmlStr);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });


    // GET A LIST OF 'THINGS' FROM THE SERVER AS JSON DATA

    // CLEAR THE DATE
    $('#mainMenu #clearDate').click(function(e) {
        // don't allow the anchor to visit the link
        e.preventDefault();
        $("#p1").html("Date to go here.");
    });

    // CONTACT THE SERVER AND GET THE DATE FROM THE SERVER
    $('#mainMenu #getDate').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET",
            dataType: "json",
            type: "GET",
            success: function(data) {
                $("#p1").text(data['msg']);
                console.log("SUCCESS:", data);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

*/
    /**
    // INTENTIONALLY GET A 404 FROM THE SERVER
    $('#mainMenu #getBadURL').click(function(e) {

        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-SOMETHING-THAT-DOESNT-EXIST",
            dataType: "json",
            type: "GET",
            success: function(data) {
                $("#p1").text(data['msg']);
                console.log("SUCCESS:", data);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            },
            // handle a 404 (i.e., page not found)
            statusCode: {
                404: function() {
                    $("#p1").text("Page doesn't exist.");
                }
            }
        });
    });
    */

/**
    // PERFORM A HTTP POST, AND GET A RESPONSE FROM THE SERVER
    $('#submit').click(function(e) {
        let formData = { firstName: $("#firstName").val(),
                         lastName: $("#lastName").val(),
                         email: $("#email").val()
                       };
        console.log("Form data to send:", formData);
        $.ajax({
            url: "/post-form",
            dataType: "json",
            type: "POST",
            data: formData,
            success: function(data) {
                console.log("SUCCESS JSON:", data);
                // how do we know what we are getting?
                $("#p2").html(data[0] + " " + data[1]['firstName']
                              + " " + data[1]['lastName']
                              + " " + data[1]['email']
                             );

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p2").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

*/
});

