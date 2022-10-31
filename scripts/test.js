//privKey = new ByteString("MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCorn8ZDOoGi9Lbnu8AxwR4jAchi8Rg+JY8TGJ+2WkrP7Do7DzDx/Zbg0oc1DkFGng2T7aaBQo8kYA2dpaSrEwNqfThDWpVXCSkLOsnUc79yDlu1jMi8hxgMv1VmmlkLe/gDWGk/mTnAVXVGFxy00lDf1KXMe7SSfrjBRIXAawJeMQEE8/BhchJwbJvneUOxhoClDE+q4xXFtEisg+FVfUDhPLRzPyiLoXQ+Dj/h2yS4ARzfeXkj78IrBG8t/4SzHjnUPXFnEIs8QWqDuf0EUoKACuNbHZYYRpN/LzvG+vwxR+mc/w112Re64s3XYYiksMPp5l6BJbJwe10B9I6Q4grAgMBAAECggEAEQf1Szkzk8+gTY5hgUmW2PkCa0+qV0QiHxpzQ21+IeC/YvUfOYFCDYFXBUwkKbC/fHRV8n0ZyH3EXTth/pMo5qRHVkW9e7re9DiY0ZJ//L2vltJHvXqGhOwBChiaFYRR2ORg/IC2/V/0I5zfELTmi8saMqvW+iKAE1XaurnvfdEquRf5DJVdP8SvCZn9vQUNZO6+khRg/xga3LI7MSoG1SEV1pvIhDzLvCnT3R6x0rZQEa50/hXcI+eY0EaJRTPzXl0eCcs5pXIia6pjM6JSpsRpFpMrzjngvhyUkXk/ZIBTZnRIXQb0lSVPSpS6b5nY6pR3r0gP43KtlVrUaeQ8gQKBgQDTpJH/MuvcQh9v05+y+3IuJBIboofxXG0/Ej6PLqkGCAh8b4q2OCfWJk+hANyPrC7jeCIGsg2ar1d9KQzRp6hu8VA5OBlV41G6/zyHT1uTZyTmS120cB+W1tfGpouncFwTzyjfmWY5EjZH1DqMJNk4xbeskm0gHes9pDjNQddPQQKBgQDMCOVanSHNMK9EVtshhDpo6Py+zONhRtXoseS+/4qKMYlsm4g38aerQfwyrB+0G6adNcH7ks8fcdSIgtNjXasxht8Z1WJKsxhGYXAJhETPZKS5yZx1LFIcq9ND0ASlnmeUdSdVC5S9HJWFoC+WlpwUFGqiXLXxfJQQfgthy1NoawKBgD3zvojlbwValbk2SVkrIZFAHczZFtIgLBp6TLW9At0xHMrQG9qbNY4KSOToS6gCzvbnA47SMAlHqmSIz6fPXA6dtM4LDd+GWzZR4HX7VOMhHjwLc7KN37FX0nHj7p1k1o815NEPJk0ud5UvGrRLVQq5Vbq+YhM0rtesarQqwcwBAoGBAJzSaZaQF57iwJPCPoMwYsSn7zunt0zZaSiFMtArEYzOLlYv5S86qijTeshny6ZfalyDKSn32QLONxEFnPxOznous+PjQr0vkoTl93sZEtpk/Mdf0sWs3x/yYVtJ04iIjAxrT2PqltQT2EjwqiMQd75nQt6wa5fErPlQJ+dupBkpAoGBAKjVek9RsPxkAU65aWjECogeKXzlrcnmWrlcEadXac2misTDeqFKLc10SFbnSUHFZuIkeWY7wSSmeBoovvUic/40vugX+2Pl/GpOhMIWmwWv0Qtib+4+6q+v28cFa+5CQIIIGcRkHmoJah0bFfg0Tvgil/NZW8epzFSA97D9vLd2", BASE64);
print(privKey);
card=new Card(_scsh3.reader);
print(card);

resp=card.sendApdu(0x00,0xA4,0x04,0x00,new ByteString("aabbccddee",HEX),0x7F);
print("Select: "+card.SW.toString(16)+";"+resp);

//resp=card.sendApdu(0x80,0x21,0,0,privKey,0);
//print(card.SW.toString(16)+";"+resp);
resp=card.sendApdu(0x80,0x22,0,0,0);
print(card.SW.toString(16)+";"+resp);
resp=card.sendApdu(0x80,0x23,0,0,0);
print(card.SW.toString(16)+";"+resp);
resp=card.sendApdu(0x80,0x24,0,0,0);
print(card.SW.toString(16)+";"+resp);

card.close();
