#!/usr/bin/env python3
"""Schreibt die <script>-Tags für topics/*.js in index.html (zwischen core.js und ui.js)."""
import glob,os,re
os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
files=sorted(os.path.basename(f) for f in glob.glob('topics/*.js'))
tags=''.join(f'<script src="topics/{f}"></script>\n' for f in files)
h=open('index.html',encoding='utf-8').read()
a=h.index('<script src="js/core.js"></script>\n')+len('<script src="js/core.js"></script>\n')
b=h.index('<script src="js/ui.js"></script>')
h=h[:a]+tags+h[b:]
open('index.html','w',encoding='utf-8').write(h)
print(len(files),'Themen')
