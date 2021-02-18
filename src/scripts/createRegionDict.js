// Given geoJson with features (here assume regions, i.e. polygons/multipolygons) each with properties regionID and name
// alongside some additional properties for the purpose of the app
// Generate a js object with keys as the regionID and value as object of the properties of the regions
export default function createRegionDict(geoJson) {
    let retval = {};
    geoJson.features.forEach(region => {
        retval[region.properties.regionID] = {
            name: region.properties.name,
            color: null, // expects a hex string, or if null takes the default fill color as specified in theme
            label: null, // region has no label by default
        };
    });
    return retval;
}