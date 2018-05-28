export default function(server) {

  server.createList('score', 3);
  let pupil = server.create('pupil', { name: 'tedd kenny' });
  server.createList('score', 3, { result: 5, pupil });

}