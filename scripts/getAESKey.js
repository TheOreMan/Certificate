resp=card.sendApdu(0x80,0x30,0,0,0);
print(card.SW.toString(16)+";"+resp);
print("AES key: ");
print(new ByteString(resp,HEX))
