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
    
      
      
    
      var element = document.getElementById("223612f4-8118-48d0-8c69-0b7018990146");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '223612f4-8118-48d0-8c69-0b7018990146' but no matching script tag was found.")
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
                    
                  var docs_json = '{"d74505c4-2842-4ef8-a4e7-713d82a789d5":{"defs":[],"roots":{"references":[{"attributes":{"data_source":{"id":"37095"},"glyph":{"id":"37094"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"37097"}},"id":"37096","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"37040","type":"PolyAnnotation"},{"attributes":{},"id":"37118","type":"AllLabels"},{"attributes":{"source":{"id":"37086"}},"id":"37090","type":"CDSView"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"37091","type":"Span"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"37092","type":"Span"},{"attributes":{},"id":"37120","type":"BasicTickFormatter"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"37126"},"selection_policy":{"id":"37125"}},"id":"37095","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"37105","type":"Span"},{"attributes":{},"id":"37129","type":"AllLabels"},{"attributes":{"text":"tau"},"id":"37098","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"37102","type":"Circle"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"37093","type":"Span"},{"attributes":{},"id":"37131","type":"BasicTickFormatter"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"37094","type":"Scatter"},{"attributes":{"source":{"id":"37095"}},"id":"37097","type":"CDSView"},{"attributes":{"source":{"id":"37100"}},"id":"37104","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"37101","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"37138"},"selection_policy":{"id":"37137"}},"id":"37100","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"37109"},"glyph":{"id":"37108"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"37111"}},"id":"37110","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"37023"}],"center":[{"id":"37026"},{"id":"37030"}],"height":500,"left":[{"id":"37027"}],"output_backend":"webgl","renderers":[{"id":"37089"},{"id":"37091"},{"id":"37092"},{"id":"37093"},{"id":"37096"}],"title":{"id":"37098"},"toolbar":{"id":"37041"},"toolbar_location":null,"width":500,"x_range":{"id":"37015"},"x_scale":{"id":"37019"},"y_range":{"id":"37017"},"y_scale":{"id":"37021"}},"id":"37014","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"37106","type":"Span"},{"attributes":{"data_source":{"id":"37100"},"glyph":{"id":"37101"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37102"},"view":{"id":"37104"}},"id":"37103","type":"GlyphRenderer"},{"attributes":{},"id":"37123","type":"UnionRenderers"},{"attributes":{},"id":"37124","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"37088","type":"Circle"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"37140"},"selection_policy":{"id":"37139"}},"id":"37109","type":"ColumnDataSource"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"37134"},"major_label_policy":{"id":"37132"},"ticker":{"id":"37060"}},"id":"37059","type":"LinearAxis"},{"attributes":{"below":[{"id":"37059"}],"center":[{"id":"37062"},{"id":"37066"}],"height":500,"left":[{"id":"37063"}],"output_backend":"webgl","renderers":[{"id":"37103"},{"id":"37105"},{"id":"37106"},{"id":"37107"},{"id":"37110"}],"title":{"id":"37112"},"toolbar":{"id":"37077"},"toolbar_location":null,"width":500,"x_range":{"id":"37051"},"x_scale":{"id":"37055"},"y_range":{"id":"37053"},"y_scale":{"id":"37057"}},"id":"37050","subtype":"Figure","type":"Plot"},{"attributes":{"end":1,"start":-0.05},"id":"37053","type":"DataRange1d"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"37131"},"major_label_policy":{"id":"37129"},"ticker":{"id":"37064"}},"id":"37063","type":"LinearAxis"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"37117"},"major_label_policy":{"id":"37115"},"ticker":{"id":"37028"}},"id":"37027","type":"LinearAxis"},{"attributes":{"text":"mu"},"id":"37112","type":"Title"},{"attributes":{},"id":"37055","type":"LinearScale"},{"attributes":{"toolbars":[{"id":"37041"},{"id":"37077"}],"tools":[{"id":"37031"},{"id":"37032"},{"id":"37033"},{"id":"37034"},{"id":"37035"},{"id":"37036"},{"id":"37037"},{"id":"37038"},{"id":"37067"},{"id":"37068"},{"id":"37069"},{"id":"37070"},{"id":"37071"},{"id":"37072"},{"id":"37073"},{"id":"37074"}]},"id":"37143","type":"ProxyToolbar"},{"attributes":{},"id":"37057","type":"LinearScale"},{"attributes":{"callback":null},"id":"37074","type":"HoverTool"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"37107","type":"Span"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"37124"},"selection_policy":{"id":"37123"}},"id":"37086","type":"ColumnDataSource"},{"attributes":{},"id":"37015","type":"DataRange1d"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"37108","type":"Scatter"},{"attributes":{},"id":"37060","type":"BasicTicker"},{"attributes":{"axis":{"id":"37059"},"ticker":null},"id":"37062","type":"Grid"},{"attributes":{"source":{"id":"37109"}},"id":"37111","type":"CDSView"},{"attributes":{"children":[{"id":"37144"},{"id":"37142"}]},"id":"37145","type":"Column"},{"attributes":{},"id":"37024","type":"BasicTicker"},{"attributes":{"toolbar":{"id":"37143"},"toolbar_location":"above"},"id":"37144","type":"ToolbarBox"},{"attributes":{},"id":"37019","type":"LinearScale"},{"attributes":{"active_multi":null,"tools":[{"id":"37067"},{"id":"37068"},{"id":"37069"},{"id":"37070"},{"id":"37071"},{"id":"37072"},{"id":"37073"},{"id":"37074"}]},"id":"37077","type":"Toolbar"},{"attributes":{"axis":{"id":"37063"},"dimension":1,"ticker":null},"id":"37066","type":"Grid"},{"attributes":{"axis":{"id":"37027"},"dimension":1,"ticker":null},"id":"37030","type":"Grid"},{"attributes":{},"id":"37064","type":"BasicTicker"},{"attributes":{"data_source":{"id":"37086"},"glyph":{"id":"37087"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37088"},"view":{"id":"37090"}},"id":"37089","type":"GlyphRenderer"},{"attributes":{"end":1,"start":-0.05},"id":"37017","type":"DataRange1d"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"37120"},"major_label_policy":{"id":"37118"},"ticker":{"id":"37024"}},"id":"37023","type":"LinearAxis"},{"attributes":{},"id":"37125","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"37038","type":"HoverTool"},{"attributes":{"overlay":{"id":"37075"}},"id":"37069","type":"BoxZoomTool"},{"attributes":{},"id":"37126","type":"Selection"},{"attributes":{},"id":"37032","type":"PanTool"},{"attributes":{},"id":"37068","type":"PanTool"},{"attributes":{},"id":"37067","type":"ResetTool"},{"attributes":{},"id":"37021","type":"LinearScale"},{"attributes":{},"id":"37132","type":"AllLabels"},{"attributes":{},"id":"37073","type":"SaveTool"},{"attributes":{},"id":"37070","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"37076"}},"id":"37071","type":"LassoSelectTool"},{"attributes":{},"id":"37028","type":"BasicTicker"},{"attributes":{},"id":"37072","type":"UndoTool"},{"attributes":{"axis":{"id":"37023"},"ticker":null},"id":"37026","type":"Grid"},{"attributes":{},"id":"37134","type":"BasicTickFormatter"},{"attributes":{"active_multi":null,"tools":[{"id":"37031"},{"id":"37032"},{"id":"37033"},{"id":"37034"},{"id":"37035"},{"id":"37036"},{"id":"37037"},{"id":"37038"}]},"id":"37041","type":"Toolbar"},{"attributes":{"overlay":{"id":"37039"}},"id":"37033","type":"BoxZoomTool"},{"attributes":{},"id":"37031","type":"ResetTool"},{"attributes":{},"id":"37051","type":"DataRange1d"},{"attributes":{},"id":"37034","type":"WheelZoomTool"},{"attributes":{},"id":"37115","type":"AllLabels"},{"attributes":{},"id":"37036","type":"UndoTool"},{"attributes":{"overlay":{"id":"37040"}},"id":"37035","type":"LassoSelectTool"},{"attributes":{},"id":"37037","type":"SaveTool"},{"attributes":{},"id":"37117","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"37076","type":"PolyAnnotation"},{"attributes":{},"id":"37137","type":"UnionRenderers"},{"attributes":{},"id":"37138","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"37087","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"37075","type":"BoxAnnotation"},{"attributes":{"children":[[{"id":"37014"},0,0],[{"id":"37050"},0,1]]},"id":"37142","type":"GridBox"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"37039","type":"BoxAnnotation"},{"attributes":{},"id":"37139","type":"UnionRenderers"},{"attributes":{},"id":"37140","type":"Selection"}],"root_ids":["37145"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"d74505c4-2842-4ef8-a4e7-713d82a789d5","root_ids":["37145"],"roots":{"37145":"223612f4-8118-48d0-8c69-0b7018990146"}}];
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