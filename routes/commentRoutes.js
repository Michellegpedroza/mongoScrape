//routes ~ Comments
const { Comment, Article } = require('../models')

module.exports = app => {
  //Get
  app.get('/comments/:comment', (req, res) => {
    console.log(req.params.comment)
    Comment.find({ parent: req.params.comment })
      .then(comments => {
        res.json(comments)
      })
      .catch(e => console.error(e))
  })

  //Post
  app.post('/comments', (req, res) => {
    console.log(req.body)
    Comment.create(req.body)
      .then(({ _id }) => {
        Article.updateOne(
          {
            _id: req.body.parent
          },
          {
            $push: {
              comments: _id
            }
          }
        )
          .then(() => res.sendStatus(200))
          .catch(e => console.error(e))
      })
      .catch(e => console.error(e))
  })

  //Delete
  app.delete('/comments/:comment', (req, res) => {
    Comment.deleteOne({ _id: req.params.comment })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })
}