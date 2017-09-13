/**
 * Created by user on 9.8.17.
 */
Posts = new Mongo.Collection('posts');

// создание постов
Posts.allow({
    update: ownsDocument,
    remove: ownsDocument
});

//ограничение доступа редактирования полей
Posts.deny({
    update: function(userId, post, fieldNames) {
        // разрешаем редактировать только следующие два поля:
        return (_.without(fieldNames, 'title', 'text').length > 0);
    }
});

// создание постов
Meteor.methods({
    postInsert: function(postAttributes) {
        check(Meteor.userId(), String);
        check(postAttributes, {
            title: String,
            text: String
        });
        //проверка на создание с обинаковым полем title
        var postWithSameLink = Posts.findOne({title: postAttributes.title});
        if (postWithSameLink) {
            return {
                postExists: true,
                _id: postWithSameLink._id
            }
        }
        var user = Meteor.user();
        var post = _.extend(postAttributes, {
            userId: user._id,
            author: user.username,
            submitted: new Date()
        });
        var postId = Posts.insert(post);
        return {
            _id: postId
        };
    }
});
Meteor.methods({
    'file-upload': function (fileInfo, fileData) {
        console.log("received file " + fileInfo.name + " data: " + fileData);
        fs.writeFile(fileInfo.name, fileData);
    }
});