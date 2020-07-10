/*****************************************

AJAX.get(url, args)
AJAX.post(url, args)

url = [url to submit to] 
args = {
    simple:          if true, will pass back entire response to the handlers.
    success_handler: [function to call if it succeeds],
    failure_handler: [function to call _default_failure_handler which alerts 
                     the status and status text, and then this function (for cleanup],
    form:            [form element to parse and submit with the request]
};

*******************************************/
var AJAX = {
    require: [
        "main",
        "yui/yahoo-dom-event/yahoo-dom-event",
        "yui/connection/connection-min",
        "sniffer_basic",
        "form"
    ],

    post: function(url, args) {
        args = args || {};
        args.http_method = 'POST';
        if (args.simple) {
            this._submit_simple_request(url, args);
        } else {
            this._submit_json_request(url, args);
        }
    },

    get: function(url, args) {
        args = args || {};
        args.http_method = 'GET';
        if (args.simple) {
            this._submit_simple_request(url, args);
        } else {
            this._submit_json_request(url, args);
        }
    },

    _default_failure_handler: function(o, argument) {
        if (o.responseText !== undefined) {
            var msg = "Message: " + o.responseText;
            var str =  o.responseText;
            if(str.indexOf("SUL:")== 0) {
                var answer = confirm(str.substring(4));
                if (answer)
                    window.location = "/cgi-bin/util/upgrade?refcd=filemanagerpro_interrupt";
            }
            else {
                alert(msg);
            }
        } else {
            alert("The server isn't responding.");
        }
    },
    
    _submit_simple_request: function(url, args) {
        var callback = {
            success: function(r) {
                if (args.success_handler) args.success_handler(r.responseText, r.argument);
            },

            failure: function(r) {
                if (args.failure_handler) {
                    args.failure_handler(r, r.argument);
                }
                AJAX._default_failure_handler(r);
            }
        }
        var params = args.params || AJAX.parse_form(args.form);
        if (params && args.http_method == 'GET') {
            url += (url.indexOf('?') == -1) ? '?' + params : '&' + params;
        }
        YAHOO.util.Connect.asyncRequest(args.http_method, url, callback, params);
        callback.argument = args.argument || {};
    },
    
    _submit_json_request: function(url, args) {
        args = args || {};
        var callback = new Object();
        callback.success = function(r) {
            var obj = AJAX._get_json_obj(r.responseText); 
            if (args.success_handler) args.success_handler(obj, r.argument);
            return obj;
        };
        callback.failure = function(r) {
            if (args.failure_handler) {
                var obj = AJAX._get_json_obj(r.responseText); 
                args.failure_handler(obj, r.argument);
            }
            AJAX._default_failure_handler(r);
        };
        callback.argument = args.argument || {};
        
        // stringify form if provided
        var params = args.params || AJAX.parse_form(args.form);
        if (params && args.http_method == 'GET') {
            url += (url.indexOf('?') == -1) ? '?' + params : '&' + params;
        }
        YAHOO.util.Connect.asyncRequest(args.http_method, url, callback, params);
        //setTimeout(function() { YAHOO.util.Connect.abort(c); alert("Please try again."); }, 10000);
    },

    // parse a form and create json param listing
    parse_form: function(form) {
        if (form) {
            return "json=" + FORM.to_json(form);
        }
    },

    // return a js object built from the json found in the response
    // strip out anything else and deal with it (errors, spew, etc)
    _get_json_obj: function(response) {
        var json = AJAX._strip_isun(response);
        json = json || '{}';
        var obj = null;
        try {
            eval('obj = ' + json);
        }
        catch(err) {
            obj = null;
        }
        return obj || {};
    },

    // pull out any debug from the json response and cleanse
    // it so it can be parsed by JSON
    _strip_isun: function(response) {
        var pre = /<pre.*?>(.|\n|\r)*?<\/pre>/gi; // [.\n\r] didn't work
        var match_array = response.match(pre);
        if (match_array) {
            for (i in match_array) {
                this._debug(match_array[i]);
            }
        }
        response = response.replace(pre, "");
        var style = /<style.*?>(.|\n|\r)*?<\/style>/gi;
        response = response.replace(style,"");
        response = response.replace(/^\s+$/,"");
        return response;
    },

    _debug: function(info) {
        if (info) {
            var agt = navigator.userAgent.toLowerCase();
            info = info.replace(/<.*>/g, '');
            if (SNIFFER.is_ie()) {
                alert(info);
            } else {
                setTimeout(function() { throw new Error("[debug] " + info); }, 0);            
            }
        }
    }
};

for (index in AJAX.require) {
    var src = '<script type="text/javascript" src="/fs_img/js/' + AJAX.require[index] + '.js"></script>';
    document.write(src);
}