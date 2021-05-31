rem in GP-Dell
cls
nvm use 11.10.0
timeout 1
au build --env prod
rem timeout 1
rem change 1 file b4 deploy 
echo deploy
pause
rem gcloud init  https://hexoblog-276600.ue.r.appspot.com/#/
rem gcloud app deploy


rem steps
rem 1 gcloud init  https://hexoblog-276600.ue.r.appspot.com/#/
rem 2 gcloud  app deploy
