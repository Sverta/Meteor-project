/**
 * Created by user on 14.8.17.
 */

/**удалили пакет insecure, все модификации со стороны клиента отвергаются сервером.
 * проверяем что userId на самом деле автор данного документа**/
ownsDocument = function(userId, doc) {
    return doc && doc.userId === userId;
}