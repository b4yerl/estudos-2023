"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearch = void 0;
function binarySearch(list, target) {
    let max = list.length - 1;
    let min = 0;
    while (min < max) {
        let mid = Math.floor(max + min / 2);
        if (list[mid] === target) {
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
exports.binarySearch = binarySearch;
