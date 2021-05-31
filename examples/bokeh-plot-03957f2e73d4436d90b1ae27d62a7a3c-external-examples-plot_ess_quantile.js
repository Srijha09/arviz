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
    
      
      
    
      var element = document.getElementById("cf442d06-c335-480e-a4cf-544466baffe3");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cf442d06-c335-480e-a4cf-544466baffe3' but no matching script tag was found.")
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
                    
                  var docs_json = '{"a005aab0-e64a-49cb-8945-8706c67600b0":{"defs":[],"roots":{"references":[{"attributes":{"source":{"id":"18503"}},"id":"18507","type":"CDSView"},{"attributes":{"axis":{"id":"18476"},"ticker":null},"id":"18479","type":"Grid"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"18508","type":"Span"},{"attributes":{"overlay":{"id":"18492"}},"id":"18486","type":"BoxZoomTool"},{"attributes":{"toolbar":{"id":"18524"},"toolbar_location":"above"},"id":"18525","type":"ToolbarBox"},{"attributes":{},"id":"18477","type":"BasicTicker"},{"attributes":{"children":[{"id":"18525"},{"id":"18523"}]},"id":"18526","type":"Column"},{"attributes":{"toolbars":[{"id":"18494"}],"tools":[{"id":"18484"},{"id":"18485"},{"id":"18486"},{"id":"18487"},{"id":"18488"},{"id":"18489"},{"id":"18490"},{"id":"18491"}]},"id":"18524","type":"ProxyToolbar"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"18517"},"major_label_policy":{"id":"18515"},"ticker":{"id":"18477"}},"id":"18476","type":"LinearAxis"},{"attributes":{"axis":{"id":"18480"},"dimension":1,"ticker":null},"id":"18483","type":"Grid"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18493","type":"PolyAnnotation"},{"attributes":{},"id":"18468","type":"DataRange1d"},{"attributes":{"text":"sigma"},"id":"18509","type":"Title"},{"attributes":{},"id":"18470","type":"DataRange1d"},{"attributes":{},"id":"18514","type":"BasicTickFormatter"},{"attributes":{"children":[[{"id":"18467"},0,0]]},"id":"18523","type":"GridBox"},{"attributes":{},"id":"18512","type":"AllLabels"},{"attributes":{},"id":"18484","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18505","type":"Circle"},{"attributes":{},"id":"18481","type":"BasicTicker"},{"attributes":{"active_multi":null,"tools":[{"id":"18484"},{"id":"18485"},{"id":"18486"},{"id":"18487"},{"id":"18488"},{"id":"18489"},{"id":"18490"},{"id":"18491"}]},"id":"18494","type":"Toolbar"},{"attributes":{},"id":"18472","type":"LinearScale"},{"attributes":{},"id":"18487","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"18503"},"glyph":{"id":"18504"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18505"},"view":{"id":"18507"}},"id":"18506","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18521"},"selection_policy":{"id":"18520"}},"id":"18503","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18492","type":"BoxAnnotation"},{"attributes":{},"id":"18489","type":"UndoTool"},{"attributes":{"below":[{"id":"18476"}],"center":[{"id":"18479"},{"id":"18483"}],"height":500,"left":[{"id":"18480"}],"output_backend":"webgl","renderers":[{"id":"18506"},{"id":"18508"}],"title":{"id":"18509"},"toolbar":{"id":"18494"},"toolbar_location":null,"width":500,"x_range":{"id":"18468"},"x_scale":{"id":"18472"},"y_range":{"id":"18470"},"y_scale":{"id":"18474"}},"id":"18467","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18520","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18504","type":"Circle"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"18514"},"major_label_policy":{"id":"18512"},"ticker":{"id":"18481"}},"id":"18480","type":"LinearAxis"},{"attributes":{},"id":"18515","type":"AllLabels"},{"attributes":{},"id":"18521","type":"Selection"},{"attributes":{},"id":"18517","type":"BasicTickFormatter"},{"attributes":{},"id":"18485","type":"PanTool"},{"attributes":{},"id":"18474","type":"LinearScale"},{"attributes":{"overlay":{"id":"18493"}},"id":"18488","type":"LassoSelectTool"},{"attributes":{"callback":null},"id":"18491","type":"HoverTool"},{"attributes":{},"id":"18490","type":"SaveTool"}],"root_ids":["18526"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"a005aab0-e64a-49cb-8945-8706c67600b0","root_ids":["18526"],"roots":{"18526":"cf442d06-c335-480e-a4cf-544466baffe3"}}];
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