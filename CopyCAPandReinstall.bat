cd C:\OneDrive\"OneDrive - University of Latvia"\Darbvirsma\Quantum\JavaCard\RealCard\GlobalPlatform\GlobalPlatformPro\tool\target

xcopy C:\Users\edgar\OneDrive\Desktop\Certificate\classes\mypackage\javacard\mypackage.cap Cert.cap /Y

gp.exe --uninstall Cert.cap
gp.exe -install Cert.cap

pause
