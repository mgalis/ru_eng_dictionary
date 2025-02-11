  var eng2rusmap = {
    "~": "Þ",
    "!": "!",    
    "@": "ú",
    "#": "Ú",
    "$": "$",
    "%": "%",
    "^": "¸",
    "&": "¨",
    "*": "*",
    "(": "(",
    ")": ")",
    "_": "_",
    "+": "Ü",
    
    "`": "þ",
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
    "=": "ü",    
    
    "Q": "ß",
    "W": "Â",
    "E": "Å",
    "R": "Ð",
    "T": "Ò",
    "Y": "Û",
    "U": "Ó",
    "I": "È",
    "O": "Î",
    "P": "Ï",
    "{": "Ø",
    "}": "Ù",
    "|": "Ý",
    
    "q": "ÿ",
    "w": "â",
    "e": "å",
    "r": "ð",
    "t": "ò",
    "y": "û",
    "u": "ó",
    "i": "è",
    "o": "î",
    "p": "ï",
    "[": "ø",
    "]": "ù",
    "\\": "ý",
    
    "A": "À",
    "S": "Ñ",
    "D": "Ä",
    "F": "Ô",
    "G": "Ã",
    "H": "×",
    "J": "É",
    "K": "Ê",
    "L": "Ë",
    ":": ":",
    "\"": "\"",
    
    "a": "à",
    "s": "ñ",
    "d": "ä",
    "f": "ô",
    "g": "ã",
    "h": "÷",
    "j": "é",
    "k": "ê",
    "l": "ë",
    ";": ";",
    "'": "'",
    
    "Z": "Ç",
    "X": "Õ",
    "C": "Ö",
    "V": "Æ",
    "B": "Á",
    "N": "Í",
    "M": "Ì",    
    "<": "<",
    ">": ">",
    "?": "?",    
    
    "z": "ç",
    "x": "õ",
    "c": "ö",
    "v": "æ",
    "b": "á",
    "n": "í",
    "m": "ì",    
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

