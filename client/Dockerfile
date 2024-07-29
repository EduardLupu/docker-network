ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-alpine

RUN apk add shadow

RUN groupadd -r assign3group && useradd -r -g assign3group assign3user

ENV HOME /home/assign3user

RUN mkdir -p $HOME && chown -R assign3user:assign3group $HOME

WORKDIR $HOME/app

RUN chown -R assign3user:assign3group $HOME/app

COPY package*.json ./

RUN chown assign3user:assign3group package*.json

USER assign3user

RUN npm install

USER root

COPY --chown=assign3user:assign3group . .

USER assign3user

RUN mkdir tmp

EXPOSE 4242

ENTRYPOINT ["npm", "start"]
