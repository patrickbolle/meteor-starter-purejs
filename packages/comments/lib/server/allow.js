// Generated by jsScript 1.10.0
(function() {
  Comments.allow({
    insert: function(userId, doc) {
      return doc.owner === userId;
    }
  });

}).call(this);