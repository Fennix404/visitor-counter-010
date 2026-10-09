What the sam hill is this???<br>
simple, single page website that tracks how many times its been loaded.<br>
also features additional counters for conditional events.

Overview (in laymans terms):<br>
AWS stuff used (Backend);<br>
DynamoDB - stores persistent counter data<br>
Lambda - three separate functions that handle updating the counters<br>
API Gateway - HTTP API that calls the lambda functions, one route for each function<br>

Frontend (hosted on AWS amplify);
HTML - the usual...
JavaScript - async functions with fetch statements to access and run the lambdas
