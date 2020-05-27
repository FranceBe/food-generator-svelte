const express = require('express')
const chalk = require('chalk')
const cors = require('cors')
const path = require('path')
const request = require('request')
const bodyParser = require('body-parser')
const graphqlHTTP = require('express-graphql')
const gql = require('graphql-tag')
const { buildASTSchema } = require('graphql')
const app = express()
const port = process.env.PORT || 4000

const DIST_DIR = path.join(__dirname, '../built')
const HTML_FILE = path.join(DIST_DIR, 'index.html')

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('../webpack.config.js')
const compiler = webpack(config)

const books = [
  { id: '1', title: 'In Search of Lost Time' },
  { id: '2', title: 'Don Quixote' },
  { id: '3', title: 'Ulysses' },
  { id: '4', title: 'The Great Gatsby' },
  { id: '5', title: 'Moby Dick' },
  { id: '6', title: 'Hamlet' },
  { id: '7', title: 'War and Peace' },
  { id: '8', title: 'The Odyssey' },
  { id: '9', title: 'One Hundred Years of Solitude' },
  { id: '10', title: 'The Divine Comedy' }
]

async function latency(ms = 100) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

const schema = buildASTSchema(gql`
    type Book {
        id: ID!
        title: String!
    }
    type Query {
        books: [Book!]!
    }
`)

const rootValue = {
  books: async () => {
    await latency()
    return books
  }
}

app.use('/graphql', graphqlHTTP({ schema, rootValue }))
app.use(cors())
app.use(bodyParser.json())
app.use(express.static(DIST_DIR))

if (config.mode === 'development') {
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }))
}

app.get('/api/puppy', (req, res) => {
  const baseUrl = 'http://www.recipepuppy.com/api'
  request(baseUrl, { json: true, qs: req.query }, (error, response, body) => {
    if (error) {
      res.send(error)
      return
    }
    res.json(body)
  })
})

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE)
})


app.listen(port, function () {
  // eslint-disable-next-line max-len
  console.log(`Hello :) \n The server ${chalk.greenBright('started')} and the app listening on port: ${port} ${chalk.greenBright('✓')}`)
})

process.on('SIGINT', () => {
  console.log(`\n ${chalk.red('㊀')} You ${chalk.red('stopped')} server :) \n Goodbye !`)
  process.exit()
})
