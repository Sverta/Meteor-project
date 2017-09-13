/**
 * Created by user on 11.8.17.
 */
Template.postSubmit.events({
    'submit form': function(e) {
        e.preventDefault();

        var post = {
            title: $(e.target).find('[name=title]').val(),
            text: $(e.target).find('[name=text]').val()
        };

        // var errors = validatePost(post);
        // if (errors.title || errors.url)
        //     return Session.set('postSubmitErrors', errors);

        Meteor.call('postInsert', post, function(error, result) {
            // display the error to the user and abort
            if (error)
                return throwError(error.reason);

            // show this result but route anyway
            if (result.postExists)
                throwError('This link has already been posted');

            Router.go('postPage', {_id: result._id});
        });
    },
    'change .attach-file': function (event, template) {
        console.log("uploading...");
        var profile = {
            url: $(event.target).find('[name=url]').val(),
        };

        console.log(profile);

        FS.Utility.eachFile(event, function (file) {
            var yourFile = new FS.File(file);
            yourFile.creatorId = 123; // todo
            Images.insert(yourFile);
            console.log(yourFile);
        });
    }
});