@echo off
setlocal
cd /d "%~dp0"
set PYTHON=C:\Users\Administrator\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe
echo Love website is starting at http://127.0.0.1:4173/
echo Press Ctrl+C to stop the server.
"%PYTHON%" -m http.server 4173 --bind 127.0.0.1
