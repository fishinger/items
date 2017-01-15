//cancel('Delete elem!');
if(!me || this.creator != me.id) cancel('this is not your items', 401);
emit('items:delete', this);