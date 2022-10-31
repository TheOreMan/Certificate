package mypackage;
import javacard.framework.*;
import javacard.security.CryptoException;
import javacard.security.KeyBuilder;
import javacard.security.KeyPair;
import javacard.security.RSAPrivateKey;
import javacard.security.RSAPublicKey;
import javacard.security.Signature;
import javacardx.apdu.ExtendedLength;
import javacardx.framework.string.StringUtil;
import java.lang.*;

public class CertTest extends Applet implements ExtendedLength {
	private byte[] cert;
  private byte[] privKey;
	private byte[] pubKey;
	private byte[] privExp;
	private byte[] pubExp;
	private byte[] privMod;
	private byte[] pubMod;
	private byte[] arrSigned;
	private short certLen;
	private short privKeyLen;
	private short pubKeyLen;
	private short privExpLen;
	private short pubExpLen;
	private short privModLen;
	private short pubModLen;
	private short lenSigned;
	private KeyPair kp;
	private RSAPrivateKey pk;
	private RSAPublicKey pubk;
	Signature sig;

	public static void install(byte[] bArray, short bOffset, byte bLength) {
  	new CertTest();
  }

	protected CertTest() {
		cert=new byte[2000];
	  privKey=new byte[2000];
		pubKey=new byte[2000];
		privExp=new byte[2000];
		pubExp=new byte[2000];
		privMod=new byte[2000];
		pubMod=new byte[2000];
		arrSigned=new byte[2000];
		certLen=0;
		privKeyLen=0;
		pubKeyLen=0;
		privExpLen=0;
		privModLen=0;
		lenSigned=0;
		kp=new KeyPair(KeyPair.ALG_RSA,(short) 2048);
		kp.genKeyPair();
		pk=(RSAPrivateKey)kp.getPrivate();
		pubk=(RSAPublicKey)kp.getPublic();
		sig=Signature.getInstance(Signature.ALG_RSA_SHA_256_PKCS1, false);
    register();
  }

	public void sendLen(APDU apdu,short len) {
		short data=len;
		apdu.setOutgoing();
		apdu.setOutgoingLength((short) 2);
		byte[] buffer=apdu.getBuffer();
		buffer[0]=(byte)(data>>8);
		buffer[1]=(byte)(data&0xFF);
		apdu.sendBytes((short)0,(short) 2);
	}

	public void sendIt(APDU apdu,byte[] arr,short len) {
		byte ex=0;
		byte reason=0;
		byte progress=0;
		try {
			short toSend=len;
			progress=1;
	    apdu.setOutgoing();
			progress=2;
	    apdu.setOutgoingLength(toSend);
			progress=3;
	    byte counter = 0;
	    byte sendThisTime=0;
	    while (toSend > 0) {
				progress=(byte)(4+2*counter);
	   		if (toSend>=32) sendThisTime=32; else sendThisTime=(byte) toSend;
	    	apdu.sendBytesLong(arr, (short) (32 * counter), (short) sendThisTime);
				progress=(byte)(4+2*counter+1);
	    	toSend = (short) (toSend - sendThisTime);
	    	counter = (byte) (counter + 1);
	    }
		}
		catch (APDUException ae) {
			ex=6;
			reason=(byte)ae.getReason();
		}
		catch (SystemException se) {
			ex=5;
			reason=(byte)se.getReason();
		}
		catch(CryptoException ce) {
			short a=ce.getReason();
			ex=1;
			reason=(byte)a;
		}
  	catch (ISOException e) {
			ex=2;
  	}
  	catch (SecurityException e) {
  		SecurityException a=e;
			ex=3;
  	}
  	catch (Exception e) {
			ex=4;
  	}
		finally {
			byte[] res=JCSystem.makeTransientByteArray((short)3,JCSystem.CLEAR_ON_RESET);
			res[0]=ex;
			res[1]=reason;
			res[2]=progress;
			//apdu.setOutgoing();
	    //apdu.setOutgoingLength((short)3);
			//apdu.sendBytesLong(res, (short)0, (short)3);
		}
	}

	/*
	public void sendItFully(APDU apdu,byte[] arr) {
		short toSend=(short) arr.length;
    apdu.setOutgoing();
    apdu.setOutgoingLength(toSend);
    apdu.sendBytesLong(arr, (short) 0, (short) toSend);
	}
	*/

	public short setArray(APDU apdu,byte[] arr,short len) {
    byte[] buffer=apdu.getBuffer();
    short bytesRead = apdu.setIncomingAndReceive();
		short dataOffset = apdu.getOffsetCdata();
    while (bytesRead > 0) {
      Util.arrayCopyNonAtomic(buffer, dataOffset, arr, len, bytesRead);
      len+=bytesRead;
      bytesRead = apdu.receiveBytes(dataOffset);
    }
    return len;
	}

	public void generateKeys(APDU apdu) {
		byte ex=0;
		byte reason=0;
		byte progress=0;
		try {
			progress=1;
			pubk.clearKey();
			progress=2;
			pubk.setModulus(pubMod,(short) 0,pubModLen);
			progress=3;
			pubk.setExponent(pubExp,(short) 0,pubExpLen);
			progress=4;
			pk.clearKey();
			progress=5;
			pk.setModulus(privMod,(short) 0,privModLen);
			progress=6;
			pk.setExponent(privExp,(short) 0,privExpLen);
			progress=7;
		}
		catch(CryptoException ce) {
			short a=ce.getReason();
			ex=1;
			reason=(byte)a;
			//sendLen(apdu,a);
		}
  	catch (ISOException e) {
  		//throw e;
			ex=2;
  	}
  	catch (SecurityException e) {
  		SecurityException a=e;
			ex=3;
  	}
		catch (RuntimeException e) {
			ex=4;
  	}
		catch (Exception e) {
  		//throw e;
			ex=7;
  	}
		finally {
			byte[] res=JCSystem.makeTransientByteArray((short)3,JCSystem.CLEAR_ON_RESET);
			res[0]=ex;
			res[1]=reason;
			res[2]=progress;
			//sendIt(apdu,res,(short)3);
			//sendIt(apdu,pubMod,pubModLen);
		}
	}

	public void verify(APDU apdu) {
		byte ex=0;
		byte reason=0;
		byte progress=0;
		try {
			progress=1;
			byte[] arr=new byte[2000];
			progress=2;
			progress=3;
			short len=setArray(apdu,arr,(short) 0);
			progress=4;
			sig.init(pubk,Signature.MODE_VERIFY);
			progress=5;
			boolean b=sig.verify(arr, (short)0, len, arrSigned, (short)0, lenSigned);
			progress=6;
			byte[] res=JCSystem.makeTransientByteArray((short)1,JCSystem.CLEAR_ON_RESET);
			if (b) res[0]=1; else res[0]=2;
			sendIt(apdu,res,(short)1);
			progress=7;
		}
		catch (SystemException se) {
			ex=5;
			reason=(byte)se.getReason();
		}
		catch(CryptoException ce) {
			short a=ce.getReason();
			ex=1;
			reason=(byte)a;
		}
  	catch (ISOException e) {
			ex=2;
  	}
  	catch (SecurityException e) {
  		SecurityException a=e;
			ex=3;
  	}
  	catch (Exception e) {
			ex=4;
  	}
		finally {
			byte[] res=JCSystem.makeTransientByteArray((short)3,JCSystem.CLEAR_ON_RESET);
			res[0]=ex;
			res[1]=reason;
			res[2]=progress;
			//sendIt(apdu,res,(short)3);
		}
	}

	public void sign(APDU apdu) {
		byte ex=0;
		byte reason=0;
		byte progress=0;
		try {
			progress=1;
			byte[] arr=new byte[2000];
			progress=2;
			//byte[] arrSigned=JCSystem.makeTransientByteArray((short)2000,JCSystem.CLEAR_ON_RESET);
			byte[] arrSigned=new byte[2000];
			progress=3;
			short len=setArray(apdu,arr,(short) 0);
			progress=4;
			sig.init(pk,Signature.MODE_SIGN);
			progress=5;
			short lenSigned=sig.sign(arr, (short)0, len, arrSigned, (short)0);
			progress=6;
			sendIt(apdu,arrSigned,lenSigned);
			progress=7;
		}
		catch (SystemException se) {
			ex=5;
			reason=(byte)se.getReason();
		}
		catch(CryptoException ce) {
			short a=ce.getReason();
			ex=1;
			reason=(byte)a;
		}
  	catch (ISOException e) {
			ex=2;
  	}
  	catch (SecurityException e) {
  		SecurityException a=e;
			ex=3;
  	}
  	catch (Exception e) {
			ex=4;
  	}
		finally {
			byte[] res=JCSystem.makeTransientByteArray((short)3,JCSystem.CLEAR_ON_RESET);
			res[0]=ex;
			res[1]=reason;
			res[2]=progress;
			//sendIt(apdu,res,(short)3);
		}
	}
	public void storeSignature(APDU apdu) {
		byte ex=0;
		byte reason=0;
		byte progress=0;
		try {
			lenSigned=setArray(apdu,arrSigned,(short) 0);
			progress=1;
		}
		catch (SystemException se) {
			ex=5;
			reason=(byte)se.getReason();
		}
		catch(CryptoException ce) {
			short a=ce.getReason();
			ex=1;
			reason=(byte)a;
		}
  	catch (ISOException e) {
			ex=2;
  	}
  	catch (SecurityException e) {
  		SecurityException a=e;
			ex=3;
  	}
  	catch (Exception e) {
			ex=4;
  	}
		finally {
			byte[] res=JCSystem.makeTransientByteArray((short)3,JCSystem.CLEAR_ON_RESET);
			res[0]=ex;
			res[1]=reason;
			res[2]=progress;
			//sendIt(apdu,res,(short)3);
		}
	}

	@Override
  public void process(APDU apdu) {
  	byte[] buffer=apdu.getBuffer();
  	byte[] arr=null;
  	short len=0;
  	byte P1=buffer[ISO7816.OFFSET_P1];
		byte P2=buffer[ISO7816.OFFSET_P2];
  	switch (P1) {
  		case 0x01:
  			arr=cert;
  			len=certLen;
  			break;
  		case 0x02:
  			switch (P2) {
    			case 0x01:
        			arr=privExp;
        			len=privExpLen;
        			break;
    			case 0x02:
        			arr=privMod;
        			len=privModLen;
        			break;
        	default:
        			arr=privKey;
        			len=privKeyLen;
        			break;
  			}
  			break;
  		case 0x03:
				switch (P2) {
					case 0x01:
							arr=pubExp;
							len=pubExpLen;
							break;
					case 0x02:
							arr=pubMod;
							len=pubModLen;
							break;
					default:
							arr=pubKey;
							len=pubKeyLen;
							break;
				}
				break;
  	}
  	switch (buffer[ISO7816.OFFSET_INS]) {
  		case 0x20:
  			len=setArray(apdu,arr,len);
  			break;
  		case 0x21:
  			for (short i=0;i<2000;i++) arr[i]=0;
  			len=0;
  			len=setArray(apdu,arr,len);
  			break;
  		case 0x22:
  			//sendItFully(apdu,arr);
  			break;
  		case 0x23:
  			sendIt(apdu,arr,len);
  			break;
  		case 0x24:
  			sendLen(apdu,len);
  			break;
  		case 0x25:
  			generateKeys(apdu);
  			break;
  		case 0x26:
  			sign(apdu);
			case 0x27:
				verify(apdu);
			case 0x28:
				storeSignature(apdu);
  	}
  	if (P1==0x01) certLen=len;
  	else if (P1==0x02) {
  		if (P2==0x01) privExpLen=len;
  		else if (P2==0x02) privModLen=len;
  		else privKeyLen=len;
  	}
  	else if (P1==0x03) {
			if (P2==0x01) pubExpLen=len;
  		else if (P2==0x02) pubModLen=len;
  		else pubKeyLen=len;
		}
	}
}
