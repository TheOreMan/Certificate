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

cert=new ByteString("MIIDnzCCAocCFAmG4XiIApOHQxqFUX67j/6pXY5nMA0GCSqGSIb3DQEBCwUAMIGLMQswCQYDVQQGEwJMVjENMAsGA1UECAwEUmlnYTENMAsGA1UEBwwEUmlnYTEOMAwGA1UECgwFTFVNSUkxDzANBgNVBAsMBlN5c0xhYjEWMBQGA1UEAwwNRWRnYXJzIFJlbmNpczElMCMGCSqGSIb3DQEJARYWZWRnYXJzLnJlbmNpc0BsdW1paS5sdjAeFw0yMjA5MTcxNDQwMjFaFw0yMzA5MTcxNDQwMjFaMIGLMQswCQYDVQQGEwJMVjENMAsGA1UECAwEUmlnYTENMAsGA1UEBwwEUmlnYTEOMAwGA1UECgwFTFVNSUkxDzANBgNVBAsMBlN5c0xhYjEWMBQGA1UEAwwNRWRnYXJzIFJlbmNpczElMCMGCSqGSIb3DQEJARYWZWRnYXJzLnJlbmNpc0BsdW1paS5sdjCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAKiufxkM6gaL0tue7wDHBHiMByGLxGD4ljxMYn7ZaSs/sOjsPMPH9luDShzUOQUaeDZPtpoFCjyRgDZ2lpKsTA2p9OENalVcJKQs6ydRzv3IOW7WMyLyHGAy/VWaaWQt7+ANYaT+ZOcBVdUYXHLTSUN/Upcx7tJJ+uMFEhcBrAl4xAQTz8GFyEnBsm+d5Q7GGgKUMT6rjFcW0SKyD4VV9QOE8tHM/KIuhdD4OP+HbJLgBHN95eSPvwisEby3/hLMeOdQ9cWcQizxBaoO5/QRSgoAK41sdlhhGk38vO8b6/DFH6Zz/DXXZF7rizddhiKSww+nmXoElsnB7XQH0jpDiCsCAwEAATANBgkqhkiG9w0BAQsFAAOCAQEAJG4cRvn8N+AP1xP0dA4+ylcXUfZXDLJBc1WrZ/JOYkkAZrj65nrga1qA+NXmyWzMc28JKocjQZ3fOhw9uY1FHgzhQubFmOqgUhxnyX2Ib6TteIKl9I1ZoWssz4G5wQnowEjSw6i+6+xKQe3LAehECNf9XNLqA11IUscgxdVAoLvzBOoR1sAgCPMZz3nztuiETanCDb7h+z2JQlCLopnunwvO9/Rcsr4OzrnNSz4A4mVJ5mKuaKW7RhXNRzFkynvzPqqj0Lg1manikjPl7yy9diB8WSCCoevT73F6XQXE0qH0jGQT3WKJRJsrrGExeksoxeP12QUOYIjHA3vwun6QGw==",BASE64);
print("Sending certificate...");
sendInfo(cert,0x01,0x00);
