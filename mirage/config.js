import config from 'scores/config/environment';
export default function(){

  this.namespace = 'api';

  this.get('/scores', (schema, request) => {
    return schema.scores.all();
  });

  this.get('/years', (schema, request) => {
    return schema.years.all();
  });

  this.get('/classrooms', (schema, request) => {
    return schema.classrooms.all();
  });

  this.get('/sports', (schema, request) => {
    return schema.sports.all();
  });

  this.get('/pupils', (schema, request) => {
    return schema.pupils.all();
  });  
}
