resp=card.sendApdu(0x80,0x23,3,0,0);
print(card.SW.toString(16));
print("Public key: ");
print(new ByteString(resp,HEX))
resp=card.sendApdu(0x80,0x23,3,1,0);
print(card.SW.toString(16));
print("Public key exponent: ");
print(new ByteString(resp,HEX))
resp=card.sendApdu(0x80,0x23,3,2,0);
print(card.SW.toString(16));
print("Public key modulus: ");
print(new ByteString(resp,HEX))
