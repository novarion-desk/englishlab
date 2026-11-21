#!/usr/bin/env python3
"""Baut js/dict.js aus tools/dict/*.txt  (Format: englisch|art|deutsch, Zeilen mit # sind Abschnitte)."""
import glob,os,json
os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
seen=set();rows=[]
for f in sorted(glob.glob('tools/dict/*.txt')):
    for ln in open(f,encoding='utf-8'):
        ln=ln.strip()
        if not ln or ln.startswith('#'):continue
        p=ln.split('|')
        if len(p)!=3:print('FEHLER',f,ln);continue
        k=(p[0].lower(),p[1],p[2].lower())
        if k in seen:continue
        seen.add(k);rows.append(p)
rows.sort(key=lambda r:(r[0].lower(),r[1]))
data='\n'.join('|'.join(r) for r in rows)
js='/* Wörterbuch (Englisch – Deutsch), wird beim ersten Öffnen geladen. Quelle: tools/dict/*.txt, gebaut mit tools/build_dict.py */\nconst DICT_DATA='+json.dumps(data,ensure_ascii=False)+';\n'
open('js/dict.js','w',encoding='utf-8').write(js)
print(len(rows),'Einträge,',len(js)//1024,'KB')
