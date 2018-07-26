if not "%minimized%"=="" goto :minimized
set minimized=true
@echo off

cd "C:\Users\Nico\Documents\Projects\Nira-Solution\api"

start /min cmd /C "npm start"
goto :EOF
:minimized