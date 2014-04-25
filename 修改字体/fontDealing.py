 # -*- coding: utf-8 -*
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