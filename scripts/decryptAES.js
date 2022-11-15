s_test="FCA2D9D8111FEBB75EB95E2889564CD0";
//This is encrypted just once:
//s_ER="4A AE 39 88 AD A6 97 22 DE 21 8C 09 7B B5 7A 3D 8A 14 B1 43 AD FC B9 22 41 53 0F 8A 70 77 44 07 7B 15 C3 3D D0 31 35 4B D1 55 26 F4 1B A6 28 6D";
//This is encrypted twice:
//s_ER="E5 1A BF 9B DF 04 E3 CC 9C 0E 36 A8 DA F0 D4 BA 39 41 28 7D 9A 95 E3 7E 6A F3 76 61 C2 37 24 B6 BE AC D8 31 80 56 82 20 91 3F 34 7D FC A9 29 86";
//This is encrypted 16 times:
s_ER="6A 11 56 C1 59 47 93 B6 82 E1 E2 7E 48 77 8C D4 5B DC 5A 85 5B DF FA 94 48 EB EB 9E 98 23 A0 A3 14 AF C8 33 9F 59 3C 2A 20 34 54 C4 DE DD C7 08";
s=s_ER;
print("Attempting to encrypt the message: "+s);
resp=card.sendApdu(0x80,0x31,0x01,0x10,new ByteString(s,HEX));
print("Result: "+card.SW.toString(16)+";"+resp);
print(resp);
