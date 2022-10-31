resp=card.sendApdu(0x80,0x24,0x02,0x00);
print("Private key length: "+card.SW.toString(16)+";"+resp);
resp=card.sendApdu(0x80,0x24,0x02,0x01);
print("Private key exponent length: "+card.SW.toString(16)+";"+resp);
resp=card.sendApdu(0x80,0x24,0x02,0x02);
print("Private key modulus length: "+card.SW.toString(16)+";"+resp);
