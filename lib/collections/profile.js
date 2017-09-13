// /**
//  * Created by user on 24.8.17.
//  */
// import { FilesCollection } from 'meteor/ostrio:files';
// const Images = new FilesCollection({collectionName: 'Images'});
// export default Images; // To be imported in other files

// YourFileCollection = new FS.Collection("yourFileCollection", {
//     stores: [new FS.Store.FileSystem("yourFileCollection", {path: "~/meteor_uploads"})]
// });
// YourFileCollection.allow({
//     insert: function (userId, doc) {
//         return true;
//     },
//     update: function (userId, doc) {
//         return true;
//     },
//     remove: function (userId, doc) {
//         return true;
//     },
//     download: function (userId, doc) {
//         return true;
//     }
// });

var imageStore = new FS.Store.GridFS("images");

Images = new FS.Collection("images", {
    stores: [imageStore]
});
Images.allow({
    insert:function(userId,project){
        return true;
    },
    update:function(userId,project,fields,modifier){
        return true;
    },
    remove:function(userId,project){
        return true;
    },
    download:function(){
        return true;
    }
});