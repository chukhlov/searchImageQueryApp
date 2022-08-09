Follow next steps to setup the project:
1. Install node modules `yarn install`
2. Install Pods `cd ios && pod install`
3. Note for Mac M1 users `arch -x86_64 pod install`
4. In the root of the project create `.env` file and put inside a next keys

```
API_KEY=YOUR_API_KEY
API_URL=https://pixabay.com/api/
```
4. Run project `yarn start`
5. Run iOS `yarn ios`
6. Run Android `yarn android`
