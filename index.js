const couchbase = require('couchbase')
var cluster = new couchbase.Cluster('couchbase://127.0.0.1');
// For Couchbase > 4.5 with RBAC Auth
cluster.authenticate('admin', 'password')
var bucket = cluster.openBucket('Student');
 

bucket.upsert('testdoc2', {name:'Frank'}, function(err, result) {
    if (err) throw err;
  
    bucket.get('testdoc', function(err, result) {
      if (err) throw err;
  
      console.log(result.value);
      // {name: Frank}
    });
});

console.log('done')