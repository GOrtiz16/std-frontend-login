import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// interfaces
import { ILogin } from '../interfaces/login.interface';

// errors
import * as errorsCatelogue from './login.errors';

@Injectable()
export class LoginPresenter {
  errorsCatelogue = errorsCatelogue;

  username = new FormControl('');
  password = new FormControl('');
  rememberUser = new FormControl(false);
  recaptcha = new FormControl('');

  form: FormGroup = new FormGroup({
    username: this.username,
    password: this.password,
    rememberUser: this.rememberUser,
    recaptcha: this.recaptcha
  });

  title = '¡Oh, no! Parece que hubo un error';

  modalRetry02 = {
    id: 'modalRetry02',
    showModal: false,
    sizeModal: 'm',
    title: this.title,
    subtitle: 'El usuario y/o contraseña ingresados no coinciden.',
    body: '<strong>Te queda 2 intento más.</strong><br />Ingresa tus datos correctamente o se bloqueará tu acceso.',
    btnBackLabel: 'Volver a intentar'
  };

  modalRetry01 = {
    id: 'modalRetry01',
    showModal: false,
    sizeModal: 'm',
    title: this.title,
    subtitle: 'El usuario y/o contraseña ingresados no coinciden.',
    body: '<strong>Te queda 1 intento más.</strong><br />Ingresa tus datos correctamente o se bloqueará tu acceso.',
    btnBackLabel: 'Volver a intentar'
  };

  modalBloked01 = {
    id: 'modalBloked01',
    showModal: false,
    sizeModal: 'm',
    title: '',
    subtitle: 'El usuario y/o contraseña ingresados no coinciden.',
    body: 'Comunícate con nuestro equipo de soporte al correo<br/><strong>clientservice&#64;santander.com.pe</strong><br />¡Estamos aquí para ayudarte!',
    footer:
      ' Comunícate con nuestro equipo de soporte al correo<br/><strong>clientservice&#64;santander.com.pe</strong><br />¡Estamos aquí para ayudarte!',
    errors: {
      ERR461: '¡Lo sentimos!<br />Tu acceso ha sido bloqueado',
      ERR462: '¡Lo sentimos!<br />Tu usuario está inhabilitado'
    }
  };

  constructor() {
    this.addFormValidators();
  }

  private addFormValidators(): void {
    this.username.setValidators([Validators.required]);
    this.password.setValidators([Validators.required, Validators.minLength(4), Validators.maxLength(8)]);
    this.rememberUser.setValidators([]);
    // this.recaptcha.setValidators([Validators.required]);
  }

  initForm(dataLogin: ILogin): void {
    this.form.reset();

    this.username.setValue(dataLogin.username);
    this.password.setValue(dataLogin.password);
    this.rememberUser.setValue(dataLogin.rememberUser);
    this.recaptcha.setValue(dataLogin.recaptcha);

    this.form.updateValueAndValidity();
  }

  getAlertError(typeError: string): string {
    let msg = '';

    switch (typeError) {
      case 'reintend1':
        msg = '<b>Tienes 1 intentos más</b>, caso contrario, por tu seguridad bloquearemos tu acceso a la plataforma.';
        break;
      case 'reintend2':
        msg = '<b>Tienes 2 intento más</b>, caso contrario, por tu seguridad bloquearemos tu acceso a la plataforma.';
        break;
      case 'blocked1':
        msg =
          'Por tu seguridad, tu acceso <b>ha sido bloqueado</b>.<br>Recupéralo escribiéndonos a <b>clienteservice@santander.com.pe</b>.';
        break;
      case 'blocked2':
        msg =
          'Comunícate con nuestro equipo de soporte al correo <b>clientservice@santander.com.pe</b> para habilitar tu acceso.';
        break;
      default:
        msg = 'NO_MSG_ERROR';
        break;
    }

    return msg;
  }
}
