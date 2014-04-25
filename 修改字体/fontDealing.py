 # -*- coding: utf-8 -*

import re

Fontfile = open('font/font.txt', 'r')
font = Fontfile.read()
print "Please input letter you want to match"
p = re.compile('[c]+')
m = p.findall(font)
print m