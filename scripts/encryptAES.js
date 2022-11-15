s_test="test";
s_ER="Edgars Rencis testē savu programmu";
s=s_ER;
print("Attempting to encrypt the message: "+s);
resp=card.sendApdu(0x80,0x31,0x00,0x10,new ByteString(s,ASCII));
print("Result: "+card.SW.toString(16)+";"+resp);
print(resp);
