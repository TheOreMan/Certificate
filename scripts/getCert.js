resp=card.sendApdu(0x80,0x23,1,0,0);
print(card.SW.toString(16)+";"+resp);
print(new ByteString(resp,HEX));
