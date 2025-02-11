  var eng2rusmap = {
    "~": "Ю",
    "!": "!",    
    "@": "ъ",
    "#": "Ъ",
    "$": "$",
    "%": "%",
    "^": "ё",
    "&": "Ё",
    "*": "*",
    "(": "(",
    ")": ")",
    "_": "_",
    "+": "Ь",
    
    "`": "ю",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "0": "0",
    "-": "-",    
    "=": "ь",    
    
    "Q": "Я",
    "W": "В",
    "E": "Е",
    "R": "Р",
    "T": "Т",
    "Y": "Ы",
    "U": "У",
    "I": "И",
    "O": "О",
    "P": "П",
    "{": "Ш",
    "}": "Щ",
    "|": "Э",
    
    "q": "я",
    "w": "в",
    "e": "е",
    "r": "р",
    "t": "т",
    "y": "ы",
    "u": "у",
    "i": "и",
    "o": "о",
    "p": "п",
    "[": "ш",
    "]": "щ",
    "\\": "э",
    
    "A": "А",
    "S": "С",
    "D": "Д",
    "F": "Ф",
    "G": "Г",
    "H": "Ч",
    "J": "Й",
    "K": "К",
    "L": "Л",
    ":": ":",
    "\"": "\"",
    
    "a": "а",
    "s": "с",
    "d": "д",
    "f": "ф",
    "g": "г",
    "h": "ч",
    "j": "й",
    "k": "к",
    "l": "л",
    ";": ";",
    "'": "'",
    
    "Z": "З",
    "X": "Х",
    "C": "Ц",
    "V": "Ж",
    "B": "Б",
    "N": "Н",
    "M": "М",    
    "<": "<",
    ">": ">",
    "?": "?",    
    
    "z": "з",
    "x": "х",
    "c": "ц",
    "v": "ж",
    "b": "б",
    "n": "н",
    "m": "м",    
    ",": ",",
    ".": ".",
    "/": "/"
  };



function toRussianKey(event, textInputObj)
{

  if (event.ctrlKey || event.which == 0)
     return true;
      

  var englishKey;
  if(event.keyCode)
  {
    englishKey = event.keyCode;
  }
  else
  {
    englishKey = event.which;
  }

  if(englishKey)
  { 
     var englishChar = String.fromCharCode(englishKey);
     var russianChar = eng2rusmap[englishChar];

     if( russianChar )
     {
      if( textInputObj.setSelectionRange )
      {
       var oldSelectionStart = textInputObj.selectionStart;
       var oldSelectionEnd = textInputObj.selectionEnd;
       var newText = russianChar;

                          

       if (event.preventDefault)
          event.preventDefault();


       textInputObj.value =                                                   
               textInputObj.value.substring(0, oldSelectionStart) +          
               newText +                                                    
               textInputObj.value.substring(oldSelectionEnd);                
               
       textInputObj.setSelectionRange(oldSelectionStart + newText.length,     
                                    oldSelectionStart + newText.length);
       return false;
  
      }
      else
      {
        window.event.keyCode = russianChar.charCodeAt(0);
        if (window.event.preventDefault)
          window.event.preventDefault();
      }
     
     }

  }
  return true;
}

