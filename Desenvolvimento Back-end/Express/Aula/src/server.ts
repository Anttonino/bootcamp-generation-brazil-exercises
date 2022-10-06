/* Import Framework*/ 
import * as express from 'express';

// Variable
const app = express ();
const port = 3000;

// Code here
// XPTO || FUBÁ
// porta raiz
app.get ('/', (request, response) => {
    response.send ('Hello world');
});

app.get ('/participantes', (request, response) => {
    response.send ('Hello participator');
});

app.get ('/teste', (request, response) => {
    response.send ('Hello tester');
});

app.get ('/instrutor', (request, response) => {
    response.send ('Hello instructor');
});

app.listen (port, () => {
    console.log (`Server is running at port ${port}!`)
})