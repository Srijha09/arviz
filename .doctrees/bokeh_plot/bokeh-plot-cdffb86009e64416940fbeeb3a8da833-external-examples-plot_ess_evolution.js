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
    
      
      
    
      var element = document.getElementById("f6832ccb-2ecb-485f-80bc-e874dd680066");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f6832ccb-2ecb-485f-80bc-e874dd680066' but no matching script tag was found.")
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
                    
                  var docs_json = '{"eb666632-94c2-42eb-b279-c6e5ab43e374":{"defs":[],"roots":{"references":[{"attributes":{"text":"b"},"id":"18256","type":"Title"},{"attributes":{},"id":"18210","type":"BasicTicker"},{"attributes":{"source":{"id":"18247"}},"id":"18251","type":"CDSView"},{"attributes":{},"id":"18273","type":"UnionRenderers"},{"attributes":{},"id":"18214","type":"PanTool"},{"attributes":{"data_source":{"id":"18247"},"glyph":{"id":"18248"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18249"},"view":{"id":"18251"}},"id":"18250","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"18209"},"dimension":1,"ticker":null},"id":"18212","type":"Grid"},{"attributes":{"above":[{"id":"18253"}],"below":[{"id":"18205"}],"center":[{"id":"18208"},{"id":"18212"}],"height":500,"left":[{"id":"18209"}],"output_backend":"webgl","renderers":[{"id":"18235"},{"id":"18240"},{"id":"18245"},{"id":"18250"},{"id":"18252"}],"title":{"id":"18256"},"toolbar":{"id":"18223"},"toolbar_location":null,"width":500,"x_range":{"id":"18197"},"x_scale":{"id":"18201"},"y_range":{"id":"18199"},"y_scale":{"id":"18203"}},"id":"18196","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18197","type":"DataRange1d"},{"attributes":{},"id":"18218","type":"UndoTool"},{"attributes":{"click_policy":"hide","items":[{"id":"18254"},{"id":"18255"}],"location":"center_right","orientation":"horizontal"},"id":"18253","type":"Legend"},{"attributes":{},"id":"18269","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18221","type":"BoxAnnotation"},{"attributes":{"source":{"id":"18242"}},"id":"18246","type":"CDSView"},{"attributes":{},"id":"18261","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18248","type":"Circle"},{"attributes":{},"id":"18213","type":"ResetTool"},{"attributes":{},"id":"18219","type":"SaveTool"},{"attributes":{},"id":"18268","type":"Selection"},{"attributes":{"toolbar":{"id":"18277"},"toolbar_location":"above"},"id":"18278","type":"ToolbarBox"},{"attributes":{"children":[{"id":"18278"},{"id":"18276"}]},"id":"18279","type":"Column"},{"attributes":{},"id":"18206","type":"BasicTicker"},{"attributes":{},"id":"18267","type":"UnionRenderers"},{"attributes":{},"id":"18259","type":"AllLabels"},{"attributes":{"overlay":{"id":"18221"}},"id":"18215","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"18244","type":"Line"},{"attributes":{"overlay":{"id":"18222"}},"id":"18217","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18234","type":"Circle"},{"attributes":{},"id":"18216","type":"WheelZoomTool"},{"attributes":{"toolbars":[{"id":"18223"}],"tools":[{"id":"18213"},{"id":"18214"},{"id":"18215"},{"id":"18216"},{"id":"18217"},{"id":"18218"},{"id":"18219"},{"id":"18220"}]},"id":"18277","type":"ProxyToolbar"},{"attributes":{},"id":"18203","type":"LinearScale"},{"attributes":{"data_source":{"id":"18237"},"glyph":{"id":"18238"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18239"},"view":{"id":"18241"}},"id":"18240","type":"GlyphRenderer"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"18252","type":"Span"},{"attributes":{},"id":"18201","type":"LinearScale"},{"attributes":{"source":{"id":"18237"}},"id":"18241","type":"CDSView"},{"attributes":{},"id":"18270","type":"Selection"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"18264"},"major_label_policy":{"id":"18262"},"ticker":{"id":"18206"}},"id":"18205","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18274"},"selection_policy":{"id":"18273"}},"id":"18247","type":"ColumnDataSource"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"18250"},{"id":"18245"}]},"id":"18255","type":"LegendItem"},{"attributes":{},"id":"18274","type":"Selection"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"18235"},{"id":"18240"}]},"id":"18254","type":"LegendItem"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"18238","type":"Line"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18270"},"selection_policy":{"id":"18269"}},"id":"18237","type":"ColumnDataSource"},{"attributes":{"axis_label":"ESS","formatter":{"id":"18261"},"major_label_policy":{"id":"18259"},"ticker":{"id":"18210"}},"id":"18209","type":"LinearAxis"},{"attributes":{"data_source":{"id":"18232"},"glyph":{"id":"18233"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18234"},"view":{"id":"18236"}},"id":"18235","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"18239","type":"Line"},{"attributes":{"source":{"id":"18232"}},"id":"18236","type":"CDSView"},{"attributes":{},"id":"18271","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"18242"},"glyph":{"id":"18243"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18244"},"view":{"id":"18246"}},"id":"18245","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18233","type":"Circle"},{"attributes":{"callback":null},"id":"18220","type":"HoverTool"},{"attributes":{"active_multi":null,"tools":[{"id":"18213"},{"id":"18214"},{"id":"18215"},{"id":"18216"},{"id":"18217"},{"id":"18218"},{"id":"18219"},{"id":"18220"}]},"id":"18223","type":"Toolbar"},{"attributes":{},"id":"18272","type":"Selection"},{"attributes":{},"id":"18199","type":"DataRange1d"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18268"},"selection_policy":{"id":"18267"}},"id":"18232","type":"ColumnDataSource"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"18243","type":"Line"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18222","type":"PolyAnnotation"},{"attributes":{},"id":"18262","type":"AllLabels"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"18272"},"selection_policy":{"id":"18271"}},"id":"18242","type":"ColumnDataSource"},{"attributes":{},"id":"18264","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18249","type":"Circle"},{"attributes":{"children":[[{"id":"18196"},0,0]]},"id":"18276","type":"GridBox"},{"attributes":{"axis":{"id":"18205"},"ticker":null},"id":"18208","type":"Grid"}],"root_ids":["18279"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"eb666632-94c2-42eb-b279-c6e5ab43e374","root_ids":["18279"],"roots":{"18279":"f6832ccb-2ecb-485f-80bc-e874dd680066"}}];
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