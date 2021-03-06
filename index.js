(function() {
  function buggy() {
    function detect() {
      var a = [0, 1];
      a.reverse();
      return a[0] === 0;
    }
    return detect() || detect();
  }
  if(!buggy()) return;
  Array.prototype._reverse = Array.prototype.reverse;
  Array.prototype.reverse = function reverse() {
    if (Array.isArray(this)) this.length = this.length;
    return Array.prototype._reverse.call(this);
  }
  var nonenum = {enumerable: false};
  Object.defineProperties(Array.prototype, {
    _reverse: nonenum,
    reverse: nonenum,
  });
})();
