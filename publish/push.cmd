@echo off
set VERSION=0.0.1
call npm config set prefix %~dp0
call npm publish imagemagick-magick-wasm-%VERSION%.tgz --access public
call npm config set prefix %APPDATA%\npm