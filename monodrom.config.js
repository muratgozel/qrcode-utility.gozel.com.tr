module.exports = {
  "runtime": {
    "pkgname": "qrcode-utility.gozel.com.tr",
    "version": "20.9.1",
    "env": "production",
    "name": "QR Code Utility",
    "description": "Generate a qr code in various formats.",
    "url": "https://qrcode-utility.gozel.com.tr",
    "locales": "tr_TR,en_US",
    "locale": "tr_TR",
    "sev": "visible",
    "localizedURLs": true,
    "manipulateAddressBar": true,
    "googleAnalyticsPropertID": ""
  },
  "git": {
    "versioningscheme": "calver",
    "calverformat": "YY.MM.MINOR"
  },
  "build": {
    "srcpath": "app",
    "buildpath": "build",
    "debug": false,
    "stylesheets": {
      "autoprefixer": {
        "enabled": true,
        "options": {
          "cascade": false,
          "flexbox": true
        }
      },
      "cssnano": {
        "enabled": true,
        "options": {
          "preset": [
            "default",
            {
              "discardComments": {
                "removeAll": true
              }
            }
          ]
        }
      },
      "postcss-modules": {
        "enabled": true,
        "options": {}
      },
      "stylus": {
        "enabled": true,
        "options": {},
        "input": "stylus"
      }
    },
    "hash": {
      "enabled": true,
      "algorithm": "md5",
      "length": 16
    },
    "ssr": {
      "enabled": true
    },
    "sitemap": {
      "enabled": true
    },
    "msconfig": {
      "enabled": true
    },
    "webappmanifest": {
      "enabled": true,
      "short_name": "",
      "name": "",
      "description": "",
      "start_url": "",
      "background_color": "",
      "theme_color": "",
      "display": "",
      "scope": "",
      "icons": [],
      "shortcuts": []
    },
    "robotstxt": {
      "enabled": true,
      "groups": {
        "*": {
          "rules": [
            {
              "allow": "/"
            }
          ]
        }
      },
      "additional": []
    },
    "csp": {
      "enabled": false,
      "default-src": "self"
    }
  }
}