/* Import Framework*/ 
import * as express from 'express';

// Variable
const app = express ();
const port = 3000;

// Code here
app.get ('/', (request, response) => {
    response.send ('<h1>Hello world</h1>');
});

app.get ('/BSM', (request, response) => {
    response.send ('<h1>BSMS da Generation Brasil</h1>' +
    '<h3>Mentalidades</h3>' +
    '<ol><li>Persistência;</li>' +
    '<li>Responsabilidade Pessoal;</li>' +
    '<li>Orientação ao futuro;</li>' +
    '<li>Mentalidade de crescimento.</li></ol>' + 
    '<h3>Habilidades</h3>' +
    '<ol><li>Trabalho em equipe;</li>' +
    '<li>Atenção aos detalhes</li>' +
    '<li>Proatividade</li>' +
    '<li>Comunicação</li>'
    );
});

app.get ('/Objetivos', (request, response) => {
    response.send ('<h1>Objetivos da semana</h1>' +
    '<p>Desejo organizar meus materiais de estudo e aprimorar mais meus conhecimento</p>'
    );
});

app.listen (port, () => {
    console.log (`Server is running at port ${port}!`)
})