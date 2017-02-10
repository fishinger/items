if(!me) cansel('you are not logget in', 401);
emit('items:create', this);
emit('cre', this);
// if(this.name.length < 3) {
//     error('title', 'Min length 3');
// }

this.creator = me.id;