import React from "react";
import usersData from "../data/UsersData";
import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";
import { MdTraffic } from "react-icons/md";
import worldMap from "@highcharts/map-collection/custom/world.topo.json";
import mapDataIE from "@highcharts/map-collection/countries/ie/ie-all.geo.json";

const options = {
    chart: {
        map: worldMap
      },
  mapNavigation: {
    enabled: true,
    buttonOptions: {
      alignTo: "spacingBox",
    },
  },
  colorAxis: {
    min: 0,
  },
  series: [{
    // Use the gb-all map with no data as a basemap
    name: 'Basemap',
    mapData: worldMap,
    borderColor: '#A0A0A0',
    nullColor: 'rgba(200, 200, 200, 0.3)',
    showInLegend: false
  }, {
    // Specify points using lat/lon
    type: 'mapbubble',
    name: 'Cities',
    color: '#4169E1',
    data: [],
  }]
}

const TrafficWidget = () => {
  return (
    <div className="traffic-widget-wrapper flex flex-col gap-5 bg-mainColor p-7">
      <div className="widget-info flex justify-center gap-5 text-blue-400 text-xl">
        <h1 className="text-white">127,157</h1>
        <h2>Total Traffic</h2>
      </div>
      <div className="">
        <HighchartsReact
          options={options}
          highcharts={Highcharts}
          constructorType={"mapChart"}
        />
      </div>
    </div>
  );
};

export default TrafficWidget;
