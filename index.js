const axios = require('axios');

async function run() {
    console.log('Hello, world!');

    try {

        axios.get(process.env.CONNECTORS_ENDPOINT + "/connectors/mapping/retrieve/" + process.env.CONNECTORS_TYPE)
        .then(function (response) {

            console.log("Waiting response -> ",response.data); 
        });
        


        
       

    } catch (error) {
        console.log("error -> ", error);
    }


}

run();


/*const core = require('@actions/core');
const axios = require('axios');

async function run() {
    try {


        
        const type = core.getInput('type');
        const environment = core.getInput('environment');
        const repoLocation = core.getInput('repo-location');
        const githubToken = core.getInput('github-token');
        const connectorsToken = core.getInput('connectors-token');
        const connectorsEndpoint = core.getInput('connectors-endpoint');
        const command = core.getInput('command');
        const email = core.getInput('email');
        const username = core.getInput('username');
        const cloudAccessToken = core.getInput('cloud-access-token');
        const metadata = core.getInput('metadata');


        core.info(`Waiting metadata -> ${metadata}`);
        core.info("Waiting app -> " + type);
        core.info("Waiting github -> " + githubToken);
        core.info("Waiting username -> " + username);
        core.info("Waiting environment -> " + environment);
        core.info("Waiting repoLocation -> " + repoLocation);
        core.info("Waiting connectorsToken -> " + connectorsToken);
        core.info("Waiting command -> " + command);
        core.info("Waiting email -> " + email);
        core.info("Waiting endpoint -> " + connectorsEndpoint);
        core.info("Waiting metadata -> " + metadata);

        //https://my-app-2-admin-rlxbkxmq4a-uc.a.run.app
        // request code pulumi code in base of type value
        axios.get(`${connectorsEndpoint}/connectors/mapping/retrieve/${type}`)
            .then(function (response) {

                core.info("Waiting response ->" + response.data); */

               /* let map = new Map();
                let wordKey = "";
                let wordValue = "";
                let isKey = true;
                let endingString = false;
                for (let i = 0; i < metadata.length; i++) {

                    let temp = metadata.charAt(i);

                    if (temp === "'" && isKey === true) {

                        if (endingString === false) {
                            endingString = true;
                        } else {
                            endingString = false;
                            isKey = false;
                        }

                    } else if (temp === "'" && isKey === false) {

                        if (endingString === false) {
                            endingString = true;
                        } else {
                            map.set(wordKey, wordValue);
                            wordKey = "";
                            wordValue = "";
                            endingString = false;
                            isKey = true;
                        }
                    }

                    if (temp.match(/[a-zA-Z]/)) {

                        if (isKey === true) {
                            wordKey = wordKey.concat(temp);
                        } else {
                            wordValue = wordValue.concat(temp);
                        }
                    }
                }

                console.log("my map ", map);

                const json = JSON.stringify(Object.fromEntries(map));

                console.log("my json ", json);*/

                /*axios.post(`${connectorsEndpoint}/connectors/publish/newrecord/${type}`,
                    {
                        "email": email,
                        "command": command,
                        "repo-location": repoLocation,
                        "environment": environment,
                        "type": type,
                        "metadata": json
                    })
                    .then(function (response) {
                        core.info("response-> ", response);
                    })
                    .catch(function (error) {
                        if (error.response) {
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                        } else if (error.request) {
                            // The request was made but no response was received
                            // `error.request` is an instance of XMLHttpRequest in the browser
                            // and an instance of http.ClientRequest in node.js
                            console.log(error.request);
                        } else {
                            // Something happened in setting up the request that triggered an Error
                            console.log('Error', error.message);
                        }
                    });*/


 /*               axios.post("https://api.github.com/repos/" + username + "/" + response.data + "/dispatches",
                    {
                        "event_type": "build",
                        "client_payload": {
                            "email": email,
                            "command": command,
                            "repo-location": repoLocation,
                            "environment": environment,
                            "type": type,
                            "cloud-access-token": cloudAccessToken,
                            "connectors-token": connectorsToken,
                            "metadata": metadata,
                            "token": githubToken
                        }
                    }, {
                        auth: {
                            username: username,
                            password: githubToken
                        }
                    })
                .catch(function (error) {
                    // handle error
                    core.info("error-> ", error);
                });

            })
            .catch(function (error) {
                // handle error
                core.info("error-> ", error);
            });


    } catch (error) {
        core.setFailed(error.message);
    }
}

run();*/
