'use strict';

module.exports = function(Message) {
  Message.validatesPresenceOf('name',
    {message: 'El nombre es obligatorio'});
  Message.validatesPresenceOf('email',
    {message: 'El email es obligatorio'});
  Message.validatesPresenceOf('comment',
    {message: 'El comentario es obligatorio'});
  Message.validatesPresenceOf('phone',
    {message: 'El telefono es obligatorio'});
  Message.validatesPresenceOf('topic',
    {message: 'El asunto es obligatorio'});

  Message.validatesLengthOf('name', {min: 10, max: 100,
    message: {
      min: 'Nombre demasiado corto',
      max: 'Nombre demasiado largo',
    },
  });

  Message.validatesLengthOf('email', {min: 10, max: 100,
    message: {
      min: 'Email demasiado corto',
      max: 'Email demasiado largo',
    },
  });

  Message.validatesLengthOf('comment', {min: 10, max: 100,
    message: {
      min: 'Comentario demasiado corto',
      max: 'Comentario demasiado largo',
    },
  });

  Message.validatesLengthOf('phone', {min: 10, max: 10,
    message: {
      min: 'El telefono debe tener mínimo 10 dígitos',
      max: 'El telefono debe tener máximo 10 dígitos',
    },
  });

  Message.validate('phone', phoneValidation, {
    message: 'El telefono debe ser un numero'});
  
  function phoneValidation(err) {
    if (this.phone) {
      if (!this.phone.length || !+this.phone) err();
    }
  }
};
