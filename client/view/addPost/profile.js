

// Meteor.subscribe("fileUploads");
Template.profile.events({
    // 'click #deleteFileButton ': function (event) {
    //     // console.log("deleteFile button ", this);
    //     // YourFileCollection.remove({_id:this._id});
    //
    // },
    'change .your-upload-class': function (event, template) {
        console.log("uploading...");
        var profile = {
            url: $(event.target).find('[name=url]').val(),
        };

        FS.Utility.eachFile(event, function (file) {
            var yourFile = new FS.File(file);
            // console.log(yourFile.original.name);
            Images.insert(yourFile);

        });
    },
    // 'change .your-upload-class': function (event, template) {

    // }

    // 'change .myFileInput': function(event, template) {
    //     FS.Utility.eachFile(event, function (file) {
    //         Images.insert(file, function (err, fileObj) {
    //             if (err) {
    //                 // handle error
    //             } else {
    //                 // handle success depending what you need to do
    //                 var userId = Meteor.userId();
    //                 var imagesURL = {
    //                     "profile.image": "/cfs/files/images/" + fileObj._id
    //                 };
    //                 console.log(imagesURL);
    //                 Meteor.users.update(userId, {$set: imagesURL});
    //             }
    //         });
    //
    //     });
    // }

});

Template.imageView.helpers({
    images: function () {
        return Images.find(); // Where Images is an FS.Collection instance
    }

});

// Images.remove({_id:this._id});