export const EMAIL_CONTACT_PATH = '/email-contact';

export const openEmailWindow = () => {
  const url = new URL(EMAIL_CONTACT_PATH, window.location.origin);
  const features = [
    'popup=yes',
    'width=560',
    'height=640',
    'left=120',
    'top=80',
    'resizable=yes',
    'scrollbars=yes',
  ].join(',');

  const popup = window.open(url.href, 'herbalEastEmailContact', features);

  if (popup) {
    popup.focus();
    return;
  }

  window.location.href = url.href;
};
