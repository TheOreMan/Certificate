key=new ByteString("000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f",HEX);
//key=new ByteString("000102030405060708090a0b0c0d0e0f",HEX);
print("Sending AES key info...");
resp=card.sendApdu(0x80,0x29,0x00,0x00,key,0x00);
print("Result of setting the key: "+card.SW.toString(16)+";"+resp);
