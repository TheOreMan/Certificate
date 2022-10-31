rmdir /s /q classes\mypackage\javacard

FOR /F %%i IN (configs\appletIDWithColons.txt) DO call C:\java_card_tools-win-bin-b_17-06_jul_2021\bin\converter.bat -target 3.0.4 -classdir classes -applet %%i CertTest mypackage %%i:0xf0 1.0

pause
