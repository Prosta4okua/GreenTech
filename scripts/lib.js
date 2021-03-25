module.exports = {
  getLinkedBlock(tile, block, pred) {
    entity = tile.ent();
    if (entity == null) { return 0; }
    prox = entity.proximity();
    count = 0;
    prox.each(pred, cons(other => count++));
    return count;
  },
  eachLinkedBlock(tile, pred, sub) {
    entity = tile.ent();
    if (entity == null) { return; }
    prox = entity.proximity();
    prox.each(pred, sub);
  }
}