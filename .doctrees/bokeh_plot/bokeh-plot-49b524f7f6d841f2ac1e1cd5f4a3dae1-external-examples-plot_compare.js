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
    
      
      
    
      var element = document.getElementById("4a992bb2-6538-4699-b1a6-0e78f441285e");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '4a992bb2-6538-4699-b1a6-0e78f441285e' but no matching script tag was found.")
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
                    
                  var docs_json = '{"e25970d3-c92a-4d30-a3ce-c207039e0dd4":{"defs":[],"roots":{"references":[{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15697","type":"MultiLine"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15692","type":"Circle"},{"attributes":{},"id":"15709","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15682","type":"Scatter"},{"attributes":{},"id":"15723","type":"UnionRenderers"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"15678","type":"FixedTicker"},{"attributes":{"source":{"id":"15690"}},"id":"15694","type":"CDSView"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15701","type":"Circle"},{"attributes":{},"id":"15715","type":"UnionRenderers"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"15705","type":"Span"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15686","type":"MultiLine"},{"attributes":{"data_source":{"id":"15700"},"glyph":{"id":"15701"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15702"},"view":{"id":"15704"}},"id":"15703","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"15651"}],"center":[{"id":"15654"},{"id":"15658"}],"height":500,"left":[{"id":"15655"}],"output_backend":"webgl","renderers":[{"id":"15683"},{"id":"15688"},{"id":"15693"},{"id":"15698"},{"id":"15703"},{"id":"15705"}],"title":{"id":"15706"},"toolbar":{"id":"15669"},"toolbar_location":null,"width":500,"x_range":{"id":"15643"},"x_scale":{"id":"15647"},"y_range":{"id":"15645"},"y_scale":{"id":"15649"}},"id":"15642","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"15660","type":"PanTool"},{"attributes":{},"id":"15718","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"KQWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"15716"},"selection_policy":{"id":"15715"}},"id":"15680","type":"ColumnDataSource"},{"attributes":{"data":{"xs":[[-30.896420573800544,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"15718"},"selection_policy":{"id":"15717"}},"id":"15685","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"15666","type":"HoverTool"},{"attributes":{},"id":"15643","type":"DataRange1d"},{"attributes":{},"id":"15706","type":"Title"},{"attributes":{},"id":"15665","type":"SaveTool"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15681","type":"Scatter"},{"attributes":{},"id":"15720","type":"Selection"},{"attributes":{},"id":"15724","type":"Selection"},{"attributes":{"data_source":{"id":"15690"},"glyph":{"id":"15691"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15692"},"view":{"id":"15694"}},"id":"15693","type":"GlyphRenderer"},{"attributes":{"source":{"id":"15680"}},"id":"15684","type":"CDSView"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.383537134836743]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"15722"},"selection_policy":{"id":"15721"}},"id":"15695","type":"ColumnDataSource"},{"attributes":{},"id":"15662","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15702","type":"Circle"},{"attributes":{"end":0.5,"start":-1.5},"id":"15645","type":"DataRange1d"},{"attributes":{"source":{"id":"15685"}},"id":"15689","type":"CDSView"},{"attributes":{"axis":{"id":"15655"},"dimension":1,"ticker":null},"id":"15658","type":"Grid"},{"attributes":{"data_source":{"id":"15680"},"glyph":{"id":"15681"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15682"},"view":{"id":"15684"}},"id":"15683","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15687","type":"MultiLine"},{"attributes":{},"id":"15652","type":"BasicTicker"},{"attributes":{"toolbars":[{"id":"15669"}],"tools":[{"id":"15659"},{"id":"15660"},{"id":"15661"},{"id":"15662"},{"id":"15663"},{"id":"15664"},{"id":"15665"},{"id":"15666"}]},"id":"15727","type":"ProxyToolbar"},{"attributes":{},"id":"15721","type":"UnionRenderers"},{"attributes":{},"id":"15647","type":"LinearScale"},{"attributes":{"children":[[{"id":"15642"},0,0]]},"id":"15726","type":"GridBox"},{"attributes":{"data_source":{"id":"15685"},"glyph":{"id":"15686"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15687"},"view":{"id":"15689"}},"id":"15688","type":"GlyphRenderer"},{"attributes":{},"id":"15664","type":"UndoTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"15667","type":"BoxAnnotation"},{"attributes":{},"id":"15719","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"15668"}},"id":"15663","type":"LassoSelectTool"},{"attributes":{},"id":"15659","type":"ResetTool"},{"attributes":{},"id":"15712","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"15700"}},"id":"15704","type":"CDSView"},{"attributes":{},"id":"15716","type":"Selection"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15696","type":"MultiLine"},{"attributes":{},"id":"15722","type":"Selection"},{"attributes":{},"id":"15649","type":"LinearScale"},{"attributes":{"axis":{"id":"15651"},"ticker":null},"id":"15654","type":"Grid"},{"attributes":{"overlay":{"id":"15667"}},"id":"15661","type":"BoxZoomTool"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsApBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15720"},"selection_policy":{"id":"15719"}},"id":"15690","type":"ColumnDataSource"},{"attributes":{},"id":"15717","type":"UnionRenderers"},{"attributes":{},"id":"15708","type":"AllLabels"},{"attributes":{"formatter":{"id":"15709"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"15708"},"ticker":{"id":"15678"}},"id":"15655","type":"LinearAxis"},{"attributes":{"data_source":{"id":"15695"},"glyph":{"id":"15696"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15697"},"view":{"id":"15699"}},"id":"15698","type":"GlyphRenderer"},{"attributes":{},"id":"15710","type":"AllLabels"},{"attributes":{"axis_label":"Log","formatter":{"id":"15712"},"major_label_policy":{"id":"15710"},"ticker":{"id":"15652"}},"id":"15651","type":"LinearAxis"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15691","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15724"},"selection_policy":{"id":"15723"}},"id":"15700","type":"ColumnDataSource"},{"attributes":{"source":{"id":"15695"}},"id":"15699","type":"CDSView"},{"attributes":{"children":[{"id":"15728"},{"id":"15726"}]},"id":"15729","type":"Column"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"15668","type":"PolyAnnotation"},{"attributes":{"active_multi":null,"tools":[{"id":"15659"},{"id":"15660"},{"id":"15661"},{"id":"15662"},{"id":"15663"},{"id":"15664"},{"id":"15665"},{"id":"15666"}]},"id":"15669","type":"Toolbar"},{"attributes":{"toolbar":{"id":"15727"},"toolbar_location":"above"},"id":"15728","type":"ToolbarBox"}],"root_ids":["15729"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"e25970d3-c92a-4d30-a3ce-c207039e0dd4","root_ids":["15729"],"roots":{"15729":"4a992bb2-6538-4699-b1a6-0e78f441285e"}}];
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