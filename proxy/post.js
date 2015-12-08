/**
 * Post Proxy
 */

var models = require('../models');
var Post = models.Post;

exports.add = function(userId, title, tags, des, content, callback){
    var post = new Post({
      title: title,
      tags: tags,
      des: des,
      content: content,
      pv: 0,
      createdBy: userId,
      updatedBy: userId
    });

    post.save(callback);
};

exports.get = function(title, index, size, callback){
    Post.find({ title: title }).limit(size).skip((index + 1) * size).exec(callback)
};

exports.getById = function(id, callback){
    Post.findById({ _id: id }, callback);
};

exports.delete = function(id, callback)(
    Post.remove({ _id: id }, callback);
);

exports.update = function(userId, id, post, callback){
    var conditions = { _id: id };
    delete post._id;
    delete post.createdAt;
    delete post.createdBy;

    post.updatedAt = new Date();
    post.updatedBy = userId;

    var update = post;
    Post.update(conditions, update, callback);
};