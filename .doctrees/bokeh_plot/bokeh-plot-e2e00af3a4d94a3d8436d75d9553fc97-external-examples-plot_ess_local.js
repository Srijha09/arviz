(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("9c6a2b2e-44a1-4a74-8f6b-11bbc31f83b9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '9c6a2b2e-44a1-4a74-8f6b-11bbc31f83b9' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.2.min.js": "XypntL49z55iwGVUW4qsEu83zKL3XEcz0MjuGOQ9SlaaQ68X/g+k1FcioZi7oQAc", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.2.min.js": "bEsM86IHGDTLCS0Zod8a8WM6Y4+lafAL/eSiyQcuPzinmWNgNO2/olUF0Z2Dkn5i", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.2.min.js": "TX0gSQTdXTTeScqxj6PVQxTiRW8DOoGVwinyi1D3kxv7wuxQ02XkOxv0xwiypcAH"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.2.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"bd64bffb-7ce1-4564-9973-eb5789e2cc2b":{"defs":[],"roots":{"references":[{"attributes":{},"id":"18365","type":"ResetTool"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"18389","type":"Scatter"},{"attributes":{"overlay":{"id":"18373"}},"id":"18367","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"18357"}],"center":[{"id":"18360"},{"id":"18364"}],"height":500,"left":[{"id":"18361"}],"output_backend":"webgl","renderers":[{"id":"18387"},{"id":"18391"},{"id":"18393"},{"id":"18394"}],"title":{"id":"18395"},"toolbar":{"id":"18375"},"toolbar_location":null,"width":500,"x_range":{"id":"18349"},"x_scale":{"id":"18353"},"y_range":{"id":"18351"},"y_scale":{"id":"18355"}},"id":"18348","subtype":"Figure","type":"Plot"},{"attributes":{"toolbars":[{"id":"18375"}],"tools":[{"id":"18365"},{"id":"18366"},{"id":"18367"},{"id":"18368"},{"id":"18369"},{"id":"18370"},{"id":"18371"},{"id":"18372"}]},"id":"18412","type":"ProxyToolbar"},{"attributes":{"callback":null},"id":"18372","type":"HoverTool"},{"attributes":{"active_multi":null,"tools":[{"id":"18365"},{"id":"18366"},{"id":"18367"},{"id":"18368"},{"id":"18369"},{"id":"18370"},{"id":"18371"},{"id":"18372"}]},"id":"18375","type":"Toolbar"},{"attributes":{"data_source":{"id":"18390"},"glyph":{"id":"18389"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"18392"}},"id":"18391","type":"GlyphRenderer"},{"attributes":{},"id":"18408","type":"UnionRenderers"},{"attributes":{},"id":"18403","type":"BasicTickFormatter"},{"attributes":{},"id":"18406","type":"UnionRenderers"},{"attributes":{"children":[{"id":"18413"},{"id":"18411"}]},"id":"18414","type":"Column"},{"attributes":{},"id":"18371","type":"SaveTool"},{"attributes":{"overlay":{"id":"18374"}},"id":"18369","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"18384"},"glyph":{"id":"18385"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18386"},"view":{"id":"18388"}},"id":"18387","type":"GlyphRenderer"},{"attributes":{},"id":"18409","type":"Selection"},{"attributes":{},"id":"18370","type":"UndoTool"},{"attributes":{},"id":"18407","type":"Selection"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"18409"},"selection_policy":{"id":"18408"}},"id":"18390","type":"ColumnDataSource"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18407"},"selection_policy":{"id":"18406"}},"id":"18384","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"18361"},"dimension":1,"ticker":null},"id":"18364","type":"Grid"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18374","type":"PolyAnnotation"},{"attributes":{"toolbar":{"id":"18412"},"toolbar_location":"above"},"id":"18413","type":"ToolbarBox"},{"attributes":{},"id":"18401","type":"AllLabels"},{"attributes":{"axis":{"id":"18357"},"ticker":null},"id":"18360","type":"Grid"},{"attributes":{},"id":"18362","type":"BasicTicker"},{"attributes":{},"id":"18355","type":"LinearScale"},{"attributes":{"children":[[{"id":"18348"},0,0]]},"id":"18411","type":"GridBox"},{"attributes":{},"id":"18398","type":"AllLabels"},{"attributes":{"source":{"id":"18390"}},"id":"18392","type":"CDSView"},{"attributes":{},"id":"18349","type":"DataRange1d"},{"attributes":{},"id":"18353","type":"LinearScale"},{"attributes":{},"id":"18358","type":"BasicTicker"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"18400"},"major_label_policy":{"id":"18398"},"ticker":{"id":"18362"}},"id":"18361","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18386","type":"Circle"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"18393","type":"Span"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"18403"},"major_label_policy":{"id":"18401"},"ticker":{"id":"18358"}},"id":"18357","type":"LinearAxis"},{"attributes":{},"id":"18400","type":"BasicTickFormatter"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"18394","type":"Span"},{"attributes":{},"id":"18368","type":"WheelZoomTool"},{"attributes":{},"id":"18366","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18373","type":"BoxAnnotation"},{"attributes":{"source":{"id":"18384"}},"id":"18388","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18385","type":"Circle"},{"attributes":{"text":"mu"},"id":"18395","type":"Title"},{"attributes":{},"id":"18351","type":"DataRange1d"}],"root_ids":["18414"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"bd64bffb-7ce1-4564-9973-eb5789e2cc2b","root_ids":["18414"],"roots":{"18414":"9c6a2b2e-44a1-4a74-8f6b-11bbc31f83b9"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();