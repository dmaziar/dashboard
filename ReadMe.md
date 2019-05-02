Description: 
- The framework is done with cypress.io in BDD style with cucumber and default reporter.
- I used page object pattern to orginize my code.

To run the tests:
- npm install.
- cypress run (or npm test).

To open cypress localy:
- npm run cypress:open

Testing:
- I split an application on components and wrote some tests for each of them. It is the filtering part and the board itselve. So some tests to check how the filter works with search by name and city and combinations. And some board workflow. Moving crew members to a different columns and check if they are in correct column.

Code:
- I tried to write reusable steps, so it is easy to combine different tests based on requirements.
- The code itselve should be readble and understandable because of page object, so no comments in code just not to pollute it.

CI readiness:
- Just by adding some shell script to a simple jenkins job(npm install, cypress run) should be enough to execute the tests. 
- Of course the tests are pointing to localhost, so node server should be up before running the tests. This can be orginized in a pipeline or some docker image, which is not done here. 

What is not done:
- Docker, custom reporter. This will take more time and I'm trying to feat "2 hours" requirement, so will skip it.  
