/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  lang: 'en-US',
  site: 'https://manual.hermez.example',
  avatar: '/favicon.png',
  title: 'Manual de Usuario · Hermez',
  description: 'Guía oficial para usuarios y domiciliarios de Hermez Domicilios',
  theme: { mode: 'auto', enableUserChange: true },
  lastModified: true,
  readTime: true,
  footer: {
    copyright: '© Hermez Domicilios',
  },
  socialLinks: [
    { icon: 'github', link: 'https://github.com/DonatoSilva/Hermez', ariaLabel: 'Hermez Domicilios Codigo' },
  ],
});
