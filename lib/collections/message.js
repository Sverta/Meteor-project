Messages = new Mongo.Collection("messages");

Meteor.methods({
    comment: function(commentAttributes) {
        var user = Meteor.user();
        var post = Messages.findOne(commentAttributes.postId);
        // ensure the user is logged in
        if (!user)
            throw new Meteor.Error(401, "You need to login to make comments");
        if (!commentAttributes.body)
            throw new Meteor.Error(422, 'Please write some content');
        if (!post)
            throw new Meteor.Error(422, 'You must comment on a post');
        message = _.extend(_.pick(commentAttributes, 'postId', 'body'), {
            userId: user._id,
            author: user.username,
            submitted: new Date().getTime()
        });
        // обновляем количество комментариев для поста
        Messages.update(message.postId, {$inc: {messagesCount: 1}});

        // создаем комментарий и сохраняем id
        message._id = Messages.insert(message);
        // создаем уведомление, информируя пользователя о новом комментарии
        createCommentNotification(message);
        return message._id;
    }
});
