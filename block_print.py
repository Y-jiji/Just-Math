def is_chinese(uchar):
    return uchar >= u'/u4e00' and uchar<=u'/u9fa5'

def count_len(s):
    l = 0
    for x in s:
        if is_chinese(x): l += 2
        else: l += 1
    return l

def block_print(s):
    l = count_len(s)
    print('%' + '-'*80  + '%')
    print('%' + ' '*((80 - l)//2) + s + ' '*((80-l+1)//2) + '%')
    print('%' + '-'*80 + '%')

if __name__ == '__main__':
    import sys
    block_print(sys.argv[1])