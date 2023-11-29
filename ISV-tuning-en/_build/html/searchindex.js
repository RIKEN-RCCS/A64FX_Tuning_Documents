Search.setIndex({"docnames": ["index", "section1/index", "section2/index", "section3/index", "section4/4p1", "section4/4p10", "section4/4p2", "section4/4p3", "section4/4p4", "section4/4p5", "section4/4p6", "section4/4p7", "section4/4p8", "section4/4p9", "section4/index", "section5/index", "table/table2", "table/table3", "table/table5", "table/table6", "table/table7", "table/table8"], "filenames": ["index.rst", "section1/index.rst", "section2/index.rst", "section3/index.rst", "section4/4p1.rst", "section4/4p10.rst", "section4/4p2.rst", "section4/4p3.rst", "section4/4p4.rst", "section4/4p5.rst", "section4/4p6.rst", "section4/4p7.rst", "section4/4p8.rst", "section4/4p9.rst", "section4/index.rst", "section5/index.rst", "table/table2.rst", "table/table3.rst", "table/table5.rst", "table/table6.rst", "table/table7.rst", "table/table8.rst"], "titles": ["Case Study: Performance Tuning of ISV Application", "<span class=\"section-number\">1. </span>Introduction", "<span class=\"section-number\">2. </span>Target performance and procedure of tuning", "<span class=\"section-number\">3. </span>Tuning details and results", "<span class=\"section-number\">4.1. </span>SIMDization of division operations and suppression of SIMDization for loops with small iteration counts", "<span class=\"section-number\">4.10. </span>Improving the memory placement of two-dimensional arrays for sequential access", "<span class=\"section-number\">4.2. </span>Reducing load and store operations of data by loop unrolling", "<span class=\"section-number\">4.3. </span>SIMDization by loop collapse", "<span class=\"section-number\">4.4. </span>Changing the access direction of arrays", "<span class=\"section-number\">4.5. </span>SIMDization by SVE ACLE", "<span class=\"section-number\">4.6. </span>Built-in prefetch", "<span class=\"section-number\">4.7. </span>Moving division operations to outside of the loop, and applying SIMDization to the division operations", "<span class=\"section-number\">4.8. </span>Moving invariant expressions to outside of the loop", "<span class=\"section-number\">4.9. </span>Loop unrolling manually instead of OCLs", "<span class=\"section-number\">4. </span>Tuning items", "<span class=\"section-number\">5. </span>Summary", "&lt;no title&gt;", "&lt;no title&gt;", "&lt;no title&gt;", "&lt;no title&gt;", "&lt;no title&gt;", "&lt;no title&gt;"], "terms": {"introduct": 0, "purpos": [0, 13], "thi": [0, 2, 3, 14, 15, 18, 19, 20, 21], "document": [0, 2, 3, 15], "softwar": [0, 15], "target": [0, 3, 15, 17], "procedur": [0, 3], "condit": [0, 3], "detail": [0, 1, 14], "result": [0, 2, 4, 5, 6, 7, 9, 10, 11, 15], "evalu": [0, 2], "cost": [0, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21], "each": [0, 2, 5, 6, 7, 8, 9, 14, 15], "function": [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17], "item": [0, 2, 5, 13], "simdiz": [0, 3, 14, 17], "divis": [0, 3, 12, 14, 17], "oper": [0, 1, 3, 5, 8, 12, 13, 14, 17], "suppress": [0, 3, 7, 14, 17], "loop": [0, 2, 3, 5, 8, 9, 10, 14, 15, 17], "small": [0, 3, 14, 17], "iter": [0, 2, 3, 6, 7, 9, 13, 14, 17], "count": [0, 3, 6, 7, 8, 9, 13, 14, 17], "analysi": [0, 1, 2, 3, 15], "reduc": [0, 2, 3, 4, 7, 8, 9, 10, 11, 12, 14, 17], "load": [0, 3, 8, 10, 14, 15, 17], "store": [0, 3, 4, 14, 17], "data": [0, 3, 14, 17], "unrol": [0, 3, 4, 7, 12, 14, 17], "collaps": [0, 3, 9, 14, 17], "chang": [0, 2, 3, 4, 14, 17], "access": [0, 3, 10, 14, 17], "direct": [0, 3, 14, 17], "arrai": [0, 3, 4, 6, 10, 14, 17], "sve": [0, 3, 14, 17], "acl": [0, 3, 14, 17], "built": [0, 3, 9, 14, 17], "prefetch": [0, 3, 8, 14, 17], "move": [0, 3, 4, 14, 17], "outsid": [0, 3, 4, 13, 14, 17], "appli": [0, 3, 5, 6, 9, 14, 17], "invari": [0, 3, 14, 17], "express": [0, 3, 14, 17], "manual": [0, 1, 3, 7, 14, 17], "instead": [0, 3, 14, 17], "ocl": [0, 2, 3, 4, 6, 7, 14, 17], "improv": [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21], "memori": [0, 2, 3, 6, 10, 14, 15, 17], "placement": [0, 3, 14, 17], "two": [0, 1, 2, 3, 7, 9, 13, 14, 17], "dimension": [0, 3, 14, 17], "sequenti": [0, 3, 10, 14, 17], "summari": [0, 3], "riken": 1, "ha": [1, 2, 3, 8, 9, 10, 15, 17], "been": [1, 3, 5, 6], "supercomput": 1, "fugaku": [1, 2], "sinc": [1, 2], "march": 1, "2021": 1, "As": [1, 2, 3, 5, 8, 9, 10, 12, 13, 15], "part": [1, 3, 5], "its": [1, 2], "work": [1, 2, 3, 6], "support": [1, 3, 10], "user": [1, 2, 3], "posit": [1, 3], "develop": [1, 2, 3], "from": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15], "variou": [1, 3, 5, 15], "perspect": 1, "effect": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "us": [1, 2, 3, 5, 6, 9, 10, 11, 15, 17], "an": [1, 3, 4, 5, 10, 16], "import": [1, 3], "mission": 1, "provid": 1, "wide": 1, "rang": 1, "e": 1, "g": 1, "": [1, 2, 3], "guid": [1, 2, 3], "program": [1, 2, 3, 9], "languag": [1, 9], "tool": 1, "perform": [1, 15, 18, 19, 20, 21], "enabl": 1, "them": [1, 3], "easili": 1, "start": [1, 2], "advanc": [1, 2, 3, 15], "technologi": 1, "depend": [1, 2, 8, 9, 10, 11, 12, 13], "level": 1, "profici": 1, "case": [1, 2, 6, 15], "commerci": [1, 15], "which": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 17], "i": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15], "releas": 1, "independ": 1, "vendor": 1, "isv": [1, 3], "introduc": [1, 15], "wa": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15], "conduct": 1, "fujitsu": [1, 2, 15], "limit": [1, 3, 16, 17], "a64fx": [1, 2, 3], "processor": [1, 3], "also": [1, 2, 3, 5, 8, 9, 10, 11, 15], "cooper": 1, "who": [1, 3], "includ": [1, 3, 4, 15], "describ": [1, 2, 3, 5, 10, 14], "ar": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "typic": [1, 2], "more": [1, 2, 3], "featur": [1, 6], "rich": 1, "than": [1, 2, 3, 5, 8, 15, 17], "open": 1, "sourc": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 17], "code": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 17], "larger": [1, 2, 3, 5], "complex": [1, 2, 15], "therefor": [1, 2, 3, 5, 8, 9, 10, 11, 12, 13, 15], "believ": 1, "want": 1, "practic": 1, "being": 1, "larg": [1, 2, 15], "excerpt": 1, "kei": [1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "point": [1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "The": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "discuss": [1, 3, 6, 10], "hereaft": 1, "refer": [1, 2, 3], "cfd": [1, 15], "gener": 1, "thermal": 1, "fluid": 1, "simul": [1, 2], "industri": 1, "aerodynam": [1, 2], "around": [1, 2], "car": 1, "bodi": 1, "electron": 1, "equip": 1, "mani": [1, 3, 5, 11, 15], "model": [1, 2, 3, 5, 6, 7, 9, 13, 17], "like": 1, "most": [1, 2, 3, 4, 15], "structur": [1, 15], "In": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15], "recent": 1, "year": 1, "increas": [1, 3, 5, 8, 15], "trend": 1, "high": [1, 2], "accuraci": 1, "scale": [1, 2], "definit": 1, "analys": 1, "shape": 1, "For": [1, 10], "well": [1, 8, 9], "demand": 1, "hundr": [1, 3], "thousand": [1, 3], "parallel": [1, 2, 3, 17], "comput": [1, 2, 3, 8], "resourc": 1, "can": 1, "util": 1, "soon": 1, "expect": [1, 2, 3, 5, 6, 9], "look": 1, "have": [1, 5, 8, 10], "massiv": 1, "To": [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "necessari": 1, "1": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 20], "execut": [1, 2, 3, 5, 8, 9, 10, 11, 12, 13, 15, 17], "realist": 1, "time": [1, 2, 3, 5, 8, 9, 10, 12, 13, 15, 16], "2": [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 15, 16, 17, 20], "achiev": [1, 2, 3, 6, 15], "goal": 1, "collabor": 1, "note": [1, 2, 3, 5, 11], "variabl": [1, 8, 12], "name": [1, 3], "prohibit": 1, "becaus": [1, 4], "intellectu": 1, "properti": 1, "right": 1, "mai": [1, 5, 8, 10], "inform": [1, 2, 3, 4, 6, 7, 11], "modifi": 1, "simplifi": 1, "chapter": [2, 3, 14], "applic": [2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21], "follow": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "initi": [2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 15], "version": [2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 15], "about": [2, 3, 8, 9, 10, 12, 13, 15], "longer": 2, "x86": 2, "same": [2, 3, 6, 9, 10], "better": 2, "decid": 2, "half": [2, 3], "compil": [2, 3, 4, 6, 9, 10, 12, 13, 15, 17], "tcsd": [2, 6], "26": [2, 3, 16, 17], "option": [2, 3, 17], "ofast": 2, "flto": 2, "ffj": 2, "nclang": 2, "koptmsg": 2, "funsaf": 2, "math": 2, "optim": [2, 3, 6, 9, 13, 15, 17], "wno": 2, "comment": 2, "nlst": 2, "t": [2, 11], "mllvm": 2, "after": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 18, 19, 20, 21], "thread": [2, 3, 17], "kopenmp": 2, "ad": [2, 4, 6, 15], "abov": [2, 8, 9, 10, 12, 13], "system": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 17], "primehpc": 2, "fx1000": 2, "architectur": 2, "middlewar": 2, "number": [2, 3, 5, 6, 8, 9, 11, 17], "480": 2, "mpi": [2, 3, 11, 15, 16, 17], "process": [2, 3, 8, 9, 10, 11, 12, 13, 15, 16, 17], "cpu": [2, 3], "core": [2, 3], "10": [2, 3, 13, 16, 17], "node": [2, 3, 8], "even": [2, 6], "per": 2, "unless": 2, "otherwis": 2, "specifi": [2, 3, 4, 6, 7, 9, 13, 17], "transon": 2, "flow": 2, "aircraft": 2, "14": [2, 3, 17], "million": [2, 3, 5], "cell": 2, "steadi": 2, "state": 2, "calcul": [2, 3, 4, 17], "requir": [2, 3], "until": 2, "But": 2, "fix": 2, "100": [2, 3, 16], "select": [2, 4, 6, 7, 8, 9, 10, 11, 12, 13], "eas": 2, "It": [2, 3, 9], "might": 2, "smaller": [2, 3], "would": 2, "entir": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21], "befor": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 18, 19, 20, 21], "measur": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17], "order": [2, 3, 4, 7, 8, 10, 11, 12], "comparison": [2, 3], "region": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17], "defin": [2, 3], "algorithm": 2, "bulk": 2, "make": [2, 3, 7, 10, 11, 16, 17], "easier": [2, 3], "section": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21], "3": [2, 3, 6, 7, 9, 14, 16, 17, 19], "too": [2, 4, 15], "difficult": 2, "fapp": [2, 8, 9, 10, 12, 13, 15], "profil": [2, 15], "fipp": [2, 3, 4, 6, 7, 11, 15], "instant": [2, 15], "focu": [2, 3], "step": 2, "usag": [2, 6], "studio": 2, "portal": [2, 3], "4": [2, 3, 4, 6, 7, 9, 10, 12, 15, 16, 17, 18], "repeat": 2, "cover": 2, "seri": [2, 6], "prioriti": 2, "determin": [2, 15], "base": [2, 3, 15, 17], "output": [2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13], "check": 2, "contain": 2, "potenti": 2, "were": [2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 15], "On": [2, 8, 12, 13], "other": [2, 3, 5, 8, 9, 10, 12, 13, 15, 17], "hand": [2, 8, 12, 13], "some": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 17], "low": [2, 3, 5], "analyz": [2, 15], "messag": [2, 9, 15], "plan": [2, 15], "abandon": 2, "view": 2, "prospect": 2, "accord": [2, 3], "compar": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15], "narrow": [2, 15], "cycl": [2, 8, 9, 10, 12, 13], "account": [2, 3, 8, 9, 10, 12, 13], "repres": [2, 3, 4, 5, 6, 7, 11], "breakdown": 2, "graph": [2, 3, 8, 9, 10, 12, 13], "12": [2, 3, 8, 17], "alloc": [2, 3, 5, 8, 15, 17], "onto": 2, "one": [2, 3, 5, 7, 8, 10], "cmg": [2, 8], "group": 2, "shown": [2, 10], "wai": 2, "44": [2, 3, 17], "13": [2, 3, 17], "divid": [3, 7], "log": 3, "file": 3, "when": [3, 5, 6, 9], "both": [3, 9, 10], "must": [3, 4], "compos": [3, 7], "three": 3, "portion": 3, "solver": 3, "remnant": 3, "minu": 3, "further": 3, "four": [3, 8, 14], "solv": [3, 4, 5, 6, 9, 12, 13, 16, 17], "equat": [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 17], "tabl": [3, 4, 5, 6, 7, 11], "show": [3, 8], "seen": [3, 5, 7, 8, 9, 10, 12, 13], "largest": 3, "43": [3, 17], "proport": [3, 15], "sampl": [3, 14], "1645": 3, "top": [3, 15], "ten": [3, 14], "percentag": [3, 16], "relat": [3, 5, 16], "total": 3, "cumul": [3, 16], "first": [3, 15], "0": [3, 8, 9, 11, 12, 13, 15, 16, 21], "10145395": [3, 16], "00": [3, 16], "calc_function_1": [3, 5, 6, 16, 17, 19], "2359630": [3, 16], "23": [3, 6, 16, 17], "function_of_mpi_1": [3, 16], "wait": [3, 8, 10, 13, 16, 17], "commun": [3, 16], "1818309": [3, 16], "17": [3, 8, 16, 17], "92": [3, 16], "41": [3, 5, 16, 17], "18": [3, 16, 17], "function_of_mpi_2": [3, 16], "1090237": [3, 16], "75": [3, 16], "51": [3, 16], "93": [3, 16], "make_function_1": [3, 16, 17], "359086": [3, 16], "54": [3, 16], "55": [3, 9, 16], "47": [3, 16], "5": [3, 4, 6, 7, 8, 9, 13, 16, 17, 19], "make_function_2": [3, 10, 16, 17], "323755": [3, 16], "19": [3, 16, 17], "58": [3, 15, 16], "66": [3, 16], "6": [3, 4, 5, 9, 10, 16, 17], "limiter_function_1": [3, 16, 17], "290204": [3, 16], "86": [3, 16], "61": [3, 16], "52": [3, 15, 16], "7": [3, 5, 10, 11, 16, 17, 21], "calc_function_2": [3, 12, 16, 17], "187961": [3, 16], "85": [3, 15, 16], "63": [3, 16], "37": [3, 16, 17], "8": [3, 5, 6, 8, 10, 16, 17, 19], "make_function_3": [3, 10, 16, 17], "176418": [3, 16], "74": [3, 16], "65": [3, 16], "11": [3, 16, 17], "9": [3, 12, 15, 16, 17], "calc_function_3": [3, 4, 16, 17, 18], "165032": [3, 16], "make_function_4": [3, 16, 17], "156562": [3, 16], "68": [3, 16], "28": [3, 16, 17], "sum": [3, 4, 15], "50": 3, "highest": [3, 12, 13], "howev": [3, 4, 6, 9, 13], "thei": 3, "henc": [3, 8], "possibl": [3, 5, 12], "directli": [3, 9], "fourth": [3, 13], "tenth": 3, "onli": [3, 4, 17], "mean": [3, 8, 12, 13], "less": [3, 15], "few": [3, 15], "percent": [3, 15], "all": 3, "assign": [3, 5], "outlin": [3, 17], "method": [3, 9, 17], "control": 3, "line": [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "classif": [3, 17], "post": 3, "site": 3, "where": 3, "reduct": [3, 9, 17], "instruct": [3, 5, 8, 9, 11, 13, 17], "hide": [3, 17], "latenc": [3, 17], "addit": [3, 5, 17], "schedul": [3, 8, 13, 17], "faddv": [3, 17], "add": [3, 17], "extra": [3, 4, 17], "reorder": [3, 17], "off": [3, 17], "diagon": [3, 17], "element": [3, 5, 17], "matrix": [3, 17], "make_function_5": [3, 17], "make_function_6": [3, 7, 17, 20], "facilit": [3, 7, 11, 17], "unswitch": [3, 17], "paramet": [3, 17], "domain": [3, 17], "decomposit": [3, 17], "input": [3, 17], "set": [3, 17], "balanc": [3, 15, 17], "between": [3, 8, 15, 17], "15": [3, 10, 17], "remov": [3, 17], "type": [3, 9, 13, 15, 17], "convers": [3, 17], "16": [3, 5, 17], "fission": [3, 17], "inlin": [3, 17], "expans": [3, 17], "make_function_9": [3, 17], "calc_function_5": [3, 17], "othsolv_function_3": [3, 8, 17], "20": [3, 6, 17, 19], "movement": [3, 17], "make_function_8": [3, 17], "21": [3, 17], "22": [3, 13, 17], "regist": [3, 6, 17], "24": [3, 12, 13, 17], "calc_function_4": [3, 9, 13, 17], "25": [3, 7, 17], "make_function_7": [3, 10, 11, 17, 21], "static": [3, 17], "27": [3, 8, 10, 17], "clone": [3, 6, 17], "make_function_12": [3, 17], "29": [3, 17], "othsolv_function_1": [3, 17], "othsolv_function_2": [3, 17], "othsolv_function_5": [3, 17], "30": [3, 4, 15, 17, 18], "function_1": [3, 17], "function_2": [3, 17], "31": [3, 6, 7, 17, 20], "32": [3, 17], "othsolv_function_4": [3, 17], "33": [3, 17], "34": [3, 17], "35": [3, 17], "36": [3, 17], "interleav": [3, 17], "38": [3, 12, 13, 17], "39": [3, 17], "40": [3, 10, 17], "allocate_arrai": [3, 17], "clear_arrai": [3, 17], "deallocate_arrai": [3, 17], "reallocate_arrai": [3, 17], "allocate_array_2": [3, 17], "deallocate_array_2": [3, 17], "reallocate_array_2": [3, 17], "42": [3, 5, 17], "forti": [3, 14], "local": 3, "These": [3, 10], "without": 3, "signific": 3, "take": 3, "advantag": 3, "characterist": 3, "specif": 3, "arm": [3, 9], "call": [3, 5, 11], "dealloc": [3, 5], "while": [3, 5, 6], "rate": [3, 4, 6, 7, 9, 11, 15, 18, 19, 20, 21], "word": [3, 9, 10, 15], "thu": 3, "figur": [3, 10], "horizont": 3, "axi": 3, "n": [3, 6], "th": 3, "list": 3, "vertic": 3, "just": 3, "height": 3, "bar": 3, "indic": [3, 5, 6, 8, 9, 10, 12, 13], "exampl": [3, 5, 10], "8th": 3, "1st": 3, "13th": 3, "eight": 3, "especi": [3, 8, 9, 10, 13], "steep": 3, "14th": 3, "imbal": 3, "suggest": 3, "given": 3, "addition": [3, 4, 15], "15th": 3, "44th": 3, "lower": 3, "those": [3, 9, 10], "focus": 3, "contribut": 3, "significantli": [3, 8, 9, 10], "similarli": [3, 8, 12, 13], "led": 3, "202": [3, 15], "second": [3, 5, 8, 9, 10, 12, 13, 15], "faster": 3, "except": 3, "implement": 3, "lead": 3, "impact": 3, "get": 3, "amount": [3, 12], "did": [3, 11, 12], "crucial": 3, "effici": [3, 10], "cal_function_1": 3, "do": 3, "factor": 3, "inhibit": 3, "conflict": 3, "easi": 3, "enough": 3, "800": 3, "carri": 3, "out": 3, "over": 3, "4000": 3, "hybrid": 3, "openmp": 3, "complet": 3, "up": [3, 5], "220": 3, "000": 3, "speed": 3, "observ": 3, "200": 3, "much": 3, "nest": [4, 7, 8, 9, 10, 11, 12, 13], "inner": 4, "due": [4, 9], "outer": [4, 11], "multipl": 4, "new": 4, "so": [4, 5, 8, 15], "could": [4, 5, 13], "a_inv": 4, "whose": [4, 7, 15], "size": 4, "x": [4, 10], "anoth": [4, 13, 15], "A": [4, 6, 7, 9, 11, 13, 18, 19, 20, 21], "b": [4, 6, 7, 8, 9, 11, 13, 18, 19, 20, 21], "5975125": [4, 18], "5889171": [4, 6, 18, 19], "164184": [4, 18], "114805": [4, 18], "dimens": 5, "random": 5, "address": 5, "map": [5, 10], "see": 5, "imag": 5, "made": 5, "manipul": 5, "singl": [5, 9], "precis": 5, "aim": [5, 11], "simd": 5, "correspond": 5, "affect": 5, "73": 5, "far": 5, "emploi": 5, "remark": 5, "particular": 5, "had": [5, 6, 11], "automat": [6, 13], "constant": [6, 7, 9, 13], "By": 6, "valu": 6, "statement": [6, 13], "insert": [6, 10, 13], "need": [6, 15], "With": 6, "later": [6, 10], "pragma": 6, "clang": 6, "mode": 6, "fj": 6, "var": 6, "avail": 6, "5683484": [6, 19], "1272637": [6, 19], "1008226": [6, 19], "respect": 7, "latter": 7, "j": 7, "1577140": [7, 20], "1544039": [7, 20], "113984": [7, 20], "78416": [7, 20], "counter": [8, 11, 12], "decreas": 8, "m": 8, "differ": 8, "bi": 8, "cu": 8, "cd": 8, "cach": [8, 10], "miss": [8, 10], "occur": [8, 10], "frequent": [8, 10], "down": [8, 15], "increment": 8, "longest": [8, 9, 10, 12, 13], "97": 8, "71": 8, "integ": [8, 10], "l1d": 8, "fetch": 8, "hardwar": 8, "final": 8, "float": [8, 10, 13], "pattern": [9, 13], "attempt": [9, 13], "meant": 9, "despit": 9, "c": [9, 10], "extens": [9, 10], "199": 9, "among": [9, 10], "45": 9, "commit": 9, "caller": 10, "l2": 10, "event": 10, "non": 10, "gnu": 10, "441": 10, "couldn": 11, "quotient": [11, 12], "mk_ssw": 11, "therebi": 11, "1496964": [11, 21], "1487018": [11, 21], "135824": [11, 21], "443": [11, 21], "96": [11, 21], "768": 11, "successfulli": 12, "388": 12, "48": 12, "392": [12, 13], "alreadi": 13, "412": 13, "01": 13, "thing": 14, "tune": [15, 17, 18, 19, 20, 21], "Then": 15, "dure": 15, "difficulti": 15, "obtain": 15, "fact": 15, "effort": 15, "forc": 15, "review": 15, "workplan": 15, "staff": 15, "speedup": 15}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"case": 0, "studi": 0, "perform": [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "tune": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], "isv": 0, "applic": [0, 1, 3], "index": 0, "introduct": 1, "purpos": 1, "thi": [1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "document": 1, "softwar": 1, "target": [2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "procedur": 2, "condit": 2, "detail": 3, "result": 3, "evalu": [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "cost": 3, "each": 3, "function": 3, "item": [3, 14], "column": 3, "For": 3, "larg": 3, "scale": 3, "simul": 3, "fugaku": 3, "simdiz": [4, 7, 9, 11], "divis": [4, 11], "oper": [4, 6, 11], "suppress": 4, "loop": [4, 6, 7, 11, 12, 13], "small": 4, "iter": 4, "count": 4, "analysi": [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "improv": 5, "memori": 5, "placement": 5, "two": 5, "dimension": 5, "arrai": [5, 8], "sequenti": 5, "access": [5, 8], "reduc": 6, "load": 6, "store": 6, "data": 6, "unrol": [6, 13], "collaps": 7, "chang": 8, "direct": 8, "sve": 9, "acl": 9, "built": 10, "prefetch": 10, "move": [11, 12], "outsid": [11, 12], "appli": 11, "invari": 12, "express": 12, "manual": 13, "instead": 13, "ocl": 13, "summari": 15}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 60}, "alltitles": {"Case Study: Performance Tuning of ISV Application": [[0, "case-study-performance-tuning-of-isv-application"]], "Index": [[0, null]], "Introduction": [[1, "introduction"]], "Purpose of this document": [[1, "purpose-of-this-document"]], "Application software to be tuned": [[1, "application-software-to-be-tuned"]], "Target performance and procedure of tuning": [[2, "target-performance-and-procedure-of-tuning"]], "Target performance and conditions": [[2, "target-performance-and-conditions"]], "Procedure of tuning": [[2, "procedure-of-tuning"]], "Tuning details and results": [[3, "tuning-details-and-results"]], "Evaluation of the performance": [[3, "evaluation-of-the-performance"], [4, "evaluation-of-the-performance"], [5, "evaluation-of-the-performance"], [6, "evaluation-of-the-performance"], [7, "evaluation-of-the-performance"], [8, "evaluation-of-the-performance"], [9, "evaluation-of-the-performance"], [10, "evaluation-of-the-performance"], [11, "evaluation-of-the-performance"], [12, "evaluation-of-the-performance"], [13, "evaluation-of-the-performance"]], "Cost of each function": [[3, "cost-of-each-function"]], "Tuning of the Application": [[3, "tuning-of-the-application"]], "Tuning items": [[3, "tuning-items"], [14, "tuning-items"]], "Tuning results": [[3, "tuning-results"]], "Column: For large-scale simulations at Fugaku": [[3, null]], "SIMDization of division operations and suppression of SIMDization for loops with small iteration counts": [[4, "simdization-of-division-operations-and-suppression-of-simdization-for-loops-with-small-iteration-counts"]], "Target for this tuning": [[4, "target-for-this-tuning"], [5, "target-for-this-tuning"], [6, "target-for-this-tuning"], [7, "target-for-this-tuning"], [8, "target-for-this-tuning"], [9, "target-for-this-tuning"], [10, "target-for-this-tuning"], [11, "target-for-this-tuning"], [12, "target-for-this-tuning"], [13, "target-for-this-tuning"]], "Analysis": [[4, "analysis"], [5, "analysis"], [6, "analysis"], [7, "analysis"], [8, "analysis"], [9, "analysis"], [10, "analysis"], [11, "analysis"], [12, "analysis"], [13, "analysis"]], "Tuning": [[4, "tuning"], [5, "tuning"], [6, "tuning"], [7, "tuning"], [8, "tuning"], [9, "tuning"], [10, "tuning"], [11, "tuning"], [12, "tuning"], [13, "tuning"]], "Improving the memory placement of two-dimensional arrays for sequential access": [[5, "improving-the-memory-placement-of-two-dimensional-arrays-for-sequential-access"]], "Reducing load and store operations of data by loop unrolling": [[6, "reducing-load-and-store-operations-of-data-by-loop-unrolling"]], "SIMDization by loop collapse": [[7, "simdization-by-loop-collapse"]], "Changing the access direction of arrays": [[8, "changing-the-access-direction-of-arrays"]], "SIMDization by SVE ACLE": [[9, "simdization-by-sve-acle"]], "Built-in prefetch": [[10, "built-in-prefetch"]], "Moving division operations to outside of the loop, and applying SIMDization to the division operations": [[11, "moving-division-operations-to-outside-of-the-loop-and-applying-simdization-to-the-division-operations"]], "Moving invariant expressions to outside of the loop": [[12, "moving-invariant-expressions-to-outside-of-the-loop"]], "Loop unrolling manually instead of OCLs": [[13, "loop-unrolling-manually-instead-of-ocls"]], "Summary": [[15, "summary"]]}, "indexentries": {}})