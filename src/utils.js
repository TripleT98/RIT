export function getPlanetId(url){
  let planetId = url.split("/");
  return planetId[planetId.length - 2];
}
