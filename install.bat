@echo off
setlocal enabledelayedexpansion

set "modFolder=%cd%\mods"
set installPaths="C:\Users\%USERNAME%\AppData\Local\Vivaldi\Application\"

set nrOfInstalls=0
set nrOfSuccessfulPatches=0

for %%i in (%installPaths%) do (
	<NUL set /p=Searching for newest browser.html in %%~dpi... 
	set /a nrOfInstalls=nrOfInstalls+1

	set installPath=%%~dpi
	set latestVersionFolder=

	for /f "tokens=*" %%a in ('dir /a:-d /b /s "!installPath!"') do (
		if "%%~nxa"=="browser.html" set latestVersionFolder=%%~dpa
	)

	if not defined latestVersionFolder (
		echo.
		echo Couldn't find it. :(
		echo Is !installPath! the correct Vivaldi Application folder?
		echo.
	) else (
		echo Found it.
		echo.

		if exist !latestVersionFolder!\browser.bak.html (
			echo Backup is already in place.
		) else (
			echo Creating a backup of your original browser.html file.
			rename "!latestVersionFolder!\browser.html" "browser.bak.html"
		)
		echo.

		echo Copying files
		echo    from %modFolder%
		echo    into !latestVersionFolder!:

		xcopy /s /y "%modFolder%" "!latestVersionFolder!"

		echo.

		set /a nrOfSuccessfulPatches=nrOfSuccessfulPatches+1
	)
)

echo All done^^! :)
echo Successfully patched %nrOfSuccessfulPatches% out of %nrOfInstalls% installs.
echo.
pause