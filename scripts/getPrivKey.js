resp=card.sendApdu(0x80,0x23,2,0,0);
print(card.SW.toString(16)+";"+resp);
print("Private key: ");
print(new ByteString(resp,HEX))
resp=card.sendApdu(0x80,0x23,2,1,0);
print(card.SW.toString(16)+";"+resp);
print("Private key exponent: ");
print(new ByteString(resp,HEX))
resp=card.sendApdu(0x80,0x23,2,2,0);
print(card.SW.toString(16)+";"+resp);
print("Private key modulus: ");
print(new ByteString(resp,HEX))
