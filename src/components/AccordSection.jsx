import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Globe from "react-globe.gl";

export default function AccordSection() {
  const globeRef = useRef();
  const [countries, setCountries] = useState([]);

  const GEOJSON_URL =
    "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";

  // Countries to highlight
  const highlightList = [
    "France","Spain","Germany","Italy","United Kingdom",
    "Portugal","Greece","Poland","Netherlands","Sweden",
    "Finland","Norway","Austria","Switzerland","Czech Republic",
    "Belgium","Denmark","Ireland","Hungary","Croatia","North Macedonia","India"
  ];

  const pins = [
    { lat: 19.07, lng: 72.87, size: 2, color: "red", name: "India" },
    { lat: 41.99, lng: 21.43, size: 1.6, color: "red", name: "North Macedonia" },
    { lat: 40.41, lng: -3.70, size: 1.6, color: "#FF7A00", name: "Spain" },
    { lat: 48.85, lng: 2.35, size: 1.6, color: "#19a6b5", name: "France" },
    { lat: 51.51, lng: -0.13, size: 1.6, color: "#19a6b5", name: "United Kingdom" }
  ];

  useEffect(() => {
    fetch(GEOJSON_URL)
      .then(res => res.json())
      .then(setCountries);

    if (!globeRef.current) return;
    const controls = globeRef.current.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.4;
    controls.enableZoom = false;
  }, []);

  // 3D pin
  const pinGeometry = new THREE.ConeGeometry(0.4, 1.2, 6);
  const createPinObject = (d) => {
    const material = new THREE.MeshLambertMaterial({ color: d.color || "red" });
    const mesh = new THREE.Mesh(pinGeometry, material);
    mesh.scale.setScalar(d.size);
    mesh.lookAt(new THREE.Vector3(0, 0, 0));
    return mesh;
  };

  return (
    <section className="bg-white py-20 md:py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
        {/* === Left Text === */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#222] leading-snug mb-5">
            An Accord for a <br />
            <span className="bg-gradient-to-r from-[#FF7A00] to-[#E2004F] bg-clip-text text-transparent">
              Healthier World
            </span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 max-w-lg mx-auto md:mx-0">
            Ivexia’s Accord for a Healthier World connects continents through
            science, innovation, and compassion — with an expanding footprint
            across Europe and Asia.
          </p>
          <button className="bg-gradient-to-r from-[#FF7A00] to-[#E2004F] text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition">
            Learn More About Our Accord
          </button>
        </div>

        {/* === Right Globe === */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
          <div className="relative w-full flex justify-center">
            {/* Responsive globe wrapper */}
            <div className="aspect-square mx-auto w-[95vw] sm:w-[80vw] md:w-[600px] lg:w-[750px] xl:w-[900px] flex justify-center">
              {/* <Globe
                ref={globeRef}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                backgroundColor="rgba(255,255,255,0)"
                polygonsData={countries.features}
                polygonCapColor={(d) =>
                  highlightList.includes(d.properties.name)
                    ? "rgba(226,0,79,0.5)" // filled color
                    : "rgba(255,255,255,0.05)"
                }
                polygonSideColor={() => "rgba(255,255,255,0.1)"}
                polygonStrokeColor={(d) =>
                  highlightList.includes(d.properties.name) ? "#E2004F" : "#aaaaaa"
                }
                polygonLabel={(d) => d.properties.name}
                objectsData={pins}
                objectLat="lat"
                objectLng="lng"
                objectAltitude={() => 0.1}
                objectThreeObject={createPinObject}
                atmosphereColor="#19a6b5"
                atmosphereAltitude={0.25}
                width={900}
                height={900}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
