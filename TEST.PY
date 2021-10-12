

def checkParen(p) :
    '''
    괄호 문자열 p의 쌍이 맞으면 "YES", 아니면  "NO"를 반환
    '''
    s = Stack()
    for c in p :
        if c == '(' :
            s.push(c)
        else :
            if s.empty() == 1:
               return "NO"
            s.pop()
    if s.empty() == 1 :
        return "YES"
    else:
        return "NO"
        

'''
함수 find_order를 구현하세요.
'''
 