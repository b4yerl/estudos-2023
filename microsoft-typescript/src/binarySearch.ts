export function binarySearch (list: number[], target: number): number | null {
  let max: number = list.length - 1;
  let min: number = 0;

  while(min < max) {
    let mid: number = Math.floor(max + min / 2);

    if(list[mid] === target) {
      return mid;
    }
    else if (list[mid] < target) {
      min = mid + 1;
    }
    else {
      max = mid - 1;
    }
  }
  return null;
}
