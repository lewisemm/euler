from datetime import datetime
from decimal import Decimal, getcontext

def get_recurring(fraction):
    fraction = str(fraction)[2::]
    fraction_length = len(fraction)

    counter, offset = 0, 0
    copy1, copy2, index, length = '', '', 0, -1

    while counter < fraction_length:
        copy1 += fraction[counter]
        try:
            index = fraction.index(copy1, counter + 1)
            length = len(copy1)
            copy2 = fraction[index: index + length]
            if offset + length == index and length > 6:
                break
        except ValueError:
            if index + 1 >= fraction_length:
                return 'B'
            offset += 1
            copy1 = copy1[offset::]
        counter += 1
    return copy2

def problem26(limit):
    fraction, longest = None, {'number': 0, 'length': 0}
    recurring = None
    
    one = Decimal(1)
    for no in range(2, limit):
        getcontext().prec = no * 2
        fraction = one / Decimal(no)
        recurring = get_recurring(fraction)
        if longest['length'] >= len(recurring):
            continue
        longest['number'] = no
        longest['length'] = len(recurring)
    return longest

start_time = datetime.now()
number = problem26(1000)
endTime = datetime.now()
print('number: {}'.format(number))
runningTime = endTime - start_time
print('Running time (s): {}'.format(runningTime))
