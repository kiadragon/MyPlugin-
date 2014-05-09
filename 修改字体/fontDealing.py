 # -*- coding: utf-8 -*
<<<<<<< HEAD
import urllib
import re

url = "index.html"
conn = httplib.HTTPConnection(url)
print(conn)
# Fontfile = open('font/font.txt', 'r')
# font = Fontfile.read()
# keyboradInput = ''
# keyboradInput = input("please tell me what you want to find:")
# matchRule = re.compile('\w*[' + keyboradInput + ']\w*\ *\w*\ *\w*')
# listUnsorted = matchRule.findall(font)
# listSorted = list(set(listUnsorted))
# print(listSorted)
=======

import re

Fontfile = open('font/font.txt', 'r')
font = Fontfile.read()
keyboradInput = ''
# keyboradInput = input("please tell me what you want to find:")
p = re.compile('\w*[a]\w*')
m = p.findall(font)
print(m)
>>>>>>> 859a2640c375373b6cc5b413e3cf21054158dbda
