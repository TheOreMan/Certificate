@echo off

echo powerup;>APDUs\all.txt

echo 0x00 0xA4 0x04 0x00 0x09 0xA0 0x00 0x00 0x00 0x62 0x03 0x01 0x08 0x01 0x7F;>>APDUs\all.txt

FOR /F "tokens=*" %%i IN (APDUs\01_cap.txt) DO echo %%i>>APDUs\all.txt

echo 0x00 0xA4 0x04 0x00 0x09 0xA0 0x00 0x00 0x00 0x62 0x03 0x01 0x08 0x01 0x7F;>>APDUs\all.txt

FOR /F "tokens=*" %%i IN (configs\appletID.txt) DO echo 0x80 0xB8 0x00 0x00 0x07 0x05 %%i 0x00 0x7F;>>APDUs\all.txt

FOR /F "tokens=*" %%i IN (configs\appletID.txt) DO echo 0x00 0xA4 0x04 0x00 0x05 %%i 0x7F;>>APDUs\all.txt

pause