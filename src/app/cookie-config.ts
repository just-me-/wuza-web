import { NgcCookieConsentConfig } from 'ngx-cookieconsent'

export const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: window.location.hostname
  },
  position: 'bottom-right',
  theme: 'edgeless',
  palette: {
    popup: {
      background: 'rgba(238, 238, 238, 0.8)',
      text: '#212529',
      link: '#212529'
    },
    button: {
      background: '#303030',
      text: '#ffffff',
      border: 'transparent'
    }
  },
  type: 'info',
  content: {
    message: 'WUZA verwendet Cookies, um Deinen Besuch optimal zu gestalten.',
    dismiss: 'Alles klar und akzeptiert!',
    link: 'Erfahre hier mehr dazu.',
    href: '/impressum', // TODO create...
  }
}
