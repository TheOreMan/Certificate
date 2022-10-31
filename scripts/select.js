function select() {
  card=new Card(_scsh3.reader);
  resp=card.sendApdu(0x00,0xA4,0x04,0x00,new ByteString("a0b0c0d0e0",HEX),0x7F);
  print("Select: "+card.SW.toString(16)+";"+resp);
}
select();
