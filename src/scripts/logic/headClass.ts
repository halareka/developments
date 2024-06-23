function setHeadClass(head: string, dir: string = "right"): void {
  const element = document.getElementById(head + dir);
  const elTongue = document.getElementById(head + dir + "Tongue");
  if (element && elTongue) {
    element.style.display = "block";
    elTongue.style.display = "block"
  }
}
function delHeadClass(head: string): void {
  let directionHead: string[] = ["top", "right", "down", "left","topTongue", "rightTongue", "downTongue", "leftTongue"];
  directionHead.forEach((el) => {
    const element = document.getElementById(head + el);
    if (element) {
      element.style.display = "none";
    }
  });
}
export { setHeadClass, delHeadClass };
