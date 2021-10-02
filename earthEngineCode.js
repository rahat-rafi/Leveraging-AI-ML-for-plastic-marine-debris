var data = ee.ImageCollection('NASA/OCEANDATA/MODIS-Aqua/L3SMI')
                  .filterDate('2021-04-15', '2021-09-15');
var remoteSensingReflectance =
    data.select(['Rrs_645', 'Rrs_555', 'Rrs_443']);
var remoteSensingReflectanceVis = {
  min: 0.0,
  max: 0.011,
};
Map.setCenter(-52.12, -46.13, 4);
Map.addLayer(
    remoteSensingReflectance, remoteSensingReflectanceVis,
    'Remote Sensing Reflectance');
