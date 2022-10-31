function sendInfo(bs,p1,p2) {
  pos=0;
  len=200;
  while (pos<bs.length) {
    if (pos+len>bs.length) len=bs.length-pos;
    b=bs.bytes(pos,len);
    print("Attempting to set part: "+b);
    ins=0x20;
    if (pos==0) ins=0x21;
    //print(ins);
    resp=card.sendApdu(0x80,ins,p1,p2,b,0x00);
    print("Result of setting that part: "+card.SW.toString(16)+";"+resp);
    pos+=len;
  }
}

pubk=new ByteString("MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqK5/GQzqBovS257vAMcEeIwHIYvEYPiWPExiftlpKz+w6Ow8w8f2W4NKHNQ5BRp4Nk+2mgUKPJGANnaWkqxMDan04Q1qVVwkpCzrJ1HO/cg5btYzIvIcYDL9VZppZC3v4A1hpP5k5wFV1RhcctNJQ39SlzHu0kn64wUSFwGsCXjEBBPPwYXIScGyb53lDsYaApQxPquMVxbRIrIPhVX1A4Ty0cz8oi6F0Pg4/4dskuAEc33l5I+/CKwRvLf+Esx451D1xZxCLPEFqg7n9BFKCgArjWx2WGEaTfy87xvr8MUfpnP8NddkXuuLN12GIpLDD6eZegSWycHtdAfSOkOIKwIDAQAB",BASE64);
exp=new ByteString("010001",HEX);
//IMPORTANT! If mod is negative, it will be prefixed by a byte 00 which needs to be removed here!!
mod=new ByteString("a8:ae:7f:19:0c:ea:06:8b:d2:db:9e:ef:00:c7:04:78:8c:07:21:8b:c4:60:f8:96:3c:4c:62:7e:d9:69:2b:3f:b0:e8:ec:3c:c3:c7:f6:5b:83:4a:1c:d4:39:05:1a:78:36:4f:b6:9a:05:0a:3c:91:80:36:76:96:92:ac:4c:0d:a9:f4:e1:0d:6a:55:5c:24:a4:2c:eb:27:51:ce:fd:c8:39:6e:d6:33:22:f2:1c:60:32:fd:55:9a:69:64:2d:ef:e0:0d:61:a4:fe:64:e7:01:55:d5:18:5c:72:d3:49:43:7f:52:97:31:ee:d2:49:fa:e3:05:12:17:01:ac:09:78:c4:04:13:cf:c1:85:c8:49:c1:b2:6f:9d:e5:0e:c6:1a:02:94:31:3e:ab:8c:57:16:d1:22:b2:0f:85:55:f5:03:84:f2:d1:cc:fc:a2:2e:85:d0:f8:38:ff:87:6c:92:e0:04:73:7d:e5:e4:8f:bf:08:ac:11:bc:b7:fe:12:cc:78:e7:50:f5:c5:9c:42:2c:f1:05:aa:0e:e7:f4:11:4a:0a:00:2b:8d:6c:76:58:61:1a:4d:fc:bc:ef:1b:eb:f0:c5:1f:a6:73:fc:35:d7:64:5e:eb:8b:37:5d:86:22:92:c3:0f:a7:99:7a:04:96:c9:c1:ed:74:07:d2:3a:43:88:2b",HEX);
print("Sending public key...");
sendInfo(pubk,0x03,0x00);
print("Sending public key exponent...");
sendInfo(exp,0x03,0x01);
print("Sending public key modulus...");
sendInfo(mod,0x03,0x02);
