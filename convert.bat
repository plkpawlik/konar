
for /f %%i in ('dir /b public ^| findstr .jpg') do squoosh-cli -d public/ --webp {quality:50} public/%%i

