s_test="test";
s_ER="Edgars Rencis testē savu programmu";
//s_test_hash="9F 86 D0 81 88 4C 7D 65 9A 2F EA A0 C5 5A D0 15 A3 BF 4F 1B 2B 0B 82 2C D1 5D 6C 15 B0 F0 0A 08";
s=s_test;
print("Attempting to hash the message: "+s);
resp=card.sendApdu(0x80,0x32,0x00,0x02,new ByteString(s,ASCII));
print("Result: "+card.SW.toString(16)+";"+resp);
print(resp);
