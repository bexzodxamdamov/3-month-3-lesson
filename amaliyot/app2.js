const speed_limit = 70;
const point_limit = 12;
const per_point = 5;

function checkSpeed(speed) {
  if (speed <= speed_limit) {
    console.log("speed is ok");
  } else {
    let point = Math.round((speed - speed_limit) / 5);
    if (point > point_limit) {
      console.log("point");
    } else {
      console.log(point);
    }
  }
}
checkSpeed(100);
