# Nest Cloud Run

Runs a simple nest.js api in Google Cloud Run

### Branches

All git branches are merged into master

- rock/run-in-cloud - the basic nest app running with a default controller and a process.env dump
- rock/set-env-from-deploy - set NODE_ENV to develop for local development and set it to production on Cloud Run
- rock/firestore - add firebase usable from development environment and from Cloud Run

## Build image and deploy to Cloud Run

```bash
$ gcloud builds submit --tag gcr.io/[PROJECT-ID]/nest-cloud-run
```

```bash
$ gcloud beta run deploy --image gcr.io/[PROJECT-ID]/nest-cloud-run --platform managed
```

- To set environment variables during deployment:

```bash
$ gcloud beta run deploy --image gcr.io/[PROJECT-ID]/nest-cloud-run --platform managed -update-env-vars NODE_ENV=production
```

## Firestore

- Create service account

```bash
$ gcloud iam service-accounts create [username]
```

- Set new account as owner

```bash
$ gcloud projects add-iam-policy-binding [PROJECT_ID] --member "serviceAccount:[NAME]@[PROJECT_ID].iam.gserviceaccount.com" --role "roles/owner"
```

- Generate a key file:

```bash
$ gcloud iam service-accounts keys create [somefilename].json --iam-account nestfirestore@rockwerk.iam.gserviceaccount.com
```

### Update config

The config service is updated to use the key file as specified in the .env file if the service is running in development.
When this is deployed in cloud run, the key file and the .env file is not deployed, based on the .dockerignore file.

### Firestore service and controller

Added a firestore service that initializes the firestore store and create objects in firestore.
Create a contoller for users (could be any CRUD type) that on POST will create an object in firestore.

# Nest

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
