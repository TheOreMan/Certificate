function sendInfo(bs,p1,p2) {
  pos=0;
  len=200;
  while (pos<bs.length) {
    if (pos+len>bs.length) len=bs.length-pos;
    b=bs.bytes(pos,len);
    print("Attempting to set part: "+b);
    ins=0x20;
    if (pos==0) ins=0x21;
    //print(ins);
    resp=card.sendApdu(0x80,ins,p1,p2,b,0x00);
    print("Result of setting that part: "+card.SW.toString(16)+";"+resp);
    pos+=len;
  }
}

//pk=new ByteString("MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCorn8ZDOoGi9Lbnu8AxwR4jAchi8Rg+JY8TGJ+2WkrP7Do7DzDx/Zbg0oc1DkFGng2T7aaBQo8kYA2dpaSrEwNqfThDWpVXCSkLOsnUc79yDlu1jMi8hxgMv1VmmlkLe/gDWGk/mTnAVXVGFxy00lDf1KXMe7SSfrjBRIXAawJeMQEE8/BhchJwbJvneUOxhoClDE+q4xXFtEisg+FVfUDhPLRzPyiLoXQ+Dj/h2yS4ARzfeXkj78IrBG8t/4SzHjnUPXFnEIs8QWqDuf0EUoKACuNbHZYYRpN/LzvG+vwxR+mc/w112Re64s3XYYiksMPp5l6BJbJwe10B9I6Q4grAgMBAAECggEAEQf1Szkzk8+gTY5hgUmW2PkCa0+qV0QiHxpzQ21+IeC/YvUfOYFCDYFXBUwkKbC/fHRV8n0ZyH3EXTth/pMo5qRHVkW9e7re9DiY0ZJ//L2vltJHvXqGhOwBChiaFYRR2ORg/IC2/V/0I5zfELTmi8saMqvW+iKAE1XaurnvfdEquRf5DJVdP8SvCZn9vQUNZO6+khRg/xga3LI7MSoG1SEV1pvIhDzLvCnT3R6x0rZQEa50/hXcI+eY0EaJRTPzXl0eCcs5pXIia6pjM6JSpsRpFpMrzjngvhyUkXk/ZIBTZnRIXQb0lSVPSpS6b5nY6pR3r0gP43KtlVrUaeQ8gQKBgQDTpJH/MuvcQh9v05+y+3IuJBIboofxXG0/Ej6PLqkGCAh8b4q2OCfWJk+hANyPrC7jeCIGsg2ar1d9KQzRp6hu8VA5OBlV41G6/zyHT1uTZyTmS120cB+W1tfGpouncFwTzyjfmWY5EjZH1DqMJNk4xbeskm0gHes9pDjNQddPQQKBgQDMCOVanSHNMK9EVtshhDpo6Py+zONhRtXoseS+/4qKMYlsm4g38aerQfwyrB+0G6adNcH7ks8fcdSIgtNjXasxht8Z1WJKsxhGYXAJhETPZKS5yZx1LFIcq9ND0ASlnmeUdSdVC5S9HJWFoC+WlpwUFGqiXLXxfJQQfgthy1NoawKBgD3zvojlbwValbk2SVkrIZFAHczZFtIgLBp6TLW9At0xHMrQG9qbNY4KSOToS6gCzvbnA47SMAlHqmSIz6fPXA6dtM4LDd+GWzZR4HX7VOMhHjwLc7KN37FX0nHj7p1k1o815NEPJk0ud5UvGrRLVQq5Vbq+YhM0rtesarQqwcwBAoGBAJzSaZaQF57iwJPCPoMwYsSn7zunt0zZaSiFMtArEYzOLlYv5S86qijTeshny6ZfalyDKSn32QLONxEFnPxOznous+PjQr0vkoTl93sZEtpk/Mdf0sWs3x/yYVtJ04iIjAxrT2PqltQT2EjwqiMQd75nQt6wa5fErPlQJ+dupBkpAoGBAKjVek9RsPxkAU65aWjECogeKXzlrcnmWrlcEadXac2misTDeqFKLc10SFbnSUHFZuIkeWY7wSSmeBoovvUic/40vugX+2Pl/GpOhMIWmwWv0Qtib+4+6q+v28cFa+5CQIIIGcRkHmoJah0bFfg0Tvgil/NZW8epzFSA97D9vLd2",BASE64);
exp=new ByteString("11:07:f5:4b:39:33:93:cf:a0:4d:8e:61:81:49:96:d8:f9:02:6b:4f:aa:57:44:22:1f:1a:73:43:6d:7e:21:e0:bf:62:f5:1f:39:81:42:0d:81:57:05:4c:24:29:b0:bf:7c:74:55:f2:7d:19:c8:7d:c4:5d:3b:61:fe:93:28:e6:a4:47:56:45:bd:7b:ba:de:f4:38:98:d1:92:7f:fc:bd:af:96:d2:47:bd:7a:86:84:ec:01:0a:18:9a:15:84:51:d8:e4:60:fc:80:b6:fd:5f:f4:23:9c:df:10:b4:e6:8b:cb:1a:32:ab:d6:fa:22:80:13:55:da:ba:b9:ef:7d:d1:2a:b9:17:f9:0c:95:5d:3f:c4:af:09:99:fd:bd:05:0d:64:ee:be:92:14:60:ff:18:1a:dc:b2:3b:31:2a:06:d5:21:15:d6:9b:c8:84:3c:cb:bc:29:d3:dd:1e:b1:d2:b6:50:11:ae:74:fe:15:dc:23:e7:98:d0:46:89:45:33:f3:5e:5d:1e:09:cb:39:a5:72:22:6b:aa:63:33:a2:52:a6:c4:69:16:93:2b:ce:39:e0:be:1c:94:91:79:3f:64:80:53:66:74:48:5d:06:f4:95:25:4f:4a:94:ba:6f:99:d8:ea:94:77:af:48:0f:e3:72:ad:95:5a:d4:69:e4:3c:81",HEX);
//IMPORTANT! If mod is negative, it will be prefixed by a byte 00 which needs to be removed here!!
mod=new ByteString("a8:ae:7f:19:0c:ea:06:8b:d2:db:9e:ef:00:c7:04:78:8c:07:21:8b:c4:60:f8:96:3c:4c:62:7e:d9:69:2b:3f:b0:e8:ec:3c:c3:c7:f6:5b:83:4a:1c:d4:39:05:1a:78:36:4f:b6:9a:05:0a:3c:91:80:36:76:96:92:ac:4c:0d:a9:f4:e1:0d:6a:55:5c:24:a4:2c:eb:27:51:ce:fd:c8:39:6e:d6:33:22:f2:1c:60:32:fd:55:9a:69:64:2d:ef:e0:0d:61:a4:fe:64:e7:01:55:d5:18:5c:72:d3:49:43:7f:52:97:31:ee:d2:49:fa:e3:05:12:17:01:ac:09:78:c4:04:13:cf:c1:85:c8:49:c1:b2:6f:9d:e5:0e:c6:1a:02:94:31:3e:ab:8c:57:16:d1:22:b2:0f:85:55:f5:03:84:f2:d1:cc:fc:a2:2e:85:d0:f8:38:ff:87:6c:92:e0:04:73:7d:e5:e4:8f:bf:08:ac:11:bc:b7:fe:12:cc:78:e7:50:f5:c5:9c:42:2c:f1:05:aa:0e:e7:f4:11:4a:0a:00:2b:8d:6c:76:58:61:1a:4d:fc:bc:ef:1b:eb:f0:c5:1f:a6:73:fc:35:d7:64:5e:eb:8b:37:5d:86:22:92:c3:0f:a7:99:7a:04:96:c9:c1:ed:74:07:d2:3a:43:88:2b",HEX);
//sendInfo(pk,0x02,0x00);
print("Sending private key exponent...");
sendInfo(exp,0x02,0x01);
print("Sending private key modulus...");
sendInfo(mod,0x02,0x02);
