emit('items:create', this);
// if(this.name.length < 3) {
//     error('title', 'Min length 3');
// }
if(!me) cansel('you are not logget in', 401);

this.creator = me.id;