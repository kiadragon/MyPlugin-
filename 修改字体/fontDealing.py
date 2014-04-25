 # -*- coding: utf-8 -*

import re

Fontfile = open('font/font.txt', 'r')
font = Fontfile.read()
keyboradInput = ''
# keyboradInput = input("please tell me what you want to find:")
p = re.compile('\w*[a]\w*')
m = p.findall(font)
print(m)