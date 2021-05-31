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
    
      
      
    
      var element = document.getElementById("48f4eb8e-9f20-4c83-9cb5-384c65cbe55e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '48f4eb8e-9f20-4c83-9cb5-384c65cbe55e' but no matching script tag was found.")
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
                    
                  var docs_json = '{"6f50eb28-53e9-40de-b804-d439ae756497":{"defs":[],"roots":{"references":[{"attributes":{},"id":"17987","type":"UnionRenderers"},{"attributes":{},"id":"17956","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"17945"}],"center":[{"id":"17948"},{"id":"17952"}],"height":288,"left":[{"id":"17949"}],"output_backend":"webgl","renderers":[{"id":"17974"}],"title":{"id":"17976"},"toolbar":{"id":"17963"},"toolbar_location":null,"width":432,"x_range":{"id":"17937"},"x_scale":{"id":"17941"},"y_range":{"id":"17939"},"y_scale":{"id":"17943"}},"id":"17936","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17937","type":"DataRange1d"},{"attributes":{},"id":"17981","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"17973"}},"id":"17975","type":"CDSView"},{"attributes":{},"id":"17954","type":"PanTool"},{"attributes":{},"id":"17953","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17961","type":"BoxAnnotation"},{"attributes":{"children":[[{"id":"17936"},0,0]]},"id":"17990","type":"GridBox"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"value":"cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17972","type":"Scatter"},{"attributes":{},"id":"17959","type":"SaveTool"},{"attributes":{},"id":"17950","type":"BasicTicker"},{"attributes":{},"id":"17982","type":"AllLabels"},{"attributes":{},"id":"17984","type":"BasicTickFormatter"},{"attributes":{},"id":"17939","type":"DataRange1d"},{"attributes":{"active_multi":null,"tools":[{"id":"17953"},{"id":"17954"},{"id":"17955"},{"id":"17956"},{"id":"17957"},{"id":"17958"},{"id":"17959"},{"id":"17960"}]},"id":"17963","type":"Toolbar"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIkKht05k7+A2X/x9IekPwAArX2oaFM/QNQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17988"},"selection_policy":{"id":"17987"}},"id":"17973","type":"ColumnDataSource"},{"attributes":{},"id":"17946","type":"BasicTicker"},{"attributes":{"toolbars":[{"id":"17963"}],"tools":[{"id":"17953"},{"id":"17954"},{"id":"17955"},{"id":"17956"},{"id":"17957"},{"id":"17958"},{"id":"17959"},{"id":"17960"}]},"id":"17991","type":"ProxyToolbar"},{"attributes":{},"id":"17943","type":"LinearScale"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"17981"},"major_label_policy":{"id":"17979"},"ticker":{"id":"17950"}},"id":"17949","type":"LinearAxis"},{"attributes":{"axis":{"id":"17945"},"ticker":null},"id":"17948","type":"Grid"},{"attributes":{"overlay":{"id":"17962"}},"id":"17957","type":"LassoSelectTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17962","type":"PolyAnnotation"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"17976","type":"Title"},{"attributes":{"toolbar":{"id":"17991"},"toolbar_location":"above"},"id":"17992","type":"ToolbarBox"},{"attributes":{},"id":"17941","type":"LinearScale"},{"attributes":{"data_source":{"id":"17973"},"glyph":{"id":"17972"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"17975"}},"id":"17974","type":"GlyphRenderer"},{"attributes":{},"id":"17979","type":"AllLabels"},{"attributes":{"callback":null},"id":"17960","type":"HoverTool"},{"attributes":{},"id":"17958","type":"UndoTool"},{"attributes":{},"id":"17988","type":"Selection"},{"attributes":{"children":[{"id":"17992"},{"id":"17990"}]},"id":"17993","type":"Column"},{"attributes":{"overlay":{"id":"17961"}},"id":"17955","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"17949"},"dimension":1,"ticker":null},"id":"17952","type":"Grid"},{"attributes":{"formatter":{"id":"17984"},"major_label_policy":{"id":"17982"},"ticker":{"id":"17946"}},"id":"17945","type":"LinearAxis"}],"root_ids":["17993"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"6f50eb28-53e9-40de-b804-d439ae756497","root_ids":["17993"],"roots":{"17993":"48f4eb8e-9f20-4c83-9cb5-384c65cbe55e"}}];
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