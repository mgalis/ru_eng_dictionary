  var eng2rusmap = {
    "~": "�",
    "!": "!",    
    "@": "�",
    "#": "�",
    "$": "$",
    "%": "%",
    "^": "�",
    "&": "�",
    "*": "*",
    "(": "(",
    ")": ")",
    "_": "_",
    "+": "�",
    
    "`": "�",
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
    "=": "�",    
    
    "Q": "�",
    "W": "�",
    "E": "�",
    "R": "�",
    "T": "�",
    "Y": "�",
    "U": "�",
    "I": "�",
    "O": "�",
    "P": "�",
    "{": "�",
    "}": "�",
    "|": "�",
    
    "q": "�",
    "w": "�",
    "e": "�",
    "r": "�",
    "t": "�",
    "y": "�",
    "u": "�",
    "i": "�",
    "o": "�",
    "p": "�",
    "[": "�",
    "]": "�",
    "\\": "�",
    
    "A": "�",
    "S": "�",
    "D": "�",
    "F": "�",
    "G": "�",
    "H": "�",
    "J": "�",
    "K": "�",
    "L": "�",
    ":": ":",
    "\"": "\"",
    
    "a": "�",
    "s": "�",
    "d": "�",
    "f": "�",
    "g": "�",
    "h": "�",
    "j": "�",
    "k": "�",
    "l": "�",
    ";": ";",
    "'": "'",
    
    "Z": "�",
    "X": "�",
    "C": "�",
    "V": "�",
    "B": "�",
    "N": "�",
    "M": "�",    
    "<": "<",
    ">": ">",
    "?": "?",    
    
    "z": "�",
    "x": "�",
    "c": "�",
    "v": "�",
    "b": "�",
    "n": "�",
    "m": "�",    
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

