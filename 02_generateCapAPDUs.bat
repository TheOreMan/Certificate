del APDUs\*.* /q

call C:\java_card_tools-win-bin-b_17-06_jul_2021\bin\verifycap.bat -outfile APDUs\digest.txt classes\mypackage\javacard\mypackage.cap

call C:\"Program Files (x86)"\Oracle\"Java Card Development Kit Simulator 3.1.0"\bin\scriptgen.bat -hashfile APDUs\digest.txt -o APDUs\01_cap.txt classes\mypackage\javacard\mypackage.cap

pause
