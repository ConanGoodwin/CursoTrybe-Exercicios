pp = [
    ([(2, 2), (1, 2), (2, 3), (1, 5), (4, 5), (4, 5), (6, 7)]),
    # ([(2, 2), (1, 2), (2, 3), (1, 5), (4, 5), (4, 5)], 1, 2),
    # ([(2, 2), (1, 2), (2, 3), (1, 5), (4, 5)], 3, 2),
    # ([(1, 1), (2, 2), (3, 3), (4, 4)], 1, 1),
    # ([(1, 2), (1, 3), (2, 3)], 2, 3),
]


def define_periodo(array, target_time):
    count_per_p = 0
    if not target_time and target_time != 0:
        return None

    for index in range(0, len(array)):
        print(array[index])
        if array[index][0] < 0 or array[index][1] > 7:
            return None
        if array[index][0] <= target_time <= array[index][1]:
            count_per_p += 1

    return count_per_p


print(define_periodo(pp, 5))
