resp=card.sendApdu(0x80,0x24,0x03,0x00);
print("Public key length: "+card.SW.toString(16)+";"+resp);
resp=card.sendApdu(0x80,0x24,0x03,0x01);
print("Public key exponent length: "+card.SW.toString(16)+";"+resp);
resp=card.sendApdu(0x80,0x24,0x03,0x02);
print("Public key modulus length: "+card.SW.toString(16)+";"+resp);
