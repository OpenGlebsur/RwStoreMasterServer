'use strict';


var path = require('path');

module.exports = {


  SERVER_NAME : 'RwStoreMasterServer/3.0.0',
  VERSION     : '3.0.0',


  PORT_HTTPS : 443,
  PORT_HTTP  : 80,
  PORT_DEV   : 3000,   

  TLS: {
    KEY  : path.join(__dirname, '..', 'ssl', 'private.key'),
    CERT : path.join(__dirname, '..', 'ssl', 'certificate.crt'),
    CA   : path.join(__dirname, '..', 'ssl', 'ca_bundle.crt')   
  },


  WIX_API_BASE : 'https://www.wixapis.com/members/v1',
  WIX_API_KEY  : process.env.WIX_API_KEY  || '2de58aa1-3158-4a83-9a31-0b01efcbcbc5',
  WIX_SITE_ID  : process.env.WIX_SITE_ID  || 'IST.eyJraWQiOiJQb3pIX2FDMiIsImFsZyI6IlJTMjU2In0.eyJkYXRhIjoie1wiaWRcIjpcIjZhZGM5ZGIzLTMzMTUtNGVlOC05ZjA5LWYwZGRkYzFiOWZiMlwiLFwiaWRlbnRpdHlcIjp7XCJ0eXBlXCI6XCJhcHBsaWNhdGlvblwiLFwiaWRcIjpcImQ1ZmViOTRjLTk3NjktNDJiOC04MjFjLTkyZWIxZTVkZDk5NFwifSxcInRlbmFudFwiOntcInR5cGVcIjpcImFjY291bnRcIixcImlkXCI6XCIxNTZhMGQ3Yy01NWQ4LTQ5MjEtYWQ4Zi0wNjAyYjJhYzJlM2NcIn19IiwiaWF0IjoxNzc1NTcwOTYyfQ.XXq-8BacMG8zjAZpVnmylKGamosOKKetIFBa-0suzElHGTGy40OzD40pI5FzoHenhvy_QOc8l6XB8jqOJxw4ea8_Trm-cYcZigey8XkgUpUny_IVbEP8unsqUqUcANe-XIMz4M0txX3FpwKc7ywFm6V4reAamEHuBaAtEtVxw9oj9eZrhlrnDCJJwlCd4aEtJWWOPZXpNXhyFEmYM9EP_cRaTQHsswHqWCBmDM_ytAQziWDjX3HdoDHVNyj99sCiMiU-iy1puOyhzQyp1Z7cph-EE6Soo4NFKJCRU3272qJu9c9wzv37NnGrDbUxx278HL_hLX12kq_htnoLp2_n-A',


  ADMIN_TOKEN : process.env.ADMIN_TOKEN || '',


  SESSION_TTL : 24 * 60 * 60 * 1000,   


  ALLOWED_ORIGINS: [
    'https://reworkw8.github.io',
	'https://reworkw8.github.io/RwStoreMasterServer',
    'https://reworkw8.wixsite.com',
    'https://reworkw8.wixsite.com/rework'
  ],


  DATA_DIR  : path.join(__dirname, '..', 'data'),
  APPS_DIR  : path.join(__dirname, '..', 'data', 'apps'),
  APPXS_DIR  : path.join(__dirname, '..', 'data', 'appxs'),
  DEPS_DIR  : path.join(__dirname, '..', 'data', 'dependencies'),


  CACHE_TTL_MS : 5 * 60 * 1000   
};
