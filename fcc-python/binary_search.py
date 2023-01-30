import math

def binary_search(list, target) :
    max = len(list) - 1
    min = 0

    while min < max :
        mid = math.floor(max + min / 2)
        if target == list[mid] :
            return mid
        elif target > mid :
            min = mid + 1
        else :
            max = mid - 1
    return None   