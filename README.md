"# ReactNativeApp" 

add an ENV and add URL:

DEV_BACKEND_URL=https://truly-contacts.herokuapp.com/api
PROD_BACKEND_URL=https://truly-contacts.herokuapp.com/api


after .env is added, reset Metro:

npx react-native start --reset cache
npx react-native run-android 