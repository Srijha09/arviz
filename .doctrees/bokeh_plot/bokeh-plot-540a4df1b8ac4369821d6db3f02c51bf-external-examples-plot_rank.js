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
    
      
      
    
      var element = document.getElementById("9e2518dd-2c42-4f74-bc46-573a3f42adb6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '9e2518dd-2c42-4f74-bc46-573a3f42adb6' but no matching script tag was found.")
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
                    
                  var docs_json = '{"c547ee77-4576-45e8-a4aa-e83892e4582f":{"defs":[],"roots":{"references":[{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"43209","type":"Span"},{"attributes":{"data_source":{"id":"43222"},"glyph":{"id":"43223"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43224"},"view":{"id":"43226"}},"id":"43225","type":"GlyphRenderer"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"43221","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43262"},"selection_policy":{"id":"43261"}},"id":"43216","type":"ColumnDataSource"},{"attributes":{},"id":"43257","type":"UnionRenderers"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43218","type":"VBar"},{"attributes":{},"id":"43258","type":"Selection"},{"attributes":{"callback":null},"id":"43130","type":"HoverTool"},{"attributes":{},"id":"43129","type":"SaveTool"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"43227","type":"Span"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43212","type":"VBar"},{"attributes":{"data_source":{"id":"43210"},"glyph":{"id":"43211"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43212"},"view":{"id":"43214"}},"id":"43213","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"43204"},"glyph":{"id":"43205"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43206"},"view":{"id":"43208"}},"id":"43207","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"43165","type":"BoxAnnotation"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43211","type":"VBar"},{"attributes":{},"id":"43242","type":"UnionRenderers"},{"attributes":{},"id":"43243","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43260"},"selection_policy":{"id":"43259"}},"id":"43210","type":"ColumnDataSource"},{"attributes":{},"id":"43233","type":"AllLabels"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43258"},"selection_policy":{"id":"43257"}},"id":"43204","type":"ColumnDataSource"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"43199","type":"Span"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43206","type":"VBar"},{"attributes":{},"id":"43128","type":"UndoTool"},{"attributes":{},"id":"43234","type":"BasicTickFormatter"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"43215","type":"Span"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"43237"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"43235"},"ticker":{"id":"43116"}},"id":"43115","type":"LinearAxis"},{"attributes":{},"id":"43259","type":"UnionRenderers"},{"attributes":{},"id":"43124","type":"PanTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"43166","type":"PolyAnnotation"},{"attributes":{},"id":"43260","type":"Selection"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43196","type":"VBar"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"43131","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"43115"}],"center":[{"id":"43118"},{"id":"43122"},{"id":"43181"},{"id":"43187"},{"id":"43193"},{"id":"43199"}],"height":331,"left":[{"id":"43119"}],"output_backend":"webgl","renderers":[{"id":"43179"},{"id":"43185"},{"id":"43191"},{"id":"43197"}],"title":{"id":"43202"},"toolbar":{"id":"43133"},"toolbar_location":null,"width":496,"x_range":{"id":"43107"},"x_scale":{"id":"43111"},"y_range":{"id":"43109"},"y_scale":{"id":"43113"}},"id":"43106","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43241"},"selection_policy":{"id":"43240"}},"id":"43176","type":"ColumnDataSource"},{"attributes":{},"id":"43250","type":"AllLabels"},{"attributes":{},"id":"43244","type":"UnionRenderers"},{"attributes":{},"id":"43245","type":"Selection"},{"attributes":{},"id":"43251","type":"BasicTickFormatter"},{"attributes":{},"id":"43145","type":"LinearScale"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"43132","type":"PolyAnnotation"},{"attributes":{},"id":"43147","type":"LinearScale"},{"attributes":{},"id":"43261","type":"UnionRenderers"},{"attributes":{},"id":"43262","type":"Selection"},{"attributes":{"axis":{"id":"43149"},"ticker":null},"id":"43152","type":"Grid"},{"attributes":{"below":[{"id":"43149"}],"center":[{"id":"43152"},{"id":"43156"},{"id":"43209"},{"id":"43215"},{"id":"43221"},{"id":"43227"}],"height":331,"left":[{"id":"43153"}],"output_backend":"webgl","renderers":[{"id":"43207"},{"id":"43213"},{"id":"43219"},{"id":"43225"}],"title":{"id":"43230"},"toolbar":{"id":"43167"},"toolbar_location":null,"width":496,"x_range":{"id":"43107"},"x_scale":{"id":"43145"},"y_range":{"id":"43109"},"y_scale":{"id":"43147"}},"id":"43142","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"43113","type":"LinearScale"},{"attributes":{"source":{"id":"43182"}},"id":"43186","type":"CDSView"},{"attributes":{},"id":"43246","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"43131"}},"id":"43125","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43178","type":"VBar"},{"attributes":{},"id":"43247","type":"Selection"},{"attributes":{"source":{"id":"43176"}},"id":"43180","type":"CDSView"},{"attributes":{},"id":"43116","type":"BasicTicker"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43184","type":"VBar"},{"attributes":{"data_source":{"id":"43176"},"glyph":{"id":"43177"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43178"},"view":{"id":"43180"}},"id":"43179","type":"GlyphRenderer"},{"attributes":{},"id":"43109","type":"DataRange1d"},{"attributes":{"children":[[{"id":"43106"},0,0],[{"id":"43142"},0,1]]},"id":"43266","type":"GridBox"},{"attributes":{"active_multi":null,"tools":[{"id":"43123"},{"id":"43124"},{"id":"43125"},{"id":"43126"},{"id":"43127"},{"id":"43128"},{"id":"43129"},{"id":"43130"}]},"id":"43133","type":"Toolbar"},{"attributes":{},"id":"43126","type":"WheelZoomTool"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43183","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43243"},"selection_policy":{"id":"43242"}},"id":"43182","type":"ColumnDataSource"},{"attributes":{},"id":"43263","type":"UnionRenderers"},{"attributes":{"ticks":[0,1,2,3]},"id":"43200","type":"FixedTicker"},{"attributes":{"axis":{"id":"43115"},"ticker":null},"id":"43118","type":"Grid"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"43187","type":"Span"},{"attributes":{},"id":"43264","type":"Selection"},{"attributes":{"data_source":{"id":"43182"},"glyph":{"id":"43183"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43184"},"view":{"id":"43186"}},"id":"43185","type":"GlyphRenderer"},{"attributes":{},"id":"43123","type":"ResetTool"},{"attributes":{"data_source":{"id":"43188"},"glyph":{"id":"43189"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43190"},"view":{"id":"43192"}},"id":"43191","type":"GlyphRenderer"},{"attributes":{},"id":"43235","type":"AllLabels"},{"attributes":{"callback":null},"id":"43164","type":"HoverTool"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43264"},"selection_policy":{"id":"43263"}},"id":"43222","type":"ColumnDataSource"},{"attributes":{},"id":"43107","type":"DataRange1d"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"43193","type":"Span"},{"attributes":{"axis_label":"Chain","formatter":{"id":"43251"},"major_label_policy":{"id":"43250"},"ticker":{"id":"43228"}},"id":"43153","type":"LinearAxis"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"43254"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"43252"},"ticker":{"id":"43150"}},"id":"43149","type":"LinearAxis"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43189","type":"VBar"},{"attributes":{"source":{"id":"43188"}},"id":"43192","type":"CDSView"},{"attributes":{},"id":"43237","type":"BasicTickFormatter"},{"attributes":{},"id":"43150","type":"BasicTicker"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43245"},"selection_policy":{"id":"43244"}},"id":"43188","type":"ColumnDataSource"},{"attributes":{"ticks":[0,1,2,3]},"id":"43228","type":"FixedTicker"},{"attributes":{},"id":"43111","type":"LinearScale"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43190","type":"VBar"},{"attributes":{"axis":{"id":"43153"},"dimension":1,"ticker":null},"id":"43156","type":"Grid"},{"attributes":{"source":{"id":"43222"}},"id":"43226","type":"CDSView"},{"attributes":{"axis":{"id":"43119"},"dimension":1,"ticker":null},"id":"43122","type":"Grid"},{"attributes":{"text":"mu"},"id":"43230","type":"Title"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43217","type":"VBar"},{"attributes":{},"id":"43252","type":"AllLabels"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43177","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43195","type":"VBar"},{"attributes":{"overlay":{"id":"43165"}},"id":"43159","type":"BoxZoomTool"},{"attributes":{"source":{"id":"43216"}},"id":"43220","type":"CDSView"},{"attributes":{},"id":"43158","type":"PanTool"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"43247"},"selection_policy":{"id":"43246"}},"id":"43194","type":"ColumnDataSource"},{"attributes":{},"id":"43157","type":"ResetTool"},{"attributes":{"data_source":{"id":"43216"},"glyph":{"id":"43217"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43218"},"view":{"id":"43220"}},"id":"43219","type":"GlyphRenderer"},{"attributes":{},"id":"43254","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43205","type":"VBar"},{"attributes":{},"id":"43163","type":"SaveTool"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43224","type":"VBar"},{"attributes":{},"id":"43160","type":"WheelZoomTool"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"43223","type":"VBar"},{"attributes":{"overlay":{"id":"43166"}},"id":"43161","type":"LassoSelectTool"},{"attributes":{"source":{"id":"43210"}},"id":"43214","type":"CDSView"},{"attributes":{},"id":"43162","type":"UndoTool"},{"attributes":{"axis_label":"Chain","formatter":{"id":"43234"},"major_label_policy":{"id":"43233"},"ticker":{"id":"43200"}},"id":"43119","type":"LinearAxis"},{"attributes":{"toolbar":{"id":"43267"},"toolbar_location":"above"},"id":"43268","type":"ToolbarBox"},{"attributes":{"active_multi":null,"tools":[{"id":"43157"},{"id":"43158"},{"id":"43159"},{"id":"43160"},{"id":"43161"},{"id":"43162"},{"id":"43163"},{"id":"43164"}]},"id":"43167","type":"Toolbar"},{"attributes":{"overlay":{"id":"43132"}},"id":"43127","type":"LassoSelectTool"},{"attributes":{"source":{"id":"43204"}},"id":"43208","type":"CDSView"},{"attributes":{},"id":"43240","type":"UnionRenderers"},{"attributes":{"text":"tau"},"id":"43202","type":"Title"},{"attributes":{},"id":"43241","type":"Selection"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"43181","type":"Span"},{"attributes":{"data_source":{"id":"43194"},"glyph":{"id":"43195"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"43196"},"view":{"id":"43198"}},"id":"43197","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"43268"},{"id":"43266"}]},"id":"43269","type":"Column"},{"attributes":{"toolbars":[{"id":"43133"},{"id":"43167"}],"tools":[{"id":"43123"},{"id":"43124"},{"id":"43125"},{"id":"43126"},{"id":"43127"},{"id":"43128"},{"id":"43129"},{"id":"43130"},{"id":"43157"},{"id":"43158"},{"id":"43159"},{"id":"43160"},{"id":"43161"},{"id":"43162"},{"id":"43163"},{"id":"43164"}]},"id":"43267","type":"ProxyToolbar"},{"attributes":{"source":{"id":"43194"}},"id":"43198","type":"CDSView"}],"root_ids":["43269"]},"title":"Bokeh Application","version":"2.3.2"}}';
                  var render_items = [{"docid":"c547ee77-4576-45e8-a4aa-e83892e4582f","root_ids":["43269"],"roots":{"43269":"9e2518dd-2c42-4f74-bc46-573a3f42adb6"}}];
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