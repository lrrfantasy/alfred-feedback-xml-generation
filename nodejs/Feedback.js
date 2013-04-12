function Feedback(items) {
  this.items = this.args(items);
}

Feedback.prototype = {
  addItem : function(result) {
    this.items.push(result);
    return this;
  },
  toString : function() {
    return new FeedbackWriter(this).write();
  },
  args : function(items) {
    if (!items) { return []; }
    if (items.length) {
      return Array.prototype.slice.call(items);
    }else {
      return [items];
    }
  }
};

function FeedbackWriter(feedback) {
  this.feedback = feedback;
}

FeedbackWriter.prototype = {
  write : function() {
    var xml = '<?xml version="1.0"?>', that = this;
    xml += '<items>';
    this.feedback.items.forEach(function(item) {
      xml += that.writeItem(item);
    });
    return xml += '</items>';
  },
  writeItem : function(item) {
    var itemStr = '';
    itemStr  = '<item uid="' + item.uid + '" arg="' + item.arg + '" valid="' + (item.valid || 'no') + '" autocomplete="' + item.autocomplete + '" type="' + (item.type || 'file') + '">';
    itemStr +=   '<title>' + item.title + '</title>';
    itemStr +=   '<subtitle>' + item.subtitle + '</subtitle>';
    if (item.icon) {
      itemStr +=   '<icon type="' + item.icon.type + '">' + item.icon.value + '</icon>';
    }
    itemStr += '</item>';
    return itemStr;
  }
}; 

module.exports = Feedback;