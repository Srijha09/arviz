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
    
      
      
    
      var element = document.getElementById("bffc5e8c-067e-40a4-865a-600c8dcfc954");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bffc5e8c-067e-40a4-865a-600c8dcfc954' but no matching script tag was found.")
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
                    
                  var docs_json = '{"05c0b43d-0e1e-4c9e-9e69-a3214a71b09b":{"defs":[],"roots":{"references":[{"attributes":{"toolbars":[{"id":"18598"}],"tools":[{"id":"18588"},{"id":"18589"},{"id":"18590"},{"id":"18591"},{"id":"18592"},{"id":"18593"},{"id":"18594"},{"id":"18595"}]},"id":"18794","type":"ProxyToolbar"},{"attributes":{"source":{"id":"18607"}},"id":"18611","type":"CDSView"},{"attributes":{},"id":"18756","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"18672"},"glyph":{"id":"18673"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18674"},"view":{"id":"18676"}},"id":"18675","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18652"}},"id":"18656","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"18749"},"selection_policy":{"id":"18748"}},"id":"18617","type":"ColumnDataSource"},{"attributes":{},"id":"18589","type":"PanTool"},{"attributes":{"source":{"id":"18642"}},"id":"18646","type":"CDSView"},{"attributes":{},"id":"18789","type":"Selection"},{"attributes":{"data":{"x":[-2.13476994033137,10.008689721107494],"y":[0.3,0.3]},"selected":{"id":"18751"},"selection_policy":{"id":"18750"}},"id":"18622","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18647"}},"id":"18651","type":"CDSView"},{"attributes":{"source":{"id":"18707"}},"id":"18711","type":"CDSView"},{"attributes":{"data_source":{"id":"18657"},"glyph":{"id":"18658"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18659"},"view":{"id":"18661"}},"id":"18660","type":"GlyphRenderer"},{"attributes":{},"id":"18785","type":"Selection"},{"attributes":{"data_source":{"id":"18617"},"glyph":{"id":"18618"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18619"},"view":{"id":"18621"}},"id":"18620","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18668","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18714","type":"Line"},{"attributes":{"source":{"id":"18672"}},"id":"18676","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"18761"},"selection_policy":{"id":"18760"}},"id":"18647","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18712"}},"id":"18716","type":"CDSView"},{"attributes":{},"id":"18767","type":"Selection"},{"attributes":{},"id":"18774","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"18717"},"glyph":{"id":"18718"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18719"},"view":{"id":"18721"}},"id":"18720","type":"GlyphRenderer"},{"attributes":{"data":{"x":[2.292119984640912,6.479187946875486],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"18765"},"selection_policy":{"id":"18764"}},"id":"18657","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18612"}},"id":"18616","type":"CDSView"},{"attributes":{"source":{"id":"18662"}},"id":"18666","type":"CDSView"},{"attributes":{},"id":"18770","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"18596"}},"id":"18590","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"18664","type":"Circle"},{"attributes":{},"id":"18778","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"18637"},"glyph":{"id":"18638"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18639"},"view":{"id":"18641"}},"id":"18640","type":"GlyphRenderer"},{"attributes":{"data":{},"selected":{"id":"18767"},"selection_policy":{"id":"18766"}},"id":"18662","type":"ColumnDataSource"},{"attributes":{},"id":"18783","type":"Selection"},{"attributes":{},"id":"18591","type":"WheelZoomTool"},{"attributes":{"data":{"x":[-2.061896746944455,11.515205993744095],"y":[2.25,2.25]},"selected":{"id":"18781"},"selection_policy":{"id":"18780"}},"id":"18697","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"18584"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"18587","type":"Grid"},{"attributes":{"source":{"id":"18682"}},"id":"18686","type":"CDSView"},{"attributes":{"data":{"x":[-2.358040118461496,10.910290467635015],"y":[1.95,1.95]},"selected":{"id":"18775"},"selection_policy":{"id":"18774"}},"id":"18682","type":"ColumnDataSource"},{"attributes":{},"id":"18593","type":"UndoTool"},{"attributes":{"data_source":{"id":"18662"},"glyph":{"id":"18663"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18664"},"view":{"id":"18666"}},"id":"18665","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18703","type":"Line"},{"attributes":{"data_source":{"id":"18612"},"glyph":{"id":"18613"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18614"},"view":{"id":"18616"}},"id":"18615","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18704","type":"Line"},{"attributes":{},"id":"18750","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18654","type":"Line"},{"attributes":{"data":{"x":[2.393576367885318,6.880909766712211],"y":[1.95,1.95]},"selected":{"id":"18777"},"selection_policy":{"id":"18776"}},"id":"18687","type":"ColumnDataSource"},{"attributes":{},"id":"18773","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"18709","type":"Circle"},{"attributes":{},"id":"18755","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18674","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18684","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18719","type":"Line"},{"attributes":{"data_source":{"id":"18677"},"glyph":{"id":"18678"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18679"},"view":{"id":"18681"}},"id":"18680","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Non Centered"},"renderers":[{"id":"18610"},{"id":"18615"},{"id":"18620"},{"id":"18625"},{"id":"18630"},{"id":"18635"},{"id":"18640"},{"id":"18645"},{"id":"18650"},{"id":"18655"},{"id":"18660"},{"id":"18665"}]},"id":"18734","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18614","type":"Line"},{"attributes":{"callback":null},"id":"18595","type":"HoverTool"},{"attributes":{"data_source":{"id":"18687"},"glyph":{"id":"18688"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18689"},"view":{"id":"18691"}},"id":"18690","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"18702"},"glyph":{"id":"18703"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18704"},"view":{"id":"18706"}},"id":"18705","type":"GlyphRenderer"},{"attributes":{},"id":"18752","type":"UnionRenderers"},{"attributes":{},"id":"18588","type":"ResetTool"},{"attributes":{"ticks":[1.275]},"id":"18731","type":"FixedTicker"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"18678","type":"Circle"},{"attributes":{},"id":"18768","type":"UnionRenderers"},{"attributes":{},"id":"18781","type":"Selection"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"18618","type":"Circle"},{"attributes":{},"id":"18786","type":"UnionRenderers"},{"attributes":{"label":{"value":"Centered"},"renderers":[{"id":"18670"},{"id":"18675"},{"id":"18680"},{"id":"18685"},{"id":"18690"},{"id":"18695"},{"id":"18700"},{"id":"18705"},{"id":"18710"},{"id":"18715"},{"id":"18720"},{"id":"18725"}]},"id":"18735","type":"LegendItem"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18713","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"18724","type":"Circle"},{"attributes":{},"id":"18769","type":"Selection"},{"attributes":{},"id":"18576","type":"LinearScale"},{"attributes":{"data_source":{"id":"18682"},"glyph":{"id":"18683"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18684"},"view":{"id":"18686"}},"id":"18685","type":"GlyphRenderer"},{"attributes":{},"id":"18775","type":"Selection"},{"attributes":{"data_source":{"id":"18667"},"glyph":{"id":"18668"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18669"},"view":{"id":"18671"}},"id":"18670","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"18723","type":"Circle"},{"attributes":{},"id":"18784","type":"UnionRenderers"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18613","type":"Line"},{"attributes":{},"id":"18765","type":"Selection"},{"attributes":{"data":{"x":[-2.2641273152868076,10.475301593619335],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"18763"},"selection_policy":{"id":"18762"}},"id":"18652","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"18663","type":"Circle"},{"attributes":{},"id":"18753","type":"Selection"},{"attributes":{},"id":"18790","type":"UnionRenderers"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18718","type":"Line"},{"attributes":{},"id":"18757","type":"Selection"},{"attributes":{},"id":"18779","type":"Selection"},{"attributes":{"data_source":{"id":"18607"},"glyph":{"id":"18608"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18609"},"view":{"id":"18611"}},"id":"18610","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18669","type":"Line"},{"attributes":{"data":{"x":[1.9127415870254314,7.0411499662839026],"y":[2.25,2.25]},"selected":{"id":"18783"},"selection_policy":{"id":"18782"}},"id":"18702","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18667"}},"id":"18671","type":"CDSView"},{"attributes":{"source":{"id":"18657"}},"id":"18661","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"18773"},"selection_policy":{"id":"18772"}},"id":"18677","type":"ColumnDataSource"},{"attributes":{},"id":"18788","type":"UnionRenderers"},{"attributes":{"data":{},"selected":{"id":"18785"},"selection_policy":{"id":"18784"}},"id":"18707","type":"ColumnDataSource"},{"attributes":{"text":"94.0% HDI"},"id":"18727","type":"Title"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"18708","type":"Circle"},{"attributes":{},"id":"18764","type":"UnionRenderers"},{"attributes":{},"id":"18594","type":"SaveTool"},{"attributes":{"data_source":{"id":"18722"},"glyph":{"id":"18723"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18724"},"view":{"id":"18726"}},"id":"18725","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"18648","type":"Circle"},{"attributes":{},"id":"18751","type":"Selection"},{"attributes":{"source":{"id":"18677"}},"id":"18681","type":"CDSView"},{"attributes":{},"id":"18772","type":"UnionRenderers"},{"attributes":{},"id":"18776","type":"UnionRenderers"},{"attributes":{"data":{"x":[-1.9958943490877263,9.311550558002505],"y":[1.65,1.65]},"selected":{"id":"18769"},"selection_policy":{"id":"18768"}},"id":"18667","type":"ColumnDataSource"},{"attributes":{},"id":"18766","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18644","type":"Line"},{"attributes":{"data":{},"selected":{"id":"18791"},"selection_policy":{"id":"18790"}},"id":"18722","type":"ColumnDataSource"},{"attributes":{},"id":"18787","type":"Selection"},{"attributes":{"children":[{"id":"18795"},{"id":"18793"}]},"id":"18796","type":"Column"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18659","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"18619","type":"Circle"},{"attributes":{"source":{"id":"18702"}},"id":"18706","type":"CDSView"},{"attributes":{"data":{"x":[0.9649316231388204,5.949680273009057],"y":[1.65,1.65]},"selected":{"id":"18771"},"selection_policy":{"id":"18770"}},"id":"18672","type":"ColumnDataSource"},{"attributes":{"above":[{"id":"18733"}],"below":[{"id":"18580"}],"center":[{"id":"18583"},{"id":"18587"}],"height":348,"left":[{"id":"18584"}],"outline_line_color":null,"output_backend":"webgl","renderers":[{"id":"18610"},{"id":"18615"},{"id":"18620"},{"id":"18625"},{"id":"18630"},{"id":"18635"},{"id":"18640"},{"id":"18645"},{"id":"18650"},{"id":"18655"},{"id":"18660"},{"id":"18665"},{"id":"18670"},{"id":"18675"},{"id":"18680"},{"id":"18685"},{"id":"18690"},{"id":"18695"},{"id":"18700"},{"id":"18705"},{"id":"18710"},{"id":"18715"},{"id":"18720"},{"id":"18725"}],"title":{"id":"18727"},"toolbar":{"id":"18598"},"toolbar_location":null,"width":450,"x_range":{"id":"18729"},"x_scale":{"id":"18576"},"y_range":{"id":"18730"},"y_scale":{"id":"18578"}},"id":"18571","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18578","type":"LinearScale"},{"attributes":{"formatter":{"id":"18738"},"major_label_overrides":{"1.275":"mu"},"major_label_policy":{"id":"18737"},"ticker":{"id":"18731"}},"id":"18584","type":"LinearAxis"},{"attributes":{"data_source":{"id":"18647"},"glyph":{"id":"18648"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18649"},"view":{"id":"18651"}},"id":"18650","type":"GlyphRenderer"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18683","type":"Line"},{"attributes":{"axis":{"id":"18580"},"ticker":null},"id":"18583","type":"Grid"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18658","type":"Line"},{"attributes":{"source":{"id":"18717"}},"id":"18721","type":"CDSView"},{"attributes":{},"id":"18741","type":"BasicTickFormatter"},{"attributes":{},"id":"18739","type":"AllLabels"},{"attributes":{},"id":"18581","type":"BasicTicker"},{"attributes":{"data":{"x":[2.454317217804662,6.859709821773685],"y":[0,0]},"selected":{"id":"18747"},"selection_policy":{"id":"18746"}},"id":"18612","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18673","type":"Line"},{"attributes":{"children":[[{"id":"18571"},0,0]]},"id":"18793","type":"GridBox"},{"attributes":{},"id":"18780","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"18741"},"major_label_policy":{"id":"18739"},"ticker":{"id":"18581"}},"id":"18580","type":"LinearAxis"},{"attributes":{"data_source":{"id":"18622"},"glyph":{"id":"18623"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18624"},"view":{"id":"18626"}},"id":"18625","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18653","type":"Line"},{"attributes":{"source":{"id":"18722"}},"id":"18726","type":"CDSView"},{"attributes":{},"id":"18777","type":"Selection"},{"attributes":{"source":{"id":"18617"}},"id":"18621","type":"CDSView"},{"attributes":{"bounds":"auto","min_interval":1},"id":"18729","type":"DataRange1d"},{"attributes":{},"id":"18791","type":"Selection"},{"attributes":{},"id":"18771","type":"Selection"},{"attributes":{},"id":"18758","type":"UnionRenderers"},{"attributes":{},"id":"18782","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"18707"},"glyph":{"id":"18708"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18709"},"view":{"id":"18711"}},"id":"18710","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"18597"}},"id":"18592","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"18679","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"18649","type":"Circle"},{"attributes":{"data":{"x":[1.9790083397469873,5.455951625836456],"y":[2.55,2.55]},"selected":{"id":"18789"},"selection_policy":{"id":"18788"}},"id":"18717","type":"ColumnDataSource"},{"attributes":{},"id":"18754","type":"UnionRenderers"},{"attributes":{},"id":"18749","type":"Selection"},{"attributes":{"click_policy":"hide","items":[{"id":"18734"},{"id":"18735"}],"location":"top_left"},"id":"18733","type":"Legend"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18689","type":"Line"},{"attributes":{"data":{"x":[2.2808674873161356,6.6262125124574265],"y":[0.3,0.3]},"selected":{"id":"18753"},"selection_policy":{"id":"18752"}},"id":"18627","type":"ColumnDataSource"},{"attributes":{},"id":"18738","type":"BasicTickFormatter"},{"attributes":{},"id":"18761","type":"Selection"},{"attributes":{"data_source":{"id":"18697"},"glyph":{"id":"18698"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18699"},"view":{"id":"18701"}},"id":"18700","type":"GlyphRenderer"},{"attributes":{},"id":"18759","type":"Selection"},{"attributes":{"bounds":"auto","end":3.4499999999999997,"min_interval":2,"start":-0.8999999999999999},"id":"18730","type":"DataRange1d"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18698","type":"Line"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18608","type":"Line"},{"attributes":{},"id":"18744","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"18712"},"glyph":{"id":"18713"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18714"},"view":{"id":"18716"}},"id":"18715","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18697"}},"id":"18701","type":"CDSView"},{"attributes":{"data_source":{"id":"18632"},"glyph":{"id":"18633"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18634"},"view":{"id":"18636"}},"id":"18635","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18687"}},"id":"18691","type":"CDSView"},{"attributes":{"source":{"id":"18692"}},"id":"18696","type":"CDSView"},{"attributes":{},"id":"18760","type":"UnionRenderers"},{"attributes":{"data":{"x":[-0.7842313478998125,9.985046696913068],"y":[2.55,2.55]},"selected":{"id":"18787"},"selection_policy":{"id":"18786"}},"id":"18712","type":"ColumnDataSource"},{"attributes":{"data":{"x":[-1.4753067334040253,11.208804111875878],"y":[0.6,0.6]},"selected":{"id":"18757"},"selection_policy":{"id":"18756"}},"id":"18637","type":"ColumnDataSource"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18643","type":"Line"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"18633","type":"Circle"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18638","type":"Line"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"18693","type":"Circle"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18597","type":"PolyAnnotation"},{"attributes":{},"id":"18748","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18624","type":"Line"},{"attributes":{"data":{},"selected":{"id":"18755"},"selection_policy":{"id":"18754"}},"id":"18632","type":"ColumnDataSource"},{"attributes":{},"id":"18745","type":"Selection"},{"attributes":{"source":{"id":"18632"}},"id":"18636","type":"CDSView"},{"attributes":{},"id":"18746","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18609","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18699","type":"Line"},{"attributes":{"source":{"id":"18622"}},"id":"18626","type":"CDSView"},{"attributes":{},"id":"18763","type":"Selection"},{"attributes":{"source":{"id":"18627"}},"id":"18631","type":"CDSView"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18628","type":"Line"},{"attributes":{"data_source":{"id":"18692"},"glyph":{"id":"18693"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18694"},"view":{"id":"18696"}},"id":"18695","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18637"}},"id":"18641","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"18694","type":"Circle"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18623","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18629","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18596","type":"BoxAnnotation"},{"attributes":{"data":{},"selected":{"id":"18779"},"selection_policy":{"id":"18778"}},"id":"18692","type":"ColumnDataSource"},{"attributes":{"data":{"x":[2.1521098502407368,6.9643589964055215],"y":[0.6,0.6]},"selected":{"id":"18759"},"selection_policy":{"id":"18758"}},"id":"18642","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"18688","type":"Line"},{"attributes":{"data":{"x":[-1.0798320889339172,10.200853218312133],"y":[0,0]},"selected":{"id":"18745"},"selection_policy":{"id":"18744"}},"id":"18607","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"18627"},"glyph":{"id":"18628"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18629"},"view":{"id":"18631"}},"id":"18630","type":"GlyphRenderer"},{"attributes":{},"id":"18747","type":"Selection"},{"attributes":{"active_multi":null,"tools":[{"id":"18588"},{"id":"18589"},{"id":"18590"},{"id":"18591"},{"id":"18592"},{"id":"18593"},{"id":"18594"},{"id":"18595"}]},"id":"18598","type":"Toolbar"},{"attributes":{"data_source":{"id":"18652"},"glyph":{"id":"18653"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18654"},"view":{"id":"18656"}},"id":"18655","type":"GlyphRenderer"},{"attributes":{},"id":"18762","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"18639","type":"Line"},{"attributes":{},"id":"18737","type":"AllLabels"},{"attributes":{"toolbar":{"id":"18794"},"toolbar_location":"above"},"id":"18795","type":"ToolbarBox"},{"attributes":{"data_source":{"id":"18642"},"glyph":{"id":"18643"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"18644"},"view":{"id":"18646"}},"id":"18645","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"18634","type":"Circle"}],"root_ids":["18796"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"05c0b43d-0e1e-4c9e-9e69-a3214a71b09b","root_ids":["18796"],"roots":{"18796":"bffc5e8c-067e-40a4-865a-600c8dcfc954"}}];
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