
# This is an example VCL file for Varnish.
#
# It does not do anything by default, delegating control to the
# builtin VCL. The builtin VCL is called when there is no explicit
# return statement.
#
# See the VCL chapters in the Users Guide at https://www.varnish-cache.org/docs/
# and http://varnish-cache.org/trac/wiki/VCLExamples for more examples.

# Marker to tell the VCL compiler that this VCL has been adapted to the
# new 4.0 format.
vcl 4.0;
import std;
import directors;
# Default backend definition. Set this to point to your content server.

backend default {
  .host = "127.0.0.1";
  .port = "80";
}

acl purgers {
  "localhost";
  "127.0.0.1";
  "172.31.62.153";
  "52.70.20.183";
  "52.205.128.150";
  "172.31.15.186";
}

sub vcl_recv {
  /***************************General Rules*********************************/
  // PURGE Request
  if (req.method == "PURGE") {
#if (!client.ip ~ purgers) {
#  return (synth(405));
#}
    return (purge);
  }
  // BAN Request
  if (req.method == "BAN") {
    if (!client.ip ~ purgers) {
      return (synth(405));
    }
    ban("obj.http.x-url ~ " + req.http.x-ban-url);
    return (synth(200, "Ban added"));
  }
# Disable caching for backend parts
  if ( req.url ~ "^/[^?]+/wp-(login|admin|cron)" || req.url ~ "^/wp-(login|admin|cron)" || req.url ~ "preview=true" || req.http.Cookie ~ "wordpress_logged_in" || req.url ~ "((users\/sign_in)|(users\/sign_up)|((hotel|hotels|resorts|apartments|guest-houses|hostels|villas|hotels-and-resorts|cottages|home-stays)\/.*))") {
    return (pass);
  }
  // Only cache get get and head request
  if (req.method != "GET" && req.method != "HEAD") {
    return (pass);
  }

  // Disable caching for cache=false urls
  if ( (req.url ~ "cache=false") || (req.url == "/") || (req.url == "/?ene=1" ) ) {
    return (pass);
  }
  if (req.url ~ "get_top_menu.js") {
    return (pass);
  }
  // cache static files and remove cookie from them
  if (req.url ~ "\.(gif|jpg|jpeg|swf|css|flv|mp3|mp4|ico|png|tif|tiff|mp3|htm|html)(\?.*|)$") {
      unset req.http.cookie;
      return (hash);
  }

  /***********************************Normalize accept header START*****************************/
  set req.http.x-req_path = regsub(req.url,"(\?).*","");
  # std.syslog(0,req.http.x-req_path);

  set req.http.X-Normalized-Accept = req.http.Accept;
  # intial experiment on category-places pages

  if (req.url ~ "format=") {
    # std.syslog(0,"in 1st if");
    # check requested mime type from format in params
    unset req.http.X-Normalized-Accept;
  }
  else if (req.http.x-req_path ~ "(?<=\.)\w+$") {
    # std.syslog(0,"in 2nd if");
    # check requested mime type from extension
    unset req.http.X-Normalized-Accept;
  }
  else {
    # std.syslog(0,"in else");
    # check requested mime type from accept header
    if (req.http.X-Normalized-Accept && (req.http.X-Normalized-Accept ~ "\*/\*")) {
      # std.syslog(0,"in else -- 1st if");
      if (req.http.HTTP_X_REQUESTED_WITH && (req.http.X_REQUESTED_WITH ~ "XMLHttpRequest")) {
        # std.syslog(0,"in else -- 2nd if");
        # set req.http.X-Normalized-Accept = "application/js";
      } else {
        # std.syslog(0,"in else -- else");
        set req.http.X-Normalized-Accept = "text/html";
      }
    }
  }


  unset req.http.x-req_path;
  /*************************************Normalize accept header ENDS****************************/


  /*************************** Blog Rules *********************************/
  if (req.http.X-Whom == "blog") {
    call devicedetect;
    return (hash);
  }

    call devicedetect;
  return (hash);
}

sub vcl_hash {
  call sanitizeURL;
  hash_data(req.http.X-Sanitized-URL);
  hash_data(req.http.X-Whom);
  hash_data(req.http.x-client-api-token);
  return (lookup);
}

sub vcl_backend_error {
}

sub vcl_backend_response {
  # Don't cache error pages
  if (beresp.http.Content-Type ~ "application\/json" && beresp.status >= 500 && beresp.status < 600) {
    set beresp.http.error = "true";
    set beresp.uncacheable = true;
    return (deliver);
  }

  if (beresp.status >= 500 && beresp.status < 600 ) {
    set beresp.http.error = "true";
    set beresp.uncacheable = true;
    return (abandon);
  }
  /*   Only Cache : OK, Moved Permanently, Moved Temporarily, Not Modified, Not Found   */
  if (beresp.status != 200 && beresp.status != 301 && beresp.status != 304 ) {
    set beresp.ttl = 0s;
    set beresp.uncacheable = true;
    return (deliver);
  }
  set beresp.grace = 6h;

  /*
  add vary header for device type and accept. Added proto for different response behaviour for http and https urls after https migration (Will have impact on those http urls which are not handled at nginx level.)
  */

  if(!beresp.http.Vary) {
    set beresp.http.Vary = "X-Normalized-Accept, X-UA-Device, X-Forwarded-Proto, X-PLP-Exp, X-PDP-Exp, X-Pr-Tv";
  }
  else {
      if(beresp.http.Vary !~ "X-UA-Device") {
        set beresp.http.Vary = beresp.http.Vary + ", X-UA-Device";
      }
      if(beresp.http.Vary !~ "X-Normalized-Accept($|,)") {
        set beresp.http.Vary = beresp.http.Vary + ", X-Normalized-Accept";
      }
      if(beresp.http.Vary !~ "X-Forwarded-Proto($|,)") {
        set beresp.http.Vary = beresp.http.Vary + ", X-Forwarded-Proto";
      }
      /**************  START - Experiment Purpose - Vary on specific headers ************/
      if(beresp.http.Vary !~ "X-PDP-Exp($|,)") {
        set beresp.http.Vary = beresp.http.Vary + ", X-PDP-Exp";
      }
      if(beresp.http.Vary !~ "X-PLP-Exp($|,)") {
        set beresp.http.Vary = beresp.http.Vary + ", X-PLP-Exp";
      }
      if(beresp.http.Vary !~ "X-Pr-Tv($|,)") {
         set beresp.http.Vary = beresp.http.Vary + ", X-Pr-Tv";
      }
      /**************  END - Experiment Purpose - Vary on specific headers ************/
  }
  # store the request url in the object for lurker friendly banning
  set beresp.http.x-url = bereq.url;

  # for blog requests, set the custom header
  # Temporary fix : will be moved to blog code
  if(bereq.http.X-Whom == "blog" && !bereq.uncacheable) {
    set beresp.http.X-CACHE-TTL = "24h";
  }
  if((bereq.http.X-Virgin == "001" || bereq.http.X-Virgin == "101") && !bereq.uncacheable) {
    set beresp.http.X-CACHE-TTL = "24h";
  }
  # set ttl on the base of custom x-cache ttl header
  if(beresp.http.X-CACHE-TTL) {
    set beresp.ttl = std.duration(beresp.http.X-CACHE-TTL, 0s);
  }
  else {
   set beresp.uncacheable = true;
  }
  # unset cookie for non cache pages

  if(!beresp.uncacheable && !bereq.uncacheable){
    unset beresp.http.Set-Cookie;
  }

  return (deliver);
}

sub vcl_backend_fetch {
  if (bereq.http.sie-abandon) {
    return (abandon);
  }
}
sub vcl_hit {
  if (obj.ttl >= 0s) {
    return (deliver);
  }
  else if (obj.ttl + obj.grace > 0s) {
    return (deliver);
  }
  else {
    if (req.restarts == 0) {
      return (fetch);
    }
    else {
      return (deliver);
    }
  }
}

sub vcl_synth {
if (resp.status == 750) {
    set resp.http.location = req.http.location;
    set resp.status = 301;
    return (deliver);
  }
  if (resp.http.error == "true" && req.restarts == 0) {
    unset resp.http.error;
    return (restart);
  }
  else {
    set resp.http.Content-Type = "text/html; charset=utf-8";
    set resp.http.Retry-After = "5";
    synthetic( {"<!DOCTYPE html>
        <html>
        <head>
        <title>"} +  " " + resp.reason + {"</title>
        </head>
        </html>
        "} );
    return (deliver);
  }
}
sub vcl_deliver {
# x-url is for internal use only
  unset resp.http.x-url;
  unset resp.http.X-CACHE-TTL;
  unset resp.http.X-Varnish;
}

# sub vcl_synth {
# }


sub sanitizeURL {
  set req.http.X-Sanitized-URL = req.url;
  if(req.http.X-Sanitized-URL ~ "(\?|&)(gclid|cx|ie|cof|siteurl|zanpid|origin|referer|utf8|select-hotel-|utm_[a-z]+|mr:[A-z]+)=") {
    set req.http.X-Sanitized-URL = regsuball(req.http.X-Sanitized-URL, "(gclid|cx|ie|cof|siteurl|zanpid|referer|origin|utf8|select-hotel-\d+|utm_[a-z]+|mr:[A-z]+)=[%.-_-A-z0-9]+&?", "");
  }
  set req.http.X-Sanitized-URL = regsub(req.http.X-Sanitized-URL, "(\?&?)$", "");
  set req.http.X-Sanitized-URL = regsub(req.http.X-Sanitized-URL, "&$", "");
}

sub devicedetect {
  call setDeviceType;
}

sub setDeviceType {
  unset req.http.X-UA-Device;
  set req.http.X-UA-Device = "desktop";

# Handle that a cookie may override the detection alltogether.
  if (req.http.Cookie ~ "(?i)X-UA-Device-force") {
    /* ;?? means zero or one ;, non-greedy to match the first. */
    set req.http.X-UA-Device = regsub(req.http.Cookie, "(?i).*X-UA-Device-force=([^;]+);??.*", "\1");
    /* Clean up our mess in the cookie header */
    set req.http.Cookie = regsuball(req.http.Cookie, "(^|; ) *X-UA-Device-force=[^;]+;? *", "\1");
    /* If the cookie header is now empty, or just whitespace, unset it. */
    if (req.http.Cookie ~ "^ *$") { unset req.http.Cookie; }
  } else {
    if (req.http.User-Agent ~ "\(compatible; Googlebot-Mobile/2.1; \+http://www.google.com/bot.html\)" ||
        (req.http.User-Agent ~ "(Android|iPhone)" && req.http.User-Agent ~ "\(compatible.?; Googlebot/2.1.?; \+http://www.google.com/bot.html") ||
        (req.http.User-Agent ~ "(iPhone|Windows Phone)" && req.http.User-Agent ~ "\(compatible; bingbot/2.0; \+http://www.bing.com/bingbot.htm")) {
      set req.http.X-UA-Device = "mobile-bot"; }
    elsif (req.http.User-Agent ~ "(?i)(ads|google|bing|msn|yandex|baidu|ro|career|seznam|)bot" ||
        req.http.User-Agent ~ "(?i)(baidu|jike|symantec)spider" ||
        req.http.User-Agent ~ "(?i)scanner" ||
        req.http.User-Agent ~ "(?i)(web)crawler") {
      set req.http.X-UA-Device = "bot"; }
    elsif (req.http.User-Agent ~ "(?i)ipad")        { set req.http.X-UA-Device = "tablet-ipad"; }
    elsif (req.http.User-Agent ~ "(?i)ip(hone|od)") { set req.http.X-UA-Device = "mobile-iphone"; }
    /* how do we differ between an android phone and an android tablet?
http://stackoverflow.com/questions/5341637/how-do-detect-android-tablets-in-general-useragent */
    elsif (req.http.User-Agent ~ "(?i)android.*(mobile|mini)") { set req.http.X-UA-Device = "mobile-android"; }
    // android 3/honeycomb was just about tablet-only, and any phones will probably handle a bigger page layout.
    elsif (req.http.User-Agent ~ "(?i)android 3")              { set req.http.X-UA-Device = "tablet-android"; }
    /* Opera Mobile */
    elsif (req.http.User-Agent ~ "Opera Mobi")                  { set req.http.X-UA-Device = "mobile-smartphone"; }
    // May very well give false positives towards android tablets. Suggestions welcome.
    elsif (req.http.User-Agent ~ "(?i)android")         { set req.http.X-UA-Device = "tablet-android"; }
    elsif (req.http.User-Agent ~ "PlayBook; U; RIM Tablet")         { set req.http.X-UA-Device = "tablet-rim"; }
    elsif (req.http.User-Agent ~ "hp-tablet.*TouchPad")         { set req.http.X-UA-Device = "tablet-hp"; }
    elsif (req.http.User-Agent ~ "Kindle/3")         { set req.http.X-UA-Device = "tablet-kindle"; }
    elsif (req.http.User-Agent ~ "Touch.+Tablet PC" ||
        req.http.User-Agent ~ "Windows NT [1-9.]+; ARM;" ) {
      set req.http.X-UA-Device = "tablet-microsoft";
    }
    elsif (req.http.User-Agent ~ "Mobile.+Firefox")     { set req.http.X-UA-Device = "mobile-firefoxos"; }
    elsif (req.http.User-Agent ~ "^HTC" ||
        req.http.User-Agent ~ "Fennec" ||
        req.http.User-Agent ~ "IEMobile" ||
        req.http.User-Agent ~ "BlackBerry" ||
        req.http.User-Agent ~ "BB10.*Mobile" ||
        req.http.User-Agent ~ "GT-.*Build/GINGERBREAD" ||
        req.http.User-Agent ~ "SymbianOS.*AppleWebKit") {
      set req.http.X-UA-Device = "mobile-smartphone";
    }
    elsif ( req.http.User-Agent ~ "(?i)symbian" ||
        req.http.User-Agent ~ "(?i)^sonyericsson" ||
        req.http.User-Agent ~ "(?i)^nokia" ||
        req.http.User-Agent ~ "(?i)^samsung" ||
        req.http.User-Agent ~ "(?i)^lg" ||
        req.http.User-Agent ~ "(?i)bada" ||
        req.http.User-Agent ~ "(?i)blazer" ||
        req.http.User-Agent ~ "(?i)cellphone" ||
        req.http.User-Agent ~ "(?i)iemobile" ||
        req.http.User-Agent ~ "(?i)midp-2.0" ||
        req.http.User-Agent ~ "(?i)u990" ||
        req.http.User-Agent ~ "(?i)netfront" ||
        req.http.User-Agent ~ "(?i)opera mini" ||
        req.http.User-Agent ~ "(?i)palm" ||
        req.http.User-Agent ~ "(?i)nintendo wii" ||
        req.http.User-Agent ~ "(?i)playstation portable" ||
        req.http.User-Agent ~ "(?i)portalmmm" ||
        req.http.User-Agent ~ "(?i)proxinet" ||
        req.http.User-Agent ~ "(?i)sonyericsson" ||
        req.http.User-Agent ~ "(?i)symbian" ||
        req.http.User-Agent ~ "(?i)windows\ ?ce" ||
        req.http.User-Agent ~ "(?i)winwap" ||
        req.http.User-Agent ~ "(?i)eudoraweb" ||
        req.http.User-Agent ~ "(?i)htc" ||
        req.http.User-Agent ~ "(?i)240x320" ||
        req.http.User-Agent ~ "(?i)avantgo") {
          set req.http.X-UA-Device = "mobile-generic";
        }
  }
  if (req.http.X-UA-Device ~ "mobile") {
    set req.http.X-UA-Device = "mobile";
  }
  else if (req.http.X-UA-Device ~ "tablet") {
    set req.http.X-UA-Device = "tablet";
  }
  else {
    set req.http.X-UA-Device = "desktop";
  }
  if( req.http.User-Agent ~ "(?i)dalvik.+android.+" || req.http.User-Agent ~ "(?i)com\.traveltriangle\.ios.+" ){
    set req.http.X-UA-Device = "webview";
  }
}
