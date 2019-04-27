---
id: installation
title: Installation
---

## npm

```shell
# Components (pick one)
$ npm install --save react react-dom uniforms uniforms-antd
$ npm install --save react react-dom uniforms uniforms-bootstrap3
$ npm install --save react react-dom uniforms uniforms-bootstrap4
$ npm install --save react react-dom uniforms uniforms-material
$ npm install --save react react-dom uniforms uniforms-semantic
$ npm install --save react react-dom uniforms uniforms-unstyled
```

**Note:** If you are going to use a themed package - remember to include correct styles!

## meteor

**Note:** If you prefer video, there's [Meteor University](https://meteoruniversity.org/) uniforms session available [here](https://www.youtube.com/watch?v=bTHPoghqtS4).

These are npm packages, so they can't imply any Meteor package, and you have to install dependencies manually. In your Meteor app directory:

```shell
# If you are going to use SimpleSchema
$ meteor add aldeed:simple-schema check

# If you are going to use SimpleSchema@2
$ meteor npm install simpl-schema

# If you are going to use GraphQL
$ meteor npm install graphql

# Components (pick one)
$ meteor npm install --save react react-dom uniforms uniforms-antd
$ meteor npm install --save react react-dom uniforms uniforms-bootstrap3
$ meteor npm install --save react react-dom uniforms uniforms-bootstrap4
$ meteor npm install --save react react-dom uniforms uniforms-material
$ meteor npm install --save react react-dom uniforms uniforms-semantic
$ meteor npm install --save react react-dom uniforms uniforms-unstyled
```