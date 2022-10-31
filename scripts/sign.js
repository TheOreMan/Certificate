s_test="test";
s_ER="Edgars Rencis";
s=s_test;
print("Attempting to sign the message: "+s);
resp=card.sendApdu(0x80,0x26,0x00,0x00,new ByteString(s,ASCII));
print("Result: "+card.SW.toString(16)+";"+resp);
print(resp);
