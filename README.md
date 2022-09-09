# Renner Challenge Backend

This is only an API made in Nodej.JS to serve data from Firebase Firestore database.


## Installation

After cloning the repository you should to enter on same folder using a terminal and execute the following command:

```
npm install
npm start
```

Or if you prefer to use Yarn (just like me)

```
yarn install
yarn start
```

On terminal you must to see the message: 
```
Renner Challenge backend is running on port: 5000
```
If everything is correct you can execute this API on your browser using "[http://localhost:5000](http://localhost:5000)" and the same message must be showed.

Now you can enter into "**Renner Challenge frontend repository**" [here](https://github.com/leandrocorso/renner-challenge-frontend) and follow the steps on description. Honestly is almost the same thing from here!


## Some possible questions

1. **Why to use a Firestore database?**
    - Because it's free, stable, easy to configure and a little more near for real life situations.

2. **Why you don't create it directly on frontend using React.JS? with Firebase library**
    - Because the challenge description cite Node.Js and I understood the expected is to serve the app information using this technology, like a real microservice.
    
3. **Why you don't create a Node.JS server on same environment and repository of frontend?**
    - Because is weird to run an API on same environment of their consumer frontend. It's not make sense to me.
    
4. **Why you add the .env file on your git repository?**
    - Ok! I know that it's not a good practice, but it's just a test and this way is more easy to run the application. I could to use these information directy on JavaScript code, but this way I think be a more professional approach.
    
5. **Where are you got these informations on database?**
    - On Renner's website: [https://www.lojasrenner.com.br](https://www.lojasrenner.com.br/)
    
6. **Everything in English?**
    - Of cource! The challenge description is in English as well. Anyway is a good practice to push the commits messages in English and the comments on code (that I avoid) when it exists I use to write in English too.
    
    
# It's all