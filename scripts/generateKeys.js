print("Attempting to generate keys");
resp=card.sendApdu(0x80,0x25,0x00,0x00);
print("Result: "+card.SW.toString(16)+";"+resp);
