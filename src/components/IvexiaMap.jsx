import { useEffect } from "react";

export default function IvexiaMap() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.amcharts.com/lib/editor/map/5/viewer.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      let timer = setInterval(() => {
        if (window.am5viewer) {
          clearInterval(timer);

          window.am5viewer.create("ivexia-map", {
            "settings": {
              "editor": {
                "theme": "light",
                "themeTags": ["light"],
                "userData": {
                  "projection": "geoMercator",
                  "geodata": "worldLow"
                },
                "backgroundFill": { "type": "Color", "value": "#0d2d47" },
                "fillColor": { "type": "Color", "value": "#ff7a00" },
                "backgroundNoise": false,
                "clipBackground": false
              },

              "editor.map": {
                "minZoomLevel": 0.8,
                "projection": "geoOrthographic",
                "panX": "rotateX",
                "zoomControl": {
                  "type": "ZoomControl",
                  "settings": {
                    "visible": true,
                    "position": "absolute",
                    "layout": { "type": "VerticalLayout" },
                    "themeTags": ["zoomtools"],
                    "layer": 30
                  }
                },
                "background": {
                  "type": "Rectangle",
                  "settings": {
                    "fill": { "type": "Color", "value": "#0d2d47" },
                    "fillOpacity": 1,
                    "width": 1901,
                    "height": 912,
                    "x": 0,
                    "y": 0,
                    "isMeasured": false
                  }
                },
                "translateX": 991.13,
                "translateY": 430.19,
                "panY": "rotateY",
                "rotationX": -36.75,
                "rotationY": -41.92
              },

              "editor.polygonSeries": {
                "valueField": "value",
                "calculateAggregates": true,
                "id": "polygonseries",
                "geometryField": "geometry",
                "geometryTypeField": "geometryType",
                "idField": "id",
                "layer": 50   // IMPORTANT: show highlight colors
              },

              "editor.backgroundSeries": {
                "visible": true,
                "themeTags": ["polygon", "background"],
                "affectsBounds": false,
                "geometryField": "geometry",
                "geometryTypeField": "geometryType",
                "idField": "id"
              },

              "editor.backgroundSeries.mapPolygons.template": {
                "forceInactive": true,
                "fill": { "type": "Color", "value": "#64b1f1" },
                "stroke": { "type": "Color", "value": "#64b1f1" }
              }
            },

            "data": {
              "editor.polygonSeries": [
                {
                  "id": "MK",
                  "name": "North Macedonia",
                  "settings": {
                    "type": "Template",
                    "settings": { "fill": { "type": "Color", "value": "#ff7a00" } }
                  }
                },
                {
                  "id": "IN",
                  "name": "India",
                  "settings": {
                    "type": "Template",
                    "settings": { "fill": { "type": "Color", "value": "#ff7a00" } }
                  }
                },
                {
                  "id": "FR",
                  "name": "France",
                  "settings": {
                    "type": "Template",
                    "settings": { "fill": { "type": "Color", "value": "#ff7a00" } }
                  }
                },
                {
                  "id": "ES",
                  "name": "Spain",
                  "settings": {
                    "type": "Template",
                    "settings": { "fill": { "type": "Color", "value": "#ff7a00" } }
                  }
                },
                {
                  "id": "GB",
                  "name": "United Kingdom",
                  "settings": {
                    "type": "Template",
                    "settings": { "fill": { "type": "Color", "value": "#ff7a00" } }
                  }
                }
              ]
            }
          });
        }
      }, 200);
    };

    return () => document.body.removeChild(script);
  }, []);

  return (
    <div
      id="ivexia-map"
      className="w-full h-[90vh] rounded-3xl shadow-2xl"
      style={{ overflow: "hidden" }}
    />
  );
}
