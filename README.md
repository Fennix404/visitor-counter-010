What the sam hill is this???<br>
simple, single page website that tracks how many times its been loaded. 
also features additional counters for conditional events.

Overview (in laymans terms):<br>
AWS stuff used (Backend);
DynamoDB - stores persistent counter data
Lambda - three separate functions that handle updating the counters
API Gateway - HTTP API that calls the lambda functions, one route for each function

Frontend (hosted on AWS amplify);
HTML - the usual...
JavaScript - async functions with fetch statements to access and run the lambdas
