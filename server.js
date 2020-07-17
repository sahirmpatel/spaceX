const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const cors=require('cors')
const app = express();
const path = require('path')
//cors
app.use(cors())

app.use(express.static('public'));


app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true
    })
  );
  

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  });
  
const PORT=process.env.PORT || 5000

app.listen(PORT,()=>console.log( `server started on ${PORT}`))