export default {
  /**
   * Disables confirmation for password change
   * @param {string} oldPass - The current password
   * @param {string} newPass - The new password
   */
  disableConfirm (oldPass, newPass) {
		const usr = GetPassword.data[0];
    if (oldPass.length > 3) {
      if (usr.password === oldPass) {
        UpdatePassword.run({ password: newPass })
          .then(() => showAlert('رمز عبور با موفقیت تغییر پیدا کرد', 'succes'))
          .catch((error) => showAlert(error, 'error'));
      } else {
        showAlert('رمز عبور صحیح نمی باشد', 'error');
      }
    } else {
      showAlert('رمز عبور کوتاه است', 'warning');
    }
  }
};
