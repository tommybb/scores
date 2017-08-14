import config from 'scores/config/environment';
export default function() {

  this.namespace = 'api';

  this.resource('scores');

  this.resource('years');

  this.resource('class-rooms');

  this.resource('sports');

  this.resource('pupils');  
}
